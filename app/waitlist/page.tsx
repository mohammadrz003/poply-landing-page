"use client";

import Layout from "@/components/Layout";
import config from "@/constants/config";
import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";

type Props = {};

const Page = (props: Props) => {
  const [waitlistEmail, setWaitlistEmail] = useState<string>("");
  const [hasSignedUp, setHasSignedUp] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userWaitlistData, setUserWaitlistData] = useState<any>(null);
  const [isSignupSiccessful, setIsSignupSiccessful] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleWaitlistEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setWaitlistEmail(value);
  };

  const handleWaitlistSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "/api/waitlist",
        {
          email: waitlistEmail,
          waitlist_id: config.WAITLIST_ID,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setUserWaitlistData(data);
      setIsSignupSiccessful(true);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-[calc(100vh-76px)] p-5 flex justify-center items-center">
        <div className="w-full flex flex-col items-center">
          {isSignupSiccessful ? (
            <div className="w-full max-w-[544px]">
              <h1 className="text-center mb-10 text-2xl">
                Successfully signed up for Waitlist
              </h1>
              <div className="grid grid-cols-2 gap-3">
                <div className="border border-slate-700 rounded-lg p-5 text-center flex flex-col justify-center">
                  <p className="text-slate-400 text-xs mb-2">Your Position</p>
                  <p className="text-slate-300 text-sm">
                    {userWaitlistData?.userData?.verified
                      ? userWaitlistData?.userData?.priority
                      : `This waitlist requires you to verify your email. To join, click the link we sent to ${userWaitlistData?.userData?.email}.`}
                  </p>
                </div>
                <div className="border border-slate-700 rounded-lg p-5 text-center flex flex-col justify-center">
                  <p className="text-slate-400 text-xs mb-2">
                    People on Waitlist
                  </p>
                  <p className="text-slate-300 text-sm">
                    {userWaitlistData?.waitlist?.statistics?.current_signups}
                  </p>
                </div>
                <div className="col-span-2 border border-slate-700 rounded-lg p-5 text-center flex flex-col justify-center">
                  <p className="text-slate-400 text-xs mb-2">Referral Link</p>
                  <p className="text-slate-300 text-sm">
                    {userWaitlistData?.userData?.referral_link}
                  </p>
                </div>
                <div className="col-span-2 border border-slate-700 rounded-lg p-5 text-center flex flex-col justify-center">
                  <p className="text-slate-400 text-xs mb-2">Leaderboard</p>
                  <p className="text-slate-300 text-sm">
                    <ul>
                      {userWaitlistData?.waitlistLeaderboard?.leaderboard?.map(
                        (item: any, index: number) => (
                          <li key={index}>
                            {index + 1}. {item.email}
                          </li>
                        )
                      )}
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full max-w-[544px] text-center">
              <h1 className="text-center mb-10 text-2xl">
                {hasSignedUp ? "Check your rank" : "Sign up for Poply Waitlist"}
              </h1>
              <form onSubmit={handleWaitlistSubmit} className="w-full">
                <div className="w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0">
                  <input
                    placeholder="Enter your email"
                    className="w-full rounded-l-lg rounded-r-lg sm:rounded-r-none p-3 text-slate-900"
                    name="email"
                    value={waitlistEmail}
                    onChange={handleWaitlistEmailChange}
                  />
                  <button
                    disabled={isLoading}
                    type="submit"
                    className="p-3 bg-lime-400 rounded-l-lg rounded-r-lg sm:rounded-l-none text-black disabled:opacity-70 disabled:cursor-not-allowed sm:whitespace-nowrap"
                  >
                    Join Waitlist
                  </button>
                </div>
              </form>
              <div className="mt-5 text-sm text-slate-400">
                {hasSignedUp ? (
                  <p>
                    Haven&apos;t signed up yet?{" "}
                    <button onClick={() => setHasSignedUp(!hasSignedUp)}>
                      Sign Up
                    </button>
                  </p>
                ) : (
                  <p>
                    Signed up before?{" "}
                    <button onClick={() => setHasSignedUp(!hasSignedUp)}>
                      Check your Status
                    </button>
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Page;
