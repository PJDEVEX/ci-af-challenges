import React from "react";
import css from "./css/NavBarForm.module.css";
import NavBarChild from "./NavBarChild";

class NavBarForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: "Log In",
      showLoginForm: false,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      showLoginForm: !prevState.showLoginForm,
    }));
    console.log(this, "parent is reffered, even button is in the child")
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      showLoginForm: false,
      buttonText: "Log In",
    });
  };

  render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gallery</h1>
        <NavBarChild
          showLoginForm={this.state.showLoginForm}
          handleClick={this.handleClick} // Pass the handleClick function as a prop
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default NavBarForm;
