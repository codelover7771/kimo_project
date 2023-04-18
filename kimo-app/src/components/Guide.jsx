import React from "react";

function Guide() {
  return (
    <div className="w-full md:w-1/2 justify-between m-auto md:m-0">
      <div className="h-[80px] flex items-center">
        <p className="heading">Travel Guide</p>
      </div>
      <div className="flex p-3 items-center  rounded-[8px] bg-white justify-between">
            <div className="flex flex-col h-[150px] justify-between">
                <div>
                  <p className="card-heading p-1 text-[#001A1A]">Hadwin Malone</p>
                  <p className="heading p-1 font-normal">Guide Since 2012</p>
                </div>
                <div className="">
                  <button className="button">Contact</button>
                </div>
            </div>
            <div>
                  <img className="rounded-50%" src="../assets/guide-img.png" alt="" />
            </div>
      </div>
    </div>
  );
}

export default Guide;
