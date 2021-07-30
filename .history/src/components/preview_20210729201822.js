import React from "react";

function Preview(props) {
  return (
    <div>
      <div className="printPreview">
        <section className="topSection">
          <div className="part1Left">
            <p style={{ fontSize: "1.1rem" }}>{props.state.fullName}</p>
            <p>Current Role: {props.state.currentRole}</p>
            <p>E-Mail: {props.state.email}</p>
            <p>Phone: {props.state.phone}</p>
          </div>
          <div className="part1Right">
            <img
              src={props.state.file}
              alt={props.state.file}
              width="300"
              height="300"
            />
            <p>{props.state.address1}</p>
            <p>{props.state.address2}</p>
          </div>
        </section>
        <section className="about">
          <p>
            <u>About me:</u> {props.state.about}
          </p>
        </section>
        {(props.state.schoolName1 || props.state.schoolName2) && (
          <section className="educationSpec">
            <p>
              <u>Information about my education: </u>
            </p>
            <table>
              <thead>
                <tr>
                  <th> School/University name </th>
                  <th> Title of study </th>
                  <th> From </th>
                  <th> To </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{props.state.schoolName1}</td>
                  <td>{props.state.titleOfStudy1}</td>
                  <td>{props.state.from1}</td>
                  <td>{props.state.to1}</td>
                </tr>
                <tr>
                  <td>{props.state.schoolName2}</td>
                  <td>{props.state.titleOfStudy2}</td>
                  <td>{props.state.from2}</td>
                  <td>{props.state.to2}</td>
                </tr>
              </tbody>
            </table>
          </section>
        )}
        {(props.state.organizationName1 || props.state.organizationName2) && (
          <section className="jobSpec">
            <p>
              <u>Information about my previous employment: </u>
            </p>

            <table>
              <thead>
                <tr>
                  <th> Organization name </th>
                  <th> Title of role </th> <th> From</th> <th> To</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{props.state.organizationName1}</td>
                  <td>{props.state.titleOfRole1}</td>
                  <td>{props.state.workedFrom1}</td>
                  <td>{props.state.workedTill1}</td>
                </tr>
                <tr>
                  <td>{props.state.organizationName2}</td>
                  <td>{props.state.titleOfRole2}</td>
                  <td>{props.state.workedFrom2}</td>
                  <td>{props.state.workedTill2}</td>
                </tr>
              </tbody>
            </table>
          </section>
        )}
        <p className="skillsSpec">
          <u>My skills:</u> {props.state.skills}
        </p>
        <section class="projectSpec">
          <ol>
            <u>My projects:</u>
            {props.state.project1 && <li>Project: {props.state.project1}</li>}
            {props.state.project2 && <li>Project: {props.state.project2}</li>}
            {props.state.project3 && <li>Project: {props.state.project3}</li>}
          </ol>
        </section>
      </div>
      <button type="button">Print</button>
    </div>
  );
}
export default Preview;
