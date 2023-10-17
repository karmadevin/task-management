import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import { Button, colors } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
// import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
// import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";
import { green, pink, teal } from "@mui/material/colors";
import profile2 from "../assets/profile2.png";
import SettingsIcon from "@mui/icons-material/Settings";
import proicon from "../assets/proicon.svg";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import taskicon from "../assets/taskicon.svg";
// import logo from "../assets/logo.svg";
import clients from "../assets/clients.svg";
import leads from "../assets/leads.svg";
import payslip from "../assets/payslip.svg";
import user from "../assets/user.svg";
import "./DashLayout.css";
// import Superadminpayslip from "../features/Superadmin-payslip/Superadminpayslip";
// import SuperadminUser from "../features/SuperAdmin-User/SuperadminUser";
// import SuperadminClient from "../features/SuperAdmin-Client/SuperadminClient";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Switch,
  TextField,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const label = { inputProps: { "aria-label": "Switch demo" } };
function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleCloseProject = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Dialog onClose={handleCloseProject} open={open}>
      <div>
        <div className="DialogHead">
          <DialogTitle>
            <div className="DialogHeader">
              <p>Create A New Project</p>
              <Button style={{ color: "#000" }}>
                <ClearIcon onClick={handleCloseProject}></ClearIcon>
              </Button>
            </div>
          </DialogTitle>
        </div>
        <DialogContent className="Container1">
          <div className="Dialog-textfield">
            <p>Company Name</p>
            <TextField
              id="outlined-size-small"
              defaultValue=" "
              size="small"
              style={{
                width: "350px",
              }}
            ></TextField>
          </div>
          <div className="Dialog-textfield">
            <p>First Name</p>
            <TextField
              id="outlined-size-small"
              defaultValue=" "
              size="small"
              style={{
                width: "350px",
              }}
            ></TextField>
          </div>
          <div className="Dialog-textfield">
            <p>Last Name</p>
            <TextField
              id="outlined-size-small"
              defaultValue=" "
              size="small"
              style={{
                width: "350px",
              }}
            ></TextField>
          </div>
          <div className="Dialog-textfield">
            <p>Email Address</p>
            <TextField
              id="outlined-size-small"
              defaultValue=" "
              size="small"
              style={{
                width: "350px",
              }}
            ></TextField>
          </div>
        </DialogContent>

        <DialogContent className="Container2">
          <div className="Dialog-textfield">
            <p>Project Title *</p>
            <TextField
              id="outlined-size-small"
              defaultValue=" "
              size="small"
              style={{
                width: "350px",
              }}
            ></TextField>
          </div>
          <div className="Dialog-textfield">
            <p>Start Date *</p>
            <TextField
              id="outlined-size-small"
              defaultValue=" "
              size="small"
              style={{
                width: "350px",
              }}
            ></TextField>
          </div>
          <div className="Dialog-textfield">
            <p>Deadline</p>
            <TextField
              id="outlined-size-small"
              defaultValue=" "
              size="small"
              style={{
                width: "350px",
              }}
            ></TextField>
          </div>
        </DialogContent>

        <DialogContent className="Container3">
          <div className="switches">
            <p>Description & Details</p>
            <Switch {...label} /*onClick={toggler} */ />
          </div>
          <div className="switches">
            <p>Category & Users</p>
            <Switch {...label} />
          </div>
          <div className="switches">
            <p>Additional Settings</p>
            <Switch {...label} />
          </div>
          <div className="switches">
            <p>Progress</p>
            <Switch {...label} />
          </div>
          <div className="switches">
            <p>More Information</p>
            <Switch {...label} />
          </div>
          <div>
            <p style={{ fontSize: "12px" }}>
              Show project after its been created
            </p>
          </div>
          <div className="Buttons">
            <Button
              style={{
                color: "#000",
                border: "1px solid black",
                width: "50px",
              }}
              onClick={handleCloseProject}
            >
              Close
            </Button>
            <Button style={{ color: "#000", border: "1px solid black" }}>
              Submit
            </Button>
          </div>
        </DialogContent>
      </div>
    </Dialog>
  );
}

// const settings = ["Profile", "Account", "Dashboard", "Logout"];
export default function MiniDrawer() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  const [openProject, setOpenProject] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(false);
  const handleClickOpenProject = () => {
    setOpenProject(true);
  };

  const handleCloseProject = (value) => {
    setOpenProject(false);
    setSelectedValue(value);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline style={{ color: pink }} />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" noWrap component="div">
            Task Management
          </Typography> */}
          <div className="acontainer">
            <Box sx={{ flexGrow: 0 }}>
              <IconButton>
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton>
                <SettingsIcon />
              </IconButton>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar src={profile2} alt="profile" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography
                    textAlign="center"
                    onClick={handleClickOpenProject}
                  >
                    Profile
                  </Typography>
                  <SimpleDialog
                    selectedValue={selectedValue}
                    open={openProject}
                    onClose={handleCloseProject}
                  />
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Account</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={() => navigate("/super-admin-dashboard/timesheets")}>TimeSheets</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={() => navigate("/")}>
                    Logout
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          {/* <img src={logo} alt="Karmadev.in" style={{morgin:'3px',padding:"5px"}}/> */}
          <h2
            style={{ paddingRight: "10px", fontFamily: "Roboto, sans-serif" }}
          >
            <b>Karmadev.in</b>
          </h2>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <List>
          {["Dashboard", "Project"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  color: teal["A700"],
                  borderrighttopradius: "10px",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 3 == 0 ? (
                    <DashboardRoundedIcon
                      sx={{
                        color: teal["A700"],
                        height: "32px",
                        width: "32px",
                      }}
                      onClick={() => navigate("/super-admin-dashboard")}
                    />
                  ) : (
                    <img
                      src={proicon}
                      alt="task icon"
                      style={{ height: "32px", width: "32px" }}
                      onClick={() =>
                        navigate("/super-admin-dashboard/projects")
                      }
                    />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}

          {["Task", "Payslip"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  color: teal["A700"],
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 3 == 0 ? (
                    <img
                      src={taskicon}
                      alt="Karmaev.in"
                      style={{ height: "28px", width: "32px" }}
                      onClick={() => navigate("/super-admin-dashboard/tasks")}
                    />
                  ) : (
                    <img
                      src={payslip}
                      alt="Karmadev.im"
                      style={{ height: "32px", width: "32px" }}
                      onClick={() => navigate("/super-admin-dashboard/payslip")}
                    />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
          {["Leads", "User"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  color: teal["A700"],
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 3 == 0 ? (
                    <img
                      src={leads}
                      alt="Karmaev.in"
                      style={{ height: "28px", width: "32px" }}
                      onClick={() => navigate("/super-admin-dashboard/leads")}
                    />
                  ) : (
                    <img
                      src={user}
                      alt="Karmadev.im"
                      style={{ height: "32px", width: "32px" }}
                      onClick={() => navigate("/super-admin-dashboard/users")}
                    />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
          {/* Clients */}
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                color: teal["A700"],
              }}
              onClick={() => navigate("/super-admin-dashboard/clients")}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <img
                  src={clients}
                  alt="clients"
                  style={{ color: green, height: "28px", width: "32px" }}
                />
              </ListItemIcon>
              <ListItemText primary={"Client"} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        <Outlet />
      </Box>
    </Box>
  );
}
