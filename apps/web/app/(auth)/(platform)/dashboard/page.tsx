/* eslint-disable react-hooks/purity */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
// import { redirect } from 'next/navigation';
// import { getUserFromCookie } from '../../../../src/lib/auth';

// export default async function DashboardPage() {
//   const user = await getUserFromCookie();

//   // ✅ FIX: prevent null crash
//   if (!user || !user.role) {
//     return redirect('/register');
//   }

//   const destination = getDashboardRoute(user);

//   redirect(destination);
// }

// function getDashboardRoute(user: {
//   role: string;
//   currentMode?: string;
// }) {
//   if (isAdmin(user)) {
//     return '/dashboard/admin';
//   }

//   if (user.currentMode === 'BUSINESS') {
//     return '/dashboard/business';
//   }

//   return '/dashboard/personal';
// }

// function isAdmin(user: { role: string }) {
//   return ['ADMIN', 'SUPER_ADMIN'].includes(user.role);
// }

'use client';

import { useState, useRef, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { 
  ArrowLeft, User, Settings, 
  ChevronDown, 
  Building2, Target, Edit, FileText, 
  UploadCloud, X, Check, Trash2, Phone, MapPin, 
  CalendarDays, AtSign, 
  Plus, BadgeCheck, Search, MessageCircle, UserCircle, 
  Users, Sparkles, Mail} from 'lucide-react';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

// --- UTILS ---
const calculateAge = (birthday: string): number => {
  if (!birthday) return 0;
  const ageDifMs = Date.now() - new Date(birthday).getTime();
  return Math.abs(new Date(ageDifMs).getUTCFullYear() - 1970);
};

// --- SCHEMA & DATA ---
type JobListing = { id: string; title: string; location: string; };
type Identity = {
  id: string; 
  name: string; 
  username: string; 
  bio: string;
  email: string;
  isEmailVerified: boolean;
  type: 'personal' | 'business'; 
  phone: string; 
  location: string;
  birthDate: string; 
  lastUsernameChange: string; 
  cvName?: string;
  listings?: JobListing[];
};

const INITIAL_ENTITIES: Identity[] = [
  { 
    id: '1', name: 'Kevin France', username: 'kevinfrance', bio: 'Senior UI Architect & Cloud Designer', 
    email: 'kevin@parapair.com', isEmailVerified: true,
    type: 'personal', phone: '+63 912 345 6789', location: 'Manila, PH', birthDate: '1995-06-15',
    lastUsernameChange: '2023-01-01', cvName: 'CV_2024_Lead.pdf' 
  },
  { 
    id: '2', name: 'StackForge Agency', username: 'stackforge', bio: 'Elite engineering team forging B2B marketplaces.', 
    email: 'ops@stackforge.io', isEmailVerified: false,
    type: 'business', phone: '+1 555 0123', location: 'Silicon Valley, CA', birthDate: '2020-01-01',
    lastUsernameChange: '2024-05-10',
    listings: [
      { id: 'j1', title: 'Senior Next.js Developer', location: 'Remote' },
      { id: 'j2', title: 'Backend Architect (Go)', location: 'USA' }
    ]
  },
];

export default function DashboardPage() {
  const router = useRouter();
  const [activeEntity, setActiveEntity] = useState<Identity>(INITIAL_ENTITIES[0]);
  const [isSwitcherOpen, setIsSwitcherOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);
  const [tempData, setTempData] = useState<Identity>(activeEntity);
  const [newJob, setNewJob] = useState({ title: '', location: '' });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const currentAge = useMemo(() => calculateAge(activeEntity.birthDate), [activeEntity.birthDate]);

  const canChangeUsername = useMemo(() => {
    const lastChange = new Date(activeEntity.lastUsernameChange).getTime();
    const weekInMs = 7 * 24 * 60 * 60 * 1000;
    return Date.now() - lastChange > weekInMs;
  }, [activeEntity.lastUsernameChange]);

  const handleOpenEdit = () => {
    setTempData(activeEntity);
    setAgreedToTerms(false);
    setIsEditModalOpen(true);
  };

  const handleSaveProfile = () => {
    if (!agreedToTerms) return;
    setActiveEntity(tempData);
    setIsEditModalOpen(false);
  };

  const handleAddJob = () => {
    if (!newJob.title) return;
    const listing: JobListing = { id: Date.now().toString(), ...newJob };
    setActiveEntity({ ...activeEntity, listings: [...(activeEntity.listings || []), listing] });
    setNewJob({ title: '', location: '' });
    setIsJobModalOpen(false);
  };

  return (
    <div className={`${jakarta.className} min-h-screen bg-[#F8FBFC] text-[#0D1B2A] flex flex-col overflow-x-hidden relative`}>
      
      {/* BACKGROUND MESH */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div animate={{ x: [0, 80, 0], y: [0, 40, 0] }} transition={{ duration: 25, repeat: Infinity }} className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#0EA5A5]/5 blur-[120px]" />
        <motion.div animate={{ x: [0, -60, 0], y: [0, 80, 0] }} transition={{ duration: 20, repeat: Infinity }} className="absolute bottom-[-10%] left-[-5%] w-[700px] h-[700px] rounded-full bg-[#FF7A00]/5 blur-[120px]" />
      </div>

      {/* HEADER */}
      <header className="relative z-50 px-4 md:px-8 py-4 bg-white/60 backdrop-blur-xl border-b border-[#E1E8ED] shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={() => router.push('/marketplace')} className="p-2 hover:bg-slate-100 rounded-full transition-all text-slate-400">
            <ArrowLeft size={20}/>
          </button>
          
          <div className="relative">
            <button onClick={() => setIsSwitcherOpen(!isSwitcherOpen)} className="flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 bg-white border border-[#E1E8ED] rounded-2xl shadow-sm hover:border-[#0EA5A5] transition-all">
              <div className={`w-6 h-6 rounded-md flex items-center justify-center text-white ${activeEntity.type === 'personal' ? 'bg-[#0EA5A5]' : 'bg-[#FF7A00]'}`}>
                {activeEntity.type === 'personal' ? <User size={12} /> : <Building2 size={12} />}
              </div>
              <span className="text-xs font-bold hidden sm:inline">{activeEntity.name}</span>
              <ChevronDown size={14} className="text-slate-400" />
            </button>
            <AnimatePresence>
              {isSwitcherOpen && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full left-0 mt-2 w-64 bg-white border border-[#E1E8ED] rounded-[24px] shadow-2xl p-2 z-50">
                  {INITIAL_ENTITIES.map((e) => (
                    <button key={e.id} onClick={() => { setActiveEntity(e); setTempData(e); setIsSwitcherOpen(false); }} className="w-full flex items-center gap-3 p-3 hover:bg-slate-50 rounded-xl transition-all text-left">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white ${e.type === 'personal' ? 'bg-[#0EA5A5]' : 'bg-[#FF7A00]'}`}>{e.type === 'personal' ? <User size={14} /> : <Building2 size={14} />}</div>
                      <span className="text-xs font-bold">{e.name}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={handleOpenEdit} className="p-2.5 bg-[#0D1B2A] text-white rounded-xl shadow-lg active:scale-95 transition-all"><Edit size={18} /></button>
          <button className="p-2.5 bg-white border border-[#E1E8ED] rounded-xl text-slate-400"><Settings size={18} /></button>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 max-w-7xl mx-auto w-full p-4 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 overflow-y-auto no-scrollbar pb-32 relative z-10">
        
        {/* LEFT COLUMN */}
        <div className="lg:col-span-8 space-y-6">
          <section className="bg-white border border-[#E1E8ED] rounded-[44px] p-6 md:p-10 shadow-sm flex flex-col md:flex-row items-center md:items-start gap-8 relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#0EA5A5]/5 rounded-full blur-3xl" />
             <div className="relative shrink-0">
                <div className="w-28 h-28 md:w-36 md:h-36 rounded-[42px] bg-slate-50 overflow-hidden shadow-lg border border-white rotate-2 transition-transform group-hover:rotate-0 duration-500">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${activeEntity.username}`} alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#0EA5A5] rounded-2xl border-4 border-white flex items-center justify-center shadow-lg text-white">
                  <BadgeCheck size={18} />
                </div>
             </div>

             <div className="flex-1 text-center md:text-left space-y-4 text-[#0D1B2A]">
                <div>
                  <h2 className="text-3xl md:text-4xl font-[900] italic tracking-tighter uppercase leading-none">{activeEntity.name}</h2>
                  <p className="text-[#0EA5A5] font-black text-[10px] md:text-xs uppercase tracking-[0.3em] mt-2">@{activeEntity.username} {activeEntity.type === 'personal' && `• ${currentAge} Yrs`}</p>
                </div>
                <p className="text-sm md:text-base font-medium text-slate-500 italic leading-relaxed">"{activeEntity.bio}"</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-5 text-slate-400">
                  <div className="flex items-center gap-2 font-bold text-[11px]"><Phone size={14} className="text-[#FF7A00]"/>{activeEntity.phone}</div>
                  <div className="flex items-center gap-2 font-bold text-[11px] uppercase"><MapPin size={14} className="text-[#0EA5A5]"/>{activeEntity.location}</div>
                  <div className="flex items-center gap-2 font-bold text-[11px]"><Mail size={14} className={activeEntity.isEmailVerified ? "text-green-500" : "text-red-400"}/>{activeEntity.email}</div>
                </div>
             </div>
          </section>

          {/* DYNAMIC CRUD CONTENT */}
          <section>
            {activeEntity.type === 'personal' ? (
              <div className="bg-white border border-[#E1E8ED] rounded-[32px] p-6 shadow-sm flex items-center justify-between group hover:border-[#0EA5A5]/30 transition-all">
                <div className="flex items-center gap-4 text-[#0D1B2A]">
                  <div className="w-12 h-12 rounded-2xl bg-[#0EA5A5]/10 flex items-center justify-center text-[#0EA5A5]"><FileText size={24} /></div>
                  <div className="min-w-0 font-medium">
                    <p className="text-[10px] font-black uppercase text-slate-400">Identity CV</p>
                    <h4 className="text-sm font-bold mt-1 truncate">{activeEntity.cvName || 'Upload PDF'}</h4>
                  </div>
                </div>
                <button onClick={() => fileInputRef.current?.click()} className="p-3 bg-slate-50 rounded-xl text-slate-400 hover:text-[#0EA5A5] transition-colors"><UploadCloud size={20}/></button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex justify-between items-center px-4">
                  <h3 className="text-xs font-black uppercase tracking-widest text-[#0EA5A5]">Demand Listings</h3>
                  <button onClick={() => setIsJobModalOpen(true)} className="flex items-center gap-2 px-4 py-2 bg-[#FF7A00] text-white rounded-xl text-[10px] font-bold uppercase shadow-lg active:scale-95"><Plus size={14}/> New</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeEntity.listings?.map(job => (
                    <div key={job.id} className="bg-white border border-[#E1E8ED] rounded-3xl p-5 flex items-center justify-between hover:border-[#FF7A00]/30 transition-all shadow-sm group">
                      <div className="min-w-0"><h4 className="text-sm font-bold uppercase truncate text-[#0D1B2A]">{job.title}</h4><p className="text-[9px] font-bold text-slate-400 uppercase">{job.location}</p></div>
                      <button onClick={() => setActiveEntity({...activeEntity, listings: activeEntity.listings?.filter(l => l.id !== job.id)})} className="p-2 text-slate-300 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-[#0D1B2A] rounded-[40px] p-8 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-[-20%] left-[-20%] w-full h-full bg-[#FF7A00]/20 blur-[100px]" />
            <h3 className="relative z-10 text-[10px] font-black uppercase tracking-[0.4em] mb-8 text-[#0EA5A5]">Live Card Preview</h3>
            <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-[32px] p-6 border border-white/10">
               <div className="flex items-center gap-4 mb-4">
                 <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center font-black italic text-[#0D1B2A] text-xs shadow-lg">PA</div>
                 <div><h4 className="font-bold text-sm uppercase">{activeEntity.name}</h4><p className="text-[9px] font-black uppercase text-[#FF7A00] mt-1">{activeEntity.type === 'personal' ? 'Individual' : 'Enterprise'}</p></div>
               </div>
               <p className="text-[10px] text-white/50 line-clamp-2 italic">&rdquo;{activeEntity.bio}&rdquo;</p>
            </div>
            <button onClick={() => router.push('/marketplace')} className="relative z-10 w-full mt-8 py-4 bg-[#FF7A00] text-white rounded-2xl font-black uppercase tracking-widest text-[9px] shadow-xl active:scale-95 transition-all">Go Live</button>
          </div>
        </div>
      </main>

      {/* FORGE DOCK */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] px-6 py-3 bg-white/80 backdrop-blur-2xl border border-white/50 rounded-full shadow-2xl flex items-center gap-8 md:gap-12 min-w-[320px] justify-center transition-all hover:scale-[1.02] w-[90%] md:w-auto">
        <button onClick={() => router.push('/feed')} className="text-slate-400 hover:text-[#0EA5A5] active:scale-90 transition-all"><Search size={22}/></button>
        <button onClick={() => router.push('/pairs')} className="text-slate-400 hover:text-[#0EA5A5] active:scale-90 transition-all"><Users size={22}/></button>
        <button onClick={() => router.push('/marketplace')} className="w-12 h-12 bg-white border border-slate-100 rounded-full flex items-center justify-center text-slate-300 shadow-md active:scale-75 hover:scale-110"><Sparkles size={24}/></button>
        <button onClick={() => router.push('/messages')} className="text-slate-400 hover:text-[#FF7A00] active:scale-90 transition-all"><MessageCircle size={22}/></button>
        <button className="text-[#0EA5A5] active:scale-90 relative transition-all"><UserCircle size={22} strokeWidth={3} /><div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#0EA5A5] rounded-full shadow-[0_0_10px_#0EA5A5]" /></button>
      </nav>

      {/* --- FORGE IDENTITY MODAL --- */}
      <AnimatePresence>
        {isEditModalOpen && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 text-[#0D1B2A]">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsEditModalOpen(false)} className="absolute inset-0 bg-[#0D1B2A]/40 backdrop-blur-sm" />
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="relative bg-white w-full max-w-xl rounded-[40px] shadow-2xl p-8 md:p-12 overflow-y-auto max-h-[90vh] no-scrollbar">
               <div className="flex justify-between items-start mb-8">
                  <h3 className="text-3xl font-[900] italic uppercase tracking-tighter leading-none">Forge Identity</h3>
                  <button onClick={() => setIsEditModalOpen(false)} className="text-slate-300 hover:text-red-500 transition-colors"><X size={24} /></button>
               </div>

               <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormInput label={activeEntity.type === 'personal' ? "Full Name" : "Company Name"} value={tempData.name} onChange={(v: string) => setTempData({...tempData, name: v})} icon={<User size={14}/>} />
                    
                    <div className="space-y-1">
                      <div className="flex justify-between items-center pr-1">
                         <label className="text-[9px] font-black uppercase text-slate-400">Username</label>
                         {!canChangeUsername && <span className="text-[8px] text-[#FF7A00] font-bold">Cooldown Active</span>}
                      </div>
                      <div className="relative group">
                        <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
                        <input 
                          disabled={!canChangeUsername}
                          type="text" value={tempData.username} onChange={e => setTempData({...tempData, username: e.target.value.replace(/\s/g, '')})}
                          className={`w-full h-11 bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 text-xs font-bold outline-none transition-all ${canChangeUsername ? 'focus:border-[#0EA5A5]' : 'opacity-50 cursor-not-allowed'}`}
                        />
                      </div>
                    </div>

                    {/* FIXED: ELITE EMAIL VERIFICATION FIELD */}
                    <div className="space-y-1">
                       <label className="text-[9px] font-black uppercase text-slate-400">Email Address</label>
                       <div className="relative flex items-center group">
                          <Mail className="absolute left-4 text-slate-300 group-focus-within:text-[#0EA5A5] transition-colors" size={14} />
                          <input 
                             type="email" 
                             value={tempData.email} 
                             onChange={e => setTempData({...tempData, email: e.target.value})} 
                             className="w-full h-11 bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-24 text-xs font-bold focus:border-[#0EA5A5] outline-none transition-all" 
                          />
                          <button 
                             type="button" 
                             className={`absolute right-1.5 px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${tempData.isEmailVerified ? 'bg-green-100 text-green-600' : 'bg-[#0EA5A5] text-white shadow-lg hover:brightness-110 active:scale-95'}`}
                          >
                             {tempData.isEmailVerified ? 'Verified' : 'Verify'}
                          </button>
                       </div>
                    </div>

                    <FormInput label={activeEntity.type === 'personal' ? "Mobile Number" : "Telephone"} value={tempData.phone} onChange={(v: string) => setTempData({...tempData, phone: v})} icon={<Phone size={14}/>} />
                    
                    <div className="md:col-span-2">
                       <FormInput label="Location Hub" value={tempData.location} onChange={(v: string) => setTempData({...tempData, location: v})} icon={<MapPin size={14}/>} />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase text-slate-400">{activeEntity.type === 'personal' ? "Professional Bio" : "Company Description"}</label>
                    <textarea value={tempData.bio} onChange={e => setTempData({...tempData, bio: e.target.value})} className="w-full h-24 bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm font-bold focus:border-[#0EA5A5] outline-none transition-all resize-none" />
                  </div>

                  <div className="p-5 bg-slate-50 border border-slate-200 rounded-3xl flex items-center justify-between">
                     <div className="flex items-center gap-3 italic">
                        <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#FF7A00] shadow-sm"><CalendarDays size={20}/></div>
                        <div><p className="text-[10px] font-black uppercase text-slate-400">Registry Source</p><p className="text-sm font-bold">{tempData.birthDate}</p></div>
                     </div>
                     <div className="text-right text-[#0EA5A5]"><p className="text-[10px] font-black uppercase text-slate-400 leading-none">Auto-Age</p><p className="text-sm font-[900] italic mt-1">{calculateAge(tempData.birthDate)} Years</p></div>
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer py-2">
                     <div className="relative flex items-center mt-1">
                        <input type="checkbox" checked={agreedToTerms} onChange={e => setAgreedToTerms(e.target.checked)} className="peer opacity-0 absolute h-5 w-5 cursor-pointer" />
                        <div className="h-5 w-5 border-2 border-slate-200 rounded-md transition-all peer-checked:bg-[#0EA5A5] peer-checked:border-[#0EA5A5] flex items-center justify-center text-white"><Check size={14} /></div>
                     </div>
                     <span className="text-[10px] text-slate-400 font-bold uppercase italic leading-tight">Commit identity card synchronization with Marketplace stack.</span>
                  </label>
                  <button onClick={handleSaveProfile} disabled={!agreedToTerms} className={`w-full h-16 rounded-[24px] font-black uppercase text-[11px] transition-all shadow-xl ${agreedToTerms ? 'bg-[#0D1B2A] text-white hover:bg-[#0EA5A5]' : 'bg-slate-100 text-slate-300'}`}>Commit Changes</button>
               </div>
            </motion.div>
          </div>
        )}

        {isJobModalOpen && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsJobModalOpen(false)} className="absolute inset-0 bg-[#0D1B2A]/40 backdrop-blur-sm" />
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="relative bg-white w-full max-w-sm rounded-[40px] shadow-2xl p-10 text-[#0D1B2A]">
               <h3 className="text-2xl font-[900] italic uppercase tracking-tighter mb-8 text-center leading-none italic">Forge New Demand</h3>
               <div className="space-y-5">
                  <FormInput label="Listing Title" value={newJob.title} onChange={(v: string) => setNewJob({...newJob, title: v})} icon={<Target size={14}/>} />
                  <FormInput label="Hub Location" value={newJob.location} onChange={(v: string) => setNewJob({...newJob, location: v})} icon={<MapPin size={14}/>} />
                  <button onClick={handleAddJob} className="w-full h-14 bg-[#FF7A00] text-white rounded-2xl font-black uppercase text-[10px] shadow-lg shadow-[#FF7A00]/20 active:scale-95 transition-all">Publish Listing</button>
               </div>
               <button onClick={() => setIsJobModalOpen(false)} className="absolute top-6 right-6 text-slate-300 hover:text-red-500"><X size={20}/></button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <input type="file" ref={fileInputRef} className="hidden" accept=".pdf" />
    </div>
  );
}

// --- SHARED COMPONENTS ---
function FormInput({ label, value, onChange, icon }: any) {
  return (
    <div className="space-y-1">
      <label className="text-[9px] font-black uppercase text-slate-400 ml-1 tracking-widest leading-none">{label}</label>
      <div className="relative group">
        {icon && <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#0EA5A5] transition-colors">{icon}</div>}
        <input type="text" value={value} onChange={e => onChange(e.target.value)} className={`w-full h-11 bg-slate-50 border border-slate-200 rounded-xl ${icon ? 'pl-11' : 'px-4'} text-xs font-bold focus:border-[#0EA5A5] outline-none transition-all`} />
      </div>
    </div>
  );
}

