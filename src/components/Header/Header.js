import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg sticky-top bg-body-tertiary bg-dark border rounded mt-2 container mx-auto"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand fw-bold text-danger fs-3 ps-3" href="/home">
          The Meal Express
        </a>
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
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/menu">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/order">
                Ordered Meals
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact Us
              </a>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2 border border-warning"
              type="search"
              aria-label="Search"
            ></input>
            <button className="btn btn-warning" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
