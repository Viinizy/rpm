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
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
      isScrolled ? "bg-brand-dark/90 backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="/logo.png" 
            alt="RPM CAR Logo" 
            className="h-10 md:h-14 w-auto object-contain"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const fallback = document.createElement('div');
              fallback.className = "flex items-center gap-2";
              fallback.innerHTML = `
                <span class="text-xl font-black tracking-tighter">
                  RPM CAR <span class="text-brand-yellow">AUTOCENTER</span>
                </span>
              `;
              e.currentTarget.parentElement!.appendChild(fallback);
            }}
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-semibold tracking-wide hover:text-brand-yellow transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-yellow transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a 
            href="https://wa.me/551134315654" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-brand-yellow text-brand-dark px-6 py-2.5 rounded-full font-black text-sm hover:scale-105 transition-all active:scale-95 shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)]"
          >
            AGENDAR AGORA
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-brand-dark/98 backdrop-blur-2xl z-[60] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <button 
              className="absolute top-6 right-6 text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-black tracking-tighter hover:text-brand-yellow transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/551134315654" 
              className="bg-brand-yellow text-brand-dark px-10 py-4 rounded-full font-black text-xl shadow-2xl"
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
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-brand-dark/80 to-brand-dark z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_70%)] z-10" />
        <motion.img 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          src="https://lh3.googleusercontent.com/p/AF1QipO7NFABCB3CD-dCzAlAB19pou6XJc_uAvQ-SsY2=s1600" 
          alt="Atendimento Confiável"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow text-sm font-black tracking-widest uppercase mb-8"
          >
            <Star className="w-4 h-4 fill-current" />
            4.9 de avaliação | +129 clientes satisfeitos
          </motion.div>
          
          <h1 className="text-5xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.85] uppercase">
            Seu carro em <br />
            <span className="text-brand-yellow text-glow-blue italic">mãos confiáveis</span> <br />
            em Osasco
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
            Mais de 13 anos oferecendo diagnóstico preciso, transparência e qualidade. A oficina amiga da mulher e inclusiva que seu veículo merece.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a 
              href="https://wa.me/551134315654"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-brand-yellow text-brand-dark px-12 py-5 rounded-full font-black text-xl hover:shadow-[0_0_40px_rgba(250,204,21,0.5)] transition-all flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-7 h-7" />
              FALAR NO WHATSAPP
            </motion.a>
            <motion.a 
              href="#reviews"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto glass px-12 py-5 rounded-full font-bold text-xl flex items-center justify-center gap-3"
            >
              VER AVALIAÇÕES
              <ChevronRight className="w-6 h-6" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <div className="w-7 h-12 border-2 border-white/20 rounded-full flex justify-center p-1.5">
          <motion.div 
            animate={{ height: [8, 16, 8] }}
            className="w-1.5 bg-brand-yellow rounded-full" 
          />
        </div>
      </motion.div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    { url: "https://lh3.googleusercontent.com/p/AF1QipOzO0StDteeI-V84uZCl2KiefWV2jch5HZrIGPt=s1200", title: "Atendimento Confiável" },
    { url: "https://lh3.googleusercontent.com/p/AF1QipM4dLiAOLw9LWjuhv37EzBJQkc5mlljwCZ4iFn2=s1200", title: "Equipamentos de Ponta" },
    { url: "https://lh3.googleusercontent.com/p/AF1QipNGMhTpH7k6VOb2m7P7oRo6X9cOPl2MmNU_VHEM=s1200", title: "Organização e Limpeza" },
    { url: "https://lh3.googleusercontent.com/p/AF1QipOPueeBhEa_GtXWYyik4qkqCMUYOD-Q_im5iuEG=s1200", title: "Cuidado nos Detalhes" },
    { url: "https://lh3.googleusercontent.com/p/AF1QipMbjojnTCA_lDeu0xvo81zU9HnqwEv4H331LjTH=s1200", title: "Diagnóstico Especializado" },
  ];

  return (
    <section id="about" className="py-32 px-6 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-yellow/5 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-brand-yellow/10 text-brand-yellow px-4 py-2 rounded-full mb-6">
              <span className="font-black text-sm uppercase tracking-widest">Nossa Estrutura</span>
            </div>
            <h2 className="text-4xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
              TECNOLOGIA <br />
              <span className="text-brand-yellow italic">DE PONTA</span>
            </h2>
          </div>
          <p className="text-white/40 text-xl max-w-md font-medium leading-relaxed">
            Investimos constantemente em equipamentos de última geração para garantir o diagnóstico mais preciso de Osasco.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[1000px] md:h-[700px]">
          <motion.div 
            whileHover={{ scale: 0.99 }}
            className="md:col-span-7 relative overflow-hidden rounded-[60px] group cursor-pointer border border-white/10"
          >
            <img 
              src={images[0].url} 
              alt={images[0].title} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-12 left-12">
              <h3 className="text-3xl font-black uppercase tracking-tight">{images[0].title}</h3>
              <p className="text-brand-yellow font-bold uppercase tracking-widest text-sm mt-2">Ambiente Profissional</p>
            </div>
          </motion.div>
          
          <div className="md:col-span-5 grid grid-rows-2 gap-6">
            <motion.div 
              whileHover={{ scale: 0.99 }}
              className="relative overflow-hidden rounded-[60px] group cursor-pointer border border-white/10"
            >
              <img 
                src={images[1].url} 
                alt={images[1].title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-yellow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-10 left-10">
                <h3 className="text-xl font-black uppercase tracking-tight">{images[1].title}</h3>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 0.99 }}
              className="relative overflow-hidden rounded-[60px] group cursor-pointer border border-white/10"
            >
              <img 
                src={images[2].url} 
                alt={images[2].title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-yellow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-10 left-10">
                <h3 className="text-xl font-black uppercase tracking-tight">{images[2].title}</h3>
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
    { icon: <ShieldCheck className="w-8 h-8" />, title: "Atendimento Transparente", desc: "Mostramos cada detalhe do que seu carro precisa, sem surpresas no orçamento." },
    { icon: <Zap className="w-8 h-8" />, title: "Diagnóstico Preciso", desc: "Tecnologia de ponta para identificar falhas com 100% de assertividade." },
    { icon: <Award className="w-8 h-8" />, title: "13 Anos de Experiência", desc: "Uma trajetória de confiança e excelência cuidando de milhares de veículos em Osasco." },
    { icon: <Heart className="w-8 h-8" />, title: "Inclusividade LGBTQ+", desc: "Um ambiente seguro, acolhedor e respeitoso para todas as pessoas." },
    { icon: <Users className="w-8 h-8" />, title: "Oficina Amiga da Mulher", desc: "Atendimento didático e honesto, eliminando qualquer barreira de gênero." },
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-brand-dark">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05)_0%,transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black tracking-tighter mb-8 uppercase"
          >
            POR QUE ESCOLHER A <span className="text-brand-yellow">RPM CAR?</span>
          </motion.h2>
          <p className="text-white/60 max-w-3xl mx-auto text-xl font-medium leading-relaxed">
            Muito além de uma oficina, somos um centro automotivo focado em pessoas, transparência e na quebra de paradigmas do setor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, borderColor: "rgba(250,204,21,0.4)" }}
              className="glass p-8 rounded-[32px] border-white/5 transition-all duration-500 group flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-3xl bg-brand-yellow/10 flex items-center justify-center text-brand-yellow mb-8 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(250,204,21,0.1)]">
                {item.icon}
              </div>
              <h3 className="text-xl font-black mb-4 uppercase tracking-tight leading-tight">{item.title}</h3>
              <p className="text-white/50 leading-relaxed text-sm font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { icon: <Zap className="w-10 h-10" />, title: "Diagnóstico Eletrônico", desc: "Identificação precisa de falhas com scanners de última geração e tecnologia avançada." },
    { icon: <Settings className="w-10 h-10" />, title: "Mecânica Geral", desc: "Motor, câmbio, suspensão e freios com peças de alta qualidade e garantia total." },
    { icon: <Search className="w-10 h-10" />, title: "Revisão Completa", desc: "Check-up minucioso de todos os sistemas para garantir sua segurança e performance." },
    { icon: <CheckCircle2 className="w-10 h-10" />, title: "Injeção Eletrônica", desc: "Limpeza de bicos, sensores e otimização completa do consumo e potência." },
  ];

  return (
    <section id="services" className="py-32 px-6 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-vibrant/5 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 uppercase">
            SERVIÇOS <span className="text-brand-yellow">VISUAIS E PRECISOS</span>
          </h2>
          <p className="text-white/60 max-w-3xl mx-auto text-xl font-medium">
            Tecnologia automotiva de ponta para garantir que seu veículo rode com máxima segurança e eficiência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="glass-dark p-10 rounded-[40px] border-white/5 hover:border-brand-yellow/30 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="text-brand-yellow mb-8 group-hover:scale-110 transition-transform duration-500 relative z-10">
                {s.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight relative z-10">{s.title}</h3>
              <p className="text-white/50 leading-relaxed font-medium relative z-10">{s.desc}</p>
              
              <div className="mt-8 flex items-center gap-2 text-brand-yellow font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 relative z-10">
                Saiba Mais <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
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
    { name: "Marcos Souza", text: "Diagnóstico preciso e rápido. Resolveram um problema que outras oficinas não conseguiam.", rating: 5 },
    { name: "Ana Paula", text: "Ambiente extremamente limpo e organizado. Transparência total no orçamento.", rating: 5 },
  ];

  return (
    <section id="reviews" className="py-24 px-6 bg-brand-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 bg-brand-yellow/10 text-brand-yellow px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-current" />
              <span className="font-black text-sm uppercase tracking-widest">4.9/5 no Google</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
              O QUE DIZEM <br />
              <span className="text-brand-yellow italic">NOSSOS CLIENTES</span>
            </h2>
          </div>
          <div className="hidden md:flex gap-4">
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white/20">
              <ChevronRight className="w-8 h-8 rotate-180" />
            </div>
            <div className="w-16 h-16 rounded-full border border-brand-yellow/50 flex items-center justify-center text-brand-yellow">
              <ChevronRight className="w-8 h-8" />
            </div>
          </div>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-12 snap-x no-scrollbar">
          {reviews.map((r, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="min-w-[320px] md:min-w-[400px] glass-dark p-10 rounded-[40px] border-white/5 snap-center relative group"
            >
              <div className="absolute top-10 right-10 text-brand-yellow/10 group-hover:text-brand-yellow/20 transition-colors">
                <MessageCircle size={60} />
              </div>
              <div className="flex gap-1 mb-8 text-brand-yellow">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-xl italic text-white/80 mb-10 leading-relaxed font-medium">"{r.text}"</p>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-brand-yellow text-brand-dark flex items-center justify-center font-black text-xl shadow-lg">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-black text-lg uppercase tracking-tight">{r.name}</div>
                  <div className="text-brand-yellow text-xs font-bold uppercase tracking-widest">Cliente Satisfeito</div>
                </div>
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
    <section id="contact" className="py-32 px-6 bg-brand-dark relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-yellow/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-8xl font-black tracking-tighter mb-10 uppercase leading-[0.9]">
                VENHA NOS <br />
                <span className="text-brand-yellow italic">VISITAR</span>
              </h2>
              <div className="space-y-10 mb-12">
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 rounded-2xl bg-brand-yellow/10 flex items-center justify-center text-brand-yellow shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <MapPin size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">Localização</h3>
                    <p className="text-white/60 text-lg font-medium leading-relaxed">Rua Maria Antônia Niero, 120 - Santo Antônio, Osasco - SP, 06130-010</p>
                  </div>
                </div>
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 rounded-2xl bg-brand-yellow/10 flex items-center justify-center text-brand-yellow shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <Phone size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">Contato Direto</h3>
                    <p className="text-white/60 text-lg font-medium">(11) 3431-5654</p>
                  </div>
                </div>
              </div>
              <motion.a 
                href="https://www.google.com/maps/place/Rpm+Car+Autocenter/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, x: 10 }}
                className="inline-flex items-center gap-4 bg-white/5 hover:bg-white/10 px-10 py-5 rounded-full font-black text-lg transition-all border border-white/10 uppercase tracking-widest"
              >
                ABRIR NO GOOGLE MAPS
                <ArrowRight className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[60px] overflow-hidden h-[600px] border border-white/10 shadow-2xl relative group"
          >
            <div className="absolute inset-0 border-[20px] border-brand-dark/50 z-10 pointer-events-none rounded-[60px]" />
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.447548772397!2d-46.7995486237616!3d-23.55236796125026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf016000000001%3A0x63318d9d784a968!2sRpm%20Car%20Autocenter!5e0!3m2!1spt-BR!2sbr!4v1710810000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125 group-hover:grayscale-0 transition-all duration-1000"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-24 px-6 border-t border-white/5 bg-brand-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-10">
              <img 
                src="/logo.png" 
                alt="RPM CAR Logo" 
                className="h-12 w-auto object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = `
                    <div class="flex items-center gap-2">
                      <span class="text-2xl font-black tracking-tighter uppercase">
                        RPM CAR <span class="text-brand-yellow">AUTOCENTER</span>
                      </span>
                    </div>
                  `;
                }}
              />
            </div>
            <p className="text-white/40 max-w-sm mb-10 text-lg font-medium leading-relaxed">
              Referência em serviços automotivos em Osasco há mais de 13 anos. Atendimento especializado, humano e transparente.
            </p>
            <div className="flex gap-6">
              <motion.a 
                whileHover={{ y: -5, backgroundColor: "#FACC15", color: "#0A1F44" }}
                href="https://instagram.com/rpmcar_autocenter" 
                className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center transition-all duration-300 border border-white/10"
              >
                <Instagram size={24} />
              </motion.a>
              <motion.a 
                whileHover={{ y: -5, backgroundColor: "#FACC15", color: "#0A1F44" }}
                href="#" 
                className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center transition-all duration-300 border border-white/10"
              >
                <Facebook size={24} />
              </motion.a>
            </div>
          </div>
          <div>
            <h4 className="font-black mb-8 uppercase tracking-[0.2em] text-xs text-brand-yellow">Navegação</h4>
            <ul className="space-y-5 text-white/50 font-bold">
              <li><a href="#home" className="hover:text-brand-yellow transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-brand-yellow transition-colors">Sobre Nós</a></li>
              <li><a href="#services" className="hover:text-brand-yellow transition-colors">Serviços</a></li>
              <li><a href="#reviews" className="hover:text-brand-yellow transition-colors">Avaliações</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black mb-8 uppercase tracking-[0.2em] text-xs text-brand-yellow">Horário de Funcionamento</h4>
            <ul className="space-y-5 text-white/50 font-bold">
              <li className="flex justify-between"><span>Seg - Sex:</span> <span className="text-white">08:00 - 18:00</span></li>
              <li className="flex justify-between"><span>Sábado:</span> <span className="text-white">08:00 - 13:00</span></li>
              <li className="flex justify-between"><span>Domingo:</span> <span className="text-brand-yellow">Fechado</span></li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/20 font-bold uppercase tracking-widest">
          <p>© 2024 Rpm Car Autocenter. Todos os direitos reservados.</p>
          <p className="flex items-center gap-2">Desenvolvido com <Heart size={14} className="text-brand-yellow fill-current" /> em Osasco</p>
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
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(250,204,21,0.5)]"
    >
      <MessageCircle className="w-9 h-9 text-brand-dark fill-current" />
      <motion.div 
        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-brand-yellow rounded-full -z-10"
      />
    </motion.a>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-yellow selection:text-brand-dark">
      <Navbar />
      <main>
        <Hero />
        <Reviews />
        
        {/* CTA Banner */}
        <div className="bg-brand-primary py-8 overflow-hidden whitespace-nowrap border-y border-white/5 shadow-2xl relative z-10">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-16 items-center"
          >
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 text-2xl font-black uppercase tracking-tighter text-white/90">
                <span className="flex items-center gap-2"><CheckCircle2 className="text-brand-yellow" /> Transparência Total</span>
                <span className="flex items-center gap-2"><Heart className="text-brand-yellow" /> Oficina Amiga da Mulher</span>
                <span className="flex items-center gap-2"><Award className="text-brand-yellow" /> Inclusividade LGBTQ+</span>
                <span className="flex items-center gap-2"><Zap className="text-brand-yellow" /> 13 Anos de Experiência</span>
              </div>
            ))}
          </motion.div>
        </div>

        <Gallery />
        <Differentials />
        <Services />
        
        {/* Final CTA */}
        <section className="py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]" />
          <div className="max-w-5xl mx-auto glass-dark p-12 md:p-24 rounded-[60px] text-center border-brand-yellow/10 relative z-10">
            <h2 className="text-4xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] uppercase">
              Pare de arriscar seu carro. <br />
              <span className="text-brand-yellow italic">Fale com quem entende.</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto font-medium">
              Agende agora sua revisão e experimente o padrão RPM CAR de atendimento premium.
            </p>
            <motion.a 
              href="https://wa.me/551134315654"
              whileHover={{ scale: 1.05 }}
              animate={{ boxShadow: ["0 0 0px rgba(250, 204, 21, 0)", "0 0 50px rgba(250, 204, 21, 0.4)", "0 0 0px rgba(250, 204, 21, 0)"] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center gap-4 bg-brand-yellow text-brand-dark px-16 py-6 rounded-full font-black text-2xl shadow-2xl"
            >
              CHAMAR NO WHATSAPP AGORA
              <ArrowRight className="w-8 h-8" />
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
