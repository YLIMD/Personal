import gitHubIcon from "./../img/icons/gitHub-black.svg";


const BtnGitHub = ({ link }) => {
	return (
		<a href={link} target="_blank" rel="noreferrer" className="btn-outline">
			<img src={gitHubIcon} alt="" />
			 View on GitHub 
		</a>
	);
};

export default BtnGitHub;