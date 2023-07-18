import React from "react";

function Foot() {
    const currentYear = new Date().getFullYear();
    return (<footer>
        <p>© {currentYear} Keeper App</p>
    </footer>);}

export default Foot;