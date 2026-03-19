import React, { useState, useEffect, useRef } from 'react';
import { 
  Wrench, 
  ShieldCheck, 
  Users, 
  Star, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  MessageCircle, 
  ChevronRight, 
  Menu, 
  X,
  CheckCircle2,
  Heart,
  Award,
  Zap,
  Search,
  Settings,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Avaliações', href: '#reviews' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-brand-dark/80 backdrop-blur-lg border-b border-white/10 py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="/logo.png" 
            alt="RPM CAR Logo" 
            className="h-12 md:h-16 w-auto object-contain"
            referrerPolicy="no-referrer"
            onError={(e) => {
              // Fallback if logo.png is not found
              e.currentTarget.style.display = 'none';
              const fallback = document.createElement('div');
              fallback.className = "flex items-center gap-2";
              fallback.innerHTML = `
                <span class="text-xl font-bold tracking-tighter">
                  RPM CAR <span class="text-brand-primary">AUTOCENTER</span>
                </span>
              `;
              e.currentTarget.parentElement!.appendChild(fallback);
            }}
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium hover:text-brand-vibrant transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/551134315654" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-brand-yellow text-brand-dark px-5 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-brand-yellow/20"
          >
            AGENDAR AGORA
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-dark/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium border-b border-white/5 pb-2"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/551134315654" 
              className="bg-brand-yellow text-brand-dark text-center py-3 rounded-xl font-bold"
            >
              FALAR NO WHATSAPP
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with cinematic zoom effect */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-brand-dark/70 to-brand-dark z-10" />
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          src="https://lh3.googleusercontent.com/p/AF1QipO7NFABCB3CD-dCzAlAB19pou6XJc_uAvQ-SsY2=s1600" 
          alt="Fachada Rpm Car Autocenter"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-brand-vibrant/20 border border-brand-vibrant/30 text-brand-vibrant text-xs font-bold tracking-widest uppercase mb-6">
            13 Anos de Excelência em Osasco
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9]">
            CONFIANÇA E <br />
            <span className="text-brand-primary text-glow-blue italic">QUALIDADE</span> PARA <br />
            O SEU CARRO
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 font-medium">
            Atendimento humanizado, transparente e especializado. A oficina amiga da mulher e inclusiva que seu veículo merece.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/551134315654"
              className="w-full sm:w-auto bg-brand-yellow text-brand-dark px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition-all shadow-xl shadow-brand-yellow/20 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-6 h-6" />
              FALAR NO WHATSAPP
            </a>
            <a 
              href="#reviews"
              className="w-full sm:w-auto glass px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              VER AVALIAÇÕES
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-brand-vibrant rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    { url: "https://lh3.googleusercontent.com/p/AF1QipOzO0StDteeI-V84uZCl2KiefWV2jch5HZrIGPt=s1200", title: "Fachada Rpm Car" },
    { url: "https://lh3.googleusercontent.com/p/AF1QipM4dLiAOLw9LWjuhv37EzBJQkc5mlljwCZ4iFn2=s1200", title: "Equipamentos de Ponta" },
    { url: "https://lh3.googleusercontent.com/p/AF1QipNGMhTpH7k6VOb2m7P7oRo6X9cOPl2MmNU_VHEM=s1200", title: "Organização e Limpeza" },
    { url: "https://lh3.googleusercontent.com/p/AF1QipOPueeBhEa_GtXWYyik4qkqCMUYOD-Q_im5iuEG=s1200", title: "Cuidado nos Detalhes" },
    { url: "https://lh3.googleusercontent.com/p/AF1QipMbjojnTCA_lDeu0xvo81zU9HnqwEv4H331LjTH=s1200", title: "Diagnóstico Especializado" },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
              ESTRUTURA <span className="text-brand-primary">MODERNA</span>
            </h2>
            <p className="text-white/60 text-lg">
              Equipamentos de última geração e uma equipe apaixonada pelo que faz. Conheça o espaço onde cuidamos do seu patrimônio com transparência total.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-3xl font-bold text-brand-yellow">4.9 ⭐</div>
              <div className="text-sm text-white/40 uppercase tracking-widest">Google Reviews</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[800px] md:h-[600px]">
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="md:col-span-8 relative overflow-hidden rounded-3xl group cursor-pointer"
          >
            <img src={images[0].url} alt={images[0].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-2xl font-bold">{images[0].title}</h3>
            </div>
          </motion.div>
          <div className="md:col-span-4 grid grid-rows-2 gap-4">
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="relative overflow-hidden rounded-3xl group cursor-pointer"
            >
              <img src={images[1].url} alt={images[1].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-brand-vibrant/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-lg font-bold">{images[1].title}</h3>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="relative overflow-hidden rounded-3xl group cursor-pointer"
            >
              <img src={images[2].url} alt={images[2].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-lg font-bold">{images[2].title}</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Differentials = () => {
  const items = [
    { icon: <Heart className="w-8 h-8" />, title: "Inclusividade", desc: "Espaço que acolhe a comunidade LGBTQ+ com respeito e dignidade." },
    { icon: <Award className="w-8 h-8" />, title: "Amiga da Mulher", desc: "Atendimento sem 'mecâniquês', focado em clareza e honestidade." },
    { icon: <Users className="w-8 h-8" />, title: "Humanizado", desc: "Você não é apenas um número. Tratamos cada cliente como família." },
    { icon: <ShieldCheck className="w-8 h-8" />, title: "Transparência", desc: "Mostramos o que precisa ser feito e por que, sem surpresas no orçamento." },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-vibrant/10 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
            POR QUE A <span className="text-brand-primary">RPM CAR?</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Muito além de uma oficina, somos um centro automotivo focado em pessoas e na quebra de paradigmas do setor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl hover:border-brand-vibrant/50 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-vibrant/10 flex items-center justify-center text-brand-vibrant mb-6 group-hover:scale-110 transition-transform glow-blue">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-white/50 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { icon: <Zap />, title: "Diagnóstico Eletrônico", desc: "Identificação precisa de falhas com scanners de última geração." },
    { icon: <Settings />, title: "Mecânica Geral", desc: "Motor, câmbio, suspensão e freios com peças de alta qualidade." },
    { icon: <Search />, title: "Revisão Preventiva", desc: "Check-up completo para garantir sua segurança e evitar gastos maiores." },
    { icon: <CheckCircle2 />, title: "Injeção Eletrônica", desc: "Limpeza de bicos, sensores e otimização de consumo de combustível." },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-brand-dark/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">
              SERVIÇOS <br />
              <span className="text-brand-primary">ESPECIALIZADOS</span>
            </h2>
            <div className="space-y-6">
              {services.map((s, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="flex gap-6 p-6 rounded-2xl hover:bg-white/5 transition-all border border-transparent hover:border-white/10"
                >
                  <div className="text-brand-vibrant">{s.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                    <p className="text-white/50">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden glow-blue">
              <img 
                src="https://lh3.googleusercontent.com/p/AF1QipNGMhTpH7k6VOb2m7P7oRo6X9cOPl2MmNU_VHEM=s1200" 
                alt="Mecânico trabalhando na Rpm Car" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 glass p-8 rounded-3xl hidden md:block">
              <div className="text-4xl font-black text-brand-vibrant mb-2">100%</div>
              <div className="text-sm font-bold uppercase tracking-widest text-white/60">Transparência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    { name: "Mariana Silva", text: "Atendimento excelente do começo ao fim. Me senti muito respeitada e o serviço ficou impecável.", rating: 5 },
    { name: "Ricardo Oliveira", text: "Profissionalismo e transparência que nunca vi em outra oficina. Recomendo de olhos fechados.", rating: 5 },
    { name: "Juliana Costa", text: "Melhor oficina de Osasco! Preço justo e equipe muito qualificada. Transmitem muita confiança.", rating: 5 },
  ];

  return (
    <section id="reviews" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-yellow/10 text-brand-yellow px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 fill-current" />
            <span className="font-bold">4.9 de 5 estrelas no Google</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
            O QUE DIZEM <span className="text-brand-vibrant">NOSSOS CLIENTES</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="glass-dark p-8 rounded-3xl border-t-2 border-brand-vibrant/30"
            >
              <div className="flex gap-1 mb-6 text-brand-yellow">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-lg italic text-white/80 mb-8 leading-relaxed">"{r.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-vibrant/20 flex items-center justify-center font-bold text-brand-vibrant">
                  {r.name[0]}
                </div>
                <span className="font-bold">{r.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">
              ONDE <span className="text-brand-vibrant">ESTAMOS</span>
            </h2>
            <div className="space-y-8 mb-12">
              <div className="flex gap-6">
                <MapPin className="text-brand-vibrant w-8 h-8 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Endereço</h3>
                  <p className="text-white/60">Rua Maria Antônia Niero, 120 - Santo Antônio, Osasco - SP, 06130-010</p>
                </div>
              </div>
              <div className="flex gap-6">
                <Phone className="text-brand-vibrant w-8 h-8 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Telefone</h3>
                  <p className="text-white/60">(11) 3431-5654</p>
                </div>
              </div>
            </div>
            <a 
              href="https://www.google.com/maps/place/Rpm+Car+Autocenter/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 px-8 py-4 rounded-2xl font-bold transition-all border border-white/10"
            >
              ABRIR NO GOOGLE MAPS
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <div className="rounded-3xl overflow-hidden h-[400px] border border-white/10 glow-blue">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.447548772397!2d-46.7995486237616!3d-23.55236796125026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf016000000001%3A0x63318d9d784a968!2sRpm%20Car%20Autocenter!5e0!3m2!1spt-BR!2sbr!4v1710810000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-white/5 bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="/logo.png" 
                alt="RPM CAR Logo" 
                className="h-12 w-auto object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = `
                    <div class="flex items-center gap-2">
                      <div class="w-8 h-8 bg-brand-primary rounded flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white w-5 h-5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                      </div>
                      <span class="text-xl font-bold tracking-tighter">
                        RPM CAR <span class="text-brand-primary">AUTOCENTER</span>
                      </span>
                    </div>
                  `;
                }}
              />
            </div>
            <p className="text-white/40 max-w-sm mb-8">
              Referência em serviços automotivos em Osasco há mais de 13 anos. Atendimento especializado e humano.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/rpmcar_autocenter" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-vibrant transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-vibrant transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-brand-vibrant">Links Rápidos</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#home" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Avaliações</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-brand-vibrant">Horário</h4>
            <ul className="space-y-4 text-white/60">
              <li>Segunda - Sexta: 08:00 - 18:00</li>
              <li>Sábado: 08:00 - 13:00</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/30">
          <p>© 2024 Rpm Car Autocenter. Todos os direitos reservados.</p>
          <p>Desenvolvido com ❤️ em Osasco</p>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppFloat = () => {
  return (
    <motion.a 
      href="https://wa.me/551134315654"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 glow-blue"
      style={{ boxShadow: '0 0 30px rgba(37, 211, 102, 0.4)' }}
    >
      <MessageCircle className="w-8 h-8 text-white fill-current" />
      <motion.div 
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-green-500 rounded-full -z-10 opacity-50"
      />
    </motion.a>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-vibrant selection:text-white">
      <Navbar />
      <main>
        <Hero />
        
        {/* CTA Banner */}
        <div className="bg-brand-vibrant py-6 overflow-hidden whitespace-nowrap border-y border-white/10">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 items-center"
          >
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-4 text-xl font-black uppercase tracking-tighter">
                <span>Transparência Total</span>
                <div className="w-2 h-2 bg-white rounded-full" />
                <span>Oficina Amiga da Mulher</span>
                <div className="w-2 h-2 bg-white rounded-full" />
                <span>Inclusividade LGBTQ+</span>
                <div className="w-2 h-2 bg-white rounded-full" />
                <span>13 Anos de Experiência</span>
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
            ))}
          </motion.div>
        </div>

        <Gallery />
        <Differentials />
        <Services />
        <Reviews />
        
        {/* Final CTA */}
        <section className="py-24 px-6 relative">
          <div className="max-w-4xl mx-auto glass-dark p-12 md:p-20 rounded-[40px] text-center border-brand-vibrant/20 glow-blue">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 leading-tight">
              SEU CARRO MERECE O <br />
              <span className="text-brand-vibrant italic">MELHOR CUIDADO</span>
            </h2>
            <p className="text-xl text-white/60 mb-12 max-w-xl mx-auto">
              Agende agora sua revisão e experimente o padrão RPM CAR de atendimento.
            </p>
            <motion.a 
              href="https://wa.me/551134315654"
              whileHover={{ scale: 1.05 }}
              animate={{ boxShadow: ["0 0 0px rgba(250, 204, 21, 0)", "0 0 40px rgba(250, 204, 21, 0.4)", "0 0 0px rgba(250, 204, 21, 0)"] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center gap-3 bg-brand-yellow text-brand-dark px-12 py-5 rounded-full font-black text-xl"
            >
              FALE AGORA NO WHATSAPP
              <ArrowRight className="w-6 h-6" />
            </motion.a>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
