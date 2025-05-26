import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../../components/ui/Logo';
import { X } from 'lucide-react';

const Login: React.FC = () => {
  const [passcode, setPasscode] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/admin';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (passcode.length >= 6) {
      localStorage.setItem('isAdmin', 'true');
      navigate(from, { replace: true }); // Redirect to /admin or wherever `from` says
    } else {
      alert('Passcode must be at least 6 characters');
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-black p-8 rounded-lg border border-gray-800 relative">
        <button
          onClick={() => navigate('/')}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <div className="flex justify-center">
          <Logo />
        </div>

        <h2 className="mt-6 text-center text-3xl font-bold text-white">
          Sign in to Admin Dashboard
        </h2>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="passcode" className="block text-sm font-medium text-gray-400">
              Enter Passcode
            </label>
            <input
              id="passcode"
              name="passcode"
              type="password"
              autoComplete="off"
              required
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              className="mt-1 block w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-white"
              placeholder="Enter passcode"
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;


