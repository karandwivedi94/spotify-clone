import React, {useState} from 'react'
import {FaHeadphones, FaHeart, FaRegClock, FaRegHeart} from "react-icons/fa"
import {Songs} from "./Songs";

function MusicList(){
    const [songs, setSongs] = useState(Songs);
    const [song, setSong] = useState(Songs[0].song);
    const[img, setimage] =useState(Songs[0].imgSrc);
    
    const changeFavourite = (id) => {
        Songs.forEach((song)=>{
            if(song.id == id ){
                song.favourite = !song.favourite;
            }
        });

        setSongs([...Songs])
        //instead of directly loading Songs component, you can give that to a state. The useState manages the state as and when an on click function is triggered. So, instead of setting the old array, you need to create a new array after a button is clicked. 
    };
    return (
        <div className = "musicList">
            <div className="title">
                <h2>
                    The list<span>{`${Songs.length} songs`}</span>
                </h2>
                <div className="musicContainer">
                    {Songs && Songs.map((song,index) => (
                    
                    
                    <div className="songs" key={song.id}>
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
        </div>
    );
}

export {MusicList}; // converts default into named component, makes it easier to import into App.js i.e no need to right'import xxx from xxxx'