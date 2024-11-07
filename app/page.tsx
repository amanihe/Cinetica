"use client"
import { useState } from 'react';
import LoginPage from './login/login';
import { user } from './repository/user';
import bcrypt from 'bcryptjs';


export default function Home() {
  const [isLogged, setIsLogged] = useState(false);

  const handleLoginSubmit = async (email: string, password: string) => {
    if (email === user.username) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        setIsLogged(true);
        console.log("Connexion réussie !");
      } else {
        console.log("Mot de passe incorrect.");
      }
    } else {
      console.log("Email incorrect.");
    }

  };
  return (  
<div>
     
{isLogged ? (
        <p>Bienvenue, vous êtes connecté !</p>
      ) : (
        <LoginPage onSubmit={handleLoginSubmit} />
      )}
    
    </div>
  );
}
