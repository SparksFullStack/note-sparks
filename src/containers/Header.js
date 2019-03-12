import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
  
import './Header.css';

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
            <header>
                <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Note Sparks</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    { this.props.isSignedIn ? 
                        <NavItem>
                            <NavLink href="/notes">Sign Out</NavLink>
                        </NavItem>
                        :
                        <NavItem>
                            <NavLink href="/notes">Sign In</NavLink>
                        </NavItem>
                    }
                    </Nav>
                </Collapse>
                </Navbar>
            </header>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.user.isSignedIn,
    }
}

export default connect(mapStateToProps)(Header);
