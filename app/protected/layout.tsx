import React from "react";
import getCurrentUser from "../actions/getCurrentUser";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

async function layout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser();
  return (
    <div className="flex flex-col w-full h-full">
      <div>
        <Header user={user!} />
      </div>
      <div className="flex-1 flex flex-row w-full">
        <div>
          <Sidebar />
        </div>
        <div className="bg-gray-200 flex-1 pl-[15rem] p-10">{children}</div>
      </div>
    </div>
  );
}

export default layout;
