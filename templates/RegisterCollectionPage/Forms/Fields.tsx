"use client";

import api from "@/constants/config/axiosConfig";
import { ChangeEvent, FormEvent, useState } from "react";
import Pictures from "./Pictures";

type Props = {};

const Fields = (props: Props) => {
  const [contactFormValue, setContactFormValue] = useState({
    collectionName: "",
    description: "",
    contractAddress: "",
    royaltyPercentage: "",
    royaltyAddress: "",
    xCom: "",
    website: "",
    discord: "",
    telegram: "",
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
  };

  return (
    <>
      <form className="w-full" onSubmit={handleFormSubmit}>
        <div className="grid grid-cols-11 lg:gap-x-10">
          <div className="w-full col-span-11 lg:col-span-6">
            <div className="w-full space-y-6">
              <div className="d-form-control w-full">
                <label className="d-label">
                  <span className="d-label-text">Collection Name</span>
                </label>
                <input
                  type="text"
                  name="collectionName"
                  value={contactFormValue.collectionName}
                  onChange={handleFormValueChange}
                  className="d-input d-input-bordered w-full border-slate-600 !outline-slate-500"
                />
              </div>
              <div className="d-form-control w-full">
                <label className="d-label">
                  <span className="d-label-text">Description</span>
                </label>
                <textarea
                  className="d-textarea d-textarea-bordered border-slate-600 !outline-slate-500"
                  name="description"
                  value={contactFormValue.description}
                  onChange={handleFormTextareaChange}
                  rows={3}
                ></textarea>
              </div>
              <div className="d-form-control w-full">
                <label className="d-label">
                  <span className="d-label-text">Contract Address</span>
                </label>
                <input
                  className="d-textarea d-textarea-bordered border-slate-600 !outline-slate-500"
                  name="contractAddress"
                  value={contactFormValue.contractAddress}
                  onChange={handleFormValueChange}
                />
              </div>
              <div className="d-form-control w-full">
                <label className="d-label">
                  <span className="d-label-text">Royalty Percentage</span>
                </label>
                <input
                  className="d-textarea d-textarea-bordered border-slate-600 !outline-slate-500"
                  name="royaltyPercentage"
                  value={contactFormValue.royaltyPercentage}
                  onChange={handleFormValueChange}
                />
              </div>
              <div className="d-form-control w-full">
                <label className="d-label">
                  <span className="d-label-text">Royalty Address</span>
                </label>
                <input
                  className="d-textarea d-textarea-bordered border-slate-600 !outline-slate-500"
                  name="royaltyAddress"
                  value={contactFormValue.royaltyAddress}
                  onChange={handleFormValueChange}
                />
              </div>
              <div className="d-form-control w-full">
                <label className="d-label">
                  <span className="d-label-text">X.com (twitter link)</span>
                </label>
                <input
                  className="d-textarea d-textarea-bordered border-slate-600 !outline-slate-500"
                  name="xCom"
                  value={contactFormValue.xCom}
                  onChange={handleFormValueChange}
                />
              </div>
              <div className="d-form-control w-full">
                <label className="d-label">
                  <span className="d-label-text">Website</span>
                </label>
                <input
                  className="d-textarea d-textarea-bordered border-slate-600 !outline-slate-500"
                  name="website"
                  value={contactFormValue.website}
                  onChange={handleFormValueChange}
                />
              </div>
              <div className="d-form-control w-full">
                <label className="d-label">
                  <span className="d-label-text">Discord</span>
                </label>
                <input
                  className="d-textarea d-textarea-bordered border-slate-600 !outline-slate-500"
                  name="discord"
                  value={contactFormValue.discord}
                  onChange={handleFormValueChange}
                />
              </div>
              <div className="d-form-control w-full">
                <label className="d-label">
                  <span className="d-label-text">Telegram</span>
                </label>
                <input
                  className="d-textarea d-textarea-bordered border-slate-600 !outline-slate-500"
                  name="telegram"
                  value={contactFormValue.telegram}
                  onChange={handleFormValueChange}
                />
              </div>
              <button className="d-btn flex items-center w-full border-none bg-gradient-to-br from-main_color to-[#89F9E8] p-5 text-slate-900">
                <span>Submit Collection</span>
              </button>
            </div>
          </div>
          <Pictures />
        </div>
      </form>
    </>
  );
};

export default Fields;
