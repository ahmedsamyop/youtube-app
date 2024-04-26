import React from 'react'
import './layout.css'
import Header from '../../components/Header/Header'
import { Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronUp } from '@fortawesome/free-solid-svg-icons'

function Layout() {
  return (
    <div className="page">
      <Header />
      <Outlet />
      <div
        className="gotop"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
      >
        <FontAwesomeIcon icon={faCircleChevronUp} />
      </div>
      <div className="footer">
        Copyright 2022 ©{' '}
        <a
          href="https://api.whatsapp.com/send/?phone=0201110649108&text=Welcome+I%27m+Ahmed+Samy&type=phone_number&app_absent=0"
          target="_blank"
          rel="noreferrer"
        >
          Ahmed Samy
        </a>
      </div>
    </div>
  )
}

export default Layout
