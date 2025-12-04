import React from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
export default function Navbar({onToggle}){
  const [open,setOpen]=React.useState(false);
  const nav = [{name:'Home',href:'#hero'},{name:'About',href:'#about'},{name:'Skills',href:'#skills'},{name:'Projects',href:'#projects'},{name:'Certificates',href:'#certificates'},{name:'Contact',href:'#contact'}];
  return (
    <nav className='fixed w-full z-50 py-3 bg-black/30 backdrop-blur-xl border-b border-white/5'>
      <div className='max-w-6xl mx-auto px-4 flex items-center justify-between'>
        <a href='#hero' className='text-lg font-bold'>Jairon Beriguete</a>
        <div className='hidden md:flex items-center gap-6'>
          {nav.map(i=> <a key={i.name} href={i.href} className='text-sm opacity-90 hover:opacity-100'>{i.name}</a>)}
          <ThemeToggle onToggle={onToggle} />
        </div>
        <button className='md:hidden' onClick={()=>setOpen(o=>!o)}>{open ? <X/> : <Menu/>}</button>
      </div>
      {open && (
        <div className='md:hidden bg-black/50 backdrop-blur-md py-6'>
          <div className='flex flex-col items-center gap-6'>
            {nav.map(i=> <a key={i.name} href={i.href} onClick={()=>setOpen(false)}>{i.name}</a>)}
            <ThemeToggle onToggle={onToggle} />
          </div>
        </div>
      )}
    </nav>
  );
}
