'use client';

import { useState } from 'react';
import { 
  Plus, Search, Filter, MoreVertical, Edit2, Trash2, 
  Eye, Pause, Play, Calendar, MapPin, DollarSign,
  ChevronDown, X
} from 'lucide-react';

type ListingStatus = 'active' | 'paused' | 'draft';

interface Listing {
  id: string;
  title: string;
  location: string;
  salary: string;
  status: ListingStatus;
  applicants: number;
  views: number;
  postedDate: string;
  category: string;
}

const mockListings: Listing[] = [
  {
    id: '1',
    title: 'Senior Frontend Architect',
    location: 'San Francisco, CA',
    salary: '$150k - $200k',
    status: 'active',
    applicants: 24,
    views: 1240,
    postedDate: '2 days ago',
    category: 'Engineering'
  },
  {
    id: '2',
    title: 'Cloud Infrastructure Lead',
    location: 'Remote',
    salary: '$140k - $180k',
    status: 'active',
    applicants: 18,
    views: 890,
    postedDate: '5 days ago',
    category: 'Engineering'
  },
  {
    id: '3',
    title: 'Product Design Director',
    location: 'New York, NY',
    salary: '$160k - $220k',
    status: 'paused',
    applicants: 32,
    views: 2100,
    postedDate: '1 week ago',
    category: 'Design'
  },
  {
    id: '4',
    title: 'Data Science Manager',
    location: 'Austin, TX',
    salary: '$130k - $170k',
    status: 'draft',
    applicants: 0,
    views: 0,
    postedDate: '3 days ago',
    category: 'Data'
  },
  {
    id: '5',
    title: 'DevOps Engineer',
    location: 'Seattle, WA',
    salary: '$120k - $160k',
    status: 'active',
    applicants: 15,
    views: 780,
    postedDate: '4 days ago',
    category: 'Engineering'
  },
];

