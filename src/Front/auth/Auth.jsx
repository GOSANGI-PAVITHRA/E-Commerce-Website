import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css'; 

const validateEmail = (email) => {
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return "Email must be a valid format (e.g., user@domain.com).";
    }
    return null; 
};

const validatePassword = (password) => {
    if (password.length < 8) {
        return "Password must be at least 8 characters long.";
    }
    if (!/[A-Z]/.test(password)) {
        return "Password must contain at least one capital letter.";
    }
    if (!/[^a-zA-Z0-9\s]/.test(password)) {
        return "Password must contain at least one special character (e.g., !, @, #).";
    }
    return null; 
};

const Auth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '', 
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); 
  };

  const switchModeHandler = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
    setError(''); 
    setFormData({ email: '', password: '', confirmPassword: '' }); 
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setError(''); 

    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);

    if (emailError) {
        setError(emailError);
        return;
    }
    
    if (passwordError) {
        setError(passwordError);
        return;
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
        setError("Passwords do not match.");
        return;
    }

    let action = isLogin ? 'Login' : 'Sign Up';
    
    alert(`Successfully ${action}! (Validation passed)`); 
    navigate('/'); 
  };

  return (
    <div className="auth-container"> 
      <div className="auth-card">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={submitHandler} className="auth-form">
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email"
              name="email"
              required 
              value={formData.email} 
              onChange={handleChange}
            />
          </div>
          
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password"
              name="password"
              required 
              value={formData.password} 
              onChange={handleChange}
            />
          </div>
          
          {!isLogin && (
            <div className="form-control">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input 
                type="password" 
                id="confirmPassword"
                name="confirmPassword"
                required 
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          )}

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="auth-submit-button">
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>
        
        <button 
          className="auth-switch-button" 
          onClick={switchModeHandler}
        >
          {isLogin ? 'New user? Sign Up here.' : 'Already have an account? Login.'}
        </button>
      </div>
    </div>
  );
};
  
export default Auth;