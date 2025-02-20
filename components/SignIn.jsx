import React, { useState, useEffect } from 'react';
import { auth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from "../firebase";
import { Mail, Lock, Loader2, LogOut, Zap } from 'lucide-react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const signOutUser = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return { user, loading, signOutUser };
};

const useFormValidation = () => {
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setErrors(prev => ({
      ...prev,
      email: valid ? '' : 'Please enter a valid email address'
    }));
    return valid;
  };

  const validatePassword = (password) => {
    const valid = password.length >= 6;
    setErrors(prev => ({
      ...prev,
      password: valid ? '' : 'Password must be at least 6 characters'
    }));
    return valid;
  };

  return { errors, validateEmail, validatePassword };
};

const SignInModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { user, loading, signOutUser } = useAuth();
  const { errors, validateEmail, validatePassword } = useFormValidation();

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setIsLoading(false);
  };

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    if (!validateEmail(email) || !validatePassword(password)) return;
    
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsOpen(false);
      resetForm();
    } catch (err) {
      console.error('Sign in error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      setIsOpen(false);
      resetForm();
    } catch (err) {
      console.error('Google sign in error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!validateEmail(email) || !validatePassword(password)) return;

    setIsLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setIsOpen(false);
      resetForm();
    } catch (err) {
      console.error('Sign up error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  if (loading) {
    return (
      <Button disabled className="bg-gradient-to-r from-blue-400 to-purple-500">
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Loading
      </Button>
    );
  }

  if (user) {
    return (
      <Button 
        onClick={signOutUser}
        variant="ghost" 
        className="text-white hover:text-blue-400 transition-colors duration-300 hover:bg-neutral-700/50 space-x-2"
      >
        <LogOut className="h-4 w-4" />
        <span>Sign Out</span>
      </Button>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 text-white font-medium transition-all duration-300">
          Sign In
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-neutral-900 border-neutral-700">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-lg pointer-events-none" />
        
        <DialogHeader className="space-y-3">
          <div className="mx-auto bg-gradient-to-br from-blue-400 to-purple-500 p-3 rounded-full">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <DialogTitle className="text-2xl font-bold text-center text-white">
            {isSignIn ? 'Welcome to PixelMart' : 'Join PixelMart'}
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col space-y-4 mt-4">
          <Button
            variant="outline"
            className="w-full py-6 bg-neutral-800 text-white border-neutral-600 hover:bg-neutral-800 hover:text-blue-400 transition-colors duration-300"
            onClick={handleGoogleSignIn}
            disabled={isLoading}
          >
            <img
              src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
              alt="Google"
              className="mr-2 h-5 w-5"
            />
            Continue with Google
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-neutral-700" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-neutral-900 px-2 text-white rounded-lg">
                Or continue with email
              </span>
            </div>
          </div>

          <form onSubmit={isSignIn ? handleEmailSignIn : handleSignUp} className="space-y-4">
            <div className="space-y-3">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-neutral-800 border-neutral-600 text-white placeholder-neutral-400 pl-10 focus:border-blue-400 transition-colors duration-300"
                  disabled={isLoading}
                />
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
                {errors.email && (
                  <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                )}
              </div>

              <div className="relative">
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-neutral-800 border-neutral-600 text-white placeholder-neutral-400 pl-10 focus:border-blue-400 transition-colors duration-300"
                  disabled={isLoading}
                />
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
                {errors.password && (
                  <p className="text-xs text-red-400 mt-1">{errors.password}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 text-white font-medium transition-all duration-300"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : isSignIn ? (
                  'Sign In'
                ) : (
                  'Create Account'
                )}
              </Button>
            </div>
          </form>

          <div className="text-center text-sm">
            <p className="text-white">
              {isSignIn ? "Don't have an account?" : "Already have an account?"}{' '}
              <button
                className="text-blue-400 hover:text-purple-400 transition-colors duration-300 font-medium"
                onClick={() => setIsSignIn(!isSignIn)}
                disabled={isLoading}
              >
                {isSignIn ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignInModal;