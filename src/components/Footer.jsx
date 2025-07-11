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
      <div className="absolute inset-0 bg-grid-slate-100/50 dark:bg-grid-slate-700/25 pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23cbd5e1' fill-opacity='0.1'%3e%3ccircle cx='30' cy='30' r='1'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")`,
      }} />
      <div className="relative container mx-auto px-4 py-6 flex flex-col items-center justify-center gap-2">
        <div className="text-center">
          <span className="text-lg font-bold bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">Darshan Bhere</span>
          <span className="block text-xs text-slate-600 dark:text-slate-300 font-medium mt-1">Full Stack Developer</span>
        </div>
        <div className="flex gap-2 mt-2">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className={`rounded-full p-2 bg-white/80 dark:bg-slate-800/80 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 shadow-sm ${link.color}`}
            >
              <link.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
        <span className="text-[11px] text-slate-400 dark:text-slate-500 mt-2">© {new Date().getFullYear()} Darshan Bhere</span>
      </div>
    </footer>
  );
};

export default Footer;