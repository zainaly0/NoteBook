import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <h1>NOTEBOOK</h1>

      <div className='searchbar'>
        <label htmlFor="inputSearch">Search Notes</label>
        <input id='headerInput' type="search" />
      </div>
    </div>
  )
}

export default Header
