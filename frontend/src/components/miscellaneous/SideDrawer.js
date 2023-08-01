import React,{useState} from 'react'
import {Box, Text} from "@chakra-ui/layout"
import { Avatar, Button, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Tooltip } from '@chakra-ui/react'
import { BellIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { ChatState } from '../../Context/ChatProvider'
import ProfileModal from './ProfileModal'
import {useHistory} from 'react-router-dom'
const SideDrawer = () => {
   const [search, setSearch] = useState("")
   const [searchResult, setSearchResult] = useState([])
   const [loading, setLoading] = useState(false)
   const [loadingChat, setLoadingChat] = useState()

   const { user }=ChatState()


   const history = useHistory();

   const logOutHandler = () => {
     localStorage.removeItem("userInfo");
     history.push("/");
   };
  return (
    <>
      <Box
        d="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="5px"
        style={{ display: "flex" }}
      >
        <Tooltip label="Search users to chat" hasArrow placement="bottom-end">
          <Button variant="ghost">
            <i className="fa fa-search" aria-hidden="true"></i>
            <Text d={{ base: "none", md: "flex" }} px="4">
              Search User
            </Text>
          </Button>
        </Tooltip>
        <Text fontSize="2xl" fontFamily="Work sans">
          Chat-Now
        </Text>
        <div>
          <Menu>
            <MenuButton p={1}>
              <BellIcon fontSize="2xl" m={1} />
            </MenuButton>
            <MenuList></MenuList>
          </Menu>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              <Avatar
                size="sm"
                cursor="pointer"
                name={user.name}
                src={user.pic}
              />
            </MenuButton>
            <MenuList>
              <ProfileModal user={user}>
                <MenuItem>My Profile</MenuItem>
              </ProfileModal>
              <MenuDivider />
              <MenuItem onClick={logOutHandler}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Box>
    </>
  );
}

export default SideDrawer
