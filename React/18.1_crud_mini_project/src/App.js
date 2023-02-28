import "normalize.css";
import "reset-css";
import "./styles/App.css";
import { pages } from "./pages";
import { pageNames } from "./constants";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import auth from "./services/auth.service";

function App() {
    const [user, setUser] = useState(auth.currentUser());
    const [page, setPage] = useState(pageNames.landing);
    const { id: userId } = user;

    useEffect(() => {
        userId && setUser(auth.currentUser());
    }, [userId, page]);

    const logOutHandler = () => {
        const logOut = auth.logOut();
        setUser(logOut);
        console.log("User logged out");
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <pages.Layout
                            user={user}
                            logOutHandler={logOutHandler}
                            pageNames={pageNames}
                            setPage={setPage}
                        />
                    }
                >
                    <Route index element={<pages.Landing />} />
                    <Route
                        path={`/${pageNames.login}`}
                        element={
                            <pages.LogIn
                                pageNames={pageNames}
                                setPage={setPage}
                                user={user}
                            />
                        }
                    />
                    <Route
                        path={`/${pageNames.registration}`}
                        element={
                            <pages.Registration
                                pageNames={pageNames}
                                setPage={setPage}
                                user={user}
                            />
                        }
                    />
                    <Route
                        path={`/${pageNames.userhome}`}
                        element={
                            <pages.UserHome
                                pageNames={pageNames}
                                setPage={setPage}
                                user={user}
                            />
                        }
                    />
                    <Route
                        path={`/${pageNames.userinfo}`}
                        element={<pages.UserInfo user={user} />}
                    />
                    <Route
                        path={`/${pageNames.adminhome}`}
                        element={<pages.AdminStats user={user} />}
                    />
                    <Route
                        path={`/${pageNames.logout}`}
                        element={<pages.LogOut />}
                    />
                    <Route path="*" element={<pages.NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
