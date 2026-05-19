import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  ArrowLeft, 
  ChevronDown, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Brain, 
  TrendingUp, 
  Mail,
  Play,
  CheckCircle2,
  Lock,
  Globe,
  Cpu
} from 'lucide-react';

const VideoBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover opacity-60 scale-105"
      >
        <source src="https://www.gstatic.com/aistudio/starter-apps/type-motion/smoke_v2.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90" />
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
    </div>
  );
};

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`relative z-10 px-6 py-24 md:py-32 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

const App: React.FC = () => {
      const containerRef = useRef<HTMLDivElement>(null);
      const contentRef = useRef<HTMLDivElement>(null);
      
      const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
      });

      const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 15]);
      const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
      const heroBlur = useTransform(scrollYProgress, [0, 0.1], ["blur(0px)", "blur(10px)"]);

      const scrollToContent = () => {
        contentRef.current?.scrollIntoView({ behavior: 'smooth' });
      };

      return (
    <div ref={containerRef} className="bg-black text-white font-sans rtl selection:bg-white selection:text-black min-h-screen">
      <VideoBackground />

      {/* Hero Section */}
      <section className="relative h-[200vh] z-20">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <motion.div 
            style={{ scale: heroScale, opacity: heroOpacity, filter: heroBlur }}
            className="text-center px-4"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-5xl md:text-9xl font-extrabold font-display tracking-tighter text-glow"
            >
              ברוכים הבאים <br/> לעולם החדש
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="mt-8 text-xl md:text-3xl text-stone-300 font-light max-w-3xl mx-auto leading-relaxed"
            >
              העתיד של העסק שלך מתחיל כאן. <br className="hidden md:block" /> שיטה אחת פשוטה להפוך בינה מלאכותית למכונה של לקוחות.
            </motion.p>
          </motion.div>
          
          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            transition={{ delay: 2, duration: 1 }}
            onClick={scrollToContent}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white cursor-pointer"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] font-medium">גללו למטה</span>
            <ChevronDown className="animate-bounce" size={20} />
          </motion.button>
        </div>
      </section>

      {/* כאן ימוקם האתר החדש בהמשך */}
      <div ref={contentRef} className="relative z-20 min-h-screen bg-zinc-900 flex items-center justify-center">
        <h2 className="text-4xl text-white font-display">כאן נשלב את האתר החדש עבור בינה מלאכותית זה פשוט</h2>
      </div>

    </div>
  );
};

export default App;
