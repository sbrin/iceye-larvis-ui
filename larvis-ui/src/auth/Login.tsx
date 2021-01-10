import React, { FC, FormEvent, useState } from "react";
import Button from "../common/Button";
import AuthService from "../services/auth.service";
import Context from "../store/Store";
import "./Login.css";

const Login: FC = () => {
    const [userId, setId] = useState("");
    const [password, setPass] = useState("");
    const [status, setStatus] = useState("");

    const { dispatch } = React.useContext(Context);

    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        setStatus("waiting");
        AuthService.getToken(userId, password)
            .then(({ access }) => {
                dispatch({ type: "LOGIN", payload: access });
                dispatch({ type: "SET_USER", payload: userId });
            })
            .catch(() => setStatus("error"));
    };

    return (
        <form className="lrvs-form" onSubmit={submitHandler}>
            <fieldset
                className="lrvs-form__fieldset"
                disabled={status === "waiting"}
            >
                <input
                    className="lrvs-form__input"
                    placeholder="User id"
                    value={userId}
                    required
                    onChange={e => setId(e.target.value)}
                />

                <input
                    className="lrvs-form__input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    required
                    onChange={e => setPass(e.target.value)}
                />

                {status === "error" && (
                    <div>
                        Something went wrong. Please check your input and try
                        again.
                    </div>
                )}
                <Button text="Submit" />
            </fieldset>
        </form>
    );
};

export default Login;
