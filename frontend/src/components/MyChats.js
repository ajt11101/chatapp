import { useToast } from '@chakra-ui/react';
import React, { useState,useEffect } from 'react'
import { ChatState } from '../Context/ChatProvider';
import axios from 'axios';

const MyChats = () => {
   const [loggedUser, setLoggedUser] = useState();
   const { selectedChat, setSelectedChat, user, chats, setChats } = ChatState();

   const toast=useToast();

    const fetchChats = async () => {
      // console.log(user._id);
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        };

        const { data } = await axios.get("/api/chats", config);
        console.log(data);
        setChats(data);
      } catch (error) {
        toast({
          title: "Error Occured!",
          description: "Failed to Load the chats",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom-left",
        });
      }
    };

    useEffect(() => {
      setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
      fetchChats();
      // eslint-disable-next-line
    }, []);

  return (
    <div>
      My Chats
    </div>
  )
}

export default MyChats
