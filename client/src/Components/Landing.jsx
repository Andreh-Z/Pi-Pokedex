import React, { useState } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Landing() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <header>
      <div
        className="p-5 text-center bg-image min-vh-100"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/originals/ba/99/d1/ba99d1af407b31ae0b73e9df3d34e235.jpg')",
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Welcome to the Pokedex.</h1>
              <h4 className="mb-3">
                Here inside you can find information about Pokemon.
              </h4>
              <Link to="/home">
                <MDBBtn tag="a" outline size="lg">
                  Let me see!
                </MDBBtn>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
