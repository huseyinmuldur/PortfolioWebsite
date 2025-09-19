import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Instagram,
  MessageCircle,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success, error

  const contactInfo = [
    {
      icon: Mail,
      label: "E-posta",
      value: "huseyinmuldur@gmail.com",
      href: "mailto:huseyinmuldur@gmail.com",
      color: "text-blue-500"
    },
    {
      icon: Phone,
      label: "Telefon",
      value: "+90 555 123 45 67",
      href: "tel:+905551234567",
      color: "text-green-500"
    },
    {
      icon: MapPin,
      label: "Konum",
      value: "İstanbul, Türkiye",
      href: "#",
      color: "text-red-500"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/huseyinmuldur",
      color: "hover:text-gray-600"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/hüseyin-müldür-b34620238",
      color: "hover:text-blue-600"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/themuldur",
      color: "hover:text-pink-400"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 2000);
  };

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
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
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
              <MessageCircle className="w-4 h-4" />
              <span>İletişim</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Birlikte{' '}
              <span className="text-gradient">Çalışalım</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Yeni bir proje mi var? Bir soru mu sormak istiyorsun? Benimle iletişime geçmekten çekinme!
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">İletişim Bilgileri</h3>
                <p className="text-muted-foreground">
                  Aşağıdaki kanallardan benimle iletişime geçebilir veya formu doldurarak mesaj gönderebilirsin.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      className="flex items-center space-x-4 p-4 bg-card rounded-xl border border-border hover:border-accent/50 smooth-transition hover-lift group"
                      whileHover={{ scale: 1.02, x: 8 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <div className={`p-3 rounded-lg bg-secondary group-hover:bg-accent/10 smooth-transition`}>
                        <Icon className={`w-5 h-5 ${info.color} group-hover:text-accent smooth-transition`} />
                      </div>
                      <div>
                        <div className="font-medium group-hover:text-accent smooth-transition">
                          {info.label}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {info.value}
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Social Links */}
              <motion.div
                variants={itemVariants}
                className="space-y-4"
              >
                <h4 className="text-lg font-semibold">Sosyal Medya</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        className={`p-3 bg-card rounded-xl border border-border hover:border-accent/50 smooth-transition ${social.color}`}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        aria-label={social.label}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>

              {/* Availability Status */}
              <motion.div
                variants={itemVariants}
                className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-semibold text-green-600 dark:text-green-400">
                    Yeni Projeler İçin Müsait
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Şu anda yeni projeler için müsaitim. Birlikte harika şeyler yapalım!
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Mesaj Gönder</h3>
                <p className="text-muted-foreground">
                  Projen hakkında detayları paylaş, en kısa sürede geri dönüş yapacağım.
                </p>
              </div>

              <motion.form
                onSubmit={handleSubmit}
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.6 }}
              >
                {/* Name Field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    İsminiz *
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 smooth-transition"
                    placeholder="Adınız ve soyadınız"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    E-posta *
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 smooth-transition"
                    placeholder="ornek@email.com"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mesajınız *
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 smooth-transition resize-none"
                    placeholder="Projeniz hakkında detayları paylaşın..."
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-accent text-accent-foreground rounded-xl font-semibold hover:shadow-2xl hover:shadow-accent/25 smooth-transition disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: formStatus === 'sending' ? 1 : 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {formStatus === 'sending' && (
                    <motion.div
                      className="w-5 h-5 border-2 border-accent-foreground border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  )}
                  {formStatus === 'success' && <CheckCircle className="w-5 h-5" />}
                  {formStatus === 'error' && <AlertCircle className="w-5 h-5" />}
                  {formStatus === 'idle' && <Send className="w-5 h-5" />}
                  
                  <span>
                    {formStatus === 'sending' && 'Gönderiliyor...'}
                    {formStatus === 'success' && 'Gönderildi!'}
                    {formStatus === 'error' && 'Tekrar Dene'}
                    {formStatus === 'idle' && 'Mesaj Gönder'}
                  </span>
                </motion.button>

                {/* Status Messages */}
                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-600 dark:text-green-400 text-sm"
                  >
                    Mesajınız başarıyla gönderildi! En kısa sürede geri dönüş yapacağım.
                  </motion.div>
                )}
              </motion.form>
            </motion.div>
          </div>

          {/* Footer CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 border border-accent/20"
          >
            <h3 className="text-2xl font-bold mb-4">Hemen Başlayalım!</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Fikrini gerçeğe dönüştürmeye hazır mısın? Birlikte harika projeler yapalım.
            </p>
            <motion.a
              href="mailto:huseyinmuldur@gmail.com"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold hover:shadow-2xl hover:shadow-accent/25 smooth-transition"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              <span>Hemen İletişime Geç</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

