'use client';

import React, { useState } from 'react';
import { X, Plus, Trash2, MapPin, DollarSign, Briefcase, Clock } from 'lucide-react';
import { Exo_2 } from 'next/font/google';

const exo2 = Exo_2({ subsets: ['latin'], weight: ['400', '700', '800'] });

interface PostJobFormProps {
  onClose: () => void;
}

export default function PostJobForm({ onClose }: PostJobFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    salaryMin: '',
    salaryMax: '',
    employmentType: 'full-time',
    experienceLevel: 'mid-senior',
    skills: [] as string[],
    requirements: [] as string[],
    benefits: [] as string[],
  });

  const [newSkill, setNewSkill] = useState('');
  const [newRequirement, setNewRequirement] = useState('');
  const [newBenefit, setNewBenefit] = useState('');

  const addSkill = () => {
    if (newSkill.trim()) {
      setFormData({ ...formData, skills: [...formData.skills, newSkill.trim()] });
      setNewSkill('');
    }
  };

  const removeSkill = (index: number) => {
    setFormData({ ...formData, skills: formData.skills.filter((_, i) => i !== index) });
  };

  const addRequirement = () => {
    if (newRequirement.trim()) {
      setFormData({ ...formData, requirements: [...formData.requirements, newRequirement.trim()] });
      setNewRequirement('');
    }
  };

  const removeRequirement = (index: number) => {
    setFormData({ ...formData, requirements: formData.requirements.filter((_, i) => i !== index) });
  };

  const addBenefit = () => {
    if (newBenefit.trim()) {
      setFormData({ ...formData, benefits: [...formData.benefits, newBenefit.trim()] });
      setNewBenefit('');
    }
  };

  const removeBenefit = (index: number) => {
    setFormData({ ...formData, benefits: formData.benefits.filter((_, i) => i !== index) });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Job posting data:', formData);
    // Here you would typically send the data to your API
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className={`${exo2.className} bg-white rounded-[40px] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl`}>
        {/* HEADER */}
        <div className="sticky top-0 bg-white border-b border-slate-200 px-8 py-6 flex items-center justify-between z-10">
          <div>
            <h2 className="text-2xl font-[800] italic tracking-tighter uppercase text-[#0D1B2A]">
              Post a <span className="text-[#FF7A00]">Job</span>
            </h2>
            <p className="text-sm text-slate-500 font-medium mt-1">Create a new job posting</p>
          </div>
          <button
            onClick={onClose}
            className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 hover:text-[#0D1B2A] hover:bg-slate-200 transition-all"
          >
            <X size={24} />
          </button>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          {/* JOB TITLE */}
          <div>
            <label className="block text-xs font-black uppercase text-slate-500 tracking-wider mb-2">
              Job Title *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="e.g., Senior Frontend Developer"
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-[#0D1B2A] placeholder:text-slate-400 focus:outline-none focus:border-[#FF7A00] focus:ring-4 focus:ring-[#FF7A00]/10 transition-all"
              required
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="block text-xs font-black uppercase text-slate-500 tracking-wider mb-2">
              Job Description *
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Describe the role, responsibilities, and what makes this opportunity exciting..."
              rows={6}
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-[#0D1B2A] placeholder:text-slate-400 focus:outline-none focus:border-[#FF7A00] focus:ring-4 focus:ring-[#FF7A00]/10 transition-all resize-none"
              required
            />
          </div>

          {/* LOCATION & SALARY */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs font-black uppercase text-slate-500 tracking-wider mb-2">
                Location *
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g., San Francisco, CA"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-5 py-4 text-[#0D1B2A] placeholder:text-slate-400 focus:outline-none focus:border-[#FF7A00] focus:ring-4 focus:ring-[#FF7A00]/10 transition-all"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-black uppercase text-slate-500 tracking-wider mb-2">
                Min Salary *
              </label>
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="text"
                  value={formData.salaryMin}
                  onChange={(e) => setFormData({ ...formData, salaryMin: e.target.value })}
                  placeholder="e.g., 150000"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-5 py-4 text-[#0D1B2A] placeholder:text-slate-400 focus:outline-none focus:border-[#FF7A00] focus:ring-4 focus:ring-[#FF7A00]/10 transition-all"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-black uppercase text-slate-500 tracking-wider mb-2">
                Max Salary *
              </label>
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="text"
                  value={formData.salaryMax}
                  onChange={(e) => setFormData({ ...formData, salaryMax: e.target.value })}
                  placeholder="e.g., 200000"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-5 py-4 text-[#0D1B2A] placeholder:text-slate-400 focus:outline-none focus:border-[#FF7A00] focus:ring-4 focus:ring-[#FF7A00]/10 transition-all"
                  required
                />
              </div>
            </div>
          </div>

          {/* EMPLOYMENT TYPE & EXPERIENCE LEVEL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-black uppercase text-slate-500 tracking-wider mb-2">
                Employment Type *
              </label>
              <select
                value={formData.employmentType}
                onChange={(e) => setFormData({ ...formData, employmentType: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-[#0D1B2A] focus:outline-none focus:border-[#FF7A00] focus:ring-4 focus:ring-[#FF7A00]/10 transition-all cursor-pointer"
                required
              >
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-black uppercase text-slate-500 tracking-wider mb-2">
                Experience Level *
              </label>
              <select
                value={formData.experienceLevel}
                onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-[#0D1B2A] focus:outline-none focus:border-[#FF7A00] focus:ring-4 focus:ring-[#FF7A00]/10 transition-all cursor-pointer"
                required
              >
                <option value="entry">Entry Level</option>
                <option value="mid">Mid Level</option>
                <option value="mid-senior">Mid-Senior</option>
                <option value="senior">Senior</option>
                <option value="lead">Lead</option>
                <option value="executive">Executive</option>
              </select>
            </div>
          </div>

          {/* SKILLS */}
          <div>
            <label className="block text-xs font-black uppercase text-slate-500 tracking-wider mb-2">
              Required Skills *
            </label>
            <div className="flex gap-3 mb-3">
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                placeholder="Add a skill (e.g., React, TypeScript)"
                className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-[#0D1B2A] placeholder:text-slate-400 focus:outline-none focus:border-[#FF7A00] focus:ring-4 focus:ring-[#FF7A00]/10 transition-all"
              />
              <button
                type="button"
                onClick={addSkill}
                className="px-6 py-4 bg-[#0D1B2A] text-white rounded-2xl font-bold uppercase tracking-wider hover:bg-[#FF7A00] transition-all flex items-center gap-2"
              >
                <Plus size={20} />
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#0EA5A5]/10 text-[#0EA5A5] rounded-full text-sm font-bold uppercase"
                >
                  {skill}
                  <button
                    type="button"
                    onClick={() => removeSkill(index)}
                    className="hover:text-red-500 transition-colors"
                  >
                    <X size={14} />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* REQUIREMENTS */}
          <div>
            <label className="block text-xs font-black uppercase text-slate-500 tracking-wider mb-2">
              Requirements *
            </label>
            <div className="flex gap-3 mb-3">
              <input
                type="text"
                value={newRequirement}
                onChange={(e) => setNewRequirement(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addRequirement())}
                placeholder="Add a requirement (e.g., 5+ years experience)"
                className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-[#0D1B2A] placeholder:text-slate-400 focus:outline-none focus:border-[#FF7A00] focus:ring-4 focus:ring-[#FF7A00]/10 transition-all"
              />
              <button
                type="button"
                onClick={addRequirement}
                className="px-6 py-4 bg-[#0D1B2A] text-white rounded-2xl font-bold uppercase tracking-wider hover:bg-[#FF7A00] transition-all flex items-center gap-2"
              >
                <Plus size={20} />
                Add
              </button>
            </div>
            <div className="space-y-2">
              {formData.requirements.map((requirement, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between px-4 py-3 bg-slate-50 rounded-xl"
                >
                  <span className="text-sm font-medium text-[#0D1B2A]">{requirement}</span>
                  <button
                    type="button"
                    onClick={() => removeRequirement(index)}
                    className="text-slate-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* BENEFITS */}
          <div>
            <label className="block text-xs font-black uppercase text-slate-500 tracking-wider mb-2">
              Benefits
            </label>
            <div className="flex gap-3 mb-3">
              <input
                type="text"
                value={newBenefit}
                onChange={(e) => setNewBenefit(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addBenefit())}
                placeholder="Add a benefit (e.g., Health insurance, Remote work)"
                className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-[#0D1B2A] placeholder:text-slate-400 focus:outline-none focus:border-[#FF7A00] focus:ring-4 focus:ring-[#FF7A00]/10 transition-all"
              />
              <button
                type="button"
                onClick={addBenefit}
                className="px-6 py-4 bg-[#0D1B2A] text-white rounded-2xl font-bold uppercase tracking-wider hover:bg-[#FF7A00] transition-all flex items-center gap-2"
              >
                <Plus size={20} />
                Add
              </button>
            </div>
            <div className="space-y-2">
              {formData.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between px-4 py-3 bg-slate-50 rounded-xl"
                >
                  <span className="text-sm font-medium text-[#0D1B2A]">{benefit}</span>
                  <button
                    type="button"
                    onClick={() => removeBenefit(index)}
                    className="text-slate-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* SUBMIT BUTTONS */}
          <div className="flex gap-4 pt-4 border-t border-slate-200">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-4 bg-slate-100 text-[#0D1B2A] rounded-2xl font-bold uppercase tracking-wider hover:bg-slate-200 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-4 bg-[#FF7A00] text-white rounded-2xl font-bold uppercase tracking-wider hover:scale-105 transition-all shadow-xl shadow-[#FF7A00]/20"
            >
              Post Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
