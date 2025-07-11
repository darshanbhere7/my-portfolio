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
      title: 'CarsWorld – Car Rental Platform',
      description: 'Full-stack car rental app with real-time dashboard, booking, wishlist, reviews, and image uploads.',
      image: '/carsworld.jpg',
      tags: ['MERN Stack', 'Socket.io', 'ImageKit', 'React', 'Tailwind CSS'],
      githubUrl: 'https://github.com/darshanbhere7/CarsWorld',
      features: ['Real-time Updates', 'JWT Auth', 'Admin/User Modules', '3D Car Visualization'],
      status: 'Featured',
      gradient: 'from-blue-600 via-purple-600 to-indigo-600',
      category: 'web',
    },
    {
      title: 'WanderSplit – Travel Expense Splitter',
      description: 'Cross-platform app to manage and split travel expenses with real-time sync and analytics.',
      image: '/wandersplit.jpg',
      tags: ['Flutter', 'Firebase', 'fl_chart', 'Responsive UI'],
      githubUrl: 'https://github.com/darshanbhere7/wanderSplit',
      features: ['Custom Splits', 'Receipt Uploads', 'Realtime Tracking', 'Analytics'],
      status: 'Popular',
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
      category: 'mobile',
    },
    {
      title: 'AlgoTraceX – DSA Learning Platform',
      description: 'Interactive DSA learning with visualizations, practice, analytics, and AI-powered help.',
      image: '/algotracex.jpg',
      tags: ['MERN Stack', 'Gemini API', 'React', 'Node.js'],
      githubUrl: 'https://github.com/darshanbhere7/AlgoTraceX',
      features: ['Topic Visualizations', 'Practice Questions', 'AI Assistant', 'Admin Dashboard'],
      status: 'New',
      gradient: 'from-violet-600 via-purple-600 to-blue-600',
      category: 'ai',
    },
    {
      title: 'Unnati – Rural Girls Empowerment',
      description: 'Social impact platform for rural girls: learning, mentorship, and career support.',
      image: '/unnati.jpg',
      tags: ['MERN', 'Firebase', 'React', 'Tailwind CSS', 'Radix UI'],
      githubUrl: 'https://github.com/TejasDesai007/Rural_Girls_Empowerment',
      features: ['Mentor Sections', 'Dashboard', 'Accessible UI', 'Responsive Design'],
      status: 'Impact',
      gradient: 'from-pink-500 via-rose-500 to-orange-500',
      category: 'web',
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
                    : 'bg-black/90 text-white dark:bg-slate-800/80 hover:shadow-md hover:shadow-purple-500/10 hover:border-purple-300 dark:hover:border-purple-600'}
                `}
              >
                <Icon className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300 text-white" />
                <span className="text-white">{filter.label}</span>
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-md blur opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
                )}
              </Button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto w-full px-2 sm:px-4 lg:px-0">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col md:flex-row items-stretch bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 min-h-[260px] max-h-[420px] w-full md:min-h-[260px] md:max-h-[340px]"
              style={{
                animationDelay: `${index * 150}ms`,
                animation: 'fadeInUp 0.8s ease-out forwards',
              }}
            >
              {/* Project Image */}
              <div className="md:w-2/5 w-full h-48 md:h-auto relative overflow-hidden min-h-[180px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-all duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-40 transition-all duration-500`}></div>
                <div className={`absolute top-4 left-4 px-3 py-1 ${getStatusColor(project.status)} text-white text-xs font-bold rounded-full shadow-lg`}>{project.status}</div>
                {/* Code Button Overlay */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full px-5 py-2 flex items-center gap-2 shadow-lg hover:scale-105 transition-transform duration-300 z-10 border border-white/80 dark:border-white/20"
                >
                  <Code className="w-5 h-5 text-white" /> <span className="whitespace-nowrap font-semibold text-base text-white">Code</span>
                </a>
              </div>
              {/* Project Content */}
              <div className="flex-1 flex flex-col justify-between p-6 space-y-4 min-w-0">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 break-words">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 mb-4 leading-relaxed break-words">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 border-0 hover:scale-105 transition-transform duration-200">{tag}</Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {project.features.map((feature, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1"><span className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></span>{feature}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/darshanbhere7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg shadow-purple-500/25 border border-white/80 dark:border-white/20"
          >
            <Github className="w-5 h-5 text-white" />
            <span className="whitespace-nowrap font-semibold text-lg text-white">View All Projects on GitHub</span>
            <ExternalLink className="w-4 h-4 text-white" />
          </a>
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