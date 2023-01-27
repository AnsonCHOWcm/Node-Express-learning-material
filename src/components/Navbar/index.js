import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";
import logo from "../../img/Node_Express_Logo.png"

const Navbar = () => {
return (
	<>
	<Nav>
		<img className = "ComponentNavBarLogo" src = {logo} alt = ""></img>
		<NavMenu>
		<NavLink to="/" activeStyle>
			HomePage
		</NavLink>
		<NavLink to="/Notes" activeStyle>
			Notes
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;

