import React from 'react';

export default function About() {
  return (
    <div style={{margin:"0px 15px"}}>
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>ABOUT ME</strong>
          </h6>
          <p className="grey-text">
          A passionate and detail-oriented React.js developer with a solid understanding of front-end development, eager to contribute to a dynamic team. Adept at building responsive, user-friendly web applications using React.js. Seeking opportunities to apply skills in HTML, CSS, JavaScript and React.js to deliver high-quality projects.
          </p>
        </div>
        <div className="card-action">
          <h6>
            <strong>PERSONAL INFO</strong>
          </h6>
          <div className="row mt">
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Address:</strong> Pune (Maharashtra), India
              </p>
              <p>
                <strong>Email:</strong> vishaldgk18@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> +91 8087165604
              </p>
            </div>
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Main Language</strong> - English
              </p>
              <p>
                <strong>Second Language</strong> - Marathi
              </p>
              <p>
                <strong>Third Language</strong> - Hindi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