export default function BusinessDashboard() {
  const [listings, setListings] = useState<Listing[]>(mockListings);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<ListingStatus | 'all'>('all');
  const [showModal, setShowModal] = useState(false);
  const [editingListing, setEditingListing] = useState<Listing | null>(null);
  const [showDropdown, setShowDropdown] = useState<string | null>(null);

  const filteredListings = listings.filter(listing => {
    const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         listing.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || listing.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: ListingStatus) => {
    switch (status) {
      case 'active':
        return 'text-[#0EA5A5] bg-[#0EA5A5]/10';
      case 'paused':
        return 'text-yellow-400 bg-yellow-400/10';
      case 'draft':
        return 'text-white/40 bg-white/5';
    }
  };

  const handleStatusToggle = (id: string) => {
    setListings(listings.map(listing => 
      listing.id === id 
        ? { ...listing, status: listing.status === 'active' ? 'paused' : 'active' }
        : listing
    ));
  };

  const handleDelete = (id: string) => {
    setListings(listings.filter(listing => listing.id !== id));
    setShowDropdown(null);
  };

  const handleEdit = (listing: Listing) => {
    setEditingListing(listing);
    setShowModal(true);
    setShowDropdown(null);
  };

  const handleCreate = () => {
    setEditingListing(null);
    setShowModal(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black italic uppercase tracking-tight text-white">Listings</h2>
          <p className="text-[10px] font-bold uppercase text-white/40 tracking-widest mt-1">
            {listings.length} Total Listings
          </p>
        </div>
        <button
          onClick={handleCreate}
          className="flex items-center gap-2 bg-[#FF7A00] text-white px-6 py-3 rounded-2xl font-bold uppercase tracking-wider hover:scale-105 transition-all shadow-xl shadow-[#FF7A00]/20"
        >
          <Plus size={20} strokeWidth={3} />
          Create Listing
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={20} />
          <input
            type="text"
            placeholder="Search listings..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#FF7A00]/50 transition-all"
          />
        </div>
        <div className="flex gap-2">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as ListingStatus | 'all')}
            className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white uppercase tracking-wider text-sm font-bold focus:outline-none focus:border-[#FF7A00]/50 transition-all cursor-pointer"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="paused">Paused</option>
            <option value="draft">Draft</option>
          </select>
        </div>
      </div>

      {/* Listings Table */}
      <div className="bg-white/5 border border-white/10 rounded-[40px] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-6 text-[10px] font-black uppercase text-white/40 tracking-widest">
                  Listing
                </th>
                <th className="text-left p-6 text-[10px] font-black uppercase text-white/40 tracking-widest">
                  Status
                </th>
                <th className="text-left p-6 text-[10px] font-black uppercase text-white/40 tracking-widest">
                  Applicants
                </th>
                <th className="text-left p-6 text-[10px] font-black uppercase text-white/40 tracking-widest">
                  Views
                </th>
                <th className="text-left p-6 text-[10px] font-black uppercase text-white/40 tracking-widest">
                  Posted
                </th>
                <th className="text-right p-6 text-[10px] font-black uppercase text-white/40 tracking-widest">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredListings.map((listing) => (
                <tr 
                  key={listing.id}
                  className="border-b border-white/5 hover:bg-white/[0.02] transition-all group"
                >
                  <td className="p-6">
                    <div>
                      <h4 className="font-bold text-lg uppercase tracking-tight text-white">
                        {listing.title}
                      </h4>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="flex items-center gap-1 text-[10px] font-black text-white/40 uppercase tracking-widest">
                          <MapPin size={12} />
                          {listing.location}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-white/10" />
                        <span className="flex items-center gap-1 text-[10px] font-black text-[#FF7A00] uppercase tracking-widest">
                          <DollarSign size={12} />
                          {listing.salary}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="p-6">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${getStatusColor(listing.status)}`}>
                      {listing.status === 'active' && <Play size={10} fill="currentColor" />}
                      {listing.status === 'paused' && <Pause size={10} fill="currentColor" />}
                      {listing.status === 'draft' && <Calendar size={10} />}
                      {listing.status}
                    </span>
                  </td>
                  <td className="p-6">
                    <span className="text-2xl font-black italic tracking-tighter text-white">
                      {listing.applicants}
                    </span>
                  </td>
                  <td className="p-6">
                    <span className="text-2xl font-black italic tracking-tighter text-white/60">
                      {listing.views}
                    </span>
                  </td>
                  <td className="p-6">
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-widest italic">
                      {listing.postedDate}
                    </span>
                  </td>
                  <td className="p-6">
                    <div className="relative">
                      <button
                        onClick={() => setShowDropdown(showDropdown === listing.id ? null : listing.id)}
                        className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/20 hover:text-white hover:bg-white/10 transition-all"
                      >
                        <MoreVertical size={20} />
                      </button>
                      {showDropdown === listing.id && (
                        <div className="absolute right-0 top-full mt-2 w-48 bg-[#0D1B2A] border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden">
                          <button
                            onClick={() => handleEdit(listing)}
                            className="w-full flex items-center gap-3 px-4 py-3 text-left text-white/60 hover:text-white hover:bg-white/5 transition-all text-sm font-bold uppercase tracking-wider"
                          >
                            <Edit2 size={16} />
                            Edit
                          </button>
                          <button
                            onClick={() => handleStatusToggle(listing.id)}
                            className="w-full flex items-center gap-3 px-4 py-3 text-left text-white/60 hover:text-white hover:bg-white/5 transition-all text-sm font-bold uppercase tracking-wider"
                          >
                            {listing.status === 'active' ? (
                              <>
                                <Pause size={16} />
                                Pause
                              </>
                            ) : (
                              <>
                                <Play size={16} />
                                Activate
                              </>
                            )}
                          </button>
                          <button
                            onClick={() => handleDelete(listing.id)}
                            className="w-full flex items-center gap-3 px-4 py-3 text-left text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all text-sm font-bold uppercase tracking-wider"
                          >
                            <Trash2 size={16} />
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredListings.length === 0 && (
          <div className="p-12 text-center">
            <p className="text-white/40 text-sm font-bold uppercase tracking-widest">
              No listings found
            </p>
          </div>
        )}
      </div>

      {/* Create/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#0D1B2A] border border-white/10 rounded-[40px] w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-8 border-b border-white/10 flex items-center justify-between">
              <h3 className="text-2xl font-black italic uppercase tracking-tight text-white">
                {editingListing ? 'Edit Listing' : 'Create Listing'}
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/20 hover:text-white hover:bg-white/10 transition-all"
              >
                <X size={20} />
              </button>
            </div>
            
            <form className="p-8 space-y-6">
              <div>
                <label className="block text-[10px] font-black uppercase text-white/40 tracking-widest mb-2">
                  Job Title
                </label>
                <input
                  type="text"
                  defaultValue={editingListing?.title || ''}
                  placeholder="e.g., Senior Frontend Architect"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#FF7A00]/50 transition-all"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black uppercase text-white/40 tracking-widest mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    defaultValue={editingListing?.location || ''}
                    placeholder="e.g., San Francisco, CA"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#FF7A00]/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase text-white/40 tracking-widest mb-2">
                    Salary Range
                  </label>
                  <input
                    type="text"
                    defaultValue={editingListing?.salary || ''}
                    placeholder="e.g., $150k - $200k"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#FF7A00]/50 transition-all"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-[10px] font-black uppercase text-white/40 tracking-widest mb-2">
                  Category
                </label>
                <select
                  defaultValue={editingListing?.category || ''}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-[#FF7A00]/50 transition-all cursor-pointer"
                >
                  <option value="">Select category</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Design">Design</option>
                  <option value="Data">Data</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Sales">Sales</option>
                </select>
              </div>
              
              <div>
                <label className="block text-[10px] font-black uppercase text-white/40 tracking-widest mb-2">
                  Status
                </label>
                <select
                  defaultValue={editingListing?.status || 'draft'}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-[#FF7A00]/50 transition-all cursor-pointer"
                >
                  <option value="draft">Draft</option>
                  <option value="active">Active</option>
                  <option value="paused">Paused</option>
                </select>
              </div>
              
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 bg-white/5 border border-white/10 text-white px-6 py-3 rounded-2xl font-bold uppercase tracking-wider hover:bg-white/10 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-[#FF7A00] text-white px-6 py-3 rounded-2xl font-bold uppercase tracking-wider hover:scale-105 transition-all shadow-xl shadow-[#FF7A00]/20"
                >
                  {editingListing ? 'Update' : 'Create'} Listing
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}