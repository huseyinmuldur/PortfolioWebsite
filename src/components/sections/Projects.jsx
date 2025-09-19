import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Eye, Code, Smartphone, Globe, MessageSquare, Brain, Zap } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "VolumeUp",
      description: "Modern JavaScript ile geliştirilmiş ses kontrolü ve müzik uygulaması. Kullanıcı dostu arayüz ve gelişmiş ses işleme özellikleri.",
      image: "/api/placeholder/600/400",
      tags: ["JavaScript", "HTML", "CSS", "Web Audio API"],
      category: "Web Uygulaması",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      github: "https://github.com/huseyinmuldur/VolumeUp",
      live: "#",
      featured: true
    },
    {
      id: 2,
      title: "Softworks",
      description: "Kurumsal web sitesi ve portföy projesi. Modern HTML ve CSS teknikleri kullanılarak geliştirilmiş responsive tasarım.",
      image: "/api/placeholder/600/400",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      category: "Web Tasarımı",
      icon: Globe,
      color: "from-green-500 to-emerald-500",
      github: "https://github.com/huseyinmuldur/Softworks",
      live: "#",
      featured: true
    },
    {
      id: 3,
      title: "Mini Projects Collection",
      description: "Çeşitli JavaScript mini projeleri koleksiyonu. Farklı web teknolojileri ve API entegrasyonları içeren öğrenme projeleri.",
      image: "/api/placeholder/600/400",
      tags: ["JavaScript", "API", "DOM Manipulation", "ES6+"],
      category: "Öğrenme Projeleri",
      icon: Code,
      color: "from-purple-500 to-indigo-500",
      github: "https://github.com/huseyinmuldur/Mini_Projects",
      live: "#",
      featured: true
    },
    {
      id: 4,
      title: "Naive Bayes Spam Classifier",
      description: "Naive Bayes algoritması kullanarak metin verisinde spam sınıflandırması yapan makine öğrenmesi projesi. Python ve Jupyter Notebook ile geliştirildi.",
      image: "/api/placeholder/600/400",
      tags: ["Python", "Machine Learning", "Naive Bayes", "Jupyter"],
      category: "Makine Öğrenmesi",
      icon: Brain,
      color: "from-red-500 to-pink-500",
      github: "https://github.com/huseyinmuldur/NaivBayesClassifier",
      live: "#",
      featured: false
    },
    {
      id: 5,
      title: "Machine Learning Projects",
      description: "Çeşitli makine öğrenmesi algoritmaları ve uygulamalarını içeren kapsamlı proje koleksiyonu. Veri analizi ve model geliştirme odaklı.",
      image: "/api/placeholder/600/400",
      tags: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      category: "Veri Bilimi",
      icon: Brain,
      color: "from-yellow-500 to-orange-500",
      github: "https://github.com/huseyinmuldur/MachineLearning",
      live: "#",
      featured: false
    },
    {
      id: 6,
      title: "FullStack E-Ticaret Web",
      description: "PHP ile geliştirilmiş tam özellikli e-ticaret platformu. Ürün yönetimi, sepet sistemi ve ödeme entegrasyonu içerir.",
      image: "/api/placeholder/600/400",
      tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      category: "E-Ticaret",
      icon: Globe,
      color: "from-teal-500 to-blue-500",
      github: "https://github.com/huseyinmuldur/FullStack-E-Ticaret-Web",
      live: "#",
      featured: false
    },
    {
      id: 7,
      title: "Social Media Website",
      description: "Hack programlama dili ile geliştirilmiş sosyal medya platformu. Kullanıcı etkileşimi ve içerik paylaşımı özellikleri.",
      image: "/api/placeholder/600/400",
      tags: ["Hack", "PHP", "MySQL", "Social Features"],
      category: "Sosyal Platform",
      icon: MessageSquare,
      color: "from-indigo-500 to-purple-500",
      github: "https://github.com/huseyinmuldur/SocialMediaWebSite",
      live: "#",
      featured: false
    },
    {
      id: 8,
      title: "OOP Project (Java)",
      description: "Nesne yönelimli programlama prensiplerini uygulayan Java projesi. Temiz kod ve tasarım desenleri kullanılmıştır.",
      image: "/api/placeholder/600/400",
      tags: ["Java", "OOP", "Design Patterns", "Clean Code"],
      category: "Eğitim Projesi",
      icon: Code,
      color: "from-orange-500 to-red-500",
      github: "https://github.com/huseyinmuldur/oopProject",
      live: "#",
      featured: false
    }
  ];

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

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
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
              <Code className="w-4 h-4" />
              <span>Projelerim</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Yaratıcı{' '}
              <span className="text-gradient">Çözümlerim</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Farklı teknolojiler kullanarak geliştirdiğim projeler. Her biri benzersiz zorluklar ve öğrenme deneyimleri sundu.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold text-center">Öne Çıkan Projeler</h3>
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <motion.div
                    key={project.id}
                    className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-accent/50 smooth-transition"
                    variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.02 }}
                    onHoverStart={() => setHoveredProject(project.id)}
                    onHoverEnd={() => setHoveredProject(null)}
                  >
                    {/* Project Image/Placeholder */}
                    <div className="relative h-48 bg-gradient-to-br from-accent/20 to-accent/5 overflow-hidden">
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}
                        animate={{
                          scale: hoveredProject === project.id ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon className="w-16 h-16 text-accent/60" />
                      </div>
                      
                      {/* Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center space-x-4"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: hoveredProject === project.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.a
                          href={project.github}
                          className="p-3 bg-accent text-accent-foreground rounded-full hover:scale-110 smooth-transition"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                          href={project.live}
                          className="p-3 bg-accent text-accent-foreground rounded-full hover:scale-110 smooth-transition"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.a>
                      </motion.div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6 space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-accent font-medium">
                            {project.category}
                          </span>
                          <Eye className="w-4 h-4 text-muted-foreground" />
                        </div>
                        <h4 className="text-xl font-bold group-hover:text-accent smooth-transition">
                          {project.title}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs bg-secondary rounded-full text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Other Projects */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold text-center">Diğer Projeler</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <motion.div
                    key={project.id}
                    className="group bg-card rounded-xl border border-border p-6 hover:border-accent/50 smooth-transition hover-lift"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Icon className={`w-8 h-8 text-accent`} />
                        <div className="flex space-x-2">
                          <a
                            href={project.github}
                            className="p-2 hover:bg-secondary rounded-lg smooth-transition"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                          <a
                            href={project.live}
                            className="p-2 hover:bg-secondary rounded-lg smooth-transition"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-bold group-hover:text-accent smooth-transition">
                          {project.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs bg-secondary rounded text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.a
              href="#contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold hover:shadow-2xl hover:shadow-accent/25 smooth-transition"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Birlikte Çalışalım</span>
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

