import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from './users.actions';

import User from './User';
import Pagination from './Pagination';

class UsersList extends Component {
  render() {
    const { usersList, currentPage, nextPage, prevPage } = this.props;
    const usersPerPage = 3;

    const start = currentPage * usersPerPage;
    const usersToDisplay = usersList.slice(start, start + usersPerPage);

    return (
      <div>
        <Pagination
          goPrev={prevPage}
          goNext={nextPage}
          currentPage={currentPage}
          totalItems={usersList.length}
          itemsPerPage={usersPerPage}
        />

        <ul className="users">
          {usersToDisplay.map(user => (
            <User key={user.id} name={user.name} age={user.age} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = state => {
  return {
    usersList: state.users.usersList,
    currentPage: state.users.currentPage,
  };
};

const mapDispatch = {
  nextPage: userActions.nextPage,
  prevPage: userActions.prevPage,
};

const connector = connect(mapState, mapDispatch);

const ConnectedUsersList = connector(UsersList);

export default ConnectedUsersList;
