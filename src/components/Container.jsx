import React, { useContext } from 'react'
import { DarkModeContext } from './DarkModeContext'
import DarkModeSwitch from './DarkModeSwitch';

function Container() {

    const {darkMode} = useContext(DarkModeContext);

  return (
    <div className={darkMode ? `Container Container-dark` : `Container Container-light`}>
        <DarkModeSwitch />
    </div>

   
  )
}

export default Container