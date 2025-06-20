import React from 'react';
import { motion } from 'framer-motion';
import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { Sparkles, AlertCircle } from 'lucide-react';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create Supabase client with error handling for invalid URLs
let supabase = null;
try {
  if (supabaseUrl && supabaseAnonKey && 
      supabaseUrl !== 'your_supabase_project_url_here' && 
      supabaseAnonKey !== 'your_supabase_anon_key_here') {
    supabase = createClient(supabaseUrl, supabaseAnonKey);
  }
} catch (error) {
  console.error('Failed to create Supabase client:', error);
  supabase = null;
}

const Login: React.FC = () => {
  // Show configuration message if Supabase is not configured
  if (!supabase) {
    return (
      <div className="min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-md mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <Sparkles className="w-8 h-8 text-purple-500" />
              <h1 className="text-3xl font-bold text-white">Dayloop.ai</h1>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-yellow-500" />
                <h2 className="text-xl font-semibold text-white">Configuration Required</h2>
              </div>
              <p className="text-gray-300 mb-4">
                To enable authentication, please configure your Supabase credentials in the <code className="bg-gray-800 px-2 py-1 rounded text-sm">.env</code> file:
              </p>
              <div className="bg-gray-800 p-4 rounded-lg text-sm font-mono text-gray-300">
                <div>VITE_SUPABASE_URL=your_project_url</div>
                <div>VITE_SUPABASE_ANON_KEY=your_anon_key</div>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Get these values from your Supabase project dashboard.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Sparkles className="w-8 h-8 text-purple-500" />
            <h1 className="text-3xl font-bold text-white">Dayloop.ai</h1>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-8">
            <Auth
              supabaseClient={supabase}
              appearance={{
                theme: ThemeSupa,
                variables: {
                  default: {
                    colors: {
                      brand: '#8B5CF6',
                      brandAccent: '#6D28D9',
                    },
                  },
                },
                className: {
                  container: 'auth-container',
                  button: 'auth-button',
                  input: 'auth-input',
                },
              }}
              providers={['google']}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;