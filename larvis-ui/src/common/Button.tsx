import React, { FC, ComponentProps } from "react";
import "./Button.css";

interface ButtonProps extends ComponentProps<"button"> {
    text?: string;
    plain?: boolean;
    onClick?: () => void;
}
const Button: FC<ButtonProps> = ({
    text = "submit",
    type = "submit",
    plain = false,
    onClick,
}) => {
    let className = "lrvs-button";
    if (plain) {
        className += " lrvs-button_plain";
    }
    return (
        <button className={className} type={type} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
