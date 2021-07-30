import React, { Component } from "react";
import "../App.css";

class Preview extends Component {
  render() {
    return (
      <div className="printPreview">
        <section className="topSection">
          <div className="part1Left">
            <p style={{ fontSize: "1.1rem" }}>{this.props.state.fullName}</p>
            <p>Current Role: {this.props.state.currentRole}</p>
            <p>E-Mail: {this.props.state.email}</p>
            <p>Phone: {this.props.state.phone}</p>
          </div>
          <div className="part1Right">
            <img
              src={this.props.state.file}
              alt={this.props.state.file}
              width="300"
              height="300"
            />
            <p>
              <u>Address: </u>
            </p>
            <p>{this.props.state.address1}</p>
            <p>{this.props.state.address2}</p>
          </div>
        </section>
        <section className="about">
          <p>
            <u>About me:</u> {this.props.state.about}
          </p>
        </section>
        {(this.props.state.schoolName1 || this.props.state.schoolName2) && (
          <section className="educationSpec">
            <p>
              <u>Information about my education: </u>
            </p>
            <table>
              <thead>
                <tr>
                  <th>School/University name</th>
                  <th>Title of study</th>
                  <th>From</th>
                  <th>To</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.props.state.schoolName1}</td>
                  <td>{this.props.state.titleOfStudy1}</td>
                  <td>{this.props.state.from1}</td>
                  <td>{this.props.state.to1}</td>
                </tr>
                <tr>
                  <td>{this.props.state.schoolName2}</td>
                  <td>{this.props.state.titleOfStudy2}</td>
                  <td>{this.props.state.from2}</td>
                  <td>{this.props.state.to2}</td>
                </tr>
              </tbody>
            </table>
          </section>
        )}
        {(this.props.state.organizationName1 ||
          this.props.state.organizationName2) && (
          <section className="jobSpec">
            <p>
              <u>Information about my previous employment: </u>
            </p>

            <table>
              <thead>
                <tr>
                  <th>Organization name</th>
                  <th>Title of role</th>
                  <th> From</th>
                  <th>To</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.props.state.organizationName1}</td>
                  <td>{this.props.state.titleOfRole1}</td>
                  <td>{this.props.state.workedFrom1}</td>
                  <td>{this.props.state.workedTill1}</td>
                </tr>
                <tr>
                  <td>{this.props.state.organizationName2}</td>
                  <td>{this.props.state.titleOfRole2}</td>
                  <td>{this.props.state.workedFrom2}</td>
                  <td>{this.props.state.workedTill2}</td>
                </tr>
              </tbody>
            </table>
          </section>
        )}
        <p className="skillsSpec">
          <u>My skills:</u> {this.props.state.skills}
        </p>
        <section className="projectSpec">
          <ol>
            <u>My projects:</u>
            {this.props.state.project1 && (
              <li>Project: {this.props.state.project1}</li>
            )}
            {this.props.state.project2 && (
              <li>Project: {this.props.state.project2}</li>
            )}
            {this.props.state.project3 && (
              <li>Project: {this.props.state.project3}</li>
            )}
          </ol>
        </section>
      </div>
    );
  }
}
export default Preview;
