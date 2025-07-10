import { useState } from "react";

const tabs = ["All Orders", "Pending", "Reviewed", "Arrived"];

export default function OrdersTabs() {
  const [activeTab, setActiveTab] = useState("All Orders");

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-b z-50 ">
      <div className="flex items-center gap-6 px-8 text-md  h-10 font-semibold">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`cursor-pointer h-10 ${
              activeTab === tab
                ? "border-t-4 border-[#4B6A4F] font-semibold bg-[#E8F0E9] px-4 text-[#4B6A4F]"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
        <button className="text-2xl text-gray-600 h-10 pb-4 justify-center flex items-center">+</button>
      </div>
    </div>
  );
}
