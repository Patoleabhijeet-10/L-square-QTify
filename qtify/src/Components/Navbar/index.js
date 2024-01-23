import Button from "../Button";
import SearchBox from "../SearchBox";
import './Navbar.css';

const Navbar = () => {

    return <div className="navbar">
       <div><img src='Logo.png' alt='its not present'  /></div> 
        <SearchBox />
        <Button>Give Feedback</Button>
    </div>

}
export default Navbar;
