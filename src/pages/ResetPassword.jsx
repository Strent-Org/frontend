import React, { useState, useEffect } from 'react';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [token, setToken] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // This effect runs once when the component mounts to get the token from the URL.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlToken = params.get('token');
    if (urlToken) {
      setToken(urlToken);
    } else {
      setError('Invalid or missing reset token.');
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (!token) {
      setError('Password reset token is missing.');
      return;
    }

    try {
      // API call to reset the password using the new password and the token
      const response = await fetch('/api/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, newPassword: password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Your password has been reset successfully!');
      } else {
        // Assuming the backend sends an error message in the data object
        setError(data.message || 'Error resetting password.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    }
  };

  if (isLoading) {
    return (
      <div className="max-w-md mx-auto p-4 md:p-6 lg:p-8 max-h-screen mt-32 mb-48 font-inter bg-white rounded-lg shadow-xl">
        <p className="text-center text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-4 md:p-6 lg:p-8 max-h-screen mt-32 mb-48 font-inter bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <label className="block text-sm font-medium mb-2" htmlFor="password">
          New Password
        </label>
        <input
          className="block w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4b3dfe] focus:border-transparent"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder='Enter your new password'
        />
        <label className="block text-sm font-medium mb-2" htmlFor="confirm-password">
          Confirm New Password
        </label>
        <input
          className="block w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4b3dfe] focus:border-transparent"
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          placeholder='Confirm your new password'
        />
        <button
          className="w-full bg-[#4b3dfe] hover:bg-opacity-90 transition-all text-white font-normal py-2 px-4 rounded-md shadow-lg"
          type="submit"
        >
          Reset Password
        </button>
        {message && (
          <p className="text-green-500 mt-4 text-center">{message}</p>
        )}
        {error && (
          <p className="text-red-500 mt-4 text-center">{error}</p>
        )}
      </form>
    </div>
  );
};

export default ResetPassword;
