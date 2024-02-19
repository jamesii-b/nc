import React from "react";

function BottomNavBar() {
  return (
    <div className="bg-sub_color min-h-max h-auto w-full text-white grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-20 py-10">
      <div className="flex flex-col items-center md:items-start">
        <div className="font-bold text-2xl mb-4">Nepcodes</div>
        <div className="mb-4">Your IT Companion.</div>
      </div>
      <div className="flex flex-col items-center md:items-start">
        <div className="font-bold text-2xl mb-4">About Company</div>
        <ul className="list-none">
          <li className="mb-2">About</li>
          <li className="mb-2">Services</li>
          <li className="mb-2">Work</li>
          <li>Team</li>
        </ul>
      </div>
      <div className="flex flex-col items-center md:items-start">
        <div className="font-bold text-2xl mb-4">Support</div>
        <ul className="list-none">
          <li className="mb-2">FAQ</li>
          <li className="mb-2">jamesbhattarai14@gmail.com</li>
          <li>+977-9863184471</li>
        </ul>
      </div>
    </div>
  );
}

export default BottomNavBar;
