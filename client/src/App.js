import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Chat from "./components/Chat/Chat";
import Sidebar from "./components/Sidebar/Sidebar";
import Pusher from "pusher-js";
import axios from "./axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useStateValue } from "./components/ContextApi/StateProvider";

const App = () => {
  const [{ user }] = useStateValue();
  const [messages, setMessages] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("/messages/sync")
  //     .then((response) => {
  //       setMessages(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // useEffect(() => {
  //   const pusher = new Pusher("6fbb654a0e0b670de165", {
  //     cluster: "ap2",
  //   });

  //   const channel = pusher.subscribe("messages");
  //   channel.bind("inserted", function (newMessage) {
  //     // alert(JSON.stringify(newMessage));
  //     setMessages([...messages, newMessage]);
  //   });

  //   return () => {
  //     channel.unbind_all();
  //     channel.unsubscribe();
  //   };
  // }, [messages]);

  console.log(messages);

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar />
            <Routes>
              <Route path="/rooms/:roomId" element={<Chat />} />
              <Route exact path="/" element={<Chat />} />
            </Routes>
          </Router>
        </div>
      )}
    </div>
  );
};

export default App;
