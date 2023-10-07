"use client";

import api from "@/constants/config/axiosConfig";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";

type Props = {};

const ContactForm = (props: Props) => {
  const [contactFormValue, setContactFormValue] = useState({
    fullname: "",
    email: "",
    message: "",
  });
  const [captcha, setCaptcha] = useState<string | null>();
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    if (!captcha) {
      toast.error("Solve the recaptcha first!");
      return;
    }
    try {
      const { data } = await api.post("/api/contact-us-form", {
        ...contactFormValue,
        captcha,
      });
      setIsSubmitted(true);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      {isSubmitted ? (
        <div className="w-full col-span-11 lg:col-span-6 flex justify-center items-center h-full">
          <p className="text-main_color text-xl text-center">
            Thank for reaching to us ☺ <br />
            we will response to your email very soon!
          </p>
        </div>
      ) : (
        <form
          className="w-full col-span-11 lg:col-span-6"
          onSubmit={handleFormSubmit}
        >
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
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              onChange={setCaptcha}
              theme="dark"
            />
            <button className="d-btn flex items-center w-full border-none bg-gradient-to-br from-main_color to-[#89F9E8] p-5 text-slate-900">
              <span>Send Message</span>
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default ContactForm;
