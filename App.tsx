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
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroBlur = useTransform(scrollYProgress, [0, 0.1], ["blur(0px)", "blur(10px)"]);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const ghlLink = "https://checkout.ghl.com/your-product-link"; // User should replace this

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
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] font-medium">גללו למטה</span>
            <ChevronDown className="animate-bounce" size={20} />
          </motion.div>
        </div>
      </section>

      {/* Subtle Subtitle / Objection Handler */}
      <Section className="text-center flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="max-w-4xl"
        >
          <h2 className="text-4xl md:text-7xl font-bold font-display leading-[1.1] mb-12">
            "מצאתי דרך לעשות את זה פשוט. <br/>
            <span className="text-stone-500 italic">בלי השפה המסובכת של ה'מומחים'."</span>
          </h2>
          <p className="text-lg md:text-xl text-stone-400 leading-relaxed">
            רוב האנשים חושבים ש-AI זה מסובך. שהם צריכים להיות מתכנתים או מהנדסי פרומפטים. המציאות היא שונה לגמרי. זה הכלי הכי פשוט שהיה לנו אי פעם לייצור לקוחות — אם יודעים איך לזקק אותו.
          </p>
        </motion.div>
      </Section>

      {/* DNA Section - Built with AI */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-widest text-stone-300 mb-6 font-display">
              <Sparkles size={14} /> ה-DNA שלנו
            </div>
            <h2 className="text-4xl md:text-6xl font-bold font-display mb-6">
              האתר הזה? <br/>
              נבנה ב-100% על ידי בינה מלאכותית.
            </h2>
            <p className="text-lg text-stone-400 mb-8 leading-relaxed">
              אנחנו לא רק מדברים על הכלים החדשים — אנחנו חיים אותם. כל אלמנט באתר הזה, מהקוד ועד לעיצוב, הוא הוכחה חיה לכוח של השיטה שאני מלמד.
            </p>
            <ul className="space-y-4">
              {[
                "ניתוח דאטה בזמן אמת",
                "אוטומציות שיווקיות חכמות",
                "קריאייטיב שנוצר במיוחד עבורך",
                "מינוף מקסימלי במינימום מאמץ"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-stone-300">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 p-1 group"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/5 opacity-50 group-hover:opacity-80 transition-opacity" />
             <div className="w-full h-full bg-zinc-900 rounded-[calc(1.5rem-4px)] flex items-center justify-center overflow-hidden">
                <Cpu className="w-32 h-32 text-stone-800 animate-pulse" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                   <div className="w-1/2 h-1 bg-white/5 rounded-full overflow-hidden">
                     <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="h-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
                     />
                   </div>
                   <span className="text-[10px] uppercase tracking-[0.5em] text-stone-600 font-bold">Processing Strategic Logic</span>
                </div>
             </div>
          </motion.div>
        </div>
      </Section>

      {/* The Product - First Lesson */}
      <Section className="bg-zinc-950/50 backdrop-blur-md rounded-[3rem] border border-white/5 my-32">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-bold font-display mb-8">
            איך לייצר לקוחות באמצעות הבינה המלאכותית
          </h2>
          <p className="text-xl md:text-2xl text-stone-400 mb-12">
            הזדמנות חד פעמית: השיעור הראשון מהקורס המלא פתוח עכשיו לצפייה ישירה. 
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 text-right mb-16 px-4">
             {[
               { icon: <Zap />, title: "השיטה המהירה", desc: "איך להקים מערך שיווקי תוך פחות מ-60 דקות." },
               { icon: <Globe />, title: "הזדמנות גלובלית", desc: "למה דווקא עכשיו זה הזמן הכי טוב להיכנס לתחום." },
               { icon: <ShieldCheck />, title: "ביטחון כלכלי", desc: "לבנות מותג שעובד עבורך גם כשאתה ישן." }
             ].map((feature, i) => (
                <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                   <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 text-white">
                      {feature.icon}
                   </div>
                   <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                   <p className="text-stone-500 text-sm leading-relaxed">{feature.desc}</p>
                </div>
             ))}
          </div>

          <motion.a 
            href={ghlLink}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-4 bg-white text-black px-12 py-6 rounded-2xl text-xl font-bold hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all"
          >
            גשו לסרטון הראשון עכשיו <Play size={24} fill="black" />
          </motion.a>
          <p className="mt-6 text-stone-600 text-sm flex items-center justify-center gap-2">
            <Lock size={12} /> רכישה מאובטחת דרך GHL
          </p>
        </div>
      </Section>

      {/* Matanel Section - The Story */}
      <Section>
        <div className="flex flex-col md:flex-row gap-16 items-center">
           <div className="w-full md:w-1/3">
              <div className="aspect-[3/4] bg-stone-900 rounded-3xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
                 {/* Imagine Matanel's photo here */}
                 <div className="absolute inset-0 flex items-center justify-center text-stone-800">
                    <span className="text-6xl font-bold font-display opacity-20">MATANEL</span>
                 </div>
              </div>
           </div>
           <div className="w-full md:w-2/3">
              <h2 className="text-4xl font-bold font-display mb-6">מתנאל — במילים פשוטות</h2>
              <div className="space-y-6 text-xl text-stone-400 leading-relaxed">
                 <p>
                    "אני לא מאמין בקיצורי דרך, אבל אני כן מאמין בכלים שמקצרים את הדרך. המהפכה של ה-AI היא לא על 'להחליף' אותנו, אלא על לתת לנו כוחות על."
                 </p>
                 <p>
                    אחרי שנים בתחום האסטרטגיה והשיווק, זיקקתי את הידע שלי לשיטה אחת פשוטה שכל אחד יכול ליישם. בלי צורך בניסיון קודם, בלי צורך בתקציבי עתק.
                 </p>
              </div>
           </div>
        </div>
      </Section>

      {/* Macro Economic Urgency */}
      <Section className="border-t border-white/10">
         <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-8 text-red-500/80 uppercase tracking-tighter">
               אל תפספסו את הרכבת.
            </h2>
            <div className="space-y-6 text-xl text-stone-400">
               <p>
                  הכלכלה העולמית משנה פנים. מי שילמד לרתום את הבינה המלאכותית היום, יקבע את חוקי המשחק של מחר. זה לא עוד קורס שיווק — זו ההכנה שלכם לעולם החדש.
               </p>
               <p className="font-bold text-white">
                  ההזדמנות הזאת קורית פעם בדור. אל תגידו 'הייתי יכול'. תגידו 'עשיתי'.
               </p>
            </div>
         </div>
      </Section>

      {/* Final CTA */}
      <footer className="relative z-10 pt-24 pb-12 bg-zinc-950 border-t border-white/5">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold font-display mb-8">מוכנים לצאת לדרך?</h3>
            <a 
              href={ghlLink}
              className="inline-block bg-white text-black px-10 py-5 rounded-xl font-bold text-lg hover:bg-stone-200 transition-colors mb-16"
            >
              התחילו את הקורס עכשיו
            </a>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 pt-12 text-stone-600 text-sm">
               <p>© 2026 זיקוק אסטרטגי. כל הזכויות שמורות.</p>
               <div className="flex gap-8">
                  <a href="#" className="hover:text-white transition-colors">תקנון אתר</a>
                  <a href="#" className="hover:text-white transition-colors">מדיניות פרטיות</a>
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default App;
