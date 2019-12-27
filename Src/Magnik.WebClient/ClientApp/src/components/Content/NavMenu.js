import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import '../NavMenu.css';
import logo from '../StaticFiles/t2.png';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.state = {
            collapsed: true,
            dropdownOpen: false,
            modalSignOut: false,
            roles: []
        };

        this.modalSignOut = this.modalSignOut.bind(this);
        this.signOut = this.signOut.bind(this);
        this.toggleNavbar = this.toggleNavbar.bind(this);
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    modalSignOut() {
        this.setState({
            modalSignOut: !this.state.modalSignOut
        });
    }

    signOut = async function () {
        let url = "/api/account/logout";
        let method = "post";

        let response = await fetch(url, {
            method: method,
            mode: 'cors'
        });

        this.setState({
            modalSignOut: !this.state.modalSignOut
        });

        window.location.reload();
        window.location.replace("/");
    }

    toggleDropDown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    async loadData() {
        let url = "api/account/getAccount";

        let response = await fetch(url);

        if (response.ok) {
            let responseJson = response.json();
            responseJson.then(results => {
                this.setState({
                    roles: results.roles
                });
            });
        }
    }

    async componentDidMount() {
        await this.loadData();
    }

    renderNavBar() {
        let isUser = this.state.roles.indexOf('user');
        let isAdmin = this.state.roles.indexOf('admin');
        let isSitter = this.state.roles.indexOf('sitter');

        if (isAdmin != (-1)) {
            return (
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                    <Container>
                        <NavbarBrand tag={Link} to="/" style={{ color: '#ff5c72' }}><Image style={{ width: '40px', height: '40px' }} src={logo} alt="Logo" roundedCircle />Magnik Admin</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/Profile">Profile</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="text-dark" style={{ cursor: "pointer" }} onClick={this.modalSignOut}>Log Out</NavLink>
                                </NavItem>
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            );
        }
        else if (isUser != (-1)) {
            return (
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                    <Container>
                        <NavbarBrand tag={Link} to="/" style={{ color: '#ff5c72' }}><Image style={{ width: '40px', height: '40px' }} src={logo} alt="Logo" roundedCircle />Magnik User</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/FindSitters">Find Sitters</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/Profile">Profile</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="text-dark" style={{ cursor: "pointer" }} onClick={this.modalSignOut}>Log Out</NavLink>
                                </NavItem>
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            );
        }
        else if (isSitter != (-1)) {
            return (
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                    <Container>
                        <NavbarBrand tag={Link} to="/" style={{ color: '#ff5c72' }}><Image style={{ width: '40px', height: '40px' }} src={logo} alt="Logo" roundedCircle />Magnik Sitter</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/Profile">Profile</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="text-dark" style={{ cursor: "pointer" }} onClick={this.modalSignOut}>Log Out</NavLink>
                                </NavItem>
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            );
        }
        else {
            return (
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                    <Container>
                        <NavbarBrand tag={Link} to="/" style={{ color: '#ff5c72' }}><Image style={{ width: '40px', height: '40px' }} src={logo} alt="Logo" roundedCircle />Magnik</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/Login">Sign In</NavLink>
                                </NavItem>
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            );
        }
    }

    render() {
        return (
            <header>
                {this.renderNavBar()}
                <div>
                    <Modal isOpen={this.state.modalSignOut} >
                        <ModalHeader toggle={this.modalSignOut} >
                            Sign Out
                        </ModalHeader>
                        <ModalBody>
                            <p>Are you sure you want to log out?</p>
                            <button className="btn btn-outline-danger" onClick={this.signOut}>Log Out</button>
                        </ModalBody>
                    </Modal>
                </div>
            </header>
        );
    }
}