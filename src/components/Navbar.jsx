import React, { useEffect, useState } from "react";

const Navbar =()=>{
    const[isMenuOpen, setMenuOpen]=useState(false);
    const[isSticky, setIsSticky]=useState(false);

    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY>100){
                setIsSticky(true)
            }
        };
    })

    return(
        <div>
            Navbar
        </div>
    );
};

export default Navbar;