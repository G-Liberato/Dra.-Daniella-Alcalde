
import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  CheckCircle, 
  Sparkles, 
  MessageCircle, 
  Star, 
  Calendar, 
  Search, 
  ShieldCheck,
  X
} from 'lucide-react';
import { EXPERT_DATA, IMAGES } from './constants.ts';
import Button from './components/Button.tsx';
import SectionTitle from './components/SectionTitle.tsx';

const App: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return null;

  return (
    <div className="min-h-screen bg-[#050505] opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-end overflow-hidden pb-16 pt-12">
        <div className="absolute inset-0 z-0 overflow-hidden">
           <img 
            src={IMAGES.hero} 
            alt={EXPERT_DATA.name}
            className="w-full h-full object-cover object-top brightness-[0.7] scale-100 md:scale-105 transition-transform duration-[2000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-4xl px-6 text-center">
          <h1 className="text-4xl md:text-7xl font-serif mb-6 leading-tight tracking-tight">
            Eu sou <span className="gold-gradient">{EXPERT_DATA.name}</span>, <br className="hidden md:block"/>
            Dentista em São Paulo
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Especialista em transformar sorrisos e carreiras através da arte e ciência das Facetas em Resina Composta.
          </p>
          
          <div className="flex flex-col items-center gap-4">
            <Button href={EXPERT_DATA.whatsappUrl} className="w-full max-w-xs md:max-w-md py-5 text-lg">
              Agendar primeira consulta gratuita
            </Button>
            <p className="text-xs md:text-sm text-gray-400 flex items-center gap-2 tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Resposta rápida • Sem compromisso
            </p>
          </div>
        </div>
      </section>

      {/* 2. QUEM SOU EU */}
      <section className="py-24 px-6 bg-[#050505] border-y border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-4 gold-bg opacity-5 rounded-2xl blur-2xl"></div>
              <img 
                src={IMAGES.authority} 
                alt="Dra Daniella Alcalde" 
                className="relative rounded-2xl w-full gold-border shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 space-y-8">
            <SectionTitle title="A Arte de Sorrir" subtitle="Expertise & Autoridade" />
            <p className="text-gray-300 leading-relaxed text-lg md:text-xl font-light">
              Referência na técnica de facetas em resina composta, unindo precisão clínica a um olhar artístico apurado.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg italic border-l-2 border-[#d4af37] pl-6 py-2">
              "Meu compromisso é com a verdade do seu sorriso. A técnica deve sempre servir à sua naturalidade."
            </p>
            <ul className="space-y-5">
              {["Reabilitação Estética", "Naturalidade e Bio-mimetismo", "Atendimento VIP", "Referência SP e Exterior"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 group">
                  <div className="gold-bg p-1 rounded-full"><CheckCircle className="text-black w-4 h-4" /></div>
                  <span className="text-gray-200 font-medium tracking-wide">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. GALERIA */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Resultados Impressionantes" subtitle="Transformações" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-6">
            {IMAGES.gallery.map((img, idx) => (
              <div 
                key={idx} 
                className="relative aspect-[4/5] overflow-hidden rounded-xl gold-border cursor-pointer group shadow-lg"
                onClick={() => setSelectedImage(img)}
              >
                <img src={img} alt="Resultado" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <Search className="text-[#d4af37] w-8 h-8" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DIFERENCIAIS */}
      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Segurança & Conforto" subtitle="Diferenciais" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Search />, title: "Avaliação Honesta", desc: "Análise criteriosa da sua saúde bucal antes da estética." },
              { icon: <MessageCircle />, title: "Atendimento Claro", desc: "Você entende exatamente cada passo da sua transformação." },
              { icon: <Sparkles />, title: "Estética Avançada", desc: "Resinas de última geração que mimetizam o brilho natural." }
            ].map((card, idx) => (
              <div key={idx} className="glass p-10 rounded-3xl border border-white/5 hover:border-[#d4af37]/30 transition-all duration-500">
                <div className="mb-6 text-[#d4af37]">{React.cloneElement(card.icon as React.ReactElement, { size: 36 })}</div>
                <h3 className="text-2xl font-serif mb-4 text-white">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed font-light">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 px-6 text-center border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-serif mb-10 leading-[1.1]">
            O sorriso dos seus sonhos está a um <span className="gold-gradient italic">clique.</span>
          </h2>
          <Button href={EXPERT_DATA.whatsappUrl} className="w-full max-w-md py-7 text-xl shadow-2xl">
            Agendar Avaliação Gratuita
          </Button>
          <div className="mt-12 opacity-60 flex justify-center gap-4 items-center">
            <Instagram size={20} />
            <span className="text-sm uppercase tracking-widest">@dra.daniellaalcalde</span>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="py-16 px-6 bg-[#020202] border-t border-white/5 text-center">
        <h3 className="text-2xl font-serif gold-gradient mb-4">{EXPERT_DATA.name}</h3>
        <p className="text-gray-300 font-medium mb-2">{EXPERT_DATA.fullAddress}</p>
        <p className="text-gray-600 text-sm mb-8">São Paulo - SP</p>
        <p className="text-gray-700 text-[10px] uppercase tracking-widest">© {new Date().getFullYear()} Design Premium.</p>
      </footer>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center p-4 backdrop-blur-xl" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-10 right-10 text-white"><X size={48} /></button>
          <img src={selectedImage} alt="Preview" className="max-w-full max-h-[85vh] object-contain rounded-lg gold-border" />
        </div>
      )}

      {/* WHATSAPP FLOAT */}
      <a href={EXPERT_DATA.whatsappUrl} target="_blank" className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-2xl md:hidden animate-bounce">
        <MessageCircle size={28} fill="currentColor" />
      </a>
    </div>
  );
};

export default App;
