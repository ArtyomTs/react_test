import React from 'react';

class Project extends React.Component {
  render() {
    return (
      <div className="project">
        <h3 className="project-title">{this.props.project.name}</h3>
        <ul className="users">
          { this.props.project.users.map((user) => {
            return(<li>{user.email}</li>)
          })}
          <li className="new-user">
            <a href="#">+ Add User</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Project
