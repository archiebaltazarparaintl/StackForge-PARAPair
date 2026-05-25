'use client';

import { useState } from 'react';
import { Search, X, Filter, MapPin, DollarSign, Building2, User } from 'lucide-react';
import { Exo_2 } from 'next/font/google';
import BottomNav from '@/components/shared/BottomNav';

const exo2 = Exo_2({ subsets: ['latin'], weight: ['400', '700', '800'] });

const MOCK_RESULTS = [
  { id: '1', name: 'Maya L.', role: 'Graphic Designer', type: 'individual', location: 'San Francisco, CA', rate: '$75/hr', skills: ['Design', 'Branding', 'UI/UX'] },
  { id: '2', name: 'StackForge', role: 'Enterprise Agency', type: 'business', location: 'Remote', rate: '$150k+', skills: ['Cloud', 'AI', 'Security'] },
  { id: '3', name: 'Sarah Chen', role: 'UI/UX Lead', type: 'individual', location: 'New York, NY', rate: '$95/hr', skills: ['Design', 'Research', 'Prototyping'] },
  { id: '4', name: 'TechCorp', role: 'Startup', type: 'business', location: 'Austin, TX', rate: '$80k+', skills: ['Web', 'Mobile', 'DevOps'] },
];

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [typeFilter, setTypeFilter] = useState<'all' | 'individual' | 'business'>('all');

  const filteredResults = MOCK_RESULTS.filter(item => {
    const matchesQuery = item.name.toLowerCase().includes(query.toLowerCase()) ||
                         item.role.toLowerCase().includes(query.toLowerCase()) ||
                         item.skills.some(skill => skill.toLowerCase().includes(query.toLowerCase()));
    const matchesType = typeFilter === 'all' || item.type === typeFilter;
    return matchesQuery && matchesType;
  });

  return (
    <div className={`${exo2.className} min-h-screen bg-[#F3F6F9] text-[#0D1B2A] pb-32`}>
      {/* HEADER */}
      <header className="bg-white border-b border-slate-200 px-6 py-6 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-[800] italic tracking-tighter uppercase mb-6">
            Search <span className="text-[#0EA5A5]">Forge</span>
          </h1>

          {/* SEARCH BAR */}
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for professionals, businesses, skills..."
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-12 py-4 text-[#0D1B2A] placeholder:text-slate-400 focus:outline-none focus:border-[#0EA5A5] focus:ring-2 focus:ring-[#0EA5A5]/20 transition-all"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#0D1B2A] transition-colors"
              >
                <X size={20} />
              </button>
            )}
          </div>

          {/* FILTER BUTTON */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-slate-100 transition-all"
            >
              <Filter size={16} />
              Filters
            </button>

            {/* TYPE FILTER */}
            <div className="flex gap-2">
              {['all', 'individual', 'business'].map((type) => (
                <button
                  key={type}
                  onClick={() => setTypeFilter(type as any)}
                  className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                    typeFilter === type ? 'bg-[#0D1B2A] text-white' : 'bg-slate-100 text-slate-400'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* RESULTS */}
      <main className="max-w-4xl mx-auto p-6">
        <div className="flex items-center justify-between mb-6">
          <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
            {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''} found
          </p>
        </div>

        <div className="space-y-4">
          {filteredResults.map((result) => (
            <div key={result.id} className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-[#0EA5A5]/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0EA5A5] to-[#0D1B2A] flex items-center justify-center text-white font-black text-xl">
                  {result.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-black uppercase tracking-tight">{result.name}</h3>
                    {result.type === 'individual' ? (
                      <User size={16} className="text-[#0EA5A5]" />
                    ) : (
                      <Building2 size={16} className="text-[#FF7A00]" />
                    )}
                  </div>
                  <p className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-3">{result.role}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {result.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-slate-50 text-slate-600 text-[10px] font-black uppercase tracking-wider rounded-lg">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {result.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign size={12} />
                      {result.rate}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filteredResults.length === 0 && (
            <div className="text-center py-20 opacity-20 grayscale">
              <Search size={64} className="mx-auto mb-4" />
              <p className="font-black uppercase tracking-[0.4em] text-sm">No Results Found</p>
            </div>
          )}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
