// ContactPage.js
import React, { useState } from "react";
import TextInput from "./components/TextInput";
import TextAreaInput from "./components/TextAreaInput";
import SelectInput from "./components/SelectInput";
import ShortForm from "./shortForm";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    message: "",
    service: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    console.log("submitting form");
    e.preventDefault();
    const errors = {};

    // Check if name is empty
    if (!formData.name.trim()) {
      console.log(
        "no name \n \n \n"
      )
      errors.name = "Name is required";
    }

    // Check if email is empty or invalid
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    // Check if company name is empty
    if (!formData.companyName.trim()) {
      errors.companyName = "Company Name is required";
    }

    // Check if message is empty
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    // Check if service is empty
    if (!formData.service) {
      errors.service = "Service selection is required";
    }

    // Set errors if any
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // If no errors, proceed with form submission logic
    console.log(formData);
  };

  return (
    <div className="min-h-screen md:flex lg:flex justify-center items-center">
      <ShortForm />
      <div className="max-w-md my-32 sm:mx-auto w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <TextInput
            id="name"
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            error={errors.name}
          />

          <TextInput
            id="email"
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            error={errors.email}
          />

          <TextInput
            id="companyName"
            name="companyName"
            label="Company Name"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Enter your company name"
            required
            error={errors.companyName}
          />
          <SelectInput
            id="service"
            name="service"
            label="Service"
            value={formData.service}
            onChange={handleChange}
            options={[
              { value: "Consulting", label: "Consulting" },
              { value: "Development", label: "Development" },
              { value: "ERP", label: "ERP" },
              { value: "CRM", label: "CRM" },
              { value: "Upgrade", label: "Upgrade existing application" }
            ]}
            placeholder="Select a service"
            required
            error={errors.service}
          />
          <TextAreaInput
            id="message"
            name="message"
            label="Message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            required
            error={errors.message}
          />



          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
