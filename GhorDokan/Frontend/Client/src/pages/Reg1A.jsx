import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';

const Reg1A = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [area, setArea] = useState('Default');
  const [apartment, setApartment] = useState('');
  const [flat, setFlat] = useState('');

  const handleComplete = (e) => {
    e.preventDefault();
    
    // Validate that if area is "Yes", apartment and flat are filled
    if (area === 'Yes' && (!apartment || !flat)) {
      toast.error('Please complete all required fields');
      return;
    }

    // Show success notification and redirect
    toast.success('Successfully signed up! Welcome to GhorDokan!');
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Navbar />

      <main className="flex-grow px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-2xl">
          <BackButton />

          <div className="mt-6 rounded-lg bg-white p-8 shadow-md">
            <h1 className="text-3xl font-bold text-gray-900">Complete Your Registration</h1>
            <p className="mt-2 text-gray-600">Fill in your details to create your account.</p>

            <form onSubmit={handleComplete} className="mt-8 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First name"
                    className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last name"
                    className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
                  required
                />
              </div>

              <div>
                <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-2">
                  Are you a resident of Nayarhat?
                </label>
                <select
                  id="area"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
                >
                  <option value="Default">Select an option</option>
                  <option value="Yes">Yes, I am a resident of Nayarhat</option>
                  <option value="No">No</option>
                </select>
              </div>

              {area === 'Yes' && (
                <div className="space-y-6">
                  <div>
                    <label htmlFor="apartment" className="block text-sm font-medium text-gray-700">
                      Apartment Name
                    </label>
                    <select
                      id="apartment"
                      value={apartment}
                      onChange={(e) => setApartment(e.target.value)}
                      className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
                      required
                    >
                      <option value="">Select apartment</option>
                      <option value="Eden Village">Eden Village</option>
                      <option value="Eureka">Eureka</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="flat" className="block text-sm font-medium text-gray-700">
                      Flat
                    </label>
                    <input
                      type="text"
                      id="flat"
                      value={flat}
                      onChange={(e) => setFlat(e.target.value)}
                      placeholder="Flat number"
                      className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
                      required
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full rounded-lg bg-amber-600 px-6 py-3 text-white font-semibold transition hover:bg-amber-700"
              >
                Complete
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Reg1A;
