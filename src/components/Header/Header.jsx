import React from 'react'
import './header.css'
import logoLight from '../../assets/light.svg'
// import logoUser from "../../assets/user.svg";
import { icons } from '../../utils/constants'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { getVideosBySearch, setSearchValue } from '../../app/videosSlice'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

function Header() {
  const location = useLocation()
  const { searchValue } = useSelector((state) => state.videos)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handelSubmit = (e) => {
    e.preventDefault()
    if (searchValue.length > 0) {
      dispatch(getVideosBySearch(searchValue))
      navigate('/')
    }
  }
  const handelMunu = (e) => {
    let sidebar = document.getElementById('sidebar')
    if (location.pathname === '/') {
      if (sidebar.clientWidth === 60 || sidebar.clientWidth === 0) {
        sidebar.classList.toggle('small-menu')
      } else {
        sidebar.classList.remove('small-menu')
        sidebar.classList.toggle('big-menu')
      }
    } else {
      sidebar.classList.toggle('details-menu')
    }

    // console.log(sidebar.clientWidth)
  }
  return (
    <div className="header">
      <div className="wrapper">
        <div className="start">
          <div className="menu" onClick={handelMunu}>
            {icons.menu}
          </div>
          <Link to={'/'}>
            <div className="logo">
              <LazyLoadImage src={logoLight} alt="Youtube" effect="blur" />
              <span>ShaToT</span>
            </div>
          </Link>
        </div>
        <div className="center">
          <form onSubmit={(e) => handelSubmit(e)}>
            <input
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={(e) => dispatch(setSearchValue(e.target.value))}
            />
            <button type="submit">{icons.search}</button>
          </form>
        </div>
        <div className="end">
          <div className="icon">{icons.create}</div>
          <div className="icon">{icons.notification}</div>
          <div className="image">
            <LazyLoadImage src={require('../../assets/00.jpg')} alt="Ahmed Samy" effect="blur" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
