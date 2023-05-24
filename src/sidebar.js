import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { NavLink, Link } from 'react-router-dom';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import './sideBar.css'
import Home from './views/screens/home';
import Documents from './views/screens/documents';
import Menu from './Menu';
import { useNavigate } from 'react-router-dom';
// const navigate = useNavigate();

const drawerWidth = 230;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    // padding: theme.spacing(),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {

    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),

  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 0),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const navigate = useNavigate();
  const goBack = () => {
    console.log("Back")
    navigate(-1);
  }

  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const openInNewTab = (url) => {
    console.log("Hello")
    goBack()
    window.open(url, "_blank", "noreferrer");


  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* <AppBar position="fixed" open={open} style={{ backgroundColor: '#0C0F35' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" color={'white'}>
            Doxplore
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: "#202133",
            width: 500,
          },
        }}
        sx={{

          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <img className="w-40 ml-8" src={require("./assets/logo_wh.png")} alt="Synacal Logo" />
          <IconButton onClick={handleDrawerClose} >
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List>
          <Link to="/" className='link'>
            <ListItem key='Home' >
              <ListItemButton >
                <ListItemIcon  >
                  <HomeIcon style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/explore" className='link'>
            <ListItem key='Explore' >
              <ListItemButton>
                <ListItemIcon  >
                  <MessageIcon style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Explore" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/documents" className='link'>
            <ListItem key='Documents' >
              <ListItemButton >
                <ListItemIcon  >
                  <LibraryBooksIcon style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Documents" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/resources" className='link'>
            <ListItem key='Resources' >
              <ListItemButton onClick={() => openInNewTab("https://rootcodelabs.com/")}>
                <ListItemIcon >
                  <FindInPageIcon style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Resources" />
              </ListItemButton>
            </ListItem>
          </Link>

        </List>
        <Divider />

        <List className='bottomList'>
          <Link to="/upgrade" className='link'>
            <ListItem key='Upgrade' >
              <ListItemButton >
                <ListItemIcon >
                  <UpgradeIcon style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Upgrade" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/synacal" className='link'>
            <ListItem key='Synacal' >
              <ListItemButton >
                <ListItemIcon >
                  <TravelExploreIcon style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Synacal" />
              </ListItemButton>
            </ListItem>
          </Link>

        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
