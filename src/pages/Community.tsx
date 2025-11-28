import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Users, MessageCircle, Shield } from "lucide-react";
import { toast } from "sonner";

interface Post {
  id: number;
  author: string;
  content: string;
  time: string;
  isAnonymous: boolean;
}

const Community = () => {
  const [newPost, setNewPost] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      author: "Anonymous",
      content: "Thank you for creating this safe space. It's comforting to know I'm not alone.",
      time: "2 hours ago",
      isAnonymous: true,
    },
    {
      id: 2,
      author: "Verified Member",
      content: "Does anyone know of good self-defense classes in the city?",
      time: "5 hours ago",
      isAnonymous: false,
    },
    {
      id: 3,
      author: "Anonymous",
      content: "Stay strong everyone. We're all here to support each other. 💪",
      time: "1 day ago",
      isAnonymous: true,
    },
  ]);

  const handlePost = () => {
    if (newPost.trim()) {
      const post: Post = {
        id: Date.now(),
        author: isAnonymous ? "Anonymous" : "You",
        content: newPost,
        time: "Just now",
        isAnonymous,
      };
      setPosts([post, ...posts]);
      setNewPost("");
      toast.success("Post shared successfully!");
    } else {
      toast.error("Please write something before posting");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
            <Users className="h-8 w-8 text-primary" />
            Community Support Forum
          </h1>
          <p className="text-muted-foreground">
            A safe space for women to share experiences and support each other
          </p>
        </div>

        {/* Guidelines */}
        <Card className="mb-8 shadow-soft border-primary bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Shield className="h-5 w-5" />
              Community Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>• This is a safe, moderated space for women</li>
              <li>• Be respectful and supportive of all members</li>
              <li>• You can post anonymously or with verification</li>
              <li>• No harassment, hate speech, or inappropriate content</li>
              <li>• Report any concerning posts to moderators</li>
            </ul>
          </CardContent>
        </Card>

        <div className="max-w-3xl mx-auto space-y-6">
          {/* New Post Card */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-primary" />
                Share Your Thoughts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="What's on your mind? Share your experiences, ask questions, or offer support..."
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                rows={4}
              />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="anonymous"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="h-4 w-4"
                  />
                  <label htmlFor="anonymous" className="text-sm font-medium">
                    Post anonymously
                  </label>
                </div>

                <Button onClick={handlePost}>
                  Share Post
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Posts Feed */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Community Posts</h2>
            {posts.map((post) => (
              <Card key={post.id} className="shadow-soft">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{post.author}</h4>
                        <span className="text-sm text-muted-foreground">{post.time}</span>
                      </div>
                      <p className="text-sm leading-relaxed">{post.content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Community;
