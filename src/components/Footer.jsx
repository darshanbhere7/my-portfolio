import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Github, Linkedin, Twitter, ArrowUp, Heart, Code, Sparkles } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/darshanbhere7',
      color: 'hover:text-gray-900 dark:hover:text-gray-100',
      bgColor: 'hover:bg-gray-100 dark:hover:bg-gray-800',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/darshan-bhere-b69a14260/',
      color: 'hover:text-blue-600 dark:hover:text-blue-400',
      bgColor: 'hover:bg-blue-50 dark:hover:bg-blue-950',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/darshanbhere_7',
      color: 'hover:text-sky-500 dark:hover:text-sky-400',
      bgColor: 'hover:bg-sky-50 dark:hover:bg-sky-950',
    },
  ];

  const techStack = [
    { name: 'React', color: 'bg-blue-500' },
    { name: 'TailwindCSS', color: 'bg-cyan-500' },
    { name: 'ShadCN/UI', color: 'bg-purple-500' },
    { name: 'Framer Motion', color: 'bg-pink-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 border-t border-border/40 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100/50 dark:bg-grid-slate-700/25" style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23cbd5e1' fill-opacity='0.1'%3e%3ccircle cx='30' cy='30' r='1'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
      }} />
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 animate-pulse delay-1000" />

      <motion.div
        className="relative container mx-auto px-4 py-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Main Content */}
        <div className="flex flex-col items-center justify-center space-y-8">
          
          {/* Developer Info */}
          <motion.div 
            className="text-center space-y-3"
            variants={itemVariants}
          >
            <motion.h3 
              className="text-2xl font-bold bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Darshan Bhere
            </motion.h3>
            <motion.p 
              className="text-muted-foreground flex items-center justify-center gap-2"
              variants={itemVariants}
            >
              <Code className="h-4 w-4" />
              Full Stack Developer & UI/UX Enthusiast
              <Sparkles className="h-4 w-4" />
            </motion.p>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex gap-3"
            variants={itemVariants}
          >
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.name}
                variants={socialVariants}
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className={`rounded-full border-2 border-transparent backdrop-blur-sm transition-all duration-300 ${link.color} ${link.bgColor} hover:border-current hover:shadow-lg hover:shadow-current/20`}
                  asChild
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Tech Stack Badges */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2"
            variants={itemVariants}
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 500,
                  damping: 25
                }}
                whileHover={{ scale: 1.1 }}
                viewport={{ once: true }}
              >
                <Badge 
                  variant="secondary" 
                  className={`${tech.color} text-white border-0 shadow-md hover:shadow-lg transition-all duration-300`}
                >
                  {tech.name}
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          {/* Separator */}
          <motion.div 
            className="w-full max-w-md"
            variants={itemVariants}
          >
            <Separator className="bg-gradient-to-r from-transparent via-border to-transparent" />
          </motion.div>

          {/* Made with love */}
          <motion.div 
            className="text-center space-y-2"
            variants={itemVariants}
          >
            <motion.p 
              className="text-sm text-muted-foreground flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              Made with 
              <motion.span
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Heart className="h-4 w-4 text-red-500 fill-current" />
              </motion.span>
              and lots of ☕
            </motion.p>
            <p className="text-xs text-muted-foreground/70">
              © {new Date().getFullYear()} Darshan Bhere. All rights reserved.
            </p>
          </motion.div>

          {/* Scroll to Top Button */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-2 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <motion.div
                animate={{ 
                  y: [0, -2, 0],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <ArrowUp className="h-5 w-5" />
              </motion.div>
            </Button>
          </motion.div>

          {/* Quote */}
          <motion.div 
            className="text-center max-w-md"
            variants={itemVariants}
          >
            <motion.blockquote 
              className="text-sm italic text-muted-foreground border-l-2 border-primary pl-4"
              whileHover={{ scale: 1.02 }}
            >
              "Code is like humor. When you have to explain it, it's bad."
              <footer className="text-xs mt-1 not-italic">— Cory House</footer>
            </motion.blockquote>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
    </footer>
  );
};

export default Footer;