"use client";

import { Navbar } from '@/components/navbar';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import Projects from '@/components/projects';
import Form from "@/components/form"
import dynamic from "next/dynamic";
import Skills from '@/components/skills';


function ContactUs() {


  const openCV = () => {
    window.open("/Resume.pdf", "_blank")
  };

  return (
    <div>
      <div className='hidden md:flex overflow-y-auto'>
        <Navbar />
        <div className='flex h-screen w-1/2 space-y-6 flex-col pt-8 pl-6'>
          <Header />
          <div className='flex flex-col space-y-5'>
            <img src='/freelance.png' className='rounded-md' />
            <p className='text-gray-500'>Being a developer, I need to keep polishing my skills to keep myself updated.</p>
            <h2 className='text-gray-500'>If you are a Client looking for a freelancer, you are at <span className='text-blue-500'>right place</span>.
              Feel free to contact me through my Social media handles or by mailing me. You can direct provide details about yourself at <span className='text-blue-500'>bottom</span> of the page.</h2>
            <div className='flex justify-start'><Button variant="primary" onClick={openCV}>Download CV</Button></div>
            <div className='p-2'></div>
            <Projects />
            <div className='py-4'></div>
            <Skills />
            <div className='py-4'></div>
            <h1 className='text-4xl font-bold '>Connect with <span className='text-blue-500'>Me</span></h1>
            <Form />
            <div className='pb-8'></div>
          </div>
        </div>
      </div>
      <div className='md:hidden flex'></div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(ContactUs), { ssr: false })
