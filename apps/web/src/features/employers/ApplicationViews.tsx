'use client';

import React, { useState } from 'react';
import { Search, Filter, Check, X, Eye, Clock, Mail, Phone, Calendar, MapPin, Briefcase, Star, ChevronDown, MoreVertical } from 'lucide-react';
import { Exo_2 } from 'next/font/google';

const exo2 = Exo_2({ subsets: ['latin'], weight: ['400', '700', '800'] });

interface Application {
  id: string;
  applicantName: string;
  applicantEmail: string;
  applicantPhone: string;
  jobTitle: string;
  status: 'pending' | 'reviewed' | 'accepted' | 'rejected';
  appliedDate: string;
  experience: string;
  skills: string[];
  coverLetter: string;
  resume?: string;
  rating?: number;
}

interface ApplicationViewsProps {
  applications: Application[];
}

export default function ApplicationViews({ applications }: ApplicationViewsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
  const [showDropdown, setShowDropdown] = useState<string | null>(null);

  const filteredApplications = applications.filter(app => {
    const matchesSearch = app.applicantName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         app.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         app.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesStatus = statusFilter === 'all' || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'accepted':
        return 'text-[#0EA5A5] bg-[#0EA5A5]/10 border-[#0EA5A5]/20';
      case 'rejected':
        return 'text-red-500 bg-red-500/10 border-red-500/20';
      case 'reviewed':
        return 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20';
      case 'pending':
      default:
        return 'text-slate-500 bg-slate-500/10 border-slate-500/20';
    }
  };

  const handleStatusChange = (applicationId: string, newStatus: Application['status']) => {
    console.log(`Changing status for application ${applicationId} to ${newStatus}`);
    // Here you would typically update the status via API
  };

  const statusCounts = {
    all: applications.length,
    pending: applications.filter(a => a.status === 'pending').length,
    reviewed: applications.filter(a => a.status === 'reviewed').length,
    accepted: applications.filter(a => a.status === 'accepted').length,
    rejected: applications.filter(a => a.status === 'rejected').length,
  };

  return (
    <div className={`${exo2.className} space-y-6`}>
      {/* STATS CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[
          { label: 'All', count: statusCounts.all, color: 'bg-[#0D1B2A]' },
          { label: 'Pending', count: statusCounts.pending, color: 'bg-slate-500' },
          { label: 'Reviewed', count: statusCounts.reviewed, color: 'bg-yellow-500' },
          { label: 'Accepted', count: statusCounts.accepted, color: 'bg-[#0EA5A5]' },
          { label: 'Rejected', count: statusCounts.rejected, color: 'bg-red-500' },
        ].map((stat) => (
          <div
            key={stat.label}
            className={`${stat.color} rounded-2xl p-5 text-white`}
          >
            <p className="text-3xl font-black">{stat.count}</p>
            <p className="text-[10px] font-bold uppercase tracking-wider mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* SEARCH AND FILTERS */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Search applications..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-2xl pl-12 pr-4 py-4 text-[#0D1B2A] placeholder:text-slate-400 focus:outline-none focus:border-[#FF7A00] focus:ring-4 focus:ring-[#FF7A00]/10 transition-all"
          />
        </div>
        <div className="flex gap-2">
          {['all', 'pending', 'reviewed', 'accepted', 'rejected'].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                statusFilter === status
                  ? 'bg-[#0D1B2A] text-white'
                  : 'bg-white text-slate-500 border border-slate-200 hover:border-[#FF7A00]'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* APPLICATIONS LIST */}
      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left p-6 text-[10px] font-black uppercase text-slate-500 tracking-wider">
                  Applicant
                </th>
                <th className="text-left p-6 text-[10px] font-black uppercase text-slate-500 tracking-wider">
                  Job
                </th>
                <th className="text-left p-6 text-[10px] font-black uppercase text-slate-500 tracking-wider">
                  Skills
                </th>
                <th className="text-left p-6 text-[10px] font-black uppercase text-slate-500 tracking-wider">
                  Applied
                </th>
                <th className="text-left p-6 text-[10px] font-black uppercase text-slate-500 tracking-wider">
                  Status
                </th>
                <th className="text-right p-6 text-[10px] font-black uppercase text-slate-500 tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredApplications.map((application) => (
                <tr
                  key={application.id}
                  className="border-b border-slate-100 hover:bg-slate-50 transition-all"
                >
                  <td className="p-6">
                    <div>
                      <h4 className="font-bold text-lg text-[#0D1B2A]">{application.applicantName}</h4>
                      <div className="flex items-center gap-3 mt-1 text-sm text-slate-500">
                        <span className="flex items-center gap-1">
                          <Mail size={12} />
                          {application.applicantEmail}
                        </span>
                        <span className="flex items-center gap-1">
                          <Phone size={12} />
                          {application.applicantPhone}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} className="text-slate-400" />
                      <span className="font-medium text-[#0D1B2A]">{application.jobTitle}</span>
                    </div>
                    <p className="text-sm text-slate-500 mt-1">{application.experience}</p>
                  </td>
                  <td className="p-6">
                    <div className="flex flex-wrap gap-1">
                      {application.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase rounded"
                        >
                          {skill}
                        </span>
                      ))}
                      {application.skills.length > 3 && (
                        <span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase rounded">
                          +{application.skills.length - 3}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="p-6">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Calendar size={14} />
                      <span className="font-medium">{application.appliedDate}</span>
                    </div>
                  </td>
                  <td className="p-6">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider border ${getStatusColor(application.status)}`}
                    >
                      {application.status === 'accepted' && <Check size={10} />}
                      {application.status === 'rejected' && <X size={10} />}
                      {application.status === 'reviewed' && <Eye size={10} />}
                      {application.status === 'pending' && <Clock size={10} />}
                      {application.status}
                    </span>
                  </td>
                  <td className="p-6">
                    <div className="relative">
                      <button
                        onClick={() => setShowDropdown(showDropdown === application.id ? null : application.id)}
                        className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 hover:text-[#0D1B2A] hover:bg-slate-200 transition-all"
                      >
                        <MoreVertical size={20} />
                      </button>
                      {showDropdown === application.id && (
                        <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-slate-200 rounded-2xl shadow-xl z-50 overflow-hidden">
                          <button
                            onClick={() => {
                              setSelectedApplication(application);
                              setShowDropdown(null);
                            }}
                            className="w-full flex items-center gap-3 px-4 py-3 text-left text-slate-600 hover:text-[#0D1B2A] hover:bg-slate-50 transition-all text-sm font-bold uppercase tracking-wider"
                          >
                            <Eye size={16} />
                            View Details
                          </button>
                          <button
                            onClick={() => {
                              handleStatusChange(application.id, 'reviewed');
                              setShowDropdown(null);
                            }}
                            className="w-full flex items-center gap-3 px-4 py-3 text-left text-slate-600 hover:text-yellow-500 hover:bg-yellow-50 transition-all text-sm font-bold uppercase tracking-wider"
                          >
                            <Eye size={16} />
                            Mark Reviewed
                          </button>
                          <button
                            onClick={() => {
                              handleStatusChange(application.id, 'accepted');
                              setShowDropdown(null);
                            }}
                            className="w-full flex items-center gap-3 px-4 py-3 text-left text-slate-600 hover:text-[#0EA5A5] hover:bg-[#0EA5A5]/10 transition-all text-sm font-bold uppercase tracking-wider"
                          >
                            <Check size={16} />
                            Accept
                          </button>
                          <button
                            onClick={() => {
                              handleStatusChange(application.id, 'rejected');
                              setShowDropdown(null);
                            }}
                            className="w-full flex items-center gap-3 px-4 py-3 text-left text-red-500 hover:text-red-600 hover:bg-red-50 transition-all text-sm font-bold uppercase tracking-wider"
                          >
                            <X size={16} />
                            Reject
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

        {filteredApplications.length === 0 && (
          <div className="p-12 text-center">
            <Briefcase size={64} className="text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500 font-bold uppercase tracking-wider">
              No applications found
            </p>
          </div>
        )}
      </div>

      {/* APPLICATION DETAIL MODAL */}
      {selectedApplication && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-[40px] w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 bg-white border-b border-slate-200 px-8 py-6 flex items-center justify-between z-10">
              <h2 className="text-2xl font-[800] italic tracking-tighter uppercase text-[#0D1B2A]">
                Application <span className="text-[#FF7A00]">Details</span>
              </h2>
              <button
                onClick={() => setSelectedApplication(null)}
                className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 hover:text-[#0D1B2A] hover:bg-slate-200 transition-all"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-8 space-y-8">
              {/* APPLICANT INFO */}
              <div className="bg-slate-50 rounded-2xl p-6">
                <h3 className="text-sm font-black uppercase text-slate-500 tracking-wider mb-4">Applicant Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-1">Name</p>
                    <p className="text-lg font-bold text-[#0D1B2A]">{selectedApplication.applicantName}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-1">Email</p>
                    <p className="text-sm font-medium text-[#0D1B2A]">{selectedApplication.applicantEmail}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-1">Phone</p>
                    <p className="text-sm font-medium text-[#0D1B2A]">{selectedApplication.applicantPhone}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-1">Experience</p>
                    <p className="text-sm font-medium text-[#0D1B2A]">{selectedApplication.experience}</p>
                  </div>
                </div>
              </div>

              {/* JOB INFO */}
              <div className="bg-slate-50 rounded-2xl p-6">
                <h3 className="text-sm font-black uppercase text-slate-500 tracking-wider mb-4">Applied For</h3>
                <div className="flex items-center gap-3">
                  <Briefcase size={24} className="text-[#FF7A00]" />
                  <p className="text-xl font-bold text-[#0D1B2A]">{selectedApplication.jobTitle}</p>
                </div>
                <div className="flex items-center gap-2 mt-2 text-sm text-slate-500">
                  <Calendar size={16} />
                  <span>Applied {selectedApplication.appliedDate}</span>
                </div>
              </div>

              {/* SKILLS */}
              <div className="bg-slate-50 rounded-2xl p-6">
                <h3 className="text-sm font-black uppercase text-slate-500 tracking-wider mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedApplication.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-[#0EA5A5]/10 text-[#0EA5A5] rounded-xl text-sm font-bold uppercase"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* COVER LETTER */}
              <div className="bg-slate-50 rounded-2xl p-6">
                <h3 className="text-sm font-black uppercase text-slate-500 tracking-wider mb-4">Cover Letter</h3>
                <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap">
                  {selectedApplication.coverLetter}
                </p>
              </div>

              {/* ACTIONS */}
              <div className="flex gap-4 pt-4 border-t border-slate-200">
                <button
                  onClick={() => {
                    handleStatusChange(selectedApplication.id, 'rejected');
                    setSelectedApplication(null);
                  }}
                  className="flex-1 px-6 py-4 bg-red-500 text-white rounded-2xl font-bold uppercase tracking-wider hover:bg-red-600 transition-all"
                >
                  Reject
                </button>
                <button
                  onClick={() => {
                    handleStatusChange(selectedApplication.id, 'reviewed');
                    setSelectedApplication(null);
                  }}
                  className="flex-1 px-6 py-4 bg-yellow-500 text-white rounded-2xl font-bold uppercase tracking-wider hover:bg-yellow-600 transition-all"
                >
                  Mark Reviewed
                </button>
                <button
                  onClick={() => {
                    handleStatusChange(selectedApplication.id, 'accepted');
                    setSelectedApplication(null);
                  }}
                  className="flex-1 px-6 py-4 bg-[#0EA5A5] text-white rounded-2xl font-bold uppercase tracking-wider hover:bg-[#0EA5A5]/90 transition-all"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
