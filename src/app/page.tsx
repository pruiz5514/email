"use client";
import React, { FormEvent, use, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { sendEmail } from './services/service';
import { createUser, postToken } from '@/utils/api';
import { IRegisterUser } from '@/types/IRegisterUser';
import { generateVerificationToken } from '../../lib/token';
import { IToken } from '@/types/IToken';

export default function Form() {
  const formRef = useRef<HTMLFormElement>(null);


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // sendEmail(e,formRef);

    async function postUser(user:IRegisterUser, email:string){
      try{
        await createUser(user);
        const token = await generateVerificationToken(email);
        await postToken(token);
        console.log(token);
        
      } catch(e){
        console.log(e);
      }
    }

    if(formRef.current){
      const formData = new FormData(formRef.current);
      const email = formData.get("to_email") as string;
      const password = formData.get("password") as string;

      const user = {
        email: email,
        password: password,
        emailVerified: false
      }

      postUser(user,email);
      
    }

    
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <input type="email" name="to_email" placeholder="Correo" required />
      <input type="password" name="password" placeholder="Contraseña" required />
      <button type="submit">Enviar</button>
    </form>
  );
}
