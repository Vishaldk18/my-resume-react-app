import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Educations() {
	return (
		<div style={{margin:"20px 15px"}}>
			<div class='card'>
				<div className="card-content">
					<h6>
						<strong>EDUCATION</strong>
					</h6>
					<div className="row mt-top">
						<div className="col xl4 l4 m6 s12">
							<p className="teal year_exp white-text" style={{padding:"2px 0px" }}>
							&nbsp; July
								<strong> 2019</strong> - July
								<strong> 2023</strong>
							</p>
						</div>
						<div className="col xl8 l8 m6 s12">
							<blockquote className="no-pad">
								<h6 className="no-pad mt-bottom">
									<strong> B.E. | Information Technology | CGPA : 8.8</strong><br />
									<h6>Smt. Kashibai Navale College of Engineering</h6>
									<h6>Pune, Maharashtra</h6>
									<a href='https://drive.google.com/file/d/1-2o6xduXFu9k_cLiGfbt5o2erzrfP9qZ/view?usp=drive_link' class='btn gray lighten-2' target='_blank' style={{marginTop:"10px"}}>
										View Certifcate
									</a>
								</h6>
								
							</blockquote>
						</div>
					</div>
					<div className="row mt-top">
						<div className="col xl4 l4 m6 s12">
							<p className="teal year_exp white-text" style={{padding:"2px 0px" }}>
							&nbsp; June
								<strong> 2018</strong> - June
								<strong> 2019</strong>
							</p>
						</div>
						<div className="col xl8 l8 m6 s12">
							<blockquote className="no-pad">
							<h6 className="no-pad mt-bottom">
									<strong> 12th | Science | Percentage : 79</strong><br />
									<h6>R.K. Kakani Junior College</h6>
									<h6>Malegaon, Maharashtra</h6>
									<a href='https://drive.google.com/file/d/1bkogIirC3wmCwxL5Al00KHTNC6k1NNrl/view?usp=drive_link' class='btn gray lighten-2' target='_blank' style={{marginTop:"10px"}}>
										View Certifcate
									</a>
							</h6>
								
							</blockquote>
						</div>
						
					</div>

					<div className="row mt-top">
						<div className="col xl4 l4 m6 s12">
							<p className="teal year_exp white-text" style={{padding:"2px 0px" }}>
							&nbsp; May
								<strong> 2016</strong> - May
								<strong> 2017</strong>
							</p>
						</div>
						<div className="col xl8 l8 m6 s12">
							<blockquote className="no-pad">
							<h6 className="no-pad mt-bottom">
									<strong> 10th | Percentage : 93</strong><br />
									<h6>Z.P.Kakani Vidyalaya</h6>
									<h6>Malegaon, Maharashtra</h6>
									<a href='https://drive.google.com/file/d/16BGt9bRpw5weSKOhq9n9fVwtURCZ_Tgz/view?usp=drive_link' class='btn gray lighten-2' target='_blank' style={{marginTop:"10px"}}>
										View Certifcate
									</a>
							</h6>
								
							</blockquote>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	);
}
