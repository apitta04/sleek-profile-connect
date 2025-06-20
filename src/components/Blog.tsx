
import { useState } from "react";
import { Calendar, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  type: 'achievement' | 'update' | 'project';
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: '1',
      title: 'Accepted into Texas Tech SDE Program',
      content: 'Excited to announce that I\'ve been accepted into Texas Tech\'s Semiconductor Design & Engineering program! This will provide deeper exposure to the semiconductor industry through mentorship and technical training.',
      date: '2024-01-15',
      type: 'achievement'
    }
  ]);
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    type: 'update' as BlogPost['type']
  });

  const handleAddPost = () => {
    if (newPost.title && newPost.content) {
      const post: BlogPost = {
        id: Date.now().toString(),
        title: newPost.title,
        content: newPost.content,
        date: new Date().toISOString().split('T')[0],
        type: newPost.type
      };
      setPosts([post, ...posts]);
      setNewPost({ title: '', content: '', type: 'update' });
      setIsDialogOpen(false);
    }
  };

  const handleDeletePost = (id: string) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const getTypeColor = (type: BlogPost['type']) => {
    switch (type) {
      case 'achievement': return 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30';
      case 'project': return 'from-blue-500/20 to-purple-500/20 border-blue-500/30';
      default: return 'from-purple-500/20 to-pink-500/20 border-purple-500/30';
    }
  };

  const getTypeIcon = (type: BlogPost['type']) => {
    switch (type) {
      case 'achievement': return '🏆';
      case 'project': return '🔧';
      default: return '📝';
    }
  };

  return (
    <section id="blog" className="py-20 px-6 bg-gradient-to-b from-purple-900/10 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
              Updates & Achievements
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in">
            Latest news, achievements, and project updates
          </p>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg shadow-purple-500/25 hover:scale-105 transition-all duration-300 animate-fade-in">
                <Plus className="w-4 h-4 mr-2" />
                Add New Post
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gray-900/95 border-purple-500/30 backdrop-blur-sm">
              <DialogHeader>
                <DialogTitle className="text-purple-300">Create New Post</DialogTitle>
                <DialogDescription className="text-gray-400">
                  Share an achievement, update, or project milestone
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="postTitle" className="text-gray-300">Title</Label>
                  <Input
                    id="postTitle"
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                    placeholder="Enter post title..."
                    className="bg-gray-800/50 border-purple-500/30 text-white backdrop-blur-sm"
                  />
                </div>
                <div>
                  <Label htmlFor="postType" className="text-gray-300">Type</Label>
                  <select
                    id="postType"
                    value={newPost.type}
                    onChange={(e) => setNewPost({ ...newPost, type: e.target.value as BlogPost['type'] })}
                    className="w-full p-2 bg-gray-800/50 border border-purple-500/30 rounded-md text-white backdrop-blur-sm"
                  >
                    <option value="update">Update</option>
                    <option value="achievement">Achievement</option>
                    <option value="project">Project</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="postContent" className="text-gray-300">Content</Label>
                  <Textarea
                    id="postContent"
                    value={newPost.content}
                    onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                    placeholder="Write your post content..."
                    className="min-h-[120px] bg-gray-800/50 border-purple-500/30 text-white backdrop-blur-sm"
                  />
                </div>
                <Button onClick={handleAddPost} className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition-all duration-300">
                  Create Post
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid gap-6">
          {posts.map((post, index) => (
            <Card key={post.id} className={`bg-gradient-to-br ${getTypeColor(post.type)} border backdrop-blur-sm hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-[1.02] animate-fade-in`} style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{getTypeIcon(post.type)}</span>
                    <div>
                      <CardTitle className="text-purple-300">{post.title}</CardTitle>
                      <CardDescription className="flex items-center space-x-2 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                        <span className="px-2 py-1 bg-purple-500/20 rounded text-xs capitalize border border-purple-500/30">
                          {post.type}
                        </span>
                      </CardDescription>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDeletePost(post.id)}
                    className="text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all duration-300 hover:scale-110"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">{post.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <p className="text-gray-400 text-lg">No posts yet. Create your first post to get started!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
