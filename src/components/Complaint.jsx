import React from 'react';

const ComplaintForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h1 className="text-4xl font-normal text-gray-800 mb-8 text-center md:text-left">
          Customer complaint form
        </h1>
       

        <form className="space-y-6">
          {/* First Name and Last Name */}
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-6 md:space-y-0">
            <div className="flex-1">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Email Address */}
          <div>
            <label
              htmlFor="emailAddress"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              placeholder="Email Address"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Phone Number"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Reason for Complaint */}
          <div>
            <label
              htmlFor="reasonForComplaint"
              className="block text-sm font-medium text-gray-700"
            >
              Reason for Complaint
            </label>
            <div className="relative mt-1">
              <select
                id="reasonForComplaint"
                name="reasonForComplaint"
                required
                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded-md shadow-sm leading-tight focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">Choose your reason for contacting us</option>
                <option value="product_issue">Product Issue</option>
                <option value="service_quality">Service Quality</option>
                <option value="billing_dispute">Billing Dispute</option>
                <option value="delivery_problem">Delivery Problem</option>
                <option value="other">Other</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Ministry */}
          <div>
            <label
              htmlFor="ministry"
              className="block text-sm font-medium text-gray-700"
            >
              Under which Ministry is the complaint to be registered?
            </label>
            <div className="relative mt-1">
              <select
                id="ministry"
                name="ministry"
                required
                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded-md shadow-sm leading-tight focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">Select Ministry</option>
                <option value="agriculture">
                  Ministry of Agriculture & Farmers Welfare
                </option>
                <option value="commerce">Ministry of Commerce & Industry</option>
                <option value="finance">Ministry of Finance</option>
                <option value="consumer_affairs">
                  Ministry of Consumer Affairs, Food & Public Distribution
                </option>
                <option value="health">
                  Ministry of Health & Family Welfare
                </option>
                <option value="railways">Ministry of Railways</option>
                <option value="telecom">
                  Ministry of Communications (Telecom Dept.)
                </option>
                <option value="education">Ministry of Education</option>
                <option value="home_affairs">Ministry of Home Affairs</option>
                <option value="environment">
                  Ministry of Environment, Forest & Climate Change
                </option>
                <option value="other">Other</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Complaint Details */}
          <div>
            <label
              htmlFor="details"
              className="block text-sm font-medium text-gray-700"
            >
              Please provide any details
            </label>
            <textarea
              id="details"
              name="details"
              rows="5"
              placeholder="Type your complaint details here..."
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            ></textarea>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit Complaint
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ComplaintForm;
