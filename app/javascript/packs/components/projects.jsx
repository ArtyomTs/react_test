import React from 'react';
import Project from './project';
import client from '../client'

class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: []
    }
  }

  componentDidMount() {
    this.getProjects();
    client.getData('');
  }

  getProjects() {
    const self = this;
    const query = {query: "{ projects {id\n name\n users { id\n email }} }"};
    client.getData(query).then(data => {
        console.log(data);
        self.setState({projects: data.data.projects})
      }
    );
  }

  render() {
    return (
      <div>
        { this.state.projects.map((project) => {
            return(<Project key={project.id} project={project} />)
          })
        }
      </div>
    )
  }
}

export default Projects
