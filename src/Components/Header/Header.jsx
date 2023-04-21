import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import { Avatar } from '@material-ui/core'
import { useDataLayerValue } from '../../DataLayer'

function Header() {

    const [{ user }, dispatch] = useDataLayerValue();
    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <input placeholder="Search for Artists, Songs, or Podcasts" type="text" />
            </div>

            <div className="header__right">
                <h4>{user?.display__name}</h4>
                <Avatar src={user?.images[0]?.url} alt={user?.display__name} />
            </div>
        </div>
    )
}

export default Header