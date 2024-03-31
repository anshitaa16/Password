import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white">
      <div className="mycontainer flex items-center justify-between h-16 py-5">
        <div className="logo font-bold text-xl md:text-2xl">
          <span className="text-green-600 text-2xl">&lt;</span>
          Pass
          <span className="text-green-600">UP/&gt;</span>
        </div>
        <button className="text-white flex items-center justify-between ring-1 ring-white bg-green-700 rounded-full md:my-0 hidden md:flex">
          <img className="invert w-8 p-1" src="github.png" alt="" />
          <span className="font-bold px-2 ">Github</span> {/* Hidden on small screens */}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
