"use client"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Navbar } from '@/components/navbar';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    emailjs
      .sendForm('service_frml4s2', 'template_e57nkkk', form.current, {
        publicKey: 'Opj9b1VdgmAW7WtD4',
      })
      .then(
        () => {
          alert('SUCCESS!');
        },
        (error) => {
          alert('FAILED...', error);
        },
      );
  };

  return (
    <div>
      <div className='hidden md:flex'>
        <Navbar />
        <div className='flex h-screen w-1/2 space-y-6 flex-col pt-8 pl-6'>
          <Header />
          <div className='flex flex-col space-y-5'>
            <img src='/freelance.png' className='rounded-md'/>
            <h1 className='text-4xl font-bold '>Connect with <span className='text-blue-500'>Me</span></h1>
            <form onSubmit={sendEmail} ref={form} className='rounded-lg p-4 border-2 bg-yellow-50 dark:bg-teal-400 flex-col flex space-y-4'>
              <input 
              placeholder='Your Name'
              name='from_name'
              className='w-1/2 rounded-full px-2 py-1 border-2 focus:bg-yellow-50 bg-white dark:bg-black text-black dark:text-white' 
              type="text" />
              <input 
              placeholder='Your Email'
              name='from_email'
              className='w-1/2 rounded-full px-2 py-1 border-2 focus:bg-yellow-50 bg-white dark:bg-black text-black dark:text-white' 
              type="email" />
              <input 
              placeholder='Message'
              name='message'
              className='w-1/2 h-28 rounded-xl px-2 py-1 border-2 focus:bg-yellow-50 bg-white dark:bg-black text-black dark:text-white' 
              type="text" />
              <button type='submit' className='bg-blue-400 rounded-xl w-16 flex justify-start' value="Send"><Button variant="primary" >Send</Button></button>
            </form>
          </div>
        </div>
      </div>
      <div className='md:hidden flex'></div>
    </div>
  );
};
