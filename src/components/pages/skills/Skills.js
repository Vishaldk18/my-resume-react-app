import React from "react";
import { HashLink as Link } from "react-router-hash-link";
export default function Skills() {
  return (
    <div style={{ margin: "20px 15px" }}>
      <div className="card">
        <div className="card-content">
          <h6>
            <strong>PROFESSIONAL SKILLS</strong>
          </h6>
          <div className="row mt-top">
            <div className="col s6">
              <p>HTML</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            <div className="col s6">
              <p>CSS</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <p>JAVASCRIPT</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            <div className="col s6">
              <p>BOOTSTRAP</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: "95%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s6">
              <p>React.Js</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            <div className="col s6">
              <p>Material UI</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col s6">
              <p>MySQL</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            
          </div>
        </div>

        <div class="card-content">
          <h6>
            <strong>CERTIFICATIONS</strong>
          </h6>
          <table class="striped">
            <thead>
              <tr>
                <th>Certificate</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AWS Cloud Practitioner</td>
                <td>March 2024</td>
                <td>
                  <a
                    href="https://drive.google.com/file/d/1Mz-IVbGGn8DPpTSChQge97Ks7wDDbQcD/view"
                    class="btn blue lighten-2"
                    target="_blank"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr>
                <td>Azure AI Fundamentals</td>
                <td>April 2024</td>
                <td>
                  <a
                    href="https://learn.microsoft.com/en-us/users/khairnarvishalcognizant-1810/credentials/efbf525563c88b72"
                    class="btn blue lighten-2"
                    target="_blank"
                  >
                    View
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
