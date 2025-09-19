import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, MessageSquare, Brain, Coffee, Zap, Heart } from 'lucide-react';
import profileImage from '../../assets/images/profile.jpg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const skills = [
    { icon: Code2, name: 'Web Geliştirme', color: 'text-blue-500' },
    { icon: MessageSquare, name: 'Sosyal Medya Yönetimi', color: 'text-red-500' },
    { icon: Brain, name: 'Yapay Zeka', color: 'text-purple-500' },
  ];

  const stats = [
    { number: '2+', label: 'Yıl Deneyim' },
    { number: '10+', label: 'Proje Tamamlandı' },
    { number: '3+', label: 'Mutlu Müşteri' },
    { number: '24/7', label: 'Destek' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="about" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <motion.div
              className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full text-accent font-medium"
              whileHover={{ scale: 1.05 }}
            >
              <Heart className="w-4 h-4" />
              <span>Hakkımda</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Tutkulu Bir{' '}
              <span className="text-gradient">Yazılım Mühendisi</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Modern teknolojilerle yaratıcı çözümler üretmeyi seven, sürekli öğrenmeye açık bir geliştiriciyim.
            </p>
          </motion.div>

          {/* Profile Image - Full Width Centered */}
          <motion.div 
            className="flex justify-center mb-16"
            variants={itemVariants}
          >
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
                {/* Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent/70 to-accent/30 rounded-full p-1">
                  <div className="w-full h-full bg-background rounded-full p-2">
                    <img
                      src={profileImage}
                      alt="Hüseyin - Yazılım Mühendisi"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <motion.div
                  className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7] 
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute -bottom-3 -left-3 w-4 h-4 bg-accent/60 rounded-full"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0.8, 0.5] 
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
              </div>
              
              {/* Hover Effect Overlay */}
              <motion.div
                className="absolute inset-0 bg-accent/20 rounded-full opacity-0 group-hover:opacity-100 smooth-transition"
                initial={false}
              />
            </motion.div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Text Content */}
            <motion.div variants={itemVariants} className="space-y-8">

              <div className="space-y-6">
                <motion.p 
                  className="text-lg leading-relaxed text-justify"
                  variants={itemVariants}
                >
                  Merhaba! Ben Hüseyin, İstanbul merkezli bir yazılım mühendisiyim. 
                  <span className="text-accent font-semibold"> Modern web teknolojileri</span>, 
                  <span className="text-accent font-semibold"> sosyal medya yönetimi</span> ve 
                  <span className="text-accent font-semibold"> yapay zeka</span> alanlarında 
                  uzmanlaşmış durumdayım ve sürekli kendimi geliştiriyorum.
                </motion.p>

                <motion.p 
                  className="text-lg leading-relaxed text-justify"
                  variants={itemVariants}
                >
                  Her proje benim için yeni bir macera. Kullanıcı deneyimini ön planda tutarak, 
                  performanslı ve güvenli uygulamalar geliştirmeyi seviyorum. Kod yazmak sadece 
                  işim değil, aynı zamanda tutkum ve yaşam tarzım haline gelmiştir.
                </motion.p>

                <motion.p 
                  className="text-lg leading-relaxed text-justify"
                  variants={itemVariants}
                >
                  Sosyal medya yönetimi alanında, marka kimliği oluşturma, içerik stratejisi 
                  geliştirme ve topluluk yönetimi konularında deneyim sahibiyim. Dijital pazarlama 
                  kampanyaları ve analitik raporlama ile markaların online varlığını güçlendiriyorum.
                </motion.p>
              </div>

              {/* Skills Icons */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      className="flex items-center space-x-3 px-4 py-3 bg-card rounded-xl border border-border hover:border-accent/50 smooth-transition"
                      whileHover={{ scale: 1.05, y: -2 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <Icon className={`w-5 h-5 ${skill.color}`} />
                      <span className="font-medium">{skill.name}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Right Column - Stats & Visual */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-6 bg-card rounded-2xl border border-border hover:border-accent/50 smooth-transition hover-lift"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <motion.div
                      className="text-3xl md:text-4xl font-bold text-accent mb-2"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: 1 + index * 0.1, type: "spring", stiffness: 200 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Coffee & Code */}
              <motion.div
                className="relative p-8 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl border border-accent/20"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, rotate: -2 }}
                animate={isInView ? { opacity: 1, rotate: 0 } : { opacity: 0, rotate: -2 }}
                transition={{ delay: 1.2 }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <Coffee className="w-6 h-6 text-accent" />
                    <Zap className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Kahve + Kod = ❤️</h3>
                    <p className="text-muted-foreground">
                      En iyi fikirler kahve molalarında doğar
                    </p>
                  </div>
                </div>
                
                {/* Code snippet decoration */}
                <motion.div 
                  className="font-mono text-sm text-accent/70 bg-background/50 p-3 rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 1.5 }}
                >
                  <div>const passion = "coding";</div>
                  <div>const fuel = "coffee";</div>
                  <div className="text-accent">console.log(passion + fuel);</div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

