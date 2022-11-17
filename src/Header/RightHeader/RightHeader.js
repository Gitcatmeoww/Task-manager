import React, { useContext } from "react";
import { taskContext } from '../../App';
import './RightHeader.css';

function RightHeader() {
    const { inboxCnt, todayCnt, upcomingCnt, space } = useContext(taskContext);

    // Count incompleted tasks
    const totalIncompleteTasks = inboxCnt + todayCnt + upcomingCnt;
    let incompleteTasks;

    if ( space === "Inbox" ) {
        incompleteTasks = inboxCnt;
    } else if ( space === "Today" ) {
        incompleteTasks = todayCnt;
    } else {
        incompleteTasks = upcomingCnt;
    }
    
    return (
        <>
        <span id="rightHeader">
            <img src="../../icons/progress.png" alt="progress" />
            {totalIncompleteTasks}/{incompleteTasks}
        </span>
        </>
    );
}

export default RightHeader;