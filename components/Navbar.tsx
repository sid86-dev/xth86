import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div
      className="fixed-top w-100 d-flex justify-content-center
  "
    >
      <nav
        className="navbar navbar-expand-lg bg-nav mt-3 rounded-5 "
        style={{ zIndex: "10" }}
      >
        <div className="container-fluid">
          <Link href={"/"} legacyBehavior>
            <a className="navbar-brand">Navbar</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Community
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Twitter
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Docs
                </a>
              </li>
            </ul>
            <div
              className="d-flex"
              style={{ marginLeft: "100px" }}
              role="search"
            >
              <button
                className="btn btn-outline-dark mx-2 rounded-5"
                type="submit"
              >
                Download
              </button>

              <Link href={"/ed"}>
                <button className="btn btn-primary rounded-5" type="submit">
                  Open App
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
