import { createContext, Dispatch } from "react";

interface StateInterface {
    token?: string;
    user_id?: string;
}

interface StateAction {
    type: string;
    payload?: any;
}

export const Reducer = (state: StateInterface, action: StateAction) => {
    switch (action.type) {
        case "LOGIN":
            localStorage.setItem("LRVS_TOKEN", action.payload);
            return {
                ...state,
                token: action.payload as string,
            };
        case "LOGOUT":
            localStorage.clear();
            return {
                ...state,
                token: "",
            };
        case "SET_USER":
            localStorage.setItem("LRVS_USER", action.payload);
            return {
                ...state,
                user_id: action.payload,
            };
        default:
            return state;
    }
};

export const initialState: StateInterface = {};

interface StateContext {
    state: StateInterface;
    dispatch: Dispatch<StateAction>;
}

export const Context = createContext({} as StateContext);

export default Context;
