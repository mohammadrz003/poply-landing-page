"use client";

import api from "@/constants/config/axiosConfig";
import { ChangeEvent, FormEvent, useState } from "react";

type Props = {};

const ContactForm = (props: Props) => {
  const [contactFormValue, setContactFormValue] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const handleFormValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactFormValue((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleFormTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactFormValue((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data } = await api.post("/api/contact-us-form", {
      ...contactFormValue,
    });
  };

  return (
    <form className="w-full col-span-6" onSubmit={handleFormSubmit}>
      <div className="w-full space-y-6">
        <div className="d-form-control w-full">
          <label className="d-label">
            <span className="d-label-text">Your fullname</span>
          </label>
          <input
            type="text"
            placeholder="John Doe"
            name="fullname"
            value={contactFormValue.fullname}
            onChange={handleFormValueChange}
            className="d-input d-input-bordered w-full border-slate-600 !outline-slate-500"
          />
        </div>
        <div className="d-form-control w-full">
          <label className="d-label">
            <span className="d-label-text">Email</span>
          </label>
          <input
            type="text"
            name="email"
            value={contactFormValue.email}
            onChange={handleFormValueChange}
            placeholder="someone@example.com"
            className="d-input d-input-bordered w-full border-slate-600 !outline-slate-500"
          />
        </div>
        <div className="d-form-control w-full">
          <label className="d-label">
            <span className="d-label-text">Message</span>
          </label>
          <textarea
            className="d-textarea d-textarea-bordered border-slate-600 !outline-slate-500"
            placeholder="How we can help you?"
            name="message"
            value={contactFormValue.message}
            onChange={handleFormTextareaChange}
            rows={3}
          ></textarea>
        </div>
        <button className="d-btn flex items-center w-full border-none bg-gradient-to-br from-main_color to-[#89F9E8] p-5 text-slate-900">
          <span>Send Message</span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
