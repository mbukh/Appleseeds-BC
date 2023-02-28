import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

const UserMenu = ({ user, logOutHandler, pageNames }) => {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const navigate = useNavigate();
    const menuUser = ["Userhome", "Logout"];
    const menuAdmin = ["Dashboard", "Votes", "Logout"];
    const menuGuest = ["Registration", "Login"];
    const auth = user.id;
    const isAdmin = auth && user.type === "admin";

    console.log("Render usermenu component");

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = (e) => {
        setAnchorElUser(null);
        const menuItem = e.target.innerText.toLowerCase();
        if (!menuItem) return;
        console.log("User menu item:", menuItem);
        switch (menuItem) {
            case user.name?.toLowerCase():
                navigate(`/${pageNames.userinfo}`);
                break;
            case pageNames.logout:
                logOutHandler();
                break;
            default:
                navigate(`/${pageNames[menuItem]}`);
                break;
        }
    };

    return (
        <>
            {!auth && (
                /* Guest user  */
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="User menu">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar />
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
                        {menuGuest.map((setting) => (
                            <MenuItem
                                key={setting}
                                onClick={handleCloseUserMenu}
                            >
                                <Typography textAlign="center">
                                    {setting}
                                </Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            )}

            {auth && (
                /* Registered user  */
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="User menu">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            {user.image ? (
                                <Avatar
                                    alt={user.name}
                                    src={user.image || ""}
                                />
                            ) : (
                                <Avatar alt={user.name} src={user.image || ""}>
                                    {user.name[0]}
                                </Avatar>
                            )}
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
                        <MenuItem key="username" onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">
                                {user.name}
                            </Typography>
                        </MenuItem>
                        <Divider />
                        {(isAdmin ? menuAdmin : menuUser).map((setting) => (
                            <MenuItem
                                key={setting}
                                onClick={handleCloseUserMenu}
                            >
                                <Typography textAlign="center">
                                    {setting}
                                </Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            )}
        </>
    );
};

export default UserMenu;
