import React,{useState,useEffect} from 'react'
import '../Styles/LeftDisplay.css'
import { FaSpotify, FaEllipsisH } from "react-icons/fa"
import {WiLightning} from "react-icons/wi"
import{ BiSearchAlt } from 'react-icons/bi'
import{ Menu } from "./Menu";
import {SmallMenu} from './SmallMenu';
import { LeftPlaylist } from './LeftPlaylist';
import { TrackList } from './TrackList';


function LeftDisplay(){
    const [ searchInput, setSearchInput] = useState("");
    return (
        <div className = "leftDisplay" >
            <div className = "logoContainer">
            <i><WiLightning/></i>
            <h2>Songify

            </h2>
            <i className="ellipsisHeader">
                <FaEllipsisH/>
            </i>
            </div>
            <div className = "searchBox">
                <input type="text" placeholder ="Search for artist.." onKeyPress={event=>{
                if(event.key == "Enter")
                {
                console.log('pressed enter')
                }
                }} onChange ={event=>setSearchInput(event.target.value)}> 
                </input>
                <i className="searchIcon" onClick={()=> {console.log("clicked button")}}><BiSearchAlt/></i>
            </div>
        <Menu title ={'Menu'} menuObject={SmallMenu}/>
        <LeftPlaylist/>
        </div>
    )
}

export {LeftDisplay}; // converts default into named component, makes it easier to import into App.js. i.e no need to right'import xxx from xxxx'

