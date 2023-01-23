import React from 'react'
import { Card, Image, Stack, Heading, Text, Center } from '@chakra-ui/react'

const Details = ({ singleUser, active }) => {

    return (
        <>
            <div style={{ marginTop: "50px", margin: "10px", display: "flex", justifyContent: "center", alignItems: "center", width: "100%", flexShrink: "max-content" }}>
                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    w="100%"
                >

                    {active ? singleUser.map((user, index) => {
                        return (
                            <>
                                <Stack key={index} paddingLeft={5} paddingTop={100} maxW={{ base: '100%', sm: '500px' }}
                                >

                                    <Text fontSize='2xl' paddingBottom={5} paddingLeft={5} ><b>{user.id}</b> <br /> Person Detected</Text>

                                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                                        <Text fontSize='2xl'>Name</Text>
                                        <Text fontSize='2xl' paddingLeft={5} fontWeight={500}> :{user.name}</Text>
                                    </div>

                                    <div style={{ display: "flex", flexDirection: "row" }}>
                                        <Text fontSize='2xl'>Location</Text>
                                        <Text fontSize='2xl' paddingLeft={5} fontWeight={500}>:{user.location}</Text>
                                    </div>

                                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>

                                        <Text fontSize='2xl'>Date </Text>
                                        <Text fontSize='2xl' paddingLeft={5} fontWeight={500}>: {user.date}</Text>
                                    </div>

                                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>

                                        <Text fontSize='2xl'>Time </Text>
                                        <Text fontSize='2xl' paddingLeft={5} fontWeight={500}>: {user.time}</Text>
                                    </div>

                                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>

                                        <Text fontSize='2xl' paddingTop={5}>Description:<br /> <b> {user.name}</b> detected at <b>{user.location}</b> on <b>{user.date}</b></Text>
                                    </div>

                                </Stack>
                                <Stack paddingLeft={400} paddingTop={100}>

                                    <Heading size='md' style={{ paddingBottom: "20px", fontSize: "25px" }}>{user.gender}</Heading>
                                    <Image
                                        objectFit='cover'
                                        maxW={{ base: '100%', sm: '500px' }}
                                        src={user.img}
                                        alt='Caffe Latte'
                                        paddingRight={15}
                                    />
                                </Stack>
                            </>
                        )


                    }) :
                        (
                            <>
                                <Center style={{ margin: "auto", fontSize: "25px" }}>
                                    <b>No Person Detected</b>
                                </Center>

                            </>
                        )}




                </Card>
            </div>
        </>
    )
}

export default Details
