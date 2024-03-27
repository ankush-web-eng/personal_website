import React, { useRef, useState, ChangeEvent, FormEvent } from 'react';
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

  const sendEmail = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    emailjs
      .sendForm("service_frml4s2", "template_e57nkkk", form.current!, {
        publicKey: "Opj9b1VdgmAW7WtD4",
      })
      .then(
        () => {
          window.location.reload()
          alert("SUCCESS!");
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

  return (
    <form
      onSubmit={sendEmail}
      id="form"
      ref={form}
      className="rounded-lg p-4 border-2 bg-yellow-50 dark:bg-teal-200 flex-col flex space-y-4"
    >
      <input
        placeholder="Your Name"
        name="from_name"
        value={formData.name}
        onChange={handleChange}
        className="md:w-1/2 w-full rounded-full px-2 py-1 border-2 focus:bg-yellow-50 bg-white dark:bg-black text-black dark:text-white"
        type="text"
      />
      <input
        placeholder="Your Email"
        name="from_email"
        value={formData.email}
        onChange={handleChange}
        className="md:w-1/2 w-full rounded-full px-2 py-1 border-2 focus:bg-yellow-50 bg-white dark:bg-black text-black dark:text-white"
        type="email"
      />
      <input
        placeholder="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="md:w-1/2 w-full h-28 rounded-xl px-2 py-1 border-2 focus:bg-yellow-50 bg-white dark:bg-black text-black dark:text-white"
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
