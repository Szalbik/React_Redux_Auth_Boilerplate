import React from "react";
import PropTypes from "prop-types";
import { Menu, Dropdown, Image, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import gravatarUrl from "gravatar-url";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

const TopNavigation = ({ user, logout }) => {
  return (
    <Menu>
      <Menu.Item as={Link} to="/dashboard">
        Dashboard
      </Menu.Item>
      <Menu.Item as={Link} to="/books/new">
        <Icon name="plus circle" size="large" /> Add Book
      </Menu.Item>
      <Menu.Menu position="right">
        <Dropdown trigger={<Image avatar src={gravatarUrl(user.email)} />}>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => logout()}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  );
};

TopNavigation.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired
  }).isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(
  mapStateToProps,
  { logout }
)(TopNavigation);
