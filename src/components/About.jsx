import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Briefcase, Code2, Trophy, Sparkles, Star } from 'lucide-react';

const About = () => {
  const education = [
    {
      year: 'Sep 2024 - Sep 2026',
      title: 'Master of Computer Applications',
      institution: 'Sardar Patel Institute of Technology, Mumbai',
      description: 'Currently pursuing advanced studies in computer applications and software development',
      status: 'current'
    },
    {
      year: 'Sep 2021 - May 2024',
      title: 'B.Sc. Computer Science',
      institution: 'B. K. Birla College Kalyan, Mumbai',
      description: 'Graduated with exceptional academic performance',
      gpa: '9.61',
      status: 'completed'
    }
  ];

  const skills = [
    {
      category: 'Front End',
      items: ['React.js', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tailwind CSS', 'Flutter', 'Dart'],
      icon: '🎨',
      color: 'from-blue-500 to-purple-600'
    },
    {
      category: 'Back End',
      items: ['Node.js', 'Express.js'],
      icon: '⚙️',
      color: 'from-green-500 to-teal-600'
    },
    {
      category: 'Database',
      items: ['MySQL', 'MongoDB', 'Firebase'],
      icon: '🗄️',
      color: 'from-orange-500 to-red-600'
    },
    {
      category: 'Languages',
      items: ['Java', 'Python'],
      icon: '💻',
      color: 'from-indigo-500 to-blue-600'
    },
    {
      category: 'Tools',
      items: ['Git', 'GitHub'],
      icon: '🛠️',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const achievements = [
    {
      title: 'HackFusion 2.0 - Top 10 Finalist',
      organization: 'Google Developers Group (GDG)',
      description: 'Secured a position among the Top 10 teams in a national-level hackathon',
      icon: Trophy,
      highlight: true
    }
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
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
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full border border-white/30 mb-6 shadow-lg">
            <Sparkles className="w-5 h-5 text-purple-500" />
            <span className="text-base font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              About Me
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 dark:from-white dark:via-purple-100 dark:to-white bg-clip-text text-transparent drop-shadow-md">
            Crafting Digital<br />
            <span className="relative inline-block">
              Experiences
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></span>
            </span>
          </h2>
          <p className="text-xl text-slate-700 dark:text-slate-200 max-w-3xl mx-auto leading-relaxed font-medium">
            I'm a passionate full-stack developer with a keen eye for creating elegant solutions. 
            Currently pursuing my Master's in Computer Applications while building innovative web applications 
            and exploring cutting-edge technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 mb-20">
          {/* Education Timeline */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Education Journey</h3>
            </div>
            <div className="flex flex-col gap-6">
              {education.map((item, index) => (
                <Card key={index} className="p-7 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 rounded-2xl">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-5">
                      <div className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center ${
                        item.status === 'current' 
                          ? 'bg-gradient-to-r from-green-400 to-emerald-500 animate-pulse' 
                          : 'bg-gradient-to-r from-blue-400 to-purple-500'
                      } shadow-lg`}>
                        {item.status === 'current' ? (
                          <Star className="w-7 h-7 text-white" />
                        ) : (
                          <GraduationCap className="w-7 h-7 text-white" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs font-semibold px-3 py-1 bg-white/80 dark:bg-slate-700/80 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200">
                            {item.year}
                          </Badge>
                          {item.status === 'current' && (
                            <Badge className="text-xs bg-green-100 text-green-700 border-green-200 font-semibold px-2 py-1">
                              Current
                            </Badge>
                          )}
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-purple-700 dark:text-purple-300 font-medium mb-2">
                          {item.institution}
                        </p>
                        <p className="text-slate-700 dark:text-slate-200 text-base mb-2">
                          {item.description}
                        </p>
                        {item.gpa && (
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-full">
                            <span className="text-sm font-semibold text-orange-700 dark:text-orange-300">
                              GPA: {item.gpa}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl shadow-lg">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Achievements</h3>
            </div>
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-7 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 mb-2 rounded-2xl">
                <CardContent className="p-0">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                      <achievement.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-1 text-lg">
                        {achievement.title}
                      </h4>
                      <p className="text-orange-700 dark:text-orange-300 font-medium text-sm mb-2">
                        {achievement.organization}
                      </p>
                      <p className="text-slate-700 dark:text-slate-200 text-base">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-4xl font-bold text-slate-900 dark:text-white">Technical Arsenal</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="group p-7 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border border-white/30 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden relative rounded-2xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${skillGroup.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <CardContent className="p-0 relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{skillGroup.icon}</span>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                      {skillGroup.category}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="px-3 py-1.5 text-xs font-semibold bg-white/90 dark:bg-slate-700/90 hover:bg-white dark:hover:bg-slate-700 transition-colors duration-300 shadow-sm hover:shadow-md text-slate-800 dark:text-slate-100"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="inline-block p-10 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-200/30 shadow-2xl rounded-2xl">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-slate-700 dark:text-slate-200 mb-6 max-w-md mx-auto text-base font-medium">
                I'm always excited to work on innovative projects and collaborate with fellow developers.
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-200"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-400"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;