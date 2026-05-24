'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowLeft, User, Mail, Phone, MapPin, Calendar, Briefcase, Save, Camera, Edit2, Building2, Users, FileText, UploadCloud } from 'lucide-react';

export default function ProfilePage() {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [accountType, setAccountType] = useState<'personal' | 'business'>('personal');
  const [avatarUrl, setAvatarUrl] = useState('https://api.dicebear.com/7.x/avataaars/svg?seed=Kevin');
  const [bannerUrl, setBannerUrl] = useState('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1920&q=80');
  const [cvFile, setCvFile] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    bio: '',
    title: '',
    company: '',
    // Business fields
    businessName: '',
    industry: '',
    companySize: '',
    website: '',
    foundedYear: ''
  });

  useEffect(() => {
    // Load user data from localStorage
    const storedData = localStorage.getItem('userProfile');
    if (storedData) {
      const userData = JSON.parse(storedData);
      setFormData(prev => ({
        ...prev,
        name: userData.fullName || prev.name,
        email: userData.email || prev.email,
        username: userData.username || ''
      }));
      // Update avatar seed based on username
      if (userData.username) {
        setAvatarUrl(`https://api.dicebear.com/7.x/avataaars/svg?seed=${userData.username}`);
      }
    }
  }, []);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type === 'image/jpeg' || file.type === 'image/png') {
        const reader = new FileReader();
        reader.onloadend = () => {
          setAvatarUrl(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        alert('Please upload JPEG or PNG images only.');
      }
    }
  };

  const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type === 'image/jpeg' || file.type === 'image/png') {
        const reader = new FileReader();
        reader.onloadend = () => {
          setBannerUrl(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        alert('Please upload JPEG or PNG images only.');
      }
    }
  };

  const handleCvUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type === 'application/pdf') {
        setCvFile(file.name);
      } else {
        alert('Please upload PDF files only.');
      }
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    // Add save logic here
  };

  return (
    <main className="min-h-screen bg-[#0D1B2A] text-white">
      {/* PROFILE BANNER */}
      <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
        <img 
          src={bannerUrl} 
          alt="Profile Banner" 
          className="w-full h-full object-cover"
        />
        
        {/* Control Bar */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-4">
          {/* Back Button */}
          <button 
            onClick={() => router.back()} 
            className="p-2.5 bg-[#0D1B2A]/80 backdrop-blur-md border border-white/10 rounded-xl hover:bg-[#FF7A00] hover:border-[#FF7A00] transition-all active:scale-90"
          >
            <ArrowLeft size={20} className="text-white" />
          </button>

          <div className="flex items-center gap-3">
            {/* Account Type Switch */}
            <div className="flex items-center gap-2 bg-[#0D1B2A]/80 backdrop-blur-md border border-white/10 rounded-xl p-1">
              <button
                onClick={() => setAccountType('personal')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-black uppercase tracking-[0.15em] text-[10px] transition-all ${
                  accountType === 'personal'
                    ? 'bg-[#0EA5A5] text-[#0D1B2A] shadow-lg shadow-[#0EA5A5]/20'
                    : 'text-white/40 hover:text-white hover:bg-white/5'
                }`}
              >
                <User size={16} />
                Personal
              </button>
              <button
                onClick={() => setAccountType('business')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-black uppercase tracking-[0.15em] text-[10px] transition-all ${
                  accountType === 'business'
                    ? 'bg-[#FF7A00] text-[#0D1B2A] shadow-lg shadow-[#FF7A00]/20'
                    : 'text-white/40 hover:text-white hover:bg-white/5'
                }`}
              >
                <Building2 size={16} />
                Business
              </button>
            </div>

            {/* Edit/Save Button */}
            <button 
              onClick={() => isEditing ? handleSave() : setIsEditing(true)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-black uppercase tracking-[0.2em] text-[10px] transition-all ${
                isEditing 
                  ? 'bg-[#0EA5A5] text-[#0D1B2A] shadow-lg shadow-[#0EA5A5]/20 hover:scale-105' 
                  : 'bg-[#FF7A00] text-white shadow-lg shadow-[#FF7A00]/20 hover:scale-105'
              }`}
            >
              {isEditing ? <Save size={16} /> : <Edit2 size={16} />}
              {isEditing ? 'Save Changes' : 'Edit Profile'}
            </button>

            {/* Banner Camera Button */}
            <label className="group cursor-pointer">
              <input 
                type="file" 
                className="hidden" 
                accept="image/jpeg,image/png"
                onChange={handleBannerChange}
              />
              <div className="flex items-center gap-2 px-4 py-3 bg-[#0D1B2A]/80 backdrop-blur-md border border-white/10 rounded-xl hover:bg-[#FF7A00] hover:border-[#FF7A00] transition-all">
                <Camera size={18} className="text-white" />
                <span className="text-white font-black uppercase tracking-[0.15em] text-[10px]">Change Banner</span>
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto p-6 lg:p-10 -mt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* PROFILE CARD */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 backdrop-blur-xl sticky top-32">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-8">
                  <label className="group cursor-pointer block">
                    <input 
                      type="file" 
                      className="hidden" 
                      accept="image/jpeg,image/png"
                      onChange={handleAvatarChange}
                    />
                    <div className={`w-40 h-40 rounded-3xl bg-gradient-to-br p-1 rotate-3 group-hover:rotate-6 transition-transform ${
                        accountType === 'personal' ? 'from-[#0EA5A5] to-[#FF7A00]' : 'from-[#FF7A00] to-[#0EA5A5]'
                      }`}>
                      <div className="w-full h-full rounded-[20px] bg-[#0D1B2A] p-1 overflow-hidden">
                        <img src={avatarUrl} alt="Avatar" className="rounded-[18px] w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className={`absolute bottom-0 right-0 w-12 h-12 rounded-xl border-4 border-[#0D1B2A] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform ${
                        accountType === 'personal' ? 'bg-[#FF7A00]' : 'bg-[#0EA5A5]'
                      }`}>
                      <Camera size={20} className="text-white" />
                    </div>
                  </label>
                </div>
                
                <h2 className="text-3xl font-black italic tracking-tighter uppercase">
                  {accountType === 'personal' ? formData.name : formData.businessName}
                </h2>
                <p className={`font-bold text-[11px] uppercase tracking-[0.3em] mt-2 ${
                    accountType === 'personal' ? 'text-[#0EA5A5]' : 'text-[#FF7A00]'
                  }`}>
                  {accountType === 'personal' ? formData.title : formData.industry}
                </p>
                <p className="text-white/40 font-bold text-[10px] uppercase tracking-widest mt-1">
                  {accountType === 'personal' ? formData.company : `${formData.companySize} Employees`}
                </p>
                
                <div className="w-full bg-white/5 h-1.5 rounded-full mt-8 overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: '85%' }} className={`h-full ${
                      accountType === 'personal' ? 'bg-[#0EA5A5]' : 'bg-[#FF7A00]'
                    }`} />
                </div>
                <div className="flex justify-between w-full mt-3">
                   <span className="text-[9px] font-black uppercase text-white/20">Profile Strength</span>
                   <span className={`text-[9px] font-black uppercase ${
                       accountType === 'personal' ? 'text-[#0EA5A5]' : 'text-[#FF7A00]'
                     }`}>85%</span>
                </div>
              </div>
            </div>
          </div>

          {/* PROFILE DETAILS */}
          <div className="lg:col-span-2 space-y-6">
            
            {accountType === 'personal' ? (
              <>
                {/* PERSONAL INFORMATION */}
                <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-md">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-[#FF7A00]/10 rounded-lg text-[#FF7A00]">
                      <User size={20} />
                    </div>
                    <h3 className="text-[11px] font-black uppercase tracking-[0.4em]">Personal Information</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-white/30 tracking-widest">Full Name</label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Enter your full name"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-bold focus:outline-none focus:border-[#0EA5A5] transition-all placeholder:text-white/30"
                        />
                      ) : (
                        <p className="text-white font-bold text-lg">{formData.name}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-white/30 tracking-widest">Email</label>
                      {isEditing ? (
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Enter your email address"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-bold focus:outline-none focus:border-[#0EA5A5] transition-all placeholder:text-white/30"
                        />
                      ) : (
                        <p className="text-white font-bold text-lg flex items-center gap-2">
                          <Mail size={16} className="text-[#0EA5A5]" />
                          {formData.email}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-white/30 tracking-widest">Phone</label>
                      {isEditing ? (
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Enter your phone number"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-bold focus:outline-none focus:border-[#0EA5A5] transition-all placeholder:text-white/30"
                        />
                      ) : (
                        <p className="text-white font-bold text-lg flex items-center gap-2">
                          <Phone size={16} className="text-[#0EA5A5]" />
                          {formData.phone}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-white/30 tracking-widest">Location</label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="Enter your location"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-bold focus:outline-none focus:border-[#0EA5A5] transition-all placeholder:text-white/30"
                        />
                      ) : (
                        <p className="text-white font-bold text-lg flex items-center gap-2">
                          <MapPin size={16} className="text-[#0EA5A5]" />
                          {formData.location}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* PROFESSIONAL INFORMATION */}
                <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-md">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-[#0EA5A5]/10 rounded-lg text-[#0EA5A5]">
                      <Briefcase size={20} />
                    </div>
                    <h3 className="text-[11px] font-black uppercase tracking-[0.4em]">Professional Information</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-white/30 tracking-widest">Job Title</label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={formData.title}
                          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                          placeholder="Enter your job title"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-bold focus:outline-none focus:border-[#0EA5A5] transition-all placeholder:text-white/30"
                        />
                      ) : (
                        <p className="text-white font-bold text-lg">{formData.title}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-white/30 tracking-widest">Company</label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Enter your company name"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-bold focus:outline-none focus:border-[#0EA5A5] transition-all placeholder:text-white/30"
                        />
                      ) : (
                        <p className="text-white font-bold text-lg">{formData.company}</p>
                      )}
                    </div>
                  </div>

                  <div className="mt-6 space-y-2">
                    <label className="text-[10px] font-black uppercase text-white/30 tracking-widest">Bio</label>
                    {isEditing ? (
                      <textarea
                        value={formData.bio}
                        onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                        rows={4}
                        placeholder="Tell us about yourself"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-bold focus:outline-none focus:border-[#0EA5A5] transition-all resize-none placeholder:text-white/30"
                      />
                    ) : (
                      <p className="text-white/80 font-medium leading-relaxed">{formData.bio}</p>
                    )}
                  </div>
                </div>

                {/* CV UPLOAD */}
                <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-md">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-[#FF7A00]/10 rounded-lg text-[#FF7A00]">
                      <FileText size={20} />
                    </div>
                    <h3 className="text-[11px] font-black uppercase tracking-[0.4em]">CV / Resume</h3>
                  </div>

                  <label className="relative group cursor-pointer block">
                    <input 
                      type="file" 
                      className="hidden" 
                      accept=".pdf"
                      onChange={handleCvUpload}
                    />
                    <div className={`border-2 border-dashed rounded-3xl p-8 transition-all flex flex-col items-center justify-center text-center gap-3 ${
                      cvFile ? 'border-[#0EA5A5] bg-[#0EA5A5]/5' : 'border-white/10 bg-white/5 hover:border-[#0EA5A5]/40 hover:bg-white/[0.07]'
                    }`}>
                      <UploadCloud size={32} className={cvFile ? 'text-[#0EA5A5]' : 'text-white/20'} />
                      <div>
                        <p className="text-sm font-bold tracking-tight">
                          {cvFile ? cvFile : 'Upload Professional CV'}
                        </p>
                        <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest mt-1">
                          PDF Format Only (Max 5MB)
                        </p>
                      </div>
                    </div>
                  </label>
                </div>
              </>
            ) : (
              <>
                {/* BUSINESS INFORMATION */}
                <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-md">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-[#FF7A00]/10 rounded-lg text-[#FF7A00]">
                      <Building2 size={20} />
                    </div>
                    <h3 className="text-[11px] font-black uppercase tracking-[0.4em]">Business Information</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-white/30 tracking-widest">Business Name</label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={formData.businessName}
                          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                          placeholder="Enter your business name"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-bold focus:outline-none focus:border-[#FF7A00] transition-all placeholder:text-white/30"
                        />
                      ) : (
                        <p className="text-white font-bold text-lg">{formData.businessName}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-white/30 tracking-widest">Industry</label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={formData.industry}
                          onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                          placeholder="Enter your industry"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-bold focus:outline-none focus:border-[#FF7A00] transition-all placeholder:text-white/30"
                        />
                      ) : (
                        <p className="text-white font-bold text-lg">{formData.industry}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-white/30 tracking-widest">Company Size</label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={formData.companySize}
                          onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                          placeholder="e.g., 50-200 employees"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-bold focus:outline-none focus:border-[#FF7A00] transition-all placeholder:text-white/30"
                        />
                      ) : (
                        <p className="text-white font-bold text-lg flex items-center gap-2">
                          <Users size={16} className="text-[#FF7A00]" />
                          {formData.companySize}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-white/30 tracking-widest">Founded Year</label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={formData.foundedYear}
                          onChange={(e) => setFormData({ ...formData, foundedYear: e.target.value })}
                          placeholder="e.g., 2018"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-bold focus:outline-none focus:border-[#FF7A00] transition-all placeholder:text-white/30"
                        />
                      ) : (
                        <p className="text-white font-bold text-lg">{formData.foundedYear}</p>
                      )}
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <label className="text-[10px] font-black uppercase text-white/30 tracking-widest">Website</label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={formData.website}
                          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                          placeholder="https://yourbusiness.com"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-bold focus:outline-none focus:border-[#FF7A00] transition-all placeholder:text-white/30"
                        />
                      ) : (
                        <p className="text-white font-bold text-lg flex items-center gap-2">
                          <Mail size={16} className="text-[#FF7A00]" />
                          {formData.website}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* BUSINESS CONTACT INFORMATION */}
                <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-md">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-[#0EA5A5]/10 rounded-lg text-[#0EA5A5]">
                      <Mail size={20} />
                    </div>
                    <h3 className="text-[11px] font-black uppercase tracking-[0.4em]">Business Contact Information</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-white/30 tracking-widest">Business Email</label>
                      {isEditing ? (
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Enter your business email"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-bold focus:outline-none focus:border-[#0EA5A5] transition-all placeholder:text-white/30"
                        />
                      ) : (
                        <p className="text-white font-bold text-lg flex items-center gap-2">
                          <Mail size={16} className="text-[#0EA5A5]" />
                          {formData.email}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-white/30 tracking-widest">Business Phone</label>
                      {isEditing ? (
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Enter your business phone"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-bold focus:outline-none focus:border-[#0EA5A5] transition-all placeholder:text-white/30"
                        />
                      ) : (
                        <p className="text-white font-bold text-lg flex items-center gap-2">
                          <Phone size={16} className="text-[#0EA5A5]" />
                          {formData.phone}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <label className="text-[10px] font-black uppercase text-white/30 tracking-widest">Business Location</label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="Enter your business location"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-bold focus:outline-none focus:border-[#0EA5A5] transition-all placeholder:text-white/30"
                        />
                      ) : (
                        <p className="text-white font-bold text-lg flex items-center gap-2">
                          <MapPin size={16} className="text-[#0EA5A5]" />
                          {formData.location}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* CV UPLOAD */}
                <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-md">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-[#FF7A00]/10 rounded-lg text-[#FF7A00]">
                      <FileText size={20} />
                    </div>
                    <h3 className="text-[11px] font-black uppercase tracking-[0.4em]">Company Documents</h3>
                  </div>

                  <label className="relative group cursor-pointer block">
                    <input 
                      type="file" 
                      className="hidden" 
                      accept=".pdf"
                      onChange={handleCvUpload}
                    />
                    <div className={`border-2 border-dashed rounded-3xl p-8 transition-all flex flex-col items-center justify-center text-center gap-3 ${
                      cvFile ? 'border-[#FF7A00] bg-[#FF7A00]/5' : 'border-white/10 bg-white/5 hover:border-[#FF7A00]/40 hover:bg-white/[0.07]'
                    }`}>
                      <UploadCloud size={32} className={cvFile ? 'text-[#FF7A00]' : 'text-white/20'} />
                      <div>
                        <p className="text-sm font-bold tracking-tight">
                          {cvFile ? cvFile : 'Upload Company Documents'}
                        </p>
                        <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest mt-1">
                          PDF Format Only (Max 5MB)
                        </p>
                      </div>
                    </div>
                  </label>
                </div>
              </>
            )}

            {/* ACCOUNT STATISTICS */}
            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 backdrop-blur-md">
              <div className="flex items-center gap-3 mb-8">
                <div className={`p-2 ${accountType === 'personal' ? 'bg-[#FF7A00]/10 text-[#FF7A00]' : 'bg-[#0EA5A5]/10 text-[#0EA5A5]'}`}>
                  <Calendar size={20} />
                </div>
                <h3 className="text-[11px] font-black uppercase tracking-[0.4em]">Account Statistics</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 text-center">
                  <p className={`text-3xl font-black italic ${accountType === 'personal' ? 'text-[#0EA5A5]' : 'text-[#FF7A00]'}`}>
                    {accountType === 'personal' ? '42' : '892'}
                  </p>
                  <p className="text-[10px] font-black uppercase text-white/30 tracking-widest mt-2">
                    {accountType === 'personal' ? 'Matched Pairs' : 'Active Applicants'}
                  </p>
                </div>
                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 text-center">
                  <p className="text-3xl font-black italic text-white">1.2k</p>
                  <p className="text-[10px] font-black uppercase text-white/30 tracking-widest mt-2">Profile Views</p>
                </div>
                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 text-center">
                  <p className="text-3xl font-black italic text-[#FF7A00]">98</p>
                  <p className="text-[10px] font-black uppercase text-white/30 tracking-widest mt-2">Forge Score</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
