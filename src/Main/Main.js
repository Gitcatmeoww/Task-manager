import React, { useContext } from "react";
import { taskContext } from '../App';
import LeftNav from './LeftNav/LeftNav';
import MainNav from './MainNav/MainNav';
import './Main.css';

function Main() {
    const { showNav } = useContext(taskContext);

    return (
        <section id="main">
            {showNav && <LeftNav />}
            <MainNav />
        </section>
    );
}

export default Main;