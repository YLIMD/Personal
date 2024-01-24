import { useEffect } from 'react';
import {useLocalStorage} from "./../Utils/useLocalStorage"
import detectDarkMode from './../Utils/detectDarkMode';

import sun from './../img/icons/sun.svg';
import moon from './../img/icons/moon.svg';

const BtnDarkMode = (props) => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode());

	// If
    useEffect(() => {
        if (darkMode === 'dark') {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}
	}, [darkMode]);


	const toggleDarkMode = () => {
		setDarkMode((currentValue) => {
			
			return currentValue === 'light' ? 'dark' : 'light';
			
		});
	};

    const btnNormal = 'dark-mode-btn';
    const btnActive = 'dark-mode-btn dark-mode-btn--active';

	// If system preferences change, useEffect will change darkMode to new
	useEffect(() => {
		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', (event) => {
				const newColorScheme = event.matches ? 'dark' : 'light';
				setDarkMode(newColorScheme);
			});
	}, [setDarkMode]);
	
	return (
		<button className={darkMode === 'dark' ? btnActive : btnNormal} onClick={toggleDarkMode}>
			<img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
			<img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
		</button>
	);

};

export default BtnDarkMode;
