import Image from 'next/image';
import { FC, useState } from 'react';
import logo from '@/app/public/images/login.png';

interface LoginPageProps {
  onSubmit: (email: string, password: string) => void;
  errorMessage: string;
}

const LoginPage: FC<LoginPageProps> = ({ onSubmit, errorMessage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="hidden md:block md:w-1/2 relative">
          <Image
            src={logo}
            alt="Cinetica Logo"
            layout="fill"
            objectFit="cover"
            className="h-full w-full"
          />
        </div>
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Account Login</h2>
          <p className="text-gray-600 mb-8">
            If you want to watch a movie or TV show, you may login with your email address and password.
          </p>
          
          {errorMessage && (
            <div className="text-red-600 mb-4">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Email address</label>
              <input
                type="email"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 mt-4 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-700"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
