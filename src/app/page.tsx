"use client";
import React, { FormEvent, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { sendEmail } from './services/service';

export default function Form() {
  const formRef = useRef<HTMLFormElement>(null);


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    sendEmail(e,formRef);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <input type="email" name="to_email" placeholder="Correo" required />
      <input type="password" name="password" placeholder="Contraseña" required />
      <button type="submit">Enviar</button>
    </form>
  );
}
