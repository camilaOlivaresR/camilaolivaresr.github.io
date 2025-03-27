import React, { useContext } from 'react'
import { DarkModeContext } from './DarkModeContext'

function DarkModeSwitch() {

    const {darkMode, toggleDarkMode} = useContext(DarkModeContext);
    const handleClick = () => {
        toggleDarkMode();
    }

    return (
        <div>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={handleClick} />
            </div>
        </div>
    )
}

export default DarkModeSwitch