"use client";

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';

const initialState = {
  name: "",
  email: "",
  message: "",
};
export default function Form() {
  const form = useRef();
  const [formData, setFormData] = useState(initialState);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_frml4s2", "template_e57nkkk", form.current, {
        publicKey: "Opj9b1VdgmAW7WtD4",
      })
      .then(
        () => {
          alert("SUCCESS!");
        },
        (error) => {
          alert("FAILED...");
        }
      );
  };

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={sendEmail}
      id="form"
      ref={form}
      className="rounded-lg p-4 border-2 bg-yellow-50 dark:bg-teal-200 flex-col flex space-y-4"
    >
      <input
        placeholder="Your Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-1/2 rounded-full px-2 py-1 border-2 focus:bg-yellow-50 bg-white dark:bg-black text-black dark:text-white"
        type="text"
      />
      <input
        placeholder="Your Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-1/2 rounded-full px-2 py-1 border-2 focus:bg-yellow-50 bg-white dark:bg-black text-black dark:text-white"
        type="email"
      />
      <input
        placeholder="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="w-1/2 h-28 rounded-xl px-2 py-1 border-2 focus:bg-yellow-50 bg-white dark:bg-black text-black dark:text-white"
        type="text"
      />
      <button
        type="submit"
        className="bg-blue-400 rounded-xl w-16 flex justify-start"
        value="Send"
      >
        <Button variant="primary">Send</Button>
      </button>
    </form>
  );
}
