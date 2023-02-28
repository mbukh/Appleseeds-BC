import { Outlet } from "react-router-dom";
import { components } from "../components/";

const Layout = ({ user, logOutHandler, pageNames, setPage }) => {
    return (
        <>
            <components.Header
                user={user}
                logOutHandler={logOutHandler}
                pageNames={pageNames}
                setPage={setPage}
            />
            <Outlet />
            {/* <components.Footer /> */}
        </>
    );
};

export default Layout;
