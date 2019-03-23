import React from 'react';
import client from '../client'

class Project extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      project: this.props.project,
      candidates: []
    }

    this.addUser = this.addUser.bind(this);
    this.hideCandidates = this.hideCandidates.bind(this);
    this.assignUser = this.assignUser.bind(this);
  }

  componentDidMount() {
  }

  getCandidates(projectId) {
    const self = this;
    const query = {query: `{candidates(projectId: ${projectId}){id\n email}}`};
    console.log(query)
    client.getData(query).then(data => {
        console.log(data);
        self.setState({candidates: data.data.candidates, candidatesShown: true})
      }
    );
  }

  addUser(e) {
    e.preventDefault();
    this.getCandidates(this.state.project.id)
  }

  hideCandidates(e) {
    e.preventDefault();
    this.setState({candidatesShown: false})
  }

  addUserButton() {
    return (
      <div className="new-user">
        <a href="#" className="btn" onClick={this.addUser}>+ Add User</a>
      </div>
    )
  }

  assignUser(e, userId) {
    e.preventDefault();
    const self = this;
    const query = {query: `mutation {assignUser(projectId: ${this.state.project.id}\n userId: ${userId}){project{id\n name\n users{id\n email}}}}`};
    console.log(query)
    client.getData(query).then(data => {
        console.log(data);
        self.setState({project: data.data.assignUser.project, candidatesShown: false})
      }
    );
  }

  candidatesList() {
    return(
      <div className="candidatesPanel">
        <div className="hide-candidates">
          <a href="#" className="btn" onClick={this.hideCandidates}>Cancel</a>
        </div>
        <ul className="candidates">
          {
            this.state.candidates.map((candidate) => {
              return(
                <li key={`candidate_${candidate.id}`} className="candidate" onClick={(e) => { this.assignUser(e, candidate.id)}}>
                  <span className="plus-sign">+</span>
                  {candidate.email}
                </li>)
            })
          }
        </ul>
      </div>
    )
  }

  addUserPanel() {
    if(this.state.candidatesShown) {
      return this.candidatesList()
    } else {
      return this.addUserButton()
    }
  }

  render() {
    return (
      <div className="project">
        <h3 className="project-title">{this.state.project.name}</h3>
        <ul className="users">
          { this.state.project.users.map((user) => {
            return(<li key={`user_${user.id}`}>{user.email}</li>)
          })}
        </ul>
        {this.addUserPanel()}
      </div>
    )
  }
}

export default Project
