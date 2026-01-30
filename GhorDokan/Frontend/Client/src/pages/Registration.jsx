import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';



const Registration = () => {
  const [area, setArea] = useState('No');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [roadNo, setRoadNo] = useState('');
  const [houseNo, setHouseNo] = useState('');
  const isResident = area === 'Yes';

  const handleAreaChange = (event) => {
    const value = event.target.value;
    setArea(value);
    
    // Clear address fields when "Yes" is selected
    if (value === 'Yes') {
      setAddressLine1('');
      setAddressLine2('');
      setRoadNo('');
      setHouseNo('');
    }
  };

  const handleRegister = (event) => {
    event.preventDefault();
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Navbar />

      <main className="flex-grow px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-3xl">
          <BackButton />

          <div className="mt-6 rounded-lg bg-white p-8 shadow-md">
            <h1 className="text-3xl font-bold text-gray-900">Create an Account</h1>
            <p className="mt-2 text-gray-600">Fill in the information below to register.</p>

            <form onSubmit={handleRegister} className="mt-8 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
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
                    name="lastName"
                    placeholder="Last name"
                    className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
                    required
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="01XXXXXXXXX"
                    className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="area" className="block text-sm font-medium text-gray-700">
                  Are you a resident of Nayarhat, Oxygen?
                </label>
                <select
                  id="area"
                  name="area"
                  value={area}
                  onChange={handleAreaChange}
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
                  required
                >
                  <option value="Yes">Yes, Im a resident of Nayarhat</option>
                  <option value="No">No</option>
                </select>
              </div>

              <div>
                <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700">
                  Address Line 1
                </label>
                <input
                  type="text"
                  id="addressLine1"
                  name="addressLine1"
                  placeholder="Street, block, etc."
                  value={addressLine1}
                  onChange={(e) => setAddressLine1(e.target.value)}
                  className={`mt-2 w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600 ${
                    isResident ? 'bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed' : 'border-gray-300'
                  }`}
                  required={!isResident}
                  disabled={isResident}
                />
              </div>

              <div>
                <label htmlFor="addressLine2" className="block text-sm font-medium text-gray-700">
                  Address Line 2 (optional)
                </label>
                <input
                  type="text"
                  id="addressLine2"
                  name="addressLine2"
                  placeholder="Optional"
                  value={addressLine2}
                  onChange={(e) => setAddressLine2(e.target.value)}
                  className={`mt-2 w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600 ${
                    isResident ? 'bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed' : 'border-gray-300'
                  }`}
                  disabled={isResident}
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="roadNo" className="block text-sm font-medium text-gray-700">
                    Road No.
                  </label>
                  <input
                    type="text"
                    id="roadNo"
                    name="roadNo"
                    placeholder="Road number"
                    value={roadNo}
                    onChange={(e) => setRoadNo(e.target.value)}
                    className={`mt-2 w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600 ${
                      isResident ? 'bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed' : 'border-gray-300'
                    }`}
                    required={!isResident}
                    disabled={isResident}
                  />
                </div>
                <div>
                  <label htmlFor="houseNo" className="block text-sm font-medium text-gray-700">
                    House No.
                  </label>
                  <input
                    type="text"
                    id="houseNo"
                    name="houseNo"
                    placeholder="House number"
                    value={houseNo}
                    onChange={(e) => setHouseNo(e.target.value)}
                    className={`mt-2 w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600 ${
                      isResident ? 'bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed' : 'border-gray-300'
                    }`}
                    required={!isResident}
                    disabled={isResident}
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="apartment" className="block text-sm font-medium text-gray-700">
                    Apartment Name
                  </label>
                  <input
                    type="text"
                    id="apartment"
                    name="apartment"
                    placeholder="Apartment name"
                    className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="flat" className="block text-sm font-medium text-gray-700">
                    Flat No
                  </label>
                  <input
                    type="text"
                    id="flat"
                    name="flat"
                    placeholder="Flat number"
                    className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-amber-600 px-6 py-2.5 text-white font-semibold transition hover:bg-amber-700 sm:w-auto"
                >
                  Register
                </button>

                <Link
                  to="/signin"
                  className="text-center text-sm font-medium text-amber-600 transition hover:text-amber-700"
                >
                  Already have an account? Sign In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Registration;
