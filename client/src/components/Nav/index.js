// https://www.bennettnotes.com/bootstrap-navbar-collapse-reactjs/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./style.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark transparent-nav">
        <div className="container">
          <a className="navbar-brand" href="#">Booklooker</a>
          <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`${classOne}`} id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className={ this.props.activePage === "search" ? "nav-item active" : "nav-item" }>
                <Link className="nav-link" to="/search">Search</Link>
              </li>
              <li className={ this.props.activePage === "saved" ? "nav-item active" : "nav-item" }>
                <Link className="nav-link" to="/saved">Saved</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Nav;