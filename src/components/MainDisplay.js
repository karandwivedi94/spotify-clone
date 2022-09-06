import React, {useEffect} from 'react'
import '../Styles/MainContainer.css'
import {Banner} from './Banner';
import{FaUsers} from 'react-icons/fa'
import {MusicList} from './MusicList';

function MainDisplay(){
    useEffect(()=> {
        const allLi = document.querySelector('.menuList ul').querySelectorAll("li");
        
        function changeMenuActive(){
        allLi.forEach((n)=> n.classList.remove("active"));
        this.classList.add("active");
       }
        allLi.forEach((n)=> n.addEventListener('click',changeMenuActive))},[]);
    return (
        <div className = "mainDisplay">
            < Banner/>
            <div className="menuList">
                <ul>
                    <li><a href="#">Popular</a></li>
                    <li><a href="#">Albums</a></li>
                    <li><a href="#">Songs</a></li>
                    <li><a href="#">Fans</a></li>
                    <li><a href="#">About</a></li>
                </ul>
                <p><i><FaUsers/></i> 123,456 <span> Followers </span></p>
                

            </div>
            <MusicList />
        </div>
    )
}

export {MainDisplay}; // converts default into named component, makes it easier to import into App.js i.e no need to right'import xxx from xxxx'