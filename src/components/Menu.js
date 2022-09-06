import React,{useEffect} from "react";
//UseEffect will be executed whenever react object returned/rendered

function Menu({title, menuObject }){ // this will send the prop as an object so you can use it directly inside the component
    useEffect(()=> {
        const allLi = document.querySelector('.MenuContainer ul').querySelectorAll("li");
        
        function changeMenuActive(){
        allLi.forEach((n)=> n.classList.remove("active"));
        this.classList.add("active");
       }
        allLi.forEach((n)=> n.addEventListener('click',changeMenuActive))},[]); //you need to pass empty array to make sure its only rendered once after it has been executed, i.e when the page gets loaded 
    return <div className = "MenuContainer">
        <p className = "title">{title}</p>
        <ul>
            {
                menuObject && menuObject.map((menu)=>( //Condiitonal rendering: iif menObject has a value
                    <li key={menu.id} >
                        <a href="#">
                            <i>{menu.icon}</i>
                            <span>{menu.name}</span>
                        </a>
                    </li>
                ))
            }
        </ul>
    </div>
}

export { Menu }