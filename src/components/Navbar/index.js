import Logo from '../resources/logo.png'
import {Link} from 'react-router-dom'
import Hamburguer from '../resources/gray.png'
import './styles.scss'
import {NavLink} from 'react-router-dom'
import SideNavbar from '../SideNavbar'
import { useState } from 'react'

function Navbar() {
  
  const [showSide, setShowSide] = useState(false)

  function handleClick() {
    setShowSide((prevState) => !prevState)
    console.log(showSide)
  }
  
  return(
    <>
      {!showSide && 
        <div className='navbar'> 
          <div className='left-header'>
            <Link exact to='/'>
              <img src={Logo} alt='ego' className='logo' />
            </Link>
            <NavLink exact to='/' className='modelos-link' activeClassName="selected">
              <span className='modelos'>Modelos</span>
            </NavLink>
            <NavLink exact to='/ficha' className='ficha-link' activeClassName="selected">
              <span className='ficha'>Ficha de modelo</span>
            </NavLink>
          </div>
          <div className='right-header' onClick={handleClick}>
            <span className='menu'>Menu</span>
            <img src={Hamburguer} alt='menu' className='menu-img' />
          </div>

        </div>
      }

      {showSide && <SideNavbar handleClick={handleClick} />}
      {showSide && <div className='backdrop'></div>}
    </>
  )
}

export default Navbar