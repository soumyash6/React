import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProjectTask extends Component {
  render() {
    const { project_task } = this.props;
    let priorityboot;
    let prioritytype;
    if (project_task.priority === 1) {
      priorityboot = "bg-danger text-light";
      prioritytype = "HIGH";
    }
    if (project_task.priority === 2) {
      priorityboot = "bg-warning text-light";
      prioritytype = "MEDIUM";
    }
    if (project_task.priority === 3) {
      priorityboot = "bg-info text-light";
      prioritytype = "LOW";
    }

    return (
      <div className="card mb-1 bg-light">
        <div className={`card-header text-primary ${priorityboot}`}>
          ID: {project_task.projectSequence} -- Priority:
          {prioritytype}
        </div>
        <div className="card-body bg-light">
          <h5 className="card-title">{project_task.summary}</h5>
          <p className="card-text text-truncate ">
            {project_task.acceptanceCriteria}
          </p>
          <Link
            to={`/updateProjectTask/${project_task.projectIdentifier}/${project_task.projectSequence}`}
            className="btn btn-primary"
          >
            View / Update
          </Link>

          <button className="btn btn-danger ml-4">Delete</button>
        </div>
      </div>
    );
  }
}
export default ProjectTask;
