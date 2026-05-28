/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useMemo, useCallback, forwardRef, useImperativeHandle } from 'react';
import { motion, AnimatePresence, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { X, Sparkles, Star, RotateCcw, Crown } from 'lucide-react';

// --- MOCK DATA: 20 APPLICANTS ---
const APPLICANTS = [
  { id: 'a2', name: 'Maya L.', role: 'Designer', location: 'London, UK', rating: 4.8, bio: 'Minimalist approach to SaaS design.', skills: ['Figma', 'Prototyping'], image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800', type: 'talent', isPremium: false },
  { id: 'a3', name: 'Kevin France', role: 'Fullstack Dev', location: 'Paris, FR', rating: 4.9, bio: 'Cloud-native expert building scalable apps.', skills: ['Next.js', 'NestJS'], image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800', type: 'talent', isPremium: true },
  { id: 'a4', name: 'Sarah Jenkins', role: 'Data Scientist', location: 'Boston, MA', rating: 4.7, bio: 'Transforming data into business intelligence.', skills: ['Python', 'AI', 'ML'], image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800', type: 'talent', isPremium: false },
  { id: 'a5', name: 'Leo Zhang', role: 'Mobile Engineer', location: 'Seattle, WA', rating: 4.9, bio: 'Native iOS performance and SwiftUI specialist.', skills: ['Swift', 'Kotlin'], image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800', type: 'talent', isPremium: true },
  { id: 'a6', name: 'Elena Rodriguez', role: 'Growth Lead', location: 'Madrid, ES', rating: 4.6, bio: 'High-velocity user acquisition strategies.', skills: ['SEO', 'Ads'], image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800', type: 'talent', isPremium: false },
  { id: 'a7', name: 'James Wilson', role: 'Cybersecurity', location: 'Toronto, CA', rating: 4.9, bio: 'Protecting digital assets from elite threats.', skills: ['Security', 'Linux'], image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800', type: 'talent', isPremium: true },
  { id: 'a8', name: 'Nina Wagner', role: 'Legal Tech', location: 'Vienna, AT', rating: 4.7, bio: 'Smart contract automation for law firms.', skills: ['Law', 'Web3'], image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=800', type: 'talent', isPremium: false },
  { id: 'a9', name: 'Ali Mansour', role: 'Cloud Architect', location: 'Dubai, UAE', rating: 4.8, bio: 'Designing resilient distributed systems.', skills: ['Azure', 'K8s'], image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800', type: 'talent', isPremium: false },
  { id: 'a10', name: 'Emma Watson', role: 'UX Researcher', location: 'Sydney, AU', rating: 5.0, bio: 'Human-centric product behavioral analysis.', skills: ['Research', 'Testing'], image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800', type: 'talent', isPremium: true },
  { id: 'a11', name: 'Tom Mueller', role: 'Backend Eng', location: 'Berlin, DE', rating: 4.8, bio: 'Building microservices in Rust and Go.', skills: ['Go', 'Rust'], image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=800', type: 'talent', isPremium: false },
  { id: 'a12', name: 'Chloe Dubois', role: 'Creative Dir', location: 'Paris, FR', rating: 4.9, bio: 'Visual luxury storytelling for global brands.', skills: ['Art', 'Branding'], image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800', type: 'talent', isPremium: true },
  { id: 'a13', name: 'David Kim', role: 'Web3 Architect', location: 'Seoul, KR', rating: 4.7, bio: 'DeFi protocol design and security.', skills: ['Solidity', 'dApps'], image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800', type: 'talent', isPremium: false },
  { id: 'a14', name: 'Ami Patel', role: 'Product Lead', location: 'Mumbai, IN', rating: 4.6, bio: 'Bridging engineering and user satisfaction.', skills: ['Agile', 'Jira'], image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800', type: 'talent', isPremium: false },
  { id: 'a15', name: 'Yuki Sato', role: 'Hardware Eng', location: 'Tokyo, JP', rating: 4.9, bio: 'Embedded systems for robotics.', skills: ['IoT', 'Circuits'], image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800', type: 'talent', isPremium: true },
  { id: 'a16', name: 'Sophie L.', role: 'iOS Specialist', location: 'Lyon, FR', rating: 4.8, bio: 'Expert in SwiftUI performance.', skills: ['SwiftUI', 'Metal'], image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800', type: 'talent', isPremium: false },
  { id: 'a17', name: 'Marcus T.', role: 'Finance Analyst', location: 'Chicago, IL', rating: 4.7, bio: 'High-frequency risk modeling.', skills: ['Fintech', 'SQL'], image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800', type: 'talent', isPremium: false },
  { id: 'a18', name: 'Isabella R.', role: 'Copywriter', location: 'Milan, IT', rating: 4.9, bio: 'Conversion focused brand strategy.', skills: ['Copy', 'Sales'], image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800', type: 'talent', isPremium: true },
  { id: 'a19', name: 'Oscar B.', role: 'Game Dev', location: 'Oslo, NO', rating: 4.8, bio: 'Shader and physics programming.', skills: ['Unreal', 'C#'], image: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=800', type: 'talent', isPremium: false },
  { id: 'a20', name: 'Lia H.', role: 'Health Tech', location: 'Mexico City, MX', rating: 4.7, bio: 'Patient data AI automation.', skills: ['Health', 'Python'], image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800', type: 'talent', isPremium: false },
];

// --- MOCK DATA: 20 COMPANIES ---
const COMPANIES = [
  { id: 'c1', name: 'StackForge', role: 'Software Agency', location: 'Silicon Valley', rating: 5.0, bio: 'Forging high-scale cloud solutions.', skills: ['Cloud', 'AI', 'Security'], image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800', type: 'business', isPremium: true },
  { id: 'c2', name: 'Para Intl.', role: 'Global Tech', location: 'London, UK', rating: 4.9, bio: 'Smart intent matching platforms.', skills: ['Scale', 'Web3'], image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800', type: 'business', isPremium: true },
  { id: 'c3', name: 'NeuroSystems', role: 'AI Research', location: 'Toronto, CA', rating: 4.8, bio: 'Industrial automation neural networks.', skills: ['Vision', 'ML'], image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800', type: 'business' },
  { id: 'c4', name: 'GreenGrid', role: 'Sustainability', location: 'Copenhagen, DK', rating: 4.7, bio: 'Renewable energy grids.', skills: ['Solar', 'Blockchain'], image: 'https://images.unsplash.com/photo-1466611653911-95282ee3656b?w=800', type: 'business' },
  { id: 'c5', name: 'Nexus Finance', role: 'Fintech', location: 'New York, NY', rating: 5.0, bio: 'Market democratization through DeFi.', skills: ['Finance', 'Banking'], image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800', type: 'business', isPremium: true },
  { id: 'c6', name: 'Vibe Creative', role: 'Design Studio', location: 'Barcelona, ES', rating: 4.9, bio: 'Visual identities for tech founders.', skills: ['UX', 'Art'], image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800', type: 'business' },
  { id: 'c7', name: 'ShieldSafe', role: 'Security', location: 'Tel Aviv, IL', rating: 4.8, bio: 'Threat prevention systems.', skills: ['Encryption', 'Cloud'], image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800', type: 'business', isPremium: true },
  { id: 'c8', name: 'MedTech Labs', role: 'Healthcare', location: 'Zurich, CH', rating: 4.7, bio: 'AI diagnostics for medical precision.', skills: ['Data', 'Bio'], image: 'https://images.unsplash.com/photo-1538108176634-64558077533e?w=800', type: 'business' },
  { id: 'c9', name: 'RocketScale', role: 'Venture Capital', location: 'Austin, TX', rating: 4.9, bio: 'Investing in future builders.', skills: ['VC', 'Startups'], image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800', type: 'business', isPremium: true },
  { id: 'c10', name: 'UrbanAuto', role: 'Automotive', location: 'Munich, DE', rating: 4.6, bio: 'Self-driving tech for smart cities.', skills: ['Auto', 'Lidar'], image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800', type: 'business' },
  { id: 'c11', name: 'CloudPeak', role: 'Hosting', location: 'Singapore, SG', rating: 4.8, bio: 'Zero-latency edge computing.', skills: ['Cloud', 'Scale'], image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800', type: 'business' },
  { id: 'c12', name: 'EduForge', role: 'EdTech', location: 'Helsinki, FI', rating: 4.7, bio: 'Remote learning certifications.', skills: ['LMS', 'Video'], image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800', type: 'business' },
  { id: 'c13', name: 'FlowLogistics', role: 'Freight', location: 'Dubai, UAE', rating: 4.5, bio: 'AI freight trade optimization.', skills: ['Cargo', 'IoT'], image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800', type: 'business' },
  { id: 'c14', name: 'RetailRadar', role: 'E-commerce', location: 'Amsterdam, NL', rating: 4.8, bio: 'Predictive inventory for retail.', skills: ['Retail', 'Data'], image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800', type: 'business', isPremium: true },
  { id: 'c15', name: 'CyberCore', role: 'Hardware', location: 'Tokyo, JP', rating: 5.0, bio: 'Fastest AI compute hardware.', skills: ['Chips', 'R&D'], image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800', type: 'business', isPremium: true },
  { id: 'c16', name: 'AquaStream', role: 'AgriTech', location: 'Tel Aviv, IL', rating: 4.7, bio: 'Vertical farming precision tech.', skills: ['Agri', 'Sensors'], image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800', type: 'business' },
  { id: 'c17', name: 'PulseSocial', role: 'Social', location: 'San Diego, CA', rating: 4.4, bio: 'Next-gen interaction engines.', skills: ['Content', 'Ads'], image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800', type: 'business' },
  { id: 'c18', name: 'Zenith Space', role: 'Aerospace', location: 'FL, USA', rating: 5.0, bio: 'Logistics for orbital enterprises.', skills: ['Rocket', 'Space'], image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800', type: 'business', isPremium: true },
  { id: 'c19', name: 'BlockTrust', role: 'Identity', location: 'Geneva, CH', rating: 4.9, bio: 'Self-sovereign digital IDs.', skills: ['DAO', 'Identity'], image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800', type: 'business' },
  { id: 'c20', name: 'BuildStream', role: 'PropTech', location: 'Toronto, CA', rating: 4.6, bio: 'Automation for property dev.', skills: ['Estate', 'SaaS'], image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800', type: 'business' },
];

// --- STYLED CARD UI ---
const CardUI = ({ item, mode, isBackCard = false }: any) => {
  const isTalent = item.type === 'talent';
  return (
    <div className={`w-full h-full bg-white rounded-[44px] shadow-2xl border flex flex-col overflow-hidden transition-all duration-500 ${
      item.isPremium ? 'border-[#FF7A00]/30 ring-4 ring-[#FF7A00]/5' : 'border-slate-100'
    }`}>
      <div className="relative h-[340px] pointer-events-none overflow-hidden">
        <img src={item.image} className="w-full h-full object-cover" alt="" />
        <div className="absolute top-6 left-6 flex gap-2">
            <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-2xl flex items-center gap-1.5 shadow-sm border border-white/50 text-[#0D1B2A]">
              <span className="text-[11px] font-[900]">{item.rating}</span>
              <Star size={10} className={`fill-current ${mode === 'people' ? 'text-[#FF7A00]' : 'text-[#0EA5A5]'}`} />
            </div>
            {!isBackCard && (
               <div className={`px-3 py-1.5 rounded-2xl text-[8px] font-black uppercase tracking-widest text-white shadow-lg flex items-center gap-1.5 backdrop-blur-md ${
                isTalent ? 'bg-[#0EA5A5]/90' : 'bg-[#FF7A00]/90'
              }`}>
                  {isTalent ? 'Talent' : 'Enterprise'}
              </div>
            )}
        </div>
        {item.isPremium && !isBackCard && (
           <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md p-2 rounded-xl border border-white shadow-sm text-[#FF7A00]">
              <Crown size={14} fill="currentColor" />
           </div>
        )}
      </div>
      <div className="p-8 flex flex-col gap-2">
        <h3 className="text-2xl font-[900] text-[#0D1B2A] tracking-tighter leading-none italic uppercase truncate">{item.name}</h3>
        <p className={`${isTalent ? 'text-[#0EA5A5]' : 'text-[#FF7A00]'} font-black text-[11px] uppercase tracking-widest truncate leading-none mt-1`}>{item.role}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {item.skills.slice(0, 3).map((skill: string) => (
            <span key={skill} className="px-3 py-1 bg-[#F8FBFC] text-[#0D1B2A] rounded-full text-[9px] font-black uppercase border border-slate-100">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- MAIN SWIPE COMPONENT ---
const SwipeFeed = forwardRef(({ mode, onMatch, onExpand, myIdentity = 'personal' }: any, ref) => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const controls = useAnimation();
  const x = useMotionValue(0);
  
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const scale = useTransform(x, [-150, 0, 150], [1.05, 1, 1.05]);

  const currentList = useMemo(() => (mode === 'people' ? APPLICANTS : COMPANIES), [mode]);
  const item = currentList[index];

  // --- RE-ENGINEERED "PEEK" LOGIC ---
  const getStackStyle = (stackIndex: number) => {
    const reverseIndex = stackIndex + 1;
    const isEven = reverseIndex % 2 === 0;
    
    const rotation = isEven ? reverseIndex * 6 : reverseIndex * -6; 
    const xOffset = isEven ? reverseIndex * 18 : reverseIndex * -18; 
    const yOffset = reverseIndex * -10; 
    const scaleDown = 1 - (reverseIndex * 0.05);

    return {
      rotate: rotation,
      x: xOffset,
      y: yOffset,
      scale: scaleDown,
      zIndex: 10 - reverseIndex,
      opacity: 1 - (reverseIndex * 0.15),
      filter: `blur(${reverseIndex * 0.5}px)`
    };
  };

  const handleAction = useCallback(async (direction: 'left' | 'right') => {
    if (!item || isAnimating) return;
    setIsAnimating(true);
    await controls.start({
      x: direction === 'right' ? 700 : -700,
      opacity: 0,
      rotate: direction === 'right' ? 35 : -35,
      transition: { type: "spring", stiffness: 200, damping: 30, velocity: 2 }
    });
    if (direction === 'right') onMatch({ ...item, swipedAs: myIdentity });
    setIndex(prev => prev + 1);
    controls.set({ x: 0, opacity: 1, rotate: 0, scale: 1 });
    x.set(0);
    setIsAnimating(false);
  }, [item, isAnimating, controls, onMatch, x, myIdentity]);

  useImperativeHandle(ref, () => ({
    swipeRight: () => handleAction('right'),
    swipeLeft: () => handleAction('left')
  }));

  return (
    <div className="hidden relative w-full max-w-[360px] h-[610px] flex flex-col items-center">
      <div className="relative w-full h-[520px] perspective-1000">
        <AnimatePresence mode="popLayout">
          {item ? (
            <div className="relative w-full h-full" key="deck-container">
              {currentList.slice(index + 1, index + 5).map((bgItem, i) => (
                <motion.div key={bgItem.id} initial={getStackStyle(i)} animate={getStackStyle(i)} className="absolute inset-0 pointer-events-none">
                   <CardUI item={bgItem} mode={mode} isBackCard={true} />
                </motion.div>
              ))}
              <motion.div
                key={item.id}
                style={{ x, rotate, scale, willChange: "transform" }}
                animate={controls}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_: any, info: any) => {
                  if (info.offset.x > 120) handleAction('right');
                  else if (info.offset.x < -120) handleAction('left');
                  else controls.start({ x: 0, rotate: 0, transition: { type: "spring", stiffness: 400, damping: 25 } });
                }}
                // FIXED: Defensive optional chaining to prevent "onExpand is not a function" error
                onTap={() => onExpand?.(item)}
                className="absolute inset-0 z-20 cursor-grab active:cursor-grabbing"
              >
                 <CardUI item={item} mode={mode} myIdentity={myIdentity} />
              </motion.div>
            </div>
          ) : (
            <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 flex flex-col items-center justify-center text-center p-12 bg-white rounded-[44px] border-2 border-dashed border-slate-200 backdrop-blur-md">
              <RotateCcw size={40} className="text-[#0EA5A5] mb-4 cursor-pointer hover:rotate-180 transition-all" onClick={() => setIndex(0)} />
              <p className="font-black uppercase tracking-widest text-[10px] text-slate-400">Forge Cycle Complete</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {item && (
        <div className="flex justify-center items-center gap-4 w-full px-4 mt-12 z-30">
          <button onClick={() => handleAction('left')} className="flex-1 bg-white h-14 rounded-[22px] border border-slate-200 flex items-center justify-center gap-2 text-[#0D1B2A] font-black text-xs uppercase tracking-widest shadow-xl active:scale-75 transition-all">
            <X size={18} strokeWidth={3} /> Pass
          </button>
          <button onClick={() => handleAction('right')} className={`flex-1 h-14 rounded-[22px] border-4 border-white flex items-center justify-center gap-2 text-white font-black text-xs uppercase tracking-widest shadow-2xl active:scale-75 transition-all ${myIdentity === 'personal' ? 'bg-[#0EA5A5]' : 'bg-[#FF7A00]'}`}>
            <Sparkles size={18} fill="currentColor" /> Pair
          </button>
        </div>
      )}
    </div>
  );
});

SwipeFeed.displayName = 'SwipeFeed';
export default SwipeFeed;