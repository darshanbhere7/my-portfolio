import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { ArrowDown, Github, Linkedin, Download, Eye, Sparkles } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  const handleDownloadResume = () => {
    // Convert Google Drive share link to direct download link
    const fileId = '143BOJulR9zM_lAw3oUADVUgwExNVTJSB';
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Darshan_Bhere_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
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

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-2 mb-4"
              >
                <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                <Badge variant="secondary" className="text-sm font-medium px-3 py-1">
                  Available for Work
                </Badge>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
                variants={itemVariants}
              >
                Hi, I'm{' '}
                <motion.span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60 relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  Darshan Bhere
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent rounded-lg -z-10 blur-xl"
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.span>
              </motion.h1>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <motion.h2 
                className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-semibold"
                whileHover={{ scale: 1.02 }}
              >
                Full Stack Developer
              </motion.h2>
              
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="p-6 bg-gradient-to-r from-muted/50 to-transparent border-l-4 border-l-primary">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I build exceptional digital experiences that make an impact.
                  Specializing in creating beautiful, functional, and user-centered
                  digital solutions that bring ideas to life.
                </p>
              </Card>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="projects" smooth={true} duration={500}>
                  <Button 
                    size="lg" 
                    className="gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Eye className="h-4 w-4" />
                    View Projects
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowDown className="h-4 w-4 rotate-[-90deg]" />
                    </motion.div>
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="gap-2 border-primary/50 hover:border-primary hover:bg-primary/10 shadow-md hover:shadow-lg transition-all duration-300"
                  onClick={handleDownloadResume}
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 hover:text-primary transition-all duration-300">
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10 hover:text-primary transition-all duration-300">
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative flex justify-center"
          >
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="relative"
            >
              <motion.div
                variants={pulseVariants}
                animate="animate"
                className="relative group"
              >
                {/* Outer glow ring */}
                <motion.div
                  className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 blur-xl"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
                
                {/* Image container */}
                <motion.div
                  className="relative aspect-square w-80 md:w-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl group-hover:border-primary/50 transition-all duration-500"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src="/src/assets/myprofile.jpg"
                    alt="Darshan Bhere"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Decorative elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full shadow-lg"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div
                  className="absolute -bottom-6 -left-6 w-6 h-6 bg-primary/70 rounded-full shadow-md"
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Button variant="ghost" size="icon" className="rounded-full border border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300">
            <ArrowDown className="h-6 w-6 text-primary" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;