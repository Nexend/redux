import React from 'react';
import { ThemeContext } from './themes-context';

class UserMenu extends React.Component {
  render() {
    return (
      <div className="menu">
        <span className="menu__greeting">Hello, {this.context.name}</span>
        <img alt="User Avatar" src={this.context.avatar_url} className="menu__avatar" />
      </div>
    );
  }
}

UserMenu.contextType = ThemeContext;

export default UserMenu;
