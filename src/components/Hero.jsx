import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Hero = () => {
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" }
    });
  }, [controls]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:huseyin@example.com', label: 'E-posta' },
  ];

  const mainText = "Merhaba, Ben Hüseyin Müldür";
  const subText = "Yazılım Mühendisiyim. Modern ve yaratıcı projeler geliştiriyorum.";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, var(--accent) 0%, transparent 50%)`,
          }}
          animate={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, var(--accent) 0%, transparent 50%)`,
          }}
          transition={{ type: "tween", ease: "linear", duration: 0.2 }}
        />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -100, null],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container-custom text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
          className="space-y-8"
        >
          {/* Main Heading */}
          <div className="space-y-4">
            <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              {"Merhaba, Ben ".split('').map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className={char === ' ' ? 'inline-block w-4' : 'inline-block'}
                  style={{
                    color: 'var(--foreground)'
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
              <span className="whitespace-nowrap">
                {"Hüseyin Müldür".split('').map((char, i) => (
                  <motion.span
                    key={`name-${i}`}
                    custom={13 + i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className={char === ' ' ? 'inline-block w-4' : 'inline-block'}
                    style={{
                      color: 'var(--accent)'
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            {/* Subtitle with typewriter effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="relative"
            >
              <motion.p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                {subText.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 + i * 0.03 }}
                    className="inline-block"
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.p>
              
              {/* Typing cursor */}
              <motion.span
                className="inline-block w-1 h-8 bg-accent ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
              />
            </motion.div>
          </div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.6 }}
            className="flex items-center justify-center space-x-2 text-muted-foreground"
          >
            <MapPin className="w-5 h-5" />
            <span className="text-lg">İstanbul, Türkiye</span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 0.6 }}
            className="flex items-center justify-center space-x-6"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground smooth-transition focus-ring"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3.5 + index * 0.1 }}
                  aria-label={social.label}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              );
            })}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4, duration: 0.6 }}
            className="pt-8"
          >
            <motion.button
              onClick={scrollToAbout}
              className="group relative px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-accent/25 smooth-transition focus-ring"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Daha Fazla Keşfet</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent to-accent/80 rounded-full"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-accent smooth-transition focus-ring p-2 rounded-lg"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            aria-label="Aşağı kaydır"
          >
            <span className="text-sm font-medium">Aşağı Kaydır</span>
            <ChevronDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

