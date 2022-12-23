import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Contact me</span>
        </div>

        <div>
          <a
            href="https://www.linkedin.com/in/maxi-zeballos/"
            className="me-4 text-reset"
          >
            <MDBIcon color="secondary" fab icon="linkedin" />
          </a>
          <a href="https://github.com/Andreh-Z" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Tech</h6>
              <p>
                <a href="#!" className="text-reset">
                  React
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Express
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  NodeJS
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  PostgreSQL
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  No idea
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Something here
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Use your imagination
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Here too
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon color="secondary" icon="home" className="me-2" />
                Uruguay - Paysandu
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
                maxi.zeballos97@gmail.com
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-3" />
                +598 097069089
              </p>
              <p>
                <MDBIcon color="secondary" icon="print" className="me-3" /> Who
                use this?
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://github.com/Andreh-Z">
          Andreh-Z
        </a>
      </div>
    </MDBFooter>
  );
}
