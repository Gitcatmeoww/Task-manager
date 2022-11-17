import React, { useContext } from "react";
import { taskContext } from '../../App';
import './MainNav.css';


function MainNav() {  
    const { 
        inboxTask, setInboxTask, 
        todayTask, setTodayTask, 
        upcomingTask, setUpcomingTask,    
        addShow, setAddShow, 
        newTask, setNewTask,
        space, isSearching,
        searchInboxTask,
        searchTodayTask,
        searchUpcomingTask
    } = useContext(taskContext);

    let items;

    if ( space === "Inbox" ) {
        items = inboxTask.map(item => 
            <li className="itemLine" key={item.id}>
                {/* Strike through completed tasks */}
                <input type="checkbox" id="cb" onClick={() => {
                    const updatedInboxTask = inboxTask.map(obj => {
                        if (obj.id === item.id) {
                            return {...obj, checked: !item.checked}
                        }
                        return obj;
                    });
                    // let updatedInboxItem = {...item, checked: !item.checked};
                    // let updatedInboxTask = [...inboxTask];
                    // updatedInboxTask = updatedInboxTask.filter((task) => { return task.id !== item.id });
                    // updatedInboxTask = [...updatedInboxTask, updatedInboxItem]
                    setInboxTask(updatedInboxTask);
                }} />
                {/* Edit task description */}
                <input type="text" value={item.description} className="editTask" 
                    style={{ textDecoration: item.checked ? 'line-through' : 'none' }} 
                    onChange={(e) => {
                        e.preventDefault();
                        const updatedInboxTask = inboxTask.map(obj => {
                            if (obj.id === item.id) {
                                return {...obj, description: e.target.value}
                            }
                            return obj;
                        });
                        setInboxTask(updatedInboxTask);     
                    }}
                />
            </li>  
        );
    } else if ( space === "Today" ) {
        items = todayTask.map(item => 
            <li className="itemLine" key={item.id}>
                {/* Strike through completed tasks */}
                <input type="checkbox" id="cb" onClick={() => {
                    const updatedTodayTask = todayTask.map(obj => {
                        if (obj.id === item.id) {
                            return {...obj, checked: !item.checked}
                        }
                        return obj;
                    });
                    // let updatedTodayItem = {...item, checked: !item.checked};
                    // let updatedTodayTask = [...todayTask];
                    // updatedTodayTask = updatedTodayTask.filter((task) => { return task.id !== item.id });
                    // updatedTodayTask = [...updatedTodayTask, updatedTodayItem]
                    setTodayTask(updatedTodayTask);
                }} />
                {/* Edit task description */}
                <input type="text" value={item.description} className="editTask" 
                    style={{ textDecoration: item.checked ? 'line-through' : 'none' }} 
                    onChange={(e) => {
                        e.preventDefault();
                        const updatedTodayTask = todayTask.map(obj => {
                            if (obj.id === item.id) {
                                return {...obj, description: e.target.value}
                            }
                            return obj;
                        });
                        setTodayTask(updatedTodayTask);     
                    }}
                />
            </li>
        );
    } else {
        items = upcomingTask.map(item => 
            <li className="itemLine" key={item.id}>
                {/* Strike through completed tasks */}
                <input type="checkbox" id="cb" onClick={() => {
                    const updatedUpcomingTask = upcomingTask.map(obj => {
                        if (obj.id === item.id) {
                            return {...obj, checked: !item.checked}
                        }
                        return obj;
                    });
                    // let updatedUpcomingItem = {...item, checked: !item.checked};
                    // let updatedUpcomingTask = [...upcomingTask];
                    // updatedUpcomingTask = updatedUpcomingTask.filter((task) => { return task.id !== item.id });
                    // updatedUpcomingTask = [...updatedUpcomingTask, updatedUpcomingItem]
                    setUpcomingTask(updatedUpcomingTask);
                }} />
                {/* Edit task description */}
                <input type="text" value={item.description} className="editTask" 
                    style={{ textDecoration: item.checked ? 'line-through' : 'none' }} 
                    onChange={(e) => {
                        e.preventDefault();
                        const updatedUpcomingTask = upcomingTask.map(obj => {
                            if (obj.id === item.id) {
                                return {...obj, description: e.target.value}
                            }
                            return obj;
                        });
                        setUpcomingTask(updatedUpcomingTask);     
                    }}
                />
            </li>
        );
    }

    // Map search results
    let searchItems;

    if ( space === "Inbox" ) {
        searchItems = searchInboxTask.map(item => 
            <li className="itemLine" key={item.id}>
                <input type="checkbox" id="cb" />
                <input type="text" value={item.description} className="editTask" readOnly/>
            </li>  
        );
    } else if ( space === "Today" ) {
        searchItems = searchTodayTask.map(item => 
            <li className="itemLine" key={item.id}>
                <input type="checkbox" id="cb" />
                <input type="text" value={item.description} className="editTask" readOnly/>
            </li>  
        );
    } else {
        searchItems = searchUpcomingTask.map(item => 
            <li className="itemLine" key={item.id}>
                <input type="checkbox" id="cb" />
                <input type="text" value={item.description} className="editTask" readOnly/>
            </li>  
        );
    }
    
    // Add new task
    const handleAdd = (e) => {
        e.preventDefault();

        if (newTask === '') {
            alert("Please add a task!")
            return
        }

        // Create a random id for each new task
        const id = Math.floor((Math.random() * 10000) + 1).toString();
        const newTaskItem = {
            "id": space.concat(id),
            "description": newTask,
            "checked": false
        }

        if ( space === "Inbox" ) {
            const newInboxTask = [...inboxTask, newTaskItem];
            setInboxTask(newInboxTask);
        } else if (space === "Today") { 
            const newTodayTask = [...todayTask, newTaskItem];
            setTodayTask(newTodayTask);
        } else {
            const newUpcomingTask = [...upcomingTask, newTaskItem];
            setUpcomingTask(newUpcomingTask);
        }

        setNewTask('');
        setAddShow(false);
    }


    return (
        <aside id="tasks">
            <h1>{space}</h1>

            <ul id="inbox">
                { isSearching ? searchItems : items}
                <li>
                    <img src="icons/add.png" id="inboxIcon" alt="add" />
                    <span id="addItem" onClick={() => setAddShow(!addShow)}>Add task</span>
                </li>

                {
                    addShow && 
                    <form className="addForm" onSubmit={handleAdd}>
                        <div className="formControl">
                            <label>New Task</label>
                            <input type="text" placeholder="Add Task" value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
                        </div>
                        <input type="submit" value="Save Task" className="addBtn" />
                    </form>
                }
            </ul>
        </aside>
    );
}

export default MainNav;