import { NavLink } from 'react-router-dom';

const Project = ({ title, img, index, short_description }) => {
	return (
		 <NavLink to={`/project/${index}`}>
			<li className="project">
				<img src={img} alt={title} className="project__img" />
				<h3 className="project__title">{title}</h3>
				<h3 className='project__short_description'>{short_description}</h3>
			</li>
		</NavLink>
	);
};

export default Project;