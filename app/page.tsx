"use client"
import { useState } from 'react';
import LoginPage from './login/login';
import { user } from './repository/user';
import bcrypt from 'bcryptjs';
import { useRouter } from 'next/navigation';

export default function Home() {
  //const [isLogged, setIsLogged] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleLoginSubmit = async (email: string, password: string) => {
    if (email === user.username) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        //setIsLogged(true);
        console.log("Connexion réussie !");
        setErrorMessage('');
        router.push("/auth");
      } else {
        console.log("Mot de passe incorrect.");
        setErrorMessage('Incorrect password. Please try again.');
      }
    } else {
      console.log("Email incorrect.");
      setErrorMessage('Incorrect email address. Please try again.');
    }
  };

  return (  
    <div>
      <LoginPage onSubmit={handleLoginSubmit} errorMessage={errorMessage} />
    </div>
  );
}
