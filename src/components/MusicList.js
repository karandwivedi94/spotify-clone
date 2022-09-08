import React, {useState, useEffect} from 'react'
import {FaHeadphones, FaHeart, FaRegClock, FaRegHeart} from "react-icons/fa"
import {Songs} from "./Songs";
import{LeftDisplay} from "./LeftDisplay"
import { MusicPlayer } from './MusicPlayer';

function MusicList(){
    const [songs, setSongs] = useState(Songs);
    const [song, setSong] = useState(Songs[0].song);
    const[img, setimage] =useState(Songs[0].imgSrc);
    useEffect(()=> {
        const songs = document.querySelectorAll(".songs");

        function changeMenuActive(){
        songs.forEach((n)=> n.classList.remove("active"));
        this.classList.add("active");
       }
        songs.forEach((n)=> n.addEventListener('click',changeMenuActive))},[]);
    
    const changeFavourite = (id) => {
        Songs.forEach((song)=>{
            if(song.id == id ){
                song.favourite = !song.favourite;
            }
        });

        setSongs([...Songs])
        //instead of directly loading Songs component, you can give that to a state. The useState manages the state as and when an on click function is triggered. So, instead of setting the old array, you need to create a new array after a button is clicked. 
    };
    const setMainSong =(songSrc,imgSrc) => {
        setSong(songSrc);
        setimage(imgSrc);
    }
    return (
        <div className = "musicList">
            <div className="title">
                <h2>
                    September '22<span>{`${Songs.length} songs`}</span>
                </h2>
                <hr className="h2Underline"></hr>
                <div className="musicContainer">
                    {Songs && Songs.map((song,index) => (
                    
                    
                    <div className="songs" key={song.id}
                    onClick={() => setMainSong(song?.song, song?.imgSrc)}>
                        <div className ="count"> {`#${index+1}`} </div>
                        <div className ="song">
                            <div className="imgBox">
                                <img src={song?.imgSrc}>

                                </img>
                            </div>
                            <div className="section">
                                
                                    <p className ="songName"> {song?.songName}
                                    <span className="spanArtist">{song?.artist}</span>
                                    </p>
                                    <div className = "hits">
                                        <p className="hit">
                                            <i><FaHeadphones/>
                                            </i>
                                            123,456,789
                                        </p>
                                        <p className="duration">
                                            <i><FaRegClock/></i>
                                            03:04
                                        </p>
                                        <div className="favourite" onClick={()=>changeFavourite(song?.id)}> 
                                        {
                                            song?.favourite?
                                            <i>
                                            <FaHeart/>
                                        </i>
                                        :
                                        <i>
                                            <FaRegHeart/>
                                        </i>
                                         }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            <hr></hr>
            <MusicPlayer song={song} imgSrc={img}/>
        </div>
    );
}

export {MusicList}; // converts default into named component, makes it easier to import into App.js i.e no need to right'import xxx from xxxx'