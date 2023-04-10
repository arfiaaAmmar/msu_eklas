import { Logout } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import Settings from "@mui/icons-material/Settings";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import * as React from "react";
import Sidebar from "./Sidebar/Sidebar";
import { Link } from "react-router-dom";

export const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [sidebar, setSidebar] = React.useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="flex fixed top-0 w-full flex-row justify-between p-2 shadow-md bg-neutral-800 z-10">
        <IconButton onClick={() => setSidebar(true)}>
          <MenuIcon className="text-center text-white my-auto"/>
        </IconButton>
        <input type="search" title="SearchBox" placeholder="Search" className="rounded-2xl h-8 my-auto ml-0 mr-auto bg-neutral-100 p-2"/>
        <Box
          sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
        >
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar src="/images/profile_pic.png" alt="" />
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem className="text-sm">
            <Avatar src="/images/profile_pic.png" /> Profile
          </MenuItem>
          <Divider />
          <MenuItem className="text-sm">
            <ListItemIcon>
              <Settings fontSize="medium" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem className="text-sm">
            <ListItemIcon>
              <Logout fontSize="medium" />
            </ListItemIcon>
            <Link to="/login">Logout</Link>
          </MenuItem>
        </Menu>
      </div>
      {
        sidebar == true ? <Sidebar sidebar={sidebar} setSidebar={setSidebar}/> : null 
      }
    </>
  );
};
