import React, { Component } from 'react';
import Profile from '../../components/pages/profile/Profile';
import About from '../../components/pages/about/About';
import Skills from '../../components/pages/skills/Skills';
import Experiences from '../../components/pages/experiences/Experiences';
import Educations from '../../components/pages/educations/Educations';
import Projects from '../../components/pages/projects/Projects';

export default class Home extends Component {
	render() {
		return (
			<section>
				
				<div className='container' style={{marginTop:"30px"}}>
					<div className='row'>
						<div className='col s12 m3'>
							<Profile />
						</div>
						<div className='col s12 m9'>
							<About />
							<Skills />
							<Experiences />
							{/* <Educations />
							<Projects />  */}
						</div>
					</div>
				</div>
			</section>
		);
	}
}
