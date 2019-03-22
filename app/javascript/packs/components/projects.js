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

  doRequest(query) {
    return fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(query)
    })
    .then(r => r.json())
  }

  getProjects() {
    const self = this;
    const query = {query: "{ projects {name\n users { email }} }"};
    this.doRequest(query).then(data => {
        console.log(data);
        self.setState({projects: data.data.projects})
      }
    );
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
