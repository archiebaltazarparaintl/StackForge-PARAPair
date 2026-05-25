// Inside SwipeFeed's SwipeCard component
<motion.div
  style={{ x, rotate, willChange: "transform" }}
  animate={controls}
  drag="x"
  dragConstraints={{ left: 0, right: 0 }}
  onDragEnd={onDragEnd}
  /* 
     PREMIUM LOGIC: Conditional border color and ring intensity 
     If item.isPremium is true, we apply a subtle Orange glow.
  */
  className={`absolute inset-0 bg-white rounded-[42px] shadow-[0_30px_60px_rgba(0,0,0,0.06)] border overflow-hidden flex flex-col cursor-grab active:cursor-grabbing transition-colors duration-500 ${
    item.isPremium 
      ? 'border-[#FF7A00] ring-4 ring-[#FF7A00]/5' 
      : 'border-[#E1E8ED]'
  }`}
>
  {/* PREMIUM OVERLAY: Elite Partner Badge */}
  {item.isPremium && (
    <div className="absolute top-4 right-4 z-30 bg-gradient-to-r from-[#FF7A00] to-[#FFB547] text-white text-[8px] font-black uppercase px-3 py-1 rounded-full shadow-lg flex items-center gap-1 tracking-widest animate-pulse">
      <Crown size={10} fill="currentColor" /> Elite Partner
    </div>
  )}

  {/* IMAGE SECTION */}
  <div className="relative h-[340px] pointer-events-none">
    <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
    
    {/* IDENTITY TYPE BADGE: Dynamic Talent vs Enterprise marker */}
    <div className="absolute bottom-5 left-5 z-20">
        <div className={`px-3 py-1.5 rounded-2xl text-[8px] font-black uppercase tracking-widest text-white shadow-lg flex items-center gap-1.5 backdrop-blur-md ${
          item.type === 'talent' ? 'bg-[#0EA5A5]/90' : 'bg-[#FF7A00]/90'
        }`}>
            {item.type === 'talent' ? <User size={10} /> : <Building2 size={10} />}
            {item.type === 'talent' ? 'Talent' : 'Enterprise'}
        </div>
    </div>

    {/* BADGE: DESIGN SYSTEM STYLE - Dynamic accent based on type */}
    <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-2xl flex items-center gap-1.5 shadow-sm border border-white/50">
      <span className="text-[11px] font-[800] text-[#0D1B2A]">{item.rating}</span>
      <Sparkles 
        size={12} 
        className={`fill-current ${item.type === 'talent' ? 'text-[#0EA5A5]' : 'text-[#FF7A00]'}`} 
      />
    </div>
  </div>

  {/* CONTENT: LIGHT THEME REFINEMENT */}
  <div className="p-7 flex flex-col gap-2">
    <div>
      <h3 className="text-2xl font-[800] text-[#0D1B2A] tracking-tighter leading-none">{item.name}</h3>
      {/* Dynamic Role Color based on Identity */}
      <p className={`font-black text-[12px] uppercase tracking-widest mt-1.5 ${
        item.type === 'talent' ? 'text-[#0EA5A5]' : 'text-[#FF7A00]'
      }`}>
        {item.role}
      </p>
    </div>
    <p className="text-slate-500 text-xs font-medium line-clamp-2 mt-1 leading-relaxed italic opacity-80">
      "{item.bio}"
    </p>
    <div className="flex flex-wrap gap-2 mt-4">
      {item.skills.map((skill: string) => (
        <span 
          key={skill} 
          className="px-3 py-1.5 bg-[#F0F4F8] text-[#0D1B2A] rounded-xl text-[9px] font-black uppercase tracking-widest border border-[#E1E8ED]"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
</motion.div>