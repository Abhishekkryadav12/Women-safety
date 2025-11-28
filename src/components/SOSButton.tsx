import { useState, useEffect } from "react";
import { AlertCircle, X, Check, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";

// Voice recognition setup (browser built-in)
const SpeechRecognition =
  (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

const SOSButton = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [countdown, setCountdown] = useState(45);
  const [isActive, setIsActive] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState<any>(null);

  // Countdown logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isActive && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (countdown === 0) {
      handleConfirmSOS();
    }
    return () => clearTimeout(timer);
  }, [isActive, countdown]);

  // Initialize voice recognition once
  useEffect(() => {
    if (SpeechRecognition) {
      const recog = new SpeechRecognition();
      recog.continuous = true;
      recog.lang = "en-IN";
      recog.interimResults = false;

      recog.onresult = (event: any) => {
        const transcript = event.results[event.results.length - 1][0].transcript
          .trim()
          .toLowerCase();
        console.log("Heard:", transcript);

        // Trigger SOS if user says "help"
        if (transcript.includes("help")) {
          toast.error("🎤 Voice SOS detected! Sending alert...");
          handleConfirmSOS();
        }
      };

      recog.onerror = (err: any) => {
        console.error("Voice recognition error:", err);
        toast.error("🎙️ Voice recognition stopped unexpectedly");
        setIsListening(false);
      };

      setRecognition(recog);
    } else {
      toast.error("Speech recognition not supported in this browser");
    }
  }, []);

  const handleSOSClick = () => {
    setShowConfirmation(true);
    setIsActive(true);
    setCountdown(45);
  };

  const handleConfirmSOS = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/send-sos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Priya ",
          location: "Malout",
          contacts: ["+919153422148"], 
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.error("🚨 SOS ACTIVATED! Emergency contacts notified!");
      } else {
        toast.error("❌ Failed to send SOS message!");
      }
    } catch (error) {
      toast.error("⚠️ Error connecting to server");
    }

    setShowConfirmation(false);
    setIsActive(false);
    setCountdown(45);
  };

  const handleCancelSOS = () => {
    setShowConfirmation(false);
    setIsActive(false);
    setCountdown(45);
    toast.success("SOS cancelled");
  };

  // Start or stop voice recognition
  const toggleVoiceActivation = () => {
    if (!recognition) {
      toast.error("Speech recognition not initialized");
      return;
    }
    if (!isListening) {
      recognition.start();
      setIsListening(true);
      toast.success("🎙️ Voice activation enabled. Say 'help' to trigger SOS.");
    } else {
      recognition.stop();
      setIsListening(false);
      toast("🔇 Voice activation disabled");
    }
  };

  return (
    <>
      {/* Main SOS Button */}
      <Button
        onClick={handleSOSClick}
        className="fixed bottom-8 right-8 h-20 w-20 rounded-full bg-destructive hover:bg-destructive/90 text-destructive-foreground shadow-strong z-50 flex flex-col items-center justify-center text-lg font-bold animate-pulse"
      >
        <AlertCircle className="h-8 w-8 mb-1" />
        HELP
      </Button>

      {/* Voice Activation Button */}
      <Button
        onClick={toggleVoiceActivation}
        className={`fixed bottom-32 right-8 h-14 w-14 rounded-full shadow-lg z-50 flex items-center justify-center transition-all ${
          isListening
            ? "bg-green-600 hover:bg-green-700"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        <Mic className="h-6 w-6 text-white" />
      </Button>

      {/* SOS Confirmation Dialog */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-destructive flex items-center gap-2">
              <AlertCircle className="h-6 w-6" />
              Confirm Emergency SOS
            </DialogTitle>
            <DialogDescription>
              Your emergency contacts will be notified and authorities alerted.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col items-center justify-center py-8">
            <div className="text-6xl font-bold text-destructive mb-4">
              {countdown}
            </div>
            <p className="text-muted-foreground">seconds remaining</p>
          </div>

          <DialogFooter className="flex gap-2 sm:justify-between">
            <Button onClick={handleCancelSOS} variant="outline" className="flex-1">
              <X className="mr-2 h-4 w-4" />
              Cancel
            </Button>
            <Button
              onClick={handleConfirmSOS}
              className="flex-1 bg-destructive hover:bg-destructive/90"
            >
              <Check className="mr-2 h-4 w-4" />
              Confirm SOS
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SOSButton;
