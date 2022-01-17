import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import {
  DonutLarge,
  Chat,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";
import { IconButton, Avatar } from "@mui/material";
import SidebarChat from "../SidebarChat/SidebarChat";
import { useStateValue } from "../ContextApi/StateProvider";
import Pusher from "pusher-js";
import axios from "../../axios";

const Sidebar = () => {
  const [rooms, setRooms] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    axios.get(`/all/rooms`).then((response) => {
      setRooms(response.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher("6fbb654a0e0b670de165", {
      cluster: "ap2",
    });

    const channel = pusher.subscribe("room");
    channel.bind("inserted", function (room) {
      // alert(JSON.stringify(newMessage));
      setRooms((prevRooms) => [...prevRooms, room]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src={user.photoURL} />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat addNewChat />
        {rooms.map((room) => (
          <SidebarChat key={room._id} id={room._id} name={room.name} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
