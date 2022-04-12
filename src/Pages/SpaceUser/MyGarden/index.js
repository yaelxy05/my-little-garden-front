import React from 'react'
import Potager from './Potager'
import PotagerForm from './PotagerForm'
// import SCSS 
import "./myGarden.scss";

function MyGarden() {
  return (
    <div className="myGarden">
      <PotagerForm />
      <Potager />
    </div>
  )
}

export default MyGarden
