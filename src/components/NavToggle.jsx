import { useState } from "react";

const NavToggle = ({ toggle }) => {
    const [isToggled, setToggled] = useState(false)
    const handleClick=()=>{
        setToggled(!isToggled);
    }
    const myToggle = (
        <img src={toggle} alt="hamburger icon" width={25} height={25} />
    );
    return (
        <>
            <button onClick={handleClick}>
                {isToggled ? myToggle : myToggle}
            </button>
        </>
    );
};

export default NavToggle;
