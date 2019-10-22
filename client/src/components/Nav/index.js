import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <a className="navbar-brand" href="/">
        Booklooker!
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">Search <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Saved</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
