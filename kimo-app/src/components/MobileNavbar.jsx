import React from "react";
//import Link from 'next/link';
//import { MobileNavbarProps } from '@/utils';
import { RxCross2 } from "react-icons/rx";

const MobileNavbar = ({ setMenuState, highlights }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.7)",
        position: "fixed",
        top: 0,
        zIndex: 30,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          width: "90vw",
          height: "100%",
          position: "fixed",
          top: 0,
          right: 0,
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={() => setMenuState(false)}
            style={{ padding: "16px" }}
          >
            <RxCross2 size={35} />
          </button>
        </div>
        <div>
          <ul style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            <div href="/">
              <li style={{ cursor: "pointer" }}>Home</li>
            </div>
            {highlights.map((highlight, index) => (
              <div
                href={`/highlights/${highlight}`}
                onClick={() => setMenuState(false)}
                key={index}
              >
                <li style={{ cursor: "pointer" }}>{highlight}</li>
              </div>
            ))}
          </ul>
        </div>
        <div>
          <button
            style={{
              backgroundColor: "#e7f3f1",
              color: "#008080",
              padding: "12px",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Book a trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
