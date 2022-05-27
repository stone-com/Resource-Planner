import React, { useState } from 'react'
import {Link} from 'react-router-dom'
export default function ProjectButton() {
    const [showModal,setShowModal]=useState(false)
console.log('setshow',showModal)
  return (
    <div>
        <Link className="btn btn-block btn-squared btn-light text-dark"
 to="/newproject" state={{ show: true }} >
      <button>open model</button>
               </Link>
    </div>
  )
}
