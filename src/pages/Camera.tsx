import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Camera as CameraIcon, AlertTriangle, Shield } from "lucide-react";
import * as faceapi from "face-api.js";

const Camera = () => {
  const [isActive, setIsActive] = useState(false);
  const [detectionStatus, setDetectionStatus] = useState("idle");
  const [emotion, setEmotion] = useState("");
  const [loadingModels, setLoadingModels] = useState(true);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // Load face-api.js models
  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = "/models"; // public/models folder
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
      ]);
      setLoadingModels(false);
    };
    loadModels();
  }, []);

  // Start camera stream
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) videoRef.current.srcObject = stream;
    } catch (err) {
      console.error("Error accessing webcam:", err);
      setDetectionStatus("error");
    }
  };

  // Stop camera stream
  const stopCamera = () => {
    const stream = videoRef.current?.srcObject;
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
    }
    setEmotion("");
  };

  // Toggle camera on/off
  const handleToggleCamera = () => {
    if (!isActive) {
      startCamera();
      setDetectionStatus("monitoring");
    } else {
      stopCamera();
      setDetectionStatus("idle");
    }
    setIsActive(!isActive);
  };

  // Emotion detection loop
  useEffect(() => {
    let interval;
    if (isActive && !loadingModels) {
      interval = setInterval(async () => {
        if (videoRef.current && !videoRef.current.paused) {
          const detections = await faceapi
            .detectAllFaces(
              videoRef.current,
              new faceapi.TinyFaceDetectorOptions()
            )
            .withFaceExpressions();

          if (detections.length > 0) {
            const topExpression = Object.entries(
              detections[0].expressions
            ).reduce((a, b) => (a[1] > b[1] ? a : b));
            setEmotion(topExpression[0]);
            if (canvasRef.current) {
              const dims = faceapi.matchDimensions(canvasRef.current, {
                width: videoRef.current.videoWidth,
                height: videoRef.current.videoHeight,
              });
              const resizedDetections = faceapi.resizeResults(detections, dims);
              faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
              faceapi.draw.drawFaceExpressions(canvasRef.current, resizedDetections);
            }
          } else {
            setEmotion("No face detected");
          }
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, loadingModels]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">
            AI Camera Module
          </h1>
          <p className="text-muted-foreground">
            AI-powered emotion recognition & safety monitoring
          </p>
        </div>

        {/* Status Alerts */}
        <div className="space-y-4 mb-8">
          {detectionStatus === "monitoring" && (
            <Alert className="border-primary bg-primary/5">
              <Shield className="h-5 w-5 text-primary" />
              <AlertDescription className="text-primary font-medium">
                Camera is active and analyzing emotions in real-time
              </AlertDescription>
            </Alert>
          )}

          {detectionStatus === "error" && (
            <Alert className="border-destructive bg-destructive/5">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <AlertDescription className="text-destructive font-medium">
                ⚠️ Unable to access webcam. Please allow camera permissions.
              </AlertDescription>
            </Alert>
          )}
        </div>

        {/* Camera Feed Only */}
        <Card className="shadow-medium max-w-4xl mx-auto">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Live Emotion Detection</CardTitle>
            <div className="flex items-center gap-2">
              <div
                className={`h-3 w-3 rounded-full ${
                  isActive ? "bg-success animate-pulse" : "bg-muted"
                }`}
              />
              <span className="text-sm font-medium">
                {isActive ? "Active" : "Inactive"}
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center relative overflow-hidden">
              {!loadingModels ? (
                <>
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <canvas
                    ref={canvasRef}
                    className="absolute top-0 left-0 w-full h-full"
                  />
                </>
              ) : (
                <div className="text-center">
                  <CameraIcon className="h-16 w-16 text-muted-foreground mx-auto mb-4 animate-pulse" />
                  <p className="text-lg font-semibold">Loading AI Models...</p>
                </div>
              )}
            </div>

            {emotion && isActive && (
              <div className="mt-4 text-center">
                <p className="text-xl font-semibold text-primary capitalize">
                  Detected Emotion: {emotion}
                </p>
              </div>
            )}

            <div className="mt-6 flex gap-4">
              <Button
                onClick={handleToggleCamera}
                className="flex-1"
                variant={isActive ? "destructive" : "default"}
              >
                {isActive ? "Stop Monitoring" : "Start Monitoring"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Camera;
