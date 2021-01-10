import React, { FC } from "react";
import Context from "../store/Store";
import "./User.css";
import Button from "../common/Button";

const User: FC = () => {
    const { state, dispatch } = React.useContext(Context);

    const logOut = () => {
        console.log("logout");

        dispatch({ type: "LOGOUT" });
    };

    return (
        <div className="lrvs-user">
            <div className="lrvs-user__label">User id</div>
            <div className="lrvs-user__id">{state.user_id}</div>
            <div className="lrvs-user__popup">
                <Button plain text="Log Out" onClick={logOut} />
            </div>
        </div>
    );
};

export default User;
