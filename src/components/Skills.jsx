import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { 
  Code, 
  Database, 
  MessageSquare, 
  Brain, 
  Smartphone, 
  Globe, 
  Server, 
  GitBranch,
  Award,
  Zap
} from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const [animatedValues, setAnimatedValues] = useState({});

  const skillCategories = [
    {
      title: "Frontend Geliştirme",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "HTML/CSS", level: 92 },
        { name: "JavaScript", level: 88 },
        { name: "React", level: 85 },
        { name: "Responsive Design", level: 90 },
        { name: "Bootstrap", level: 82 },
      ]
    },
    {
      title: "Backend Geliştirme",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "PHP", level: 88 },
        { name: "Node.js", level: 75 },
        { name: "Python", level: 80 },
        { name: "Java", level: 85 },
        { name: "API Development", level: 78 },
      ]
    },
    {
      title: "Veritabanı & Veri",
      icon: Database,
      color: "from-purple-500 to-indigo-500",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "Data Analysis", level: 88 },
        { name: "Machine Learning", level: 82 },
        { name: "Python Pandas", level: 85 },
        { name: "Jupyter Notebook", level: 90 },
      ]
    },
    {
      title: "Sosyal Medya & Pazarlama",
      icon: MessageSquare,
      color: "from-red-500 to-pink-500",
      skills: [
        { name: "Instagram Marketing", level: 95 },
        { name: "Content Creation", level: 92 },
        { name: "Social Media Strategy", level: 90 },
        { name: "Analytics & Insights", level: 88 },
        { name: "Brand Management", level: 85 },
      ]
    }
  ];

  const tools = [
    { name: "Git", icon: GitBranch, level: 88 },
    { name: "VS Code", icon: Code, level: 95 },
    { name: "Web Dev", icon: Globe, level: 90 },
    { name: "Data Science", icon: Brain, level: 85 },
  ];

  const achievements = [
    { number: 9, label: "Tamamlanan Proje", suffix: "+" },
    { number: 2, label: "Yıl Deneyim", suffix: "+" },
    { number: 95, label: "Müşteri Memnuniyeti", suffix: "%" },
    { number: 50, label: "GitHub Commit", suffix: "+" },
  ];

  // Animated counter hook
  useEffect(() => {
    if (isInView) {
      achievements.forEach((achievement, index) => {
        let start = 0;
        const end = achievement.number;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          setAnimatedValues(prev => ({
            ...prev,
            [`achievement_${index}`]: Math.floor(start)
          }));
        }, 16);

        return () => clearInterval(timer);
      });
    }
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section id="skills" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
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
              <Award className="w-4 h-4" />
              <span>Yeteneklerim</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Teknik{' '}
              <span className="text-gradient">Uzmanlıklarım</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Yıllar içinde edindiğim deneyim ve sürekli öğrenme tutkumla geliştirdiğim teknik yeteneklerim.
            </p>
          </motion.div>

          {/* Achievements Counter */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                className="text-center p-6 bg-card rounded-2xl border border-border hover:border-accent/50 smooth-transition hover-lift"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-accent mb-2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, type: "spring", stiffness: 200 }}
                >
                  {animatedValues[`achievement_${index}`] || 0}{achievement.suffix}
                </motion.div>
                <div className="text-sm text-muted-foreground font-medium">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Categories */}
          <motion.div variants={itemVariants} className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  className="bg-card rounded-2xl border border-border p-8 hover:border-accent/50 smooth-transition"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="space-y-6">
                    {/* Category Header */}
                    <div className="flex items-center space-x-4">
                      <motion.div
                        className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.div>
                      <h3 className="text-xl font-bold">{category.title}</h3>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-secondary rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                              transition={{ 
                                delay: 1 + categoryIndex * 0.2 + skillIndex * 0.1, 
                                duration: 1,
                                ease: "easeOut"
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold text-center">Araçlar ve Teknolojiler</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <motion.div
                    key={tool.name}
                    className="bg-card rounded-xl border border-border p-6 text-center hover:border-accent/50 smooth-transition hover-lift"
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 1.5 + index * 0.1 }}
                  >
                    <motion.div
                      className="flex justify-center mb-4"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                    >
                      <Icon className="w-8 h-8 text-accent" />
                    </motion.div>
                    <h4 className="font-semibold mb-2">{tool.name}</h4>
                    <div className="text-sm text-muted-foreground mb-3">{tool.level}%</div>
                    <div className="h-1 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-accent rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${tool.level}%` } : { width: 0 }}
                        transition={{ 
                          delay: 1.7 + index * 0.1, 
                          duration: 1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Learning Philosophy */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 border border-accent/20"
          >
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-accent text-accent-foreground rounded-full mb-6"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Zap className="w-8 h-8" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4">Sürekli Öğrenme</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Teknoloji hızla gelişiyor ve ben de bu değişime ayak uydurmak için sürekli öğrenmeye devam ediyorum. 
              Her gün yeni bir şey öğrenmek benim için bir tutku.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

