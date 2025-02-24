import React, { useState } from "react";
import TextInput from "./components/TextInput";
import TextAreaInput from "./components/TextAreaInput";
import SelectInput from "./components/SelectInput";
import ShortForm from "./shortForm";
import bFormSubmit from "./functions/longformsubmission";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    details: "",
    service: "",
  });
  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors({ ...errors, [name]: "" });
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};

    // Check form validity
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.companyName.trim()) {
      errors.companyName = "Please enter your Company Name";
    }
    if (!formData.details.trim()) {
      errors.details = "Please enter your Details";
    }
    if (!formData.service) {
      errors.service = "Please select a service";
    }

    // Set errors if any
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // Start loading
    setLoading(true);

    // Submit form data
    try {
      const response = await bFormSubmit(
        formData.name,
        formData.email,
        formData.companyName,
        formData.details,
        formData.service
      );
      if (response) {
        setSubmissionStatus("success");
        setFormData({
          name: "",
          email: "",
          companyName: "",
          details: "",
          service: "",
        });
      } else {
        setSubmissionStatus("error");
      }
    } catch (err) {
      setSubmissionStatus("error");
    } finally {
      // Stop loading
      setLoading(false);

      // Clear submission status after 3 seconds
      setTimeout(() => {
        setSubmissionStatus(null);
      }, 5000);
    }
  };

  return (
    <div className="bg-gray-400 ">
      <div className="md:min-h-screen md:flex py-32 md:px-40 md:w-fit mx-auto lg:flex justify-center items-center">
        <div className="w-full md:mr-20 " id="left-menu">
          <div className="hidden lg:block">
            <img src="/contact/contact.png" className="" alt="" />
          </div>
          <ShortForm />
        </div>

        <div
          id="right-menu"
          className="bg-bg_secondary max-w-md my-32 sm:mx-auto w-full  p-8 rounded-lg shadow-md"
        >
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
                { value: "Upgrade", label: "Upgrade existing application" },
              ]}
              placeholder="Select a service"
              error={errors.service}
            />
            <TextAreaInput
              id="details"
              name="details"
              label="Details"
              value={formData.details}
              onChange={handleChange}
              placeholder="Enter your details"
              required
              error={errors.details}
            />

            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
            {submissionStatus === "success" && (
              <p className="text-green-900 mt-2">
                Form submitted successfully! Our team will reach out to you.
              </p>
            )}
            {submissionStatus === "error" && (
              <p className="text-red-500 mt-2">
                Something went wrong. Please try again later.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
