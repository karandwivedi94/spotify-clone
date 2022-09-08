import React,{useState, useRef, useEffect} from 'react'
import '../Styles/MusicPlayer.css'
import { FaHeart, FaRegHeart, FaStepBackward, FaStepForward, FaForward,  FaBackward, FaPlay, FaPause, FaShareAlt} from 'react-icons/fa'
import {BsDownload} from 'react-icons/bs'

function MusicPlayer({song, imgSrc, auto}){
    const [isLiked, setLiked] = useState(false)
    const [isPlaying, setPlaying] =useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const audioPlayer = useRef(); // This is for the audio tag
    const progressBar = useRef(); // This is for the progress bar so that it changes while referring to the {audio}
    const animationRef = useRef();

    useEffect(()=>{
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
        progressBar.current.max = seconds
    },

    [audioPlayer?.current?.loadedmetadata,audioPlayer?.current?.readyState])

    const changePlayPause = () =>{
        const previousValue = isPlaying;
        setPlaying(!previousValue) // this block of code will ensure the play/pause button will start based on the prev value
        //this is used to get the previous state of the play/pause button, IMP!!
        if(!previousValue){
            audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying);
        } else {
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current)
        } 
    };

    const whilePlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime;
        changeCurrentTime()
        animationRef.current = requestAnimationFrame(whilePlaying)
    }

    const CalculateTime =(sec) => {
        const minutes = Math.floor(sec/60); // essentially if  value in duration is less than ten minutes you print as 08/03/04 etc 
        const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`
        const seconds = Math.floor(sec%60);
        const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`
        return `${returnMin}:${returnSec}`;
    }

    const changeProgress = () => {
        audioPlayer.current.currentTime = progressBar.current.value;
        changeCurrentTime();
    }

    const changeCurrentTime = () => {
        progressBar.current.style.setProperty(
            "--played-width", 
            `${(progressBar.current.value / duration) * 100} %`
            );
        setCurrentTime(progressBar.current.value)
    }

    const changeLiked = () => {
        setLiked(!isLiked);
        
    };
    return (
        <div className="musicPlayer">
            <div className="songImage">
                <img src={imgSrc} alt ="" />
            </div>
            <div className="songAttributes">
                <audio src={song} preload="metadata" ref={audioPlayer} /> 
                <div className ="top"> 
                    <div className="left">
                        <div className="liked" onClick={changeLiked}>
                        {isLiked? (
                        <i>
                            <FaHeart/>
                            </i>
                            ) : (
                            <i>
                                <FaRegHeart/>
                                </i>
                                )}
                    </div>
                        <i className="download"><BsDownload /></i>
                    </div>    
                    <div className="middle">
                        <div className="back">
                            <i>
                                <FaStepBackward />
                            </i>
                            <i>
                                <FaBackward />
                            </i>
                        </div>
                        <div className="playPause" onClick={changePlayPause}>
                                {isPlaying ? (
                                <i>
                                    <FaPause />
                                        </i>
                                        ) : (
                                            <i>
                                                <FaPlay/>
                                            </i>
                                            )
                                }
                        </div>
                        <div className="forward">
                            <i>
                                <FaForward />
                            </i>
                            <i><FaStepForward /></i>
                        </div>
                    </div>
                    <div className="right">
                        <i><FaShareAlt /></i>
                    </div>
                </div>
                <div className="bottom"> 
                    <div className="currentTime"> {CalculateTime(currentTime)}</div>
                    <input type ="range" className="progressBar" ref={progressBar} defaultValue = "0" onChange ={changeProgress} autoPlay ={auto} />
                    <div className="duration"> 
                    {duration && !isNaN(duration) && CalculateTime(duration)?
                    duration && !isNaN(duration) && CalculateTime(duration) : "00:00"} 
                    </div> 
                </div>
            </div>
        </div>
    )
}// line 100 so that minutes and seconds can render on screen based on the function. it also gets rid of the NAN bug! IMPORTANT
//Essentially the Calculate Time function is super important here

export {MusicPlayer}; 
// converts default into named component, makes it easier to import into App.js i.e no need to right'import xxx from xxxx'

// TODO uderstand and explain useRef hook during the presentations
// also explain how the music player changes state as the song seconnds / time increases
// explain the audio html tag

// line 124 may explain the use of use ref