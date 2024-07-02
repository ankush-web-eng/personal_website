"use client"

import React, { useRef, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const initialState: FormData = {
  name: "",
  email: "",
  message: "",
};

export default function Form(): JSX.Element {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>(initialState);
  const [send,setSend] = useState<boolean>(false);
  const [sending,setSending] = useState<boolean>(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm("service_frml4s2", "template_e57nkkk", form.current!, {
        publicKey: "Opj9b1VdgmAW7WtD4",
      })
      .then(
        () => {
          alert("SUCCESS!");
          setSending(false);
          window.location.reload()
        },
        (error) => {
          alert("FAILED...");
          console.log("Error",error)
        }
      );
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (formData.email.length > 12 && formData.email.includes("@") && formData.name.length > 2 && formData.message.length > 10) {
      setSend(true);
    } else {
      setSend(false);
    }
  }, [formData.email, formData.name, formData.message])

  return (
    <form
      onSubmit={sendEmail}
      id="form"
      ref={form}
      className="rounded-lg p-4 border-2 bg-yellow-50 dark:bg-inherit dark:border border-sky-400 flex-col flex space-y-4"
    >
      <input
        placeholder="Your Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="md:w-1/2 w-full rounded-full px-2 py-1 border-2 focus:bg-yellow-50 bg-white dark:bg-inherit text-black dark:text-white"
        type="text"
      />
      <input
        placeholder="Your Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="md:w-1/2 w-full rounded-full px-2 py-1 border-2 focus:bg-yellow-50 bg-white dark:bg-inherit text-black dark:text-white"
        type="email"
      />
      <input
        placeholder="Write message (min. 10 characters)"
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="md:w-1/2 w-full h-28 rounded-xl px-2 py-1 border-2 focus:bg-yellow-50 bg-white dark:bg-inherit text-black dark:text-white"
        type="text"
      />
      {send && <button
        type="submit"
        className="bg-blue-400 rounded-xl w-16 flex justify-start"
        value="Send"
      >
        <Button variant="primary">{sending ? "Sending" : "Send"}</Button>
      </button>}
    </form>
  );
}
