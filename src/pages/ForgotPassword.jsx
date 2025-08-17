import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // API call to send password reset link to user's email
      const response = await fetch('/api/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (data.success) {
        setMessage('Password reset link sent to your email');
      } else {
        setError('Error sending password reset link');
      }
    } catch (error) {
      setError('Error sending password reset link ' + error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 md:p-6 lg:p-8 max-h-screen mt-32 mb-48 font-inter bg-white rounded ">
      <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <label className="block text-sm font-medium mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="block w-full p-2 mb-4 border border-gray-300 rounded"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder='Enter your email address to reset a password'
        />
        <button
          className="w-full bg-[#4b3dfe] hover:bg-brand-primary-hover text-white font-normal py-2 px-4 rounded font-sora"
          type="submit"
        >
          Send Password Reset Link
        </button>
        {message && (
          <p className="text-green-500 mt-4">{message}</p>
        )}
        {error && (
          <p className="text-red-500 mt-4">{error}</p>
        )}
      </form>
    </div>
  );
};

export default ForgotPassword;