import React, { useState } from 'react'
import { Menu, MenuButton, MenuList, Button, Flex, Box, Heading, Spacer} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'



const Events = ({ users, handleData }) => {

    const [data, setData] = useState([]);
    const [active, setActive] = useState(false);

    const filterGender = (catItem) => {
        setActive(true)
        const Updated = users.filter((curr) => {
            return curr.gender === catItem;
        })

        setData(Updated)
    }
    const filterLocation = (catItem) => {
        setActive(true)
        const Updated = users.filter((curr) => {
            return curr.location === catItem;
        })

        setData(Updated)
    }
  

    const handleFilterByDate = async (dt) => {
        setActive(true)
        const Updated = users.filter((curr) => {
            return curr.date === dt;
        })
        setData(Updated)
    
    }

    


    return (
        <div style={{ width: "100%", marginTop: "20px", margin: "20px 15px 0 5px" }}>
            <Flex minWidth='max-content' alignItems='center' gap='2'>
                <Box p='2'>
                    <Heading size='md'>Events</Heading>
                </Box>
                <Spacer />
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Filter
                    </MenuButton>
                    <MenuList>
                        <MenuList>
                            <Button onClick={() => filterGender("Male")}>Male</Button>
                            <Button onClick={() => filterGender("Female")}>Female</Button>
                        </MenuList>
                        <MenuList>
                            <Button onClick={() => filterLocation("Bangalore")}>Bangalore</Button>
                            <Button onClick={() => filterLocation("Chennai")}>Chennai</Button>
                            <Button onClick={() => filterLocation("Hyderabad")}>Hyderabad</Button>
                        </MenuList>
                        <MenuList>
                            <Button onClick={()=>handleFilterByDate("5-Jan-23")}>5-Jan-23</Button>
                            <Button onClick={()=>handleFilterByDate("6-Jan-23")}>6-Jan-23</Button>
                            <Button onClick={()=>handleFilterByDate("7-Jan-23")}>7-Jan-23</Button>
                            <Button onClick={()=>handleFilterByDate("8-Jan-23")}>8-Jan-23</Button>
                            <Button onClick={()=>handleFilterByDate("9-Jan-23")}>9-Jan-23</Button>
                        </MenuList>
                    </MenuList>
                </Menu>
            </Flex>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", background: "black", padding: "10px", marginTop: "15px", fontSize: "20px", overflow: "scroll", height: "800px" }}>
                {!active ? users.map((user) => {
                    return (
                        <>
                            <div key={user.id} style={{ border: "2px solid green", margin: "0 0 20px 0", background: "lightgray", cursor: "pointer" }} onClick={() => handleData(user.id)}>

                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", fontWeight: "bold" }}>

                                    {user.id}:  {user.location}
                                    <div style={{ display: "flex", marginRight: "10px" }}>
                                        <div style={{ marginRight: "10px" }}>{user.date}</div>
                                        <div className="">{user.time}</div>

                                    </div>
                                </div>
                                <div style={{ margin: "0 0 15px 0" }}>
                                    Person Detected
                                </div>
                            </div>
                        </>
                    )
                }) :
                    data.map((user, i) => {
                        return (
                            <>
                                <div key={i} style={{ border: "2px solid green", margin: "0 0 20px 0", background: "lightgray", cursor: "pointer" }} onClick={() => handleData(user.id)}>

                                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", fontWeight: "bold" }}>

                                        {user.id}:  {user.location}
                                        <div style={{ display: "flex", marginRight: "10px" }}>
                                            <div style={{ marginRight: "10px" }}>{user.date}</div>
                                            <div className="">{user.time}</div>

                                        </div>
                                    </div>
                                    <div style={{ margin: "0 0 15px 0" }}>
                                        Person Detected
                                    </div>
                                </div>
                            </>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default Events
