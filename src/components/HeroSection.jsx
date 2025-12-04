import React, {useEffect, useState} from 'react';
const overviews = [
  {id:1, description: 'Full-stack Engineer skilled in backend and DevOps, building scalable apps with Python, FastAPI, and Docker.'},
  {id:2, description: 'DevOps expert automating CI/CD pipelines and managing Kubernetes-based deployments with Terraform and GitHub Actions.'},
  {id:3, description: 'Frontend developer creating secure web apps with React, Tailwind CSS, JWT auth, and real-time features using RabbitMQ.'},
  {id:4, description: 'Built a cloud-native MP3 converter using FastAPI, MongoDB, and microservices with a production-ready frontend.'},
  {id:5, description: 'Experienced in Docker Swarm, Kubernetes, and infrastructure optimization for availability and performance.'},
  {id:6, description: 'Focused on clean code, problem-solving, and DevOps support for MVPs and production systems alike.'}
];
export default function Hero(){
  const [index,setIndex]=useState(0); const [fade,setFade]=useState(true);
  useEffect(()=>{ const iv = setInterval(()=>{ setFade(false); setTimeout(()=>{ setIndex(i=> (i+1)%overviews.length); setFade(true); },800); }, 6000); return ()=> clearInterval(iv); },[]);
  return (
    <section id='hero' className='min-h-screen flex items-center justify-center relative'>
      <div className='absolute inset-0 hero-grid-animation opacity-20'></div>
      <div className='max-w-4xl text-center z-10 px-6 py-20'>
        <h1 className='text-4xl md:text-6xl font-extrabold mb-4'>Hi, I'm <span className='text-primary'>Jairon</span> <span className='text-gradient'>Beriguete</span></h1>
        <p className={'text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto transition-opacity '+(fade? 'opacity-100':'opacity-0')}>{overviews[index].description}</p>
        <div className='mt-8'><a href='#projects' className='cosmic-button'>View My Work</a></div>
      </div>
    </section>
  );
}
