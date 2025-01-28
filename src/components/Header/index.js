import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import MenuItems from './MenuItems';

import stickyLogo from '../../assets/images/logos/logo-co2.png';

const Header = (props) => {
	const {headerClass, parentMenu } = props;

	const [menuOpen, setMenuOpen] = useState(false)
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		// Sticky is displayed after scrolling for 100 pixels
		const toggleVisibility = () => {
			if (window.pageYOffset > 100) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	return (
		<>

			<header id="react-header" className={headerClass ? headerClass : 'react-header react-header-three'}>
				<div className={isVisible ? 'header-area react-sticky' : 'header-area'}>
					<div className="menu-part">
						<div className="container">
							<div className="react-main-menu">
								<nav>
									<div className="menu-toggle">
										<div className="logo">
											<Link to="/" className="logo-text">
												<img src={stickyLogo} alt=""  style={{width: '125px'}}/>
											</Link>
										</div>
										<button type="button" id="menu-btn" className={menuOpen ? "mobile-menu-btn open" : "mobile-menu-btn"} onClick={() => {setMenuOpen(!menuOpen)}}>
											<span className="icon-bar"></span>
											<span className="icon-bar"></span>
											<span className="icon-bar"></span>
										</button>
									</div>
									<div className={menuOpen ? "react-inner-menus menu-open" : "react-inner-menus"}>
										<ul id="backmenu" className="react-menus react-sub-shadow">
											<MenuItems
												parentMenu = {parentMenu}
											/>
										</ul>
									</div>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}

export default Header;