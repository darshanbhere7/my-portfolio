import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Github, Linkedin, Twitter, Mail, MapPin, Clock, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace with your EmailJS credentials
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formData,
        'YOUR_PUBLIC_KEY'
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/darshanbhere7',
      color: 'hover:bg-gray-900 hover:text-white',
      description: 'View my projects'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/darshan-bhere-b69a14260/',
      color: 'hover:bg-blue-600 hover:text-white',
      description: 'Professional network'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/darshanbhere_7',
      color: 'hover:bg-blue-400 hover:text-white',
      description: 'Follow for updates'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:darshanbhere2@gmail.com',
      color: 'hover:bg-red-500 hover:text-white',
      description: 'Send direct email'
    },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      content: 'Mumbai, India',
      description: 'Available for remote work worldwide'
    },
    {
      icon: Clock,
      title: 'Availability',
      content: 'Open to opportunities',
      description: 'Ready for new collaborations'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 8080583088',
      description: 'Available during IST hours'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    }
  };

  const infoVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    }
  };

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 overflow-hidden">
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

      <div className="container relative mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 15,
            duration: 0.8 
          }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block mb-4"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Get In Touch
              </h2>
            </div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            I'm currently open to new opportunities and collaborations. Feel free
            to reach out if you have any questions or just want to say hi! 
            <span className="block mt-2 text-sm text-slate-500 dark:text-slate-400">
              Let's build something amazing together 🚀
            </span>
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
        >
          {/* Contact Form */}
          <motion.div
            variants={formVariants}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl blur-xl"></div>
            <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg border border-white/20 dark:border-slate-700/50 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mb-6"
              >
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 flex items-center gap-2">
                  <Send className="h-6 w-6 text-blue-600" />
                  Send Message
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Fill out the form below and I'll get back to you soon!
                </p>
              </motion.div>

              <div className="space-y-6">
                <motion.div variants={itemVariants}>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 bg-white/50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 bg-white/50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[150px] bg-white/50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md resize-none"
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Button 
                    onClick={handleSubmit}
                    className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none" 
                    disabled={isSubmitting}
                  >
                    <motion.div
                      animate={isSubmitting ? { rotate: 360 } : { rotate: 0 }}
                      transition={{ duration: 1, repeat: isSubmitting ? Infinity : 0 }}
                      className="flex items-center gap-2"
                    >
                      <Send className="h-4 w-4" />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </motion.div>
                  </Button>
                </motion.div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-200 dark:border-green-800"
                  >
                    <CheckCircle className="h-4 w-4" />
                    <p className="text-sm font-medium">Message sent successfully! I'll get back to you soon.</p>
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border border-red-200 dark:border-red-800"
                  >
                    <AlertCircle className="h-4 w-4" />
                    <p className="text-sm font-medium">Failed to send message. Please try again or contact me directly.</p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={infoVariants}
            className="space-y-8"
          >
            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg border border-white/20 dark:border-slate-700/50 rounded-2xl p-6 shadow-2xl">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                  <div className="h-6 w-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <div className="h-3 w-3 bg-white rounded-sm"></div>
                  </div>
                  Connect With Me
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="outline"
                        className={`w-full h-16 justify-start gap-3 border-slate-200 dark:border-slate-600 bg-white/50 dark:bg-slate-700/50 hover:shadow-lg transition-all duration-300 group ${link.color}`}
                        asChild
                      >
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-start"
                        >
                          <div className="flex items-center gap-2 w-full">
                            <link.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                            <span className="font-semibold">{link.name}</span>
                          </div>
                          <span className="text-xs text-slate-500 dark:text-slate-400 group-hover:text-current transition-colors">
                            {link.description}
                          </span>
                        </a>
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  variants={itemVariants}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (0.1 * index) }}
                  whileHover={{ scale: 1.02 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-blue-600/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-white/30 dark:border-slate-700/50 rounded-xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <info.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-800 dark:text-white mb-1">
                          {info.title}
                        </h4>
                        <p className="text-slate-700 dark:text-slate-200 font-medium">
                          {info.content}
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Contact CTA */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border border-green-200/50 dark:border-green-700/50 rounded-2xl p-6 text-center">
                <h4 className="font-bold text-slate-800 dark:text-white mb-2">
                  Ready to start a project?
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                  Let's discuss your ideas and bring them to life!
                </p>
                <Button
                  asChild
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <a href="mailto:darshanbhere2@gmail.com" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Start Conversation
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;