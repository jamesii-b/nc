import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import CountryCodes from "./components/countryCodes";
import React, { useState } from 'react';

const ShortForm = () => {
  const [selectedOption, setSelectedOption] = useState("email");
  const [inputValue, setInputValue] = useState('');
  const [countryCode, setCountryCode] = useState('+1'); // Default country code

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setInputValue('');
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <p className="text-lg font-bold mb-2">Hate Forms?</p>
      <p className="text-base font-semibold mb-2">Drop your Email or Number. Our team will reach out to you.</p>
      <div className="flex mb-4">
        <button
          className={`flex-1 border border-gray-300 rounded-l p-2 focus:outline-none ${selectedOption === 'email' ? 'bg-blue-200' : ''
            }`}
          onClick={() => handleOptionSelect('email')}
        >
          Email
          {selectedOption === 'email' && (
            <FontAwesomeIcon icon={faCheckCircle} className="ml-2 text-green-500" />
          )}
        </button>
        <button
          className={`flex-1 border border-gray-300 rounded-r p-2 focus:outline-none ${selectedOption === 'mobile' ? 'bg-blue-200' : ''
            }`}
          onClick={() => handleOptionSelect('mobile')}
        >
          Mobile
          {selectedOption === 'mobile' && (
            <FontAwesomeIcon icon={faCheckCircle} className="ml-2 text-green-500" />
          )}
        </button>
      </div>
      {selectedOption === 'email' && (
        <input
          type="text"
          placeholder={`Enter your ${selectedOption === 'email' ? 'email' : 'mobile number'}`}
          className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none"
          value={inputValue}
          onChange={handleInputChange} />
      )}
      {selectedOption === 'mobile' && (
        <div className="relative mb-4">
          <select
            className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none"
            value={countryCode}
            onChange={handleCountryCodeChange}
          >
            <CountryCodes />
          </select>
          <input
            type="text"
            placeholder="Enter your mobile number"
            className="flex-1 border border-gray-300 rounded-r px-4 py-2 ml-1 focus:outline-none"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
      )}
      <button
        type="submit"
        className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
      >
        Submit
      </button>
    </div>
  );
};

export default ShortForm;
