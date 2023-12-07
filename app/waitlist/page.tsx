"use client";

import Layout from "@/components/Layout";
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
          waitlist_id: process.env.NEXT_PUBLIC_WAITLIST_ID,
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
        <div className="flex flex-col items-center w-full">
          {isSignupSiccessful ? (
            <div className="w-full max-w-[544px]">
              <h1 className="mb-10 text-2xl text-center">
                Successfully signed up for Waitlist
              </h1>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col justify-center p-5 text-center border rounded-lg border-slate-700">
                  <p className="mb-2 text-xs text-slate-400">Your Position</p>
                  <p className="text-sm text-slate-300">
                    {userWaitlistData?.userData?.verified
                      ? userWaitlistData?.userData?.priority
                      : `This waitlist requires you to verify your email. To join, click the link we sent to ${userWaitlistData?.userData?.email}.`}
                  </p>
                </div>
                <div className="flex flex-col justify-center p-5 text-center border rounded-lg border-slate-700">
                  <p className="mb-2 text-xs text-slate-400">
                    People on Waitlist
                  </p>
                  <p className="text-sm text-slate-300">
                    {userWaitlistData?.waitlist?.statistics?.current_signups}
                  </p>
                </div>
                <div className="flex flex-col justify-center col-span-2 p-5 text-center border rounded-lg border-slate-700">
                  <p className="mb-2 text-xs text-slate-400">Referral Link</p>
                  <p className="text-sm text-slate-300">
                    {userWaitlistData?.userData?.referral_link}
                  </p>
                </div>
                <div className="flex flex-col justify-center col-span-2 p-5 text-center border rounded-lg border-slate-700">
                  <p className="mb-2 text-xs text-slate-400">Leaderboard</p>

                  <ul className="text-sm text-slate-300">
                    {userWaitlistData?.waitlistLeaderboard?.leaderboard?.map(
                      (item: any, index: number) => (
                        <li key={index}>
                          {index + 1}. {item.email}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full max-w-[544px] text-center">
              <h1 className="mb-10 text-2xl text-center">
                {hasSignedUp ? "Check your rank" : "Sign up for Poply Waitlist"}
              </h1>
              <form onSubmit={handleWaitlistSubmit} className="w-full">
                <div className="flex flex-col w-full space-y-3 sm:flex-row sm:space-y-0">
                  <input
                    placeholder="Enter your email"
                    className="w-full p-3 rounded-l-lg rounded-r-lg sm:rounded-r-none text-slate-900"
                    name="email"
                    value={waitlistEmail}
                    onChange={handleWaitlistEmailChange}
                  />
                  <button
                    disabled={isLoading}
                    type="submit"
                    className="p-3 text-black rounded-l-lg rounded-r-lg bg-lime-400 sm:rounded-l-none disabled:opacity-70 disabled:cursor-not-allowed sm:whitespace-nowrap"
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
