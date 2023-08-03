import React from "react";
import css from "./css/NavBarSimple.module.css";


class NavBarSimple extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "Hello, guest!",
            name: "",
            buttonText: "log in",
            count: 0,
        };
    }

    // Handle button click to toggle message, name, and button text
    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log('Previous State:', prevState);
            console.log('Previous Props:', prevProps);
            return {
                message: prevState.message === "Hello, guest!" ? "Welcome back," : "Hello, guest!",
                name: prevState.name === "" ? "User!" : "",
                buttonText: prevState.buttonText === "Log in" ? "Log out" : "Log in"
            };
        });
    }

    // Increment the count in state
    increment() {
        this.setState((prevState, prevProps) => {
            console.log('Previous State:', prevState);
            console.log('Previous Props:', prevProps);
            return {
                count: prevState.count + 1
            };
        });
    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <div>
                <span> {this.state.message} {this.state.name}</span>
                <button onClick={() => {
                    this.handleClick();
                    this.increment();
                }}>
                    {this.state.buttonText}
                </button>
                </div>
            </div>
        );
    }
}

export default NavBarSimple;