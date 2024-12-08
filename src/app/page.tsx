"use client"; // Add this directive at the top
import React, { useState } from "react";
// import React from "react";
import { UserFreezeData } from "./userFreeze/data/userFreezeData";
import PopUpLoan from "./userFreeze/popUpLoan";
import UserFreezeView, { UserFreeze } from "./userFreeze/userFreezeView";

export default function Home() {
  const [userData, setUserData] = useState<UserFreeze | null>(null)
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />  */}
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <UserFreezeView data={UserFreezeData}
            onUser={(data) => setUserData(data)}
          />
          {userData != null ? <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <PopUpLoan user={userData} onClose={() => setUserData(null)} />
          </div> : null}
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developd by Atri Ariska Alfa
        </a>
      </footer>
    </div>
  );
}
