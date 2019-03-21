import React from 'react';
import Project from './project';

class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: []
    }
  }

  componentDidMount() {
    this.getProjects()
  }

  getProjects() {
    this.setState({projects: [
      {name: 'aaaa', id: 1, users: [{email: 'e1'}, {email: 'e2'}]},
      {name: 'bbbb', id: 2, users: [{email: 'e1'}, {email: 'e3'}]}
    ]})
  }

  render() {
    return (
      <div>
        { this.state.projects.map((project) => {
            return(<Project key={project.id} project={project}/>)
          })
        }
      </div>
    )
  }
}

export default Projects
