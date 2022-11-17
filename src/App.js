import React, { useState, useEffect, createContext } from "react";
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';


export const taskContext = createContext();

const inboxTasks = require("./inboxTasks.json");
const todayTasks = require("./todayTasks.json");
const upcomingTasks = require("./upcomingTasks.json");

function App() {

  const [showNav, setShowNav] = useState(true);
  const [space, setSpace] = useState('Inbox');
  const [inboxTask, setInboxTask] = useState([]);
  const [todayTask, setTodayTask] = useState([]);
  const [upcomingTask, setUpcomingTask] = useState([]);
  const [inboxCnt, setInboxCnt] = useState();
  const [todayCnt, setTodayCnt] = useState();
  const [upcomingCnt, setUpcomingCnt] = useState();
  const [addShow, setAddShow] = useState(false);
  const [newTask, setNewTask] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchInboxTask, setSearchInboxTask] = useState([]);
  const [searchTodayTask, setSearchTodayTask] = useState([]);
  const [searchUpcomingTask, setSearchUpcomingTask] = useState([]);
  

  useEffect(() => {
    setInboxTask([...inboxTasks]);
    setTodayTask([...todayTasks]);
    setUpcomingTask([...upcomingTasks]);
  }, [])

  useEffect(() => {
    let inboxLen = inboxTask.filter((task) => !task.checked).length;
    setInboxCnt(inboxLen);
  }, [inboxTask])

  useEffect(() => {
    let todayLen = todayTask.filter((task) => !task.checked).length;
    setTodayCnt(todayLen);
  }, [todayTask])

  useEffect(() => {
    let upcomingLen = upcomingTask.filter((task) => !task.checked).length;
    setUpcomingCnt(upcomingLen);
  }, [upcomingTask])


  return (
    <>
      <taskContext.Provider
        value={{
          showNav, setShowNav,
          space, setSpace,
          inboxTask, setInboxTask,
          todayTask, setTodayTask,
          upcomingTask, setUpcomingTask,
          inboxCnt, setInboxCnt,
          todayCnt, setTodayCnt,
          upcomingCnt, setUpcomingCnt,
          addShow, setAddShow,
          newTask, setNewTask,
          isSearching, setIsSearching,
          searchInboxTask, setSearchInboxTask,
          searchTodayTask, setSearchTodayTask,
          searchUpcomingTask, setSearchUpcomingTask,
        }}
      >  
        <Header />
        <Main />
      </taskContext.Provider>
    </>
  );
}

export default App;
