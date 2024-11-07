import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ImgProfile from '../../../images/person1.jpg';

export default function Profile() {
	return (
		<div>
			<div className='card'>
				<div className='card-image'>
					<img className='activator' src={ImgProfile} alt='Vishal Khairnar' style={{height:'225px'}}/>
					<Link className='btn-floating halfway-fab waves-effect waves-light red'>
						<i className='material-icons activator'>more_vert</i>
					</Link>
				</div>
				<div className='card-content'>
					{/* <span className='card-title activator grey-text text-darken-4'>
						React Developer
					</span> */}
					<h6 style={{textAlign:"center",fontSize:"20px"}}>Front-End Developer</h6>
				</div>
				<div className='card-reveal'>
					<span className='card-title grey-text text-darken-4'>
						Follow Me
						<i className='material-icons right'>close</i>
					</span>
					<p className='flex-container'>
					    <a href="https://www.linkedin.com/in/vishal-khairnar-ab6b68207/" target="_blank"><i className='fab fa-linkedin grey-text text-darken-4 social_style'></i></a>
						<i className='fab fa-twitter grey-text text-darken-4 social_style'></i>
						<a href="mailto:vishaldgk18@gmail.com?subject=Hello%20there&body=This%20is%20a%20test%20email." target="_blank"><i className='fab fa-google-plus-g grey-text text-darken-4 social_style'></i></a>
						<a href="https://www.instagram.com/vishal_khairnar_18/profilecard/?igsh=YW1kZzAxbWYzc2dp" target="_blank"> <i className='fab fa-instagram grey-text text-darken-4 social_style' ></i></a>
					</p>
				</div>
			</div>
		</div>
	);
}
