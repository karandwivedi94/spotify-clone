import React from 'react'
import '../Styles/LeftDisplay.css'
import { FaSpotify, FaEllipsisH } from "react-icons/fa"
import{ BiSearchAlt } from 'react-icons/bi'
import{ Menu } from "./Menu";
import {SmallMenu} from './SmallMenu';
import { LeftPlaylist } from './LeftPlaylist';
import { TrackList } from './TrackList';


function LeftDisplay(){
    return (
        <div className = "leftDisplay" >
            <div className = "logoContainer">
            <i><FaSpotify/></i>
            <h2>Spotify</h2>
            <i className="ellipsisHeader">
                <FaEllipsisH/>
            </i>
            </div>
            <div className = "searchBox">
                <input type="text" placeholder ="Search..."></input>
                <i className="searchIcon"><BiSearchAlt/></i>
                </div>
        <Menu title ={'Menu'} menuObject={SmallMenu}/>
        <LeftPlaylist/>
        </div>
    )
}

export {LeftDisplay}; // converts default into named component, makes it easier to import into App.js. i.e no need to right'import xxx from xxxx'