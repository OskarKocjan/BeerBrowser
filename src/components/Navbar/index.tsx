import React, { useState } from "react";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import {
    StyledNavBar,
    StyledMenuToggleButton,
    StyledNavLink,
    StyledSwipeableDrawer,
} from "./styled";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import { NavbarProps, NavbarLinkData } from "models/NavbarModels";

const Navbar: React.FC<NavbarProps> = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const linksData: NavbarLinkData[] = [
        { href: "/", name: "Home", key: 1 },
        {
            href: `/beer/${Math.floor(Math.random() * 263) + 1}`,
            name: "Surprise",
            key: 2,
        },
        { href: "/", name: "Blog", key: 3 },
        { href: "/", name: "Store", key: 4 },
    ];

    return (
        <StyledNavBar>
            <StyledSwipeableDrawer
                anchor={"left"}
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                onOpen={() => setDrawerOpen(true)}
            >
                {linksData.map((element) => (
                    <StyledNavLink href={element.href} key={element.key}>
                        {element.name}
                    </StyledNavLink>
                ))}
            </StyledSwipeableDrawer>
            <div className="navbar-left">
                <StyledMenuToggleButton
                    value={drawerOpen}
                    onChange={() => setDrawerOpen(!drawerOpen)}
                >
                    <FormatAlignCenterIcon />
                </StyledMenuToggleButton>
                {linksData.map((element) => (
                    <StyledNavLink href={element.href} key={element.key}>
                        {element.name}
                    </StyledNavLink>
                ))}
            </div>
            <div className="navbar-center">
                <SportsBarIcon sx={{ height: "100%", fontSize: "3rem" }} />
                <span>Beer</span>
            </div>
            <div className="navbar-right"></div>
        </StyledNavBar>
    );
};

export default Navbar;
