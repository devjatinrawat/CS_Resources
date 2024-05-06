

import header_logo from '../assets/logo/svg/logo_final.svg'
import './Header.css'
import { MdArrowRightAlt } from "react-icons/md";



export default function Header() {
  return (
    <>
    <header className='container-fluid flex p-10 header_bar'>
      {/* left logo text */}
      <div className='w-2/5 container'>
        <img src={header_logo} alt="logo"   />
      </div>
      {/* Right Portion */}
      <div className='container flex justify-end items-center gap-10'>
      <a href="/aboutus" className='text-white font-semibold'>
      About</a>
      <a href="https://forms.gle/iSU1TnPDW1SGEJDm8" target="_blank"className='text-black rounded-lg btn_background font-semibold'>
      <button>Add a Resource </button>
      <span>
      <MdArrowRightAlt />
      </span>
      </a>
      </div>
    </header>
    </>
  )
}
