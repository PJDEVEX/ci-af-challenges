import React from 'react';

function NavBarChild(props) {
  return (
    <div>
      <div>
        {props.showLoginForm ? (
          <form onSubmit={props.handleSubmit}>
            <div>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" />
            </div>
            <button type="submit">Submit</button>
          </form>
        ) : (
          <button type="button" onClick={props.handleClick}>
            Log In
          </button>
        )}
      </div>
    </div>
  );
}

export default NavBarChild;
