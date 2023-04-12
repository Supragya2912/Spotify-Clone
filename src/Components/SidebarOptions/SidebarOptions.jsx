import React from 'react'
import './SidebarOptions.css'

function SidebarOptions({ Icon, title }) {
    return (
        <div className="sidebarOptions">
            {Icon && <Icon className="sidebarOptions__icon" />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default SidebarOptions