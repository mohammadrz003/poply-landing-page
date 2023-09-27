import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const res = await fetch("https://api.getwaitlist.com/api/v1/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const resWaitList = await fetch(
    `https://api.getwaitlist.com/api/v1/waitlist?waitlist_id=${body.waitlist_id}`
  );
  const resWaitListLeaderboard = await fetch(
    `https://api.getwaitlist.com/api/v1/waitlist/${body.waitlist_id}/leaderboard?total_signups=5`
  );

  const data = await res.json();
  const waitlist = await resWaitList.json();
  const waitlistLeaderboard = await resWaitListLeaderboard.json();
  return NextResponse.json({ userData: data, waitlist, waitlistLeaderboard });
}
