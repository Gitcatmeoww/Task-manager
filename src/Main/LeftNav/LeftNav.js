import React, { useContext } from "react";
import { taskContext } from '../../App';
import './LeftNav.css';


function LeftNav() {
    const { 
        space, setSpace, 
        inboxTask, setInboxTask, 
        todayTask, setTodayTask, 
        upcomingTask, setUpcomingTask, 
        inboxCnt, todayCnt, upcomingCnt
    } = useContext(taskContext);

    // Set space name
    const handleInbox = () => {
        setSpace("Inbox");
        setInboxTask(inboxTask);
    };

    const handleToday = () => {
        setSpace("Today");
        setTodayTask(todayTask);
    };

    const handleUpcoming = () => {
        setSpace("Upcoming");
        setUpcomingTask(upcomingTask);
    }


    return (
        <>
        {/* <!-- LEFT NAVIGATION --> */}
        <nav id="projects"> 
            <ul id="navList">
                <li>
                    <img src="icons/inbox.png" id="inboxIcon" alt="inbox" />
                    <span className="pointer" style={{ fontWeight: space === 'Inbox' ? 'bold' : 'normal' }} onClick={handleInbox}>Inbox</span>
                    <span className="taskCount">{inboxCnt}</span>
                </li>
                <li>
                    <img src="icons/today.png" id="inboxIcon" alt="today" />
                    <span className="pointer" style={{ fontWeight: space === 'Today' ? 'bold' : 'normal' }} onClick={handleToday}>Today</span>
                    <span className="taskCount">{todayCnt}</span>
                </li>
                <li>
                    <img src="icons/upcoming.png" id="inboxIcon" alt="upcoming" />
                    <span className="pointer" style={{ fontWeight: space === 'Upcoming' ? 'bold' : 'normal' }} onClick={handleUpcoming}>Upcoming</span>
                    <span className="taskCount">{upcomingCnt}</span>
                </li>
                {/* <!-- Expandable Projects List --> */}
                <details className="treeParent_item">
                    <summary className="treeParent"><span className="bold projectTitle">Projects</span></summary>
                    <div className="sublist">
                        {/* <!-- Sublist 1: Work--> */}
                        <details className="treeChild1_item">
                            <summary className="treeChild1"><img src="icons/work.png" id="inboxIcon_parent" alt="work" />Work</summary>
                            <li className="childList"><img src="icons/new.png" id="inboxIcon" alt="new" />New Brand<span className="taskCount">9</span></li>
                            <li className="childList"><img src="icons/website.png" id="inboxIcon" alt="website" />Website Update<span className="taskCount">11</span></li>
                            <li className="childList"><img src="icons/product.png" id="inboxIcon" alt="product" />Product Roadmap<span className="taskCount">11</span></li>
                            <li className="childList"><img src="icons/meeting.png" id="inboxIcon" alt="meeting" />Meeting Agenda<span className="taskCount">6</span></li>
                        </details>
                        {/* <!-- Sublist 2: Personal--> */}
                        <details className="treeChild2_item">
                            <summary className="treeChild2"><img src="icons/work.png" id="inboxIcon_parent" alt="work" />Personal<span className="taskCount">28</span></summary>
                        </details>
                    </div>
                </details>
                <li><img src="icons/add.png" id="inboxIcon" alt="add" /><span id="addItem">Add Project</span></li>
            </ul>
        </nav>
        </>
    );
}

export default LeftNav;