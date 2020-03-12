import React, { Component } from 'react'
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

import Login from './Login';

class Header extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div id="classicformpage">
        <Router>
          <MDBNavbar color="transparent" dark expand="md">
            <MDBNavbarBrand>
              <strong className="white-text">D-WITTER</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav left>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <MDBIcon icon="user" />
                    </MDBDropdownToggle>
                    <MDBDropdownMenu
                      width="20%">
                      <MDBDropdownItem href="#!"><Login /></MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink className="waves-effect waves-light" to="https://github.com/LeoRoma">
                    <MDBIcon fab icon="github" />
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink className="waves-effect waves-light" to="https://www.linkedin.com/in/jiatian-leo-xia-9b2490191/">
                    <MDBIcon fab icon="linkedin" />
                  </MDBNavLink>
                </MDBNavItem>

              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem active>
                  <MDBNavLink to="/signup">Home</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </Router>
      </div>

    )
  }
}


export default Header