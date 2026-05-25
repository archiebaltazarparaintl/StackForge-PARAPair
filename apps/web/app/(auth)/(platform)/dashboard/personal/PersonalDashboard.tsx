/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, Zap, Eye, UserCheck, Plus, 
  Trash2, Edit3, X, Save, FolderHeart, 
  Briefcase, Globe 
} from 'lucide-react';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  year: string;
}

export default function PersonalDashboard() {
  // --- CRUD STATE ---
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([
    { id: '1', title: 'Next.js Design System', category: 'Development', year: '2023' },
    { id: '2', title: 'Fintech Mobile App', category: 'UI/UX Design', year: '2024' }
  ]);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<PortfolioItem | null>(null);
  
  // Form State
  const [formTitle, setFormTitle] = useState('');
  const [formCategory, setFormCategory] = useState('Development');

  // --- CRUD ACTIONS ---
  const handleOpenModal = (item?: PortfolioItem) => {
    if (item) {
      setEditingItem(item);
      setFormTitle(item.title);
      setFormCategory(item.category);
    } else {
      setEditingItem(null);
      setFormTitle('');
      setFormCategory('Development');
    }
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (editingItem) {
      setPortfolio(portfolio.map(p => p.id === editingItem.id ? { ...p, title: formTitle, category: formCategory } : p));
    } else {
      const newItem = { id: Date.now().toString(), title: formTitle, category: formCategory, year: '2024' };
      setPortfolio([newItem, ...portfolio]);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    setPortfolio(portfolio.filter(p => p.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12 text-[#0D1B2A]">
      <div className="lg:col-span-2 space-y-6">
        
        {/* STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard label="Matched Pairs" value="42" icon={Heart} color="#0EA5A5" />
          <StatCard label="Profile Views" value="1.2k" icon={Eye} color="#0D1B2A" />
          <StatCard label="Forge Score" value="98" icon={Zap} color="#FF7A00" />
        </div>
        
        {/* PORTFOLIO CRUD SECTION */}
        <div className="bg-white border border-slate-200 rounded-[32px] p-8 shadow-xl shadow-slate-200/50 relative overflow-hidden">
          <div className="flex justify-between items-center mb-8 relative z-10">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#0EA5A5]/10 rounded-xl text-[#0EA5A5]">
                <FolderHeart size={20} />
              </div>
              <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400">Portfolio Forge</h3>
            </div>
            <button 
              onClick={() => handleOpenModal()}
              className="w-10 h-10 bg-[#0EA5A5] text-white rounded-xl flex items-center justify-center shadow-lg shadow-[#0EA5A5]/20 hover:scale-110 active:scale-90 transition-all"
            >
              <Plus size={20} strokeWidth={3} />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 relative z-10">
            <AnimatePresence initial={false}>
              {portfolio.map((item) => (
                <motion.div 
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex items-center justify-between p-5 bg-slate-50 border border-slate-100 rounded-[24px] group hover:border-[#0EA5A5]/40 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#0EA5A5] shadow-sm">
                      {item.category === 'Development' ? <Briefcase size={20} /> : <Globe size={20} />}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-tight">{item.title}</h4>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">
                        {item.category} • {item.year}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button onClick={() => handleOpenModal(item)} className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#0EA5A5] transition-all"><Edit3 size={14} /></button>
                    <button onClick={() => handleDelete(item.id)} className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-red-500 transition-all"><Trash2 size={14} /></button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* USER PROFILE CARD */}
      <div className="bg-white border border-slate-200 rounded-[40px] p-8 shadow-2xl shadow-slate-200/60 h-fit sticky top-24">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-8 group">
            <div className="w-32 h-32 rounded-[32px] bg-slate-100 p-1 rotate-3 group-hover:rotate-0 transition-transform duration-500 overflow-hidden shadow-lg border border-white">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Kevin" alt="Avatar" className="w-full h-full object-cover rounded-[28px]" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#0EA5A5] rounded-2xl border-4 border-white flex items-center justify-center shadow-lg">
              <UserCheck size={18} className="text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl font-[900] italic tracking-tighter uppercase leading-none">Kevin France</h2>
          <p className="text-[#0EA5A5] font-black text-[11px] uppercase tracking-[0.3em] mt-3">Fullstack Architect</p>
          
          <button className="w-full mt-12 py-5 bg-[#0D1B2A] text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-black active:scale-95 transition-all shadow-xl">
            Public Profile View
          </button>
        </div>
      </div>

      {/* CREATE/EDIT MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-[#0D1B2A]/40 backdrop-blur-sm" />
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="relative bg-white w-full max-w-sm rounded-[40px] p-10 shadow-2xl border border-white">
               <h3 className="text-3xl font-[900] italic tracking-tighter mb-6">{editingItem ? 'Edit Project' : 'New Project'}</h3>
               
               <div className="space-y-5">
                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest ml-1">Project Title</label>
                    <input 
                      type="text" 
                      value={formTitle}
                      onChange={(e) => setFormTitle(e.target.value)}
                      placeholder="e.g. Portfolio Website"
                      className="w-full h-12 bg-slate-50 border border-slate-200 rounded-xl px-4 text-sm font-bold outline-none focus:border-[#0EA5A5] transition-all"
                    />
                  </div>
                  
                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest ml-1">Category</label>
                    <select 
                      value={formCategory}
                      onChange={(e) => setFormCategory(e.target.value)}
                      className="w-full h-12 bg-slate-50 border border-slate-200 rounded-xl px-4 text-sm font-bold outline-none focus:border-[#0EA5A5] transition-all"
                    >
                      <option>Development</option>
                      <option>UI/UX Design</option>
                      <option>Branding</option>
                    </select>
                  </div>

                  <button 
                    onClick={handleSave}
                    disabled={formTitle.length < 3}
                    className="w-full h-14 bg-[#0EA5A5] text-white rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 shadow-lg shadow-[#0EA5A5]/20 disabled:opacity-30 transition-all active:scale-95"
                  >
                    <Save size={16} /> {editingItem ? 'Update Piece' : 'Add to Portfolio'}
                  </button>
               </div>
               <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-slate-300 hover:text-[#0D1B2A] transition-colors"><X size={20} /></button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function StatCard({ label, value, icon: Icon, color }: any) {
  return (
    <div className="bg-white border border-slate-200 p-6 rounded-[28px] shadow-sm hover:shadow-md transition-all group">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">{label}</p>
          <h3 className="text-3xl font-[900] italic tracking-tighter leading-none">{value}</h3>
        </div>
        <Icon size={24} style={{ color }} className="opacity-80 group-hover:scale-110 transition-transform" />
      </div>
    </div>
  );
}