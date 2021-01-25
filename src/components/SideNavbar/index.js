import './styles.scss'
import cross from '../resources/fill-1.png'
import React, {useState, useEffect, useRef} from 'react'

function SideNavbar({handleClick}) {
  
  

  return(
    <div className='side-navbar'>
      <header className='side-header'>
        <div onClick={handleClick}>
          <span className='side-cerrar'>Cerrar</span>
          <img src={cross} alt='cerrar' className='side-cross' />
        </div>
      </header>
      <ul className='side-list'>
          <li className='list-text'>Modelos</li>
          <li className='list-text'>Servicios y Accesorios</li>
          <li className='list-text'>Financiacion</li>
          <li className='list-text last'>Reviews y comunidad</li>
          <div className='list-line-wrapper'><div className='list-line'></div></div>
          <li className='list-text'>Toyota Mobility Service</li>
          <li className='list-text'>Toyota Gazoo Racing</li>
          <li className='list-text last'>Toyota Hibridos</li>
          <div className='list-line-wrapper'><div className='list-line'></div></div>
          <li className='list-text'>Concesionarios</li>
          <li className='list-text'>Test Drive</li>
          <li className='list-text last'>Contacto</li>
          <div className='list-line-wrapper bottom'><div className='list-line'></div></div>
          <div className='colored-list'>
          <li className='list-text'>Actividades</li>
          <li className='list-text'>Servicios al Cliente</li>
          <li className='list-text'>Ventas Especiales</li>
          <li className='list-text'>Innovacion</li>
          <li className='list-text'>Prensa</li>
          <li className='list-text last'>Acerca de...</li>
          </div>
        </ul>
      
    </div>
    
  
  )
}

export default SideNavbar