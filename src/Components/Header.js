import classes from './Header.module.css';
import icon from '../assests/searchman.png'


function Header(){
    
    return (
        <div style={{display: "flex"}}>
        <p  className= {classes.header}><span style={{color:"Blue"}}>K</span><span style={{color:"Red"}}>B</span> <span style={{color:"blue"}}>Se</span><span style={{color:"teal"}}>a</span><span style={{color:"blue"}}>rch</span> <span style={{color:"green"}}>En</span><span style={{color:"green"}}>g</span><span style={{color:"red"}}>ine</span></p>
        <img className= {classes.searchmanicon}   width= "50px" height="auto" alt="Search Icon" src= {icon} />
        </div>
    )
}

export default Header;