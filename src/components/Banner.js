import React from 'react'
import '../Styles/MainContainer.css'
import Artist from '../img/artist.jpeg'
import Check from '../img/check.png'
import {FaEllipsisH, FaHeadphones, FaCheck} from 'react-icons/fa'

function Banner(){
    return (
        <div className = "banner">
            <img className="bannerImg" src={Artist}></img>
            <div className= "content">
                <div className= "breadCrumb">
                    <p>
                        Home <span>/Popular Artist</span>
                    </p>
                    <i>
                        <FaEllipsisH/>
                    </i>
                </div>
                <div className = "artist">
                    <div className="left">
                        <div className="name">
                        <h2> K-Dot </h2>
                        <img src = {Check}></img>
                    </div>
                    <p>
                        <i>
                            <FaHeadphones/>
                        </i>
                        123,456,789 <span> Monthly listeners </span>
                    </p>
                    </div>
                    <div className="right">
                        <a href = "#"> Play</a>
                        <a href="">
                            <i>
                                <FaCheck/>
                            </i>
                            Following
                        </a>
                    </div>
                </div>
            </div>
            <div className ="bottomLayer"></div>
        </div>
    )
}

export {Banner}; // converts default into named component, makes it easier to import into App.js i.e no need to right'import xxx from xxxx'