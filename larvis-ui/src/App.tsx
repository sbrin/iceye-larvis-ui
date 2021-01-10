import React, { useEffect } from "react";
import "./App.css";
import Login from "./auth/Login";
import Acquisitions from "./charts/Acquisitions";
import User from "./users/User";
import { Context, Reducer, initialState } from "./store/Store";

function App() {
    const [state, dispatch] = React.useReducer(Reducer, initialState);

    useEffect(() => {
        const token = localStorage.getItem("LRVS_TOKEN");
        const user_id = localStorage.getItem("LRVS_USER");
        if (token) dispatch({ type: "LOGIN", payload: token });
        if (user_id) dispatch({ type: "SET_USER", payload: user_id });
    }, []);

    return (
        <Context.Provider value={{ state, dispatch }}>
            <div className="lrvs-page">
                <header className="lrvs-page__header">
                    <h1 className="lrvs-page__logo">LARVIS UI</h1>
                    {state.token && <User />}
                </header>
                {!state.token ? <Login /> : <Acquisitions />}
            </div>
        </Context.Provider>
    );
}

export default App;
