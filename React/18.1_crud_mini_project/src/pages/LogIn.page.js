import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { createPortal } from "react-dom";
import auth from "../services/auth.service";
import useValidator from "../controllers/useValidator";
import {
    Paper,
    Box,
    Grid,
    TextField,
    Typography,
    Button,
    Stack,
    Alert,
} from "@mui/material/";
import SimpleBackdrop from "../components/simpleBackdrop.component";

const LogIn = ({ setPage, pageNames, user }) => {
    const [isBackDropOpened, setIsBackDropOpened] = useState(false);
    const [isBackDropError, setIsBackDropError] = useState(false);
    const navigate = useNavigate();

    const { register, handleSubmit, errors } = useValidator({
        ignoreName: true,
        ignoreConfirmPassword: true,
        ignoreAcceptTerms: true,
    });

    console.log("Render login page");

    const onSubmit = async (formUserData) => {
        setIsBackDropError(false);
        setIsBackDropOpened(true);
        const loggedUser = await auth.auth(formUserData);
        if (!loggedUser.id) {
            setIsBackDropError(true);
            console.log("User not found");
        } else {
            setTimeout(() => {
                navigate(`/${pageNames.userhome}`);
            }, 200);
            console.log("Logged successfully");
            console.log("Redirect to user homepage");
        }
    };

    return (
        <>
            {user.id && (
                <Navigate to={`/${pageNames.userhome}`} replace={true} />
            )}
            {isBackDropOpened &&
                createPortal(
                    <SimpleBackdrop
                        isOpened={isBackDropOpened}
                        setIsBackDropOpened={setIsBackDropOpened}
                        isBackDropError={isBackDropError}
                    >
                        <Alert severity="error">User not found.</Alert>
                    </SimpleBackdrop>,
                    document.querySelector("#backdrop-root")
                )}
            <Paper elevation={4}>
                <Box px={3} py={2}>
                    <Typography variant="h6" align="center" margin="dense">
                        Log In to Vote
                    </Typography>
                    <Grid container spacing={1}>
                        {/* <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                id="fullname"
                                name="fullname"
                                label="Full Name"
                                fullWidth
                                margin="dense"
                                {...register("fullname")}
                                error={errors.fullname ? true : false}
                            />
                            <Typography variant="inherit" color="textSecondary">
                                {errors.fullname?.message}
                            </Typography>
                        </Grid> */}
                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                id="email"
                                name="email"
                                label="Email"
                                fullWidth
                                margin="dense"
                                {...register("email")}
                                error={errors.email ? true : false}
                            />
                            <Typography variant="inherit" color="textSecondary">
                                {errors.email?.message}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                fullWidth
                                margin="dense"
                                {...register("password")}
                                error={errors.password ? true : false}
                            />
                            <Typography variant="inherit" color="textSecondary">
                                {errors.password?.message}
                            </Typography>
                        </Grid>
                    </Grid>
                    <br />
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12}>
                            <Stack direction="row" justifyContent="center">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleSubmit(onSubmit)}
                                >
                                    Login
                                </Button>
                            </Stack>
                            <br />
                            <br />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Stack direction="row" justifyContent="center">
                                <Typography
                                    variant="inherit"
                                    color="textSecondary"
                                >
                                    Don't have an account?
                                </Typography>
                            </Stack>
                            <br />
                            <Stack direction="row" justifyContent="center">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        navigate(`/${pageNames.registration}`);
                                    }}
                                >
                                    Register
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </>
    );
};

export default LogIn;
