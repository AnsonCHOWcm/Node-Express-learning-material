import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
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

