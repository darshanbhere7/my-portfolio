import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye, Code, Sparkles, Zap, Users, Database, Brain, Smartphone, Globe, Palette } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filters = [
    { id: 'all', label: 'All Projects', icon: Sparkles },
    { id: 'web', label: 'Web Apps', icon: Globe },
    { id: 'mobile', label: 'Mobile', icon: Smartphone },
    { id: 'ai', label: 'AI/ML', icon: Brain }
  ];

  const projects = [
    {
      title: 'AlgoViz – Data Structures Visualizer',
      description: 'A full-stack web application to visualize data structures and algorithms interactively with AI-powered assistance.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
      tags: ['MERN Stack', 'OpenAI API', 'React', 'Node.js', 'MongoDB'],
      liveUrl: 'https://algoviz-demo.com',
      githubUrl: 'https://github.com/darshanbhere7/AlgoViz.git',
      type: 'web',
      category: 'ai',
      features: ['Interactive Visualizations', 'AI Chat Assistant', 'Role-based Access', 'Algorithm Recommendations'],
      status: 'Featured',
      gradient: 'from-blue-600 via-purple-600 to-indigo-600'
    },
    {
      title: 'WanderSplit – Travel Expense Splitting',
      description: 'Cross-platform mobile app to manage and split travel expenses among group members with real-time synchronization.',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop',
      tags: ['Flutter', 'Firebase', 'Real-time DB', 'Cross-platform'],
      liveUrl: 'https://wandersplit-demo.com',
      githubUrl: 'https://github.com/darshanbhere7/wanderSplit.git',
      type: 'mobile',
      category: 'mobile',
      features: ['Real-time Sync', 'Group Management', 'Automated Splitting', 'Expense Tracking'],
      status: 'Popular',
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500'
    },
    {
      title: 'Unnati – Rural Girls Empowerment',
      description: 'Platform built during hackathon to support rural girls development through accessible online learning and digital tools.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
      tags: ['MERN', 'Firebase', 'Accessibility', 'Social Impact'],
      liveUrl: 'https://unnati-platform.com',
      githubUrl: 'https://github.com/TejasDesai007/Rural_Girls_Empowerment.git',
      type: 'web',
      category: 'web',
      features: ['Course Modules', 'Digital Toolkit', 'Low-resource Optimized', 'Multilingual Support'],
      status: 'Impact',
      gradient: 'from-pink-500 via-rose-500 to-orange-500'
    },
    {
      title: 'Portfolio Dashboard',
      description: 'Modern, responsive portfolio website with dark mode, animations, and interactive components.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Responsive'],
      liveUrl: 'https://portfolio-demo.com',
      githubUrl: 'https://github.com/darshanbhere7/portfolio',
      type: 'web',
      category: 'web',
      features: ['Dark Mode', 'Smooth Animations', 'Responsive Design', 'SEO Optimized'],
      status: 'New',
      gradient: 'from-violet-600 via-purple-600 to-blue-600'
    }
  ];

  const filteredProjects = projects.filter(
    (project) => activeFilter === 'all' || project.category === activeFilter
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'Featured': return 'bg-gradient-to-r from-yellow-400 to-orange-500';
      case 'Popular': return 'bg-gradient-to-r from-green-400 to-emerald-500';
      case 'Impact': return 'bg-gradient-to-r from-pink-400 to-rose-500';
      case 'New': return 'bg-gradient-to-r from-blue-400 to-indigo-500';
      default: return 'bg-gradient-to-r from-gray-400 to-gray-500';
    }
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-pink-200 dark:bg-pink-800 rounded-full opacity-25 animate-ping"></div>
        <div className="absolute bottom-40 right-10 w-14 h-14 bg-green-200 dark:bg-green-800 rounded-full opacity-20 animate-pulse"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-slate-100/50 dark:bg-grid-slate-700/25" style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23cbd5e1' fill-opacity='0.1'%3e%3ccircle cx='30' cy='30' r='1'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-full text-sm font-medium text-purple-700 dark:text-purple-300 mb-4">
            <Palette className="w-4 h-4" />
            Featured Projects
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 dark:from-white dark:via-purple-100 dark:to-blue-100 bg-clip-text text-transparent leading-tight">
            My Projects
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore my latest work—each project represents a unique challenge solved with 
            <span className="text-purple-600 dark:text-purple-400 font-semibold"> creativity</span>, 
            <span className="text-blue-600 dark:text-blue-400 font-semibold"> innovation</span>, and 
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold"> cutting-edge technology</span>.
          </p>
        </div>

        {/* Enhanced Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map((filter) => {
            const Icon = filter.icon;
            const isActive = activeFilter === filter.id;
            
            return (
              <Button
                key={filter.id}
                variant={isActive ? 'default' : 'outline'}
                onClick={() => setActiveFilter(filter.id)}
                className={`
                  group relative px-6 py-3 font-medium transition-all duration-300 hover:scale-105
                  ${isActive 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25' 
                    : 'bg-white/80 dark:bg-slate-800/80 hover:shadow-md hover:shadow-purple-500/10 hover:border-purple-300 dark:hover:border-purple-600 text-slate-700 dark:text-slate-200'
                  }
                `}
              >
                <Icon className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                {filter.label}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-md blur opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
                )}
              </Button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative transform transition-all duration-500 hover:scale-[1.02]"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                animationDelay: `${index * 150}ms`,
                animation: 'fadeInUp 0.8s ease-out forwards'
              }}
            >
              <Card className="overflow-hidden border-0 shadow-2xl shadow-gray-200/50 dark:shadow-gray-800/50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm group-hover:shadow-3xl group-hover:shadow-purple-500/20 transition-all duration-500">
                {/* Project Image with Overlay */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-90 transition-all duration-500`}></div>
                  
                  {/* Status Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 ${getStatusColor(project.status)} text-white text-xs font-bold rounded-full shadow-lg`}>
                    {project.status}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <Button 
                      size="lg" 
                      className="bg-white/20 backdrop-blur-md text-white border-white/30 hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-110"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Eye className="w-5 h-5 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="bg-white/20 backdrop-blur-md text-white border-white/30 hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-110"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>

                <CardContent className="p-8 space-y-6">
                  {/* Title and Description */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-yellow-500" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                      <Code className="w-4 h-4 text-green-500" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 border-0 hover:scale-105 transition-transform duration-200"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
              </Card>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg shadow-purple-500/25">
            <Github className="w-5 h-5" />
            View All Projects on GitHub
            <ExternalLink className="w-4 h-4" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Projects;