import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../logo.svg';
import { ButtonContainer } from './Button';

export default class Navbar extends Component {
	render() {
		return (
			<NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
				{/*
					Thanks to: 
                    https://www.iconfinder.com/icons/3387285/computer_ecommerce_market_shopping_icon
                    Creative Commons (Attribution 3.0 Unported);
                */}
				<Link to="/">
					<img src={logo} alt="store" className="navbar-brand" />
				</Link>
				<ul className="navbar-nav align-items-center">
					<li className="nav-item">
						<Link to="/" className="nav-link ml-5">
							products
						</Link>
					</li>
				</ul>
				<Link to="/cart" className="ml-auto">
					<ButtonContainer className="btnc">
						<span className="mr-1">
							<i className="fas fa-cart-plus" />
						</span>
						my cart
					</ButtonContainer>
				</Link>
			</NavWrapper>
		);
	}
}

const NavWrapper = styled.nav`
	background: var(--mainBlue);

	.nav-link {
		color: var(--mainWhite) !important;
		font-size: 1.3rem;
		text-transform: capitalize;
	}
`;
