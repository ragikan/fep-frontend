
"use client";

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styles from './page.module.css';

const Page = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const navLinks = (
    <>
      <Button href="#home" color="inherit">HOME</Button>
      <Button href="#aboutus" color="inherit">ABOUT US</Button>
      <Button href="#faq" color="inherit">F.A.Q</Button>
      <Button href="#team" color="inherit">TEAM</Button>
      <Button href="#testimonials" color="inherit">TESTIMONIALS</Button>
      <Button href="#contactus" color="inherit">CONTACT US</Button>
    </>
  );

  return (
    <div className={styles.root}>
      <AppBar position="fixed" className={styles.appBar}>
        <Toolbar className={styles.toolbar}>
          <Typography variant="h6">FTP</Typography>
          <div className={styles.navLinks}>
            {navLinks}
          </div>
          <IconButton edge="end" className={styles.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <IconButton edge="end" color="inherit" aria-label="close" onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
          <List>
            <ListItem button component="a" href="#home">
              <ListItemText primary="HOME" />
            </ListItem>
            <ListItem button component="a" href="#aboutus">
              <ListItemText primary="ABOUT US" />
            </ListItem>
            <ListItem button component="a" href="#faq">
              <ListItemText primary="F.A.Q" />
            </ListItem>
            <ListItem button component="a" href="#team">
              <ListItemText primary="TEAM" />
            </ListItem>
            <ListItem button component="a" href="#testimonials">
              <ListItemText primary="TESTIMONIALS" />
            </ListItem>
            <ListItem button component="a" href="#contactus">
              <ListItemText primary="CONTACT US" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <div className={styles.header}>
  <Typography variant="h1" className={styles.tj1}>Foreign Training Program</Typography>
  <Typography variant="h5" className={styles.subtitle}>Your Gateway to Global Excellence</Typography>
  <Typography variant="body1">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, perspiciatis sed veritatis maxime quas, deleniti reprehenderit porro voluptatibus quis ut tenetur, vero ipsa dolore rem. Et tempore officia inventore rerum.
  </Typography>
  <center><Button variant="contained" className={styles.button}><strong>Apply Now</strong></Button></center>
</div>


      <Container className={styles.content}>
        {/* Other sections can be added here with their respective IDs */}
        <div id="aboutus"><Typography variant="h4">About Us</Typography></div>
        <div id="faq"><Typography variant="h4">F.A.Q</Typography></div>
        <div id="team"><Typography variant="h4">Team</Typography></div>
        <div id="testimonials"><Typography variant="h4">Testimonials</Typography></div>
        <div id="contactus"><Typography variant="h4">Contact Us</Typography></div>
      </Container>
    </div>
  );
};

export default Page;

