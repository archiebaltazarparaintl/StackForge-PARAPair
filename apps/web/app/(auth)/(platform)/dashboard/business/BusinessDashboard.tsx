'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, TrendingUp, Plus, MapPin, ListChecks, 
  Trash2, Edit3, X, Save, BarChart3, Briefcase 
} from 'lucide-react';

interface Listing {
  id: string;
  title: string;
  location: string;
  requirements: string;
  matches: number;
  updatedAt: string;
}

export default function BusinessDashboard() {
  // --- CRUD STATE ---
  const [listings, setListings] = useState<Listing[]>([
    { 
      id: '1', 
      title: 'Senior Frontend Architect', 
      location: 'Remote / Manila', 
      requirements: 'Next.js, Tailwind CSS, TypeScript, 5+ years exp.',
      matches: 24, 
      updatedAt: '2h ago' 
    },
    { 
      id: '2', 
      title: 'Cloud Infrastructure Lead', 
      location: 'Singapore (On-site)', 
      requirements: 'AWS, Kubernetes, Terraform, Security clearance.',
      matches: 12, 
      updatedAt: '5h ago' 
    }
  ]);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Listing | null>(null);
  
  // Form States
  const [formTitle, setFormTitle] = useState('');
  const [formLocation, setFormLocation] = useState('');
  const [formRequirements, setFormRequirements] = useState('');

  // --- CRUD ACTIONS ---
  const handleOpenModal = (item?: Listing) => {
    if (item) {
      setEditingItem(item);
      setFormTitle(item.title);
      setFormLocation(item.location);
      setFormRequirements(item.requirements);
    } else {
      setEditingItem(null);
      setFormTitle('');
      setFormLocation('');
      setFormRequirements('');
    }
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (editingItem) {
      setListings(listings.map(l => l.id === editingItem.id ? { 
        ...l, 
        title: formTitle, 
        location: formLocation, 
        requirements: formRequirements,
        updatedAt: 'Just now'
      } : l));
    } else {
      const newListing = { 
        id: Date.now().toString(), 
        title: formTitle, 
        location: formLocation,
        requirements: formRequirements,
        matches: 0, 
        updatedAt: 'Just now' 
      };
      setListings([newListing, ...listings]);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    setListings(listings.filter(l => l.id !== id));
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12 text-[#0D1B2A]">
      
      {/* HEADER STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#0D1B2A] p-8 rounded-[32px] text-white relative overflow-hidden shadow-xl">
          <TrendingUp className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10" />
          <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FF7A00] mb-2">Hiring Velocity</h3>
          <h2 className="text-4xl font-[900] italic tracking-tighter leading-none">+142%</h2>
        </div>
        <div className="bg-white border border-slate-200 p-8 rounded-[32px] flex justify-between items-center shadow-sm">
          <div>
            <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Applicants</p>
            <h3 className="text-3xl font-[900] italic mt-1">892</h3>
          </div>
          <Users className="text-[#FF7A00] opacity-20" size={32} />
        </div>
        <div className="bg-white border border-slate-200 p-8 rounded-[32px] flex justify-between items-center shadow-sm">
          <div>
            <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Match rate</p>
            <h3 className="text-3xl font-[900] italic mt-1">72%</h3>
          </div>
          <BarChart3 className="text-[#0EA5A5] opacity-20" size={32} />
        </div>
      </div>

      {/* LISTINGS SECTION */}
      <div className="bg-white border border-slate-200 rounded-[40px] p-8 shadow-xl shadow-slate-200/50 relative overflow-hidden">
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-3">
             <div className="p-2 bg-[#FF7A00]/10 rounded-xl text-[#FF7A00]">
                <Briefcase size={20} />
             </div>
             <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400">Enterprise Listings</h3>
          </div>
          <button 
            onClick={() => handleOpenModal()}
            className="w-12 h-12 bg-[#FF7A00] text-white rounded-2xl flex items-center justify-center shadow-lg shadow-[#FF7A00]/20 hover:scale-110 active:scale-90 transition-all"
          >
            <Plus size={24} strokeWidth={3} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          <AnimatePresence initial={false}>
            {listings.map((item) => (
              <motion.div 
                layout key={item.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-slate-50 border border-slate-100 rounded-[28px] group hover:border-[#FF7A00]/30 transition-all gap-4"
              >
                <div className="space-y-2 flex-1">
                  <h4 className="font-[900] text-lg uppercase tracking-tight leading-none">{item.title}</h4>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <MapPin size={12} className="text-[#FF7A00]" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">{item.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <ListChecks size={12} className="text-[#0EA5A5]" />
                      <span className="text-[10px] font-bold uppercase tracking-widest truncate max-w-[200px]">{item.requirements}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 self-end md:self-center">
                  <div className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-[10px] font-black text-[#0EA5A5] uppercase mr-2">
                    {item.matches} Matches
                  </div>
                  <button onClick={() => handleOpenModal(item)} className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#FF7A00] transition-all shadow-sm"><Edit3 size={16} /></button>
                  <button onClick={() => handleDelete(item.id)} className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-red-500 transition-all shadow-sm"><Trash2 size={16} /></button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* CRUD MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-[#0D1B2A]/40 backdrop-blur-sm" />
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="relative bg-white w-full max-w-lg rounded-[40px] p-10 shadow-2xl border border-white max-h-[90vh] overflow-y-auto no-scrollbar">
               <h3 className="text-3xl font-[900] italic tracking-tighter mb-8">{editingItem ? 'Edit Listing' : 'Forge New Listing'}</h3>
               
               <div className="space-y-6">
                  {/* TITLE */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Job Title</label>
                    <input 
                      type="text" value={formTitle} onChange={(e) => setFormTitle(e.target.value)}
                      placeholder="e.g. Lead UI Designer"
                      className="w-full h-14 bg-slate-50 border border-slate-200 rounded-2xl px-5 text-sm font-bold outline-none focus:border-[#FF7A00] transition-all"
                    />
                  </div>
                  
                  {/* LOCATION */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Location</label>
                    <div className="relative">
                      <MapPin size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
                      <input 
                        type="text" value={formLocation} onChange={(e) => setFormLocation(e.target.value)}
                        placeholder="e.g. Remote / New York"
                        className="w-full h-14 bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-5 text-sm font-bold outline-none focus:border-[#FF7A00] transition-all"
                      />
                    </div>
                  </div>

                  {/* REQUIREMENTS */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest ml-1">Key Requirements</label>
                    <textarea 
                      rows={3} value={formRequirements} onChange={(e) => setFormRequirements(e.target.value)}
                      placeholder="e.g. React, Node.js, 3+ years experience..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-5 text-sm font-bold outline-none focus:border-[#FF7A00] transition-all resize-none"
                    />
                  </div>

                  <button 
                    onClick={handleSave}
                    disabled={formTitle.length < 3 || !formLocation}
                    className="w-full h-16 bg-[#FF7A00] text-white rounded-[24px] font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-2 shadow-xl shadow-[#FF7A00]/20 disabled:opacity-30 transition-all active:scale-95"
                  >
                    <Save size={18} /> {editingItem ? 'Update Forge' : 'Publish to Marketplace'}
                  </button>
               </div>
               <button onClick={() => setIsModalOpen(false)} className="absolute top-8 right-8 text-slate-300 hover:text-[#0D1B2A] transition-colors"><X size={24} /></button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}