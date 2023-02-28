import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../services/auth.service";
import { createPortal } from "react-dom";
import { Controller } from "react-hook-form";
// import auth from "../services/auth.service";
import useValidator from "../controllers/useValidator";
import {
    Paper,
    Box,
    Grid,
    TextField,
    FormControlLabel,
    Checkbox,
    Typography,
    Button,
    Stack,
    Alert,
} from "@mui/material/";
import SimpleBackdrop from "../components/simpleBackdrop.component";

const Registration = ({ setPage, pageNames, user }) => {
    const [isBackDropOpened, setIsBackDropOpened] = useState(false);
    const { register, control, handleSubmit, errors } = useValidator();
    const navigate = useNavigate();

    console.log("Render register page");

    const onSubmit = (formUserData) => {
        const loggedUser = auth.auth(formUserData);

        setIsBackDropOpened(true);
        if (!loggedUser) {
            console.log("Unable to register a new user");
        } else {
            // console.log(JSON.stringify(formUserData, null, 2));
            setTimeout(() => {
                setIsBackDropOpened(false);
                navigate(`/${pageNames.userhome}`);
            }, 900);
            console.log("Logged successfully");
            console.log("Redirect to registered user homepage");
        }
    };

    useEffect(() => {
        user.id && navigate(`/${pageNames.userhome}`);
    }, [pageNames.userhome, setPage, user, navigate]);

    return (
        <>
            {createPortal(
                <SimpleBackdrop
                    isOpened={isBackDropOpened}
                    setIsBackDropOpened={setIsBackDropOpened}
                >
                    <Alert severity="error">Registration closed.</Alert>
                </SimpleBackdrop>,
                document.querySelector("#backdrop-root")
            )}
            <Paper>
                <Box px={3} py={2}>
                    <Typography variant="h6" align="center" margin="dense">
                        Registration
                    </Typography>

                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12}>
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
                        </Grid>
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
                        <Grid item xs={12} sm={6}>
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
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="confirmPassword"
                                name="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                fullWidth
                                margin="dense"
                                {...register("confirmPassword")}
                                error={errors.confirmPassword ? true : false}
                            />
                            <Typography variant="inherit" color="textSecondary">
                                {errors.confirmPassword?.message}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Controller
                                        control={control}
                                        name="acceptTerms"
                                        defaultValue="false"
                                        inputRef={register()}
                                        render={({ field: { onChange } }) => (
                                            <Checkbox
                                                color="primary"
                                                onChange={(e) =>
                                                    onChange(e.target.checked)
                                                }
                                            />
                                        )}
                                    />
                                }
                                label={
                                    <Typography
                                        color={
                                            errors.acceptTerms
                                                ? "error"
                                                : "inherit"
                                        }
                                    >
                                        I have read and agree to the Terms *
                                    </Typography>
                                }
                            />
                            <br />
                            <Typography variant="inherit" color="textSecondary">
                                {errors.acceptTerms
                                    ? "(" + errors.acceptTerms.message + ")"
                                    : ""}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12}>
                            <Stack direction="row" justifyContent="center">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleSubmit(onSubmit)}
                                >
                                    Register
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
                                    Already got an account?
                                </Typography>
                            </Stack>
                            <br />
                            <Stack direction="row" justifyContent="center">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        navigate(`/${pageNames.login}`);
                                    }}
                                >
                                    Login
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </>
    );
};

export default Registration;
