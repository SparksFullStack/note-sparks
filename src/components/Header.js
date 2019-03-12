import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
  

class Header extends Component {
    constructor(props){
        super(props);

        this.state = {
            isNavOpen: true,
        }
    }

    toggle = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen,
        })
    }
  
    render() {
        return (
            <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Note Sparks</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/notes">My Notes</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
        )
    }
}

export default Header;
