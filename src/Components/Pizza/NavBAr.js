import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <Link className="link-route" to="home">
              Home
            </Link>
            <Link className="link-route" to="message">
              Все
            </Link>
            <Link className="link-route" to="mes">
              Вегатарианские
            </Link>
            <Link className="link-route" to="mes">
              Острые
            </Link>
            <Link className="link-route" to="mes">
              Гриль
            </Link>

            <form class="d-flex ms-auto mb-2 mb-lg-0" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
