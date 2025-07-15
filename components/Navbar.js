"use client";


// import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

// import Button from "@mui/material/Button"; // MUI button


import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import { Link as ScrollLink } from "react-scroll";
import Button from "@mui/material/Button";

const Navbar = () => {

  const pathname = usePathname();

  const scrollSections = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Skills", id: "skills" },
    { label: "Testimonials", id: "testimonials" },

  ];

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isItemClicked, setIsItemClicked] = useState(false); // New state to track item click

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const sections = ["home", "about", "services", "skills", "testimonials", "contact"];

  // Handle item click to close drawer and change visibility
  const handleItemClick = () => {
    setIsDrawerOpen(false);
    setIsItemClicked(true); // Mark the item as clicked
  };


  // <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingRight: "50px", paddingLeft: "0px", height: "50px" }}>
  const router = useRouter();

  const handleDrawerItemClick = (id) => {
    setIsDrawerOpen(false);

    if (pathname !== "/") {
      // Navigate to homepage first
      router.push(`/#${id}`);
    } else {
      // Already on homepage, smooth scroll manually
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  };

  return (
    <>
      {/* Navbar */}
      <AppBar position="fixed" sx={{ backgroundColor: "#2c2c2c" }}>
        <Toolbar
          sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingRight: "50px", paddingLeft: "0px", height: "50px" }}
        >
          {/* Logo */}
          <Typography
            variant="h6"
            sx={{ cursor: "pointer" }}
            component={ScrollLink}
            to="home"
            smooth={true}
            duration={500}
          >
            <img
              src="/Images/Rbimage.png"
              alt="Profile"
              style={{ height: "80px", verticalAlign: "middle" }}
            />
          </Typography>

          {/* Links for larger screens */}

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {scrollSections.map((section) => (
              <Link key={section.id} href={`/#${section.id}`} passHref>
                <Button
                  sx={{
                    color: pathname === "/contact" ? "gray" : "white",
                    textTransform: "capitalize",
                    fontSize: "1.25rem",
                  }}
                >
                  {section.label}
                </Button>
              </Link>
            ))}

            {/* Separate Contact button that routes to /contact */}
            <Link href="/contact" passHref>
              <Button
                sx={{
                  color: pathname === "/contact" ? "#8750F7" : "white",
                  textTransform: "capitalize",
                  fontSize: "1.25rem",
                }}
              >
                Contact
              </Button>
            </Link>
          </Box>


          {/* Hamburger menu for smaller screens */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "block", md: "none" } }} // Show only on small screens
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left" // Drawer opens from the left
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{
            width: 250,
            backgroundColor: "#121212", // Drawer color
            height: "100%", // Ensure it covers full height
            color: "white",
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >


          {/* <List>
            {sections.map((section) => (
              <ListItem
                button
                key={section}
                component={ScrollLink}
                to={section}
                smooth={true}
                duration={500}
                sx={{
                  color: "white", // Set font color to white
                  cursor: "pointer", // Set cursor pointer
                }}
                onClick={handleItemClick} // Close the drawer when clicked
              >
                <ListItemText
                  primary={section.charAt(0).toUpperCase() + section.slice(1)}
                />
              </ListItem>
            ))}
          </List> */}

          <List>
            {scrollSections.map((section) => (
              <ListItem
                button
                key={section.id}
                onClick={() => handleDrawerItemClick(section.id)}
                sx={{
                  color: "white",
                  cursor: "pointer",
                }}
              >
                <ListItemText primary={section.label} />
              </ListItem>
            ))}

            {/* Contact is separate route */}
            <ListItem
              button
              onClick={() => {
                setIsDrawerOpen(false);
                router.push("/contact");
              }}
              sx={{
                color: pathname === "/contact" ? "#8750F7" : "white",
                cursor: "pointer",
              }}
            >
              <ListItemText primary="Contact" />
            </ListItem>
          </List>


        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
