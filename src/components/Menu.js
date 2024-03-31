import { useState } from 'react';
import './menu.css'
import logo from './img/logo.png'

const Menu = () => {

     const [ men ,  setMen ] = useState ( false )

     const toggleMenu = () => {
          setMen( !men )
     }

     return (
        <header className="Menu">
              <h1 className='Menu-h1'>
                   <a target='_blank' rel="noreferrer" href='https://www.instagram.com/_push89/' className='Menu-a'>
                   <img src={ logo } alt="Pushi" />
                   </a>

              </h1>

              <button 
               onClick={ toggleMenu }
              className='Menu-button'>
                   <svg className='Menu-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                   </svg>
                   <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                </button>
       <nav className={ `Menu-nav ${ men ? 'isActive' : '' }` }>
                   <ul className='Menu-ul'>
                        <li className='Menu-li'><a target='_blank' rel="noreferrer" href='https://www.facebook.com/office.push89' className='Menu-a'>FB</a></li>
                        <li className='Menu-li'><a target='_blank' rel="noreferrer" href='https://twitter.com/_push89' className='Menu-a'>X</a></li>
                        <li className='Menu-li'><a target='_blank' rel="noreferrer" href='https://jeffercart.github.io/loop_lines/' className='Menu-a'>Demo</a></li>
                        <li className='Menu-li'><a target='_blank' rel="noreferrer" href='https://forms.gle/cxKVqdsfZRt2YPQr8' className='Menu-a'>Contact</a></li>
                   </ul>

              </nav>
            </header>
    )
 }

 export default Menu;