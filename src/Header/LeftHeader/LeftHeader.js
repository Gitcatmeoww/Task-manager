import React, { useContext } from "react";
import { taskContext } from '../../App';
import './LeftHeader.css';


function LeftHeader() {
    const { 
        showNav, setShowNav,
        inboxTask, todayTask, upcomingTask,
        setSearchInboxTask, setSearchTodayTask, setSearchUpcomingTask,
        space,  setIsSearching,
     } = useContext(taskContext);

    
     const handleSearch = (e) => {
        setIsSearching(true);
        var re = new RegExp(e.target.value.toLowerCase());

        if ( space === "Inbox" ) {
            const findInboxTask = inboxTask.filter((item) => {
                return item.description.toLowerCase().match(re);      
            });
            setSearchInboxTask(findInboxTask);

        } else if ( space === "Today" ) {
            const findTodayTask = todayTask.filter((item) => {
                return item.description.toLowerCase().match(re);      
            });
            setSearchTodayTask(findTodayTask);

        } else {
            const findUpcomingTask = upcomingTask.filter((item) => {
                return item.description.toLowerCase().match(re);      
            });
            setSearchUpcomingTask(findUpcomingTask);
        }     
    }


    return ( 
        <>
        <span id="leftHeader">
            <img src="../../icons/menu.png" alt="menu" onClick={() => setShowNav(!showNav)} />
            <input type="search" id="quickFind" name="quickFind" placeholder="Quick Find" onBlur={()=>setIsSearching(false)} onChange={handleSearch} />
        </span>
        </>
    );
}

export default LeftHeader;