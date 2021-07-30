import React from "react";

function Preview(props) {
  return (
    <div>
      <div className="printPreview">
        <section className="part1Left">
          <p>{props.state.fullName}</p>
          <p>Current Role:{props.state.currentRole}</p>
          <p>{props.state.email}</p>
          <p>{props.state.phone}</p>
        </section>
        <section className="part1Right">
          <div>
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
          <p>{props.state.about}</p>
        </section>
        {(props.state.schoolName1 || props.state.schoolName2) && (
          <section className="educationSpec">
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
        <p className="skillsSpec">{props.state.skills}</p>
        <section class="projectSpec">
          <ol>
            {props.state.project1 && <li>{props.state.project1}</li>}
            {props.state.project2 && <li>{props.state.project2}</li>}
            {props.state.project3 && <li>{props.state.project3}</li>}
          </ol>
        </section>
      </div>
      <button type="button">Print</button>
    </div>
  );
}
export default Preview;
