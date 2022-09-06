import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import {PlaylistIndex} from './PlaylistIndex'
import {BsMusicNoteList, BsTrash} from "react-icons/bs"


function LeftPlaylist(){
    return (
        <div className = "playlistContainer">
            <div className="nameContainer">
                <p>Playlist</p>
                <i>
                    <AiOutlinePlus/>
                </i>
            </div>
            <div className="playlistScroll">
                {
                    PlaylistIndex && PlaylistIndex.map((playlist)=>
                    <div className="playList" key={playlist.id}>
                <i className="list">
                        <BsMusicNoteList/>
                    </i>
                    <p> {playlist.name} </p>
                        <i className="trash">
                            <BsTrash/>
                        </i>    
                </div>) 
                }
                
            </div>
        </div>
    )
}

export {LeftPlaylist}; // converts default into named component, makes it easier to import into App.js i.e no need to right'import xxx from xxxx'