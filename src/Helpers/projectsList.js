import project1_img1 from "./../img/projects/Project1/img1.jpg"
import project1_img2 from "./../img/projects/Project1/img2.jpg"
import project1_img3 from "./../img/projects/Project1/img3.jpg"

import project1_imgBig1 from "./../img/projects/Project1/imgBig1.jpg"
import project1_imgBig2 from "./../img/projects/Project1/imgBig2.jpg"
import project1_imgBig3 from "./../img/projects/Project1/imgBig3.jpg"

import project04 from "./../img/projects/04.jpg";
import project04Big from "./../img/projects/04-big.jpg";

import project05 from "./../img/projects/05.jpg";
import project05Big from "./../img/projects/05-big.jpg";

import project06 from "./../img/projects/06.jpg";
import project06Big from "./../img/projects/06-big.jpg";

const projects = [
	{
		title: 'Gaming streaming portal',
		skills: 'React, Node.js, MongoDB',
		images: [project1_img1, project1_img2, project1_img3],
		imagesBig: [project1_imgBig1, project1_imgBig2, project1_imgBig3],
		short_description: " Portal with Something spectial and SignalR",
		description:"It is not just some Portal with Something spectial and SignalR, it is Portal with Something spectial and SignalR ",
		gitHubLink: 'https://github.com'
	},
	{
		title: 'Dating app',
		images: [project04],
		imagesBig: [project04Big],
		skills: 'React Native',
		short_description: "",
		description:""
	},
	{
		title: 'Landing',
		images: [project05],
		imagesBig: [project05Big],
		skills: 'HTML, SCSS, JS',
		short_description: "",
		description:""
	},
	{
		title: 'Gaming community',
		images: [project06],
		imagesBig: [project06Big],
		skills: 'React, PHP, MySql',
		short_description: "hj",
		description:""
	},
	{
		title: 'Gaming community',
		images: [project06],
		imagesBig: [project06Big],
		skills: 'React, PHP, MySql',
		short_description: "hj",
		description:""
	},
];

export {projects}