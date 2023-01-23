import { Box, Flex, Button, useColorModeValue, Stack, useColorMode, Tag } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { collection, getCountFromServer, query, where } from 'firebase/firestore';
import { db } from '../firebase-config';
import { useEffect, useState } from 'react';

const NavBar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const [male, setMale] = useState();
    const [female, setFemale] = useState();

    useEffect(() => {
        const getData = async () => {
            const coll = collection(db, "users");
            const qm = query(coll, where("gender", "==", "Male"))
            const qf = query(coll, where("gender", "==", "Female"))
            const snapMale = await getCountFromServer(qm);
            const snapFemale = await getCountFromServer(qf);
            setMale(snapMale.data().count)
            setFemale(snapFemale.data().count)
        }

        getData();
    }, [])

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} w="100%">
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Box style={{ fontSize: "25px" }}>SECQUR<b style={{ color: "red" }}>AI</b>SE</Box>

                    <Flex alignItems={'center'} >
                        <Tag marginRight={5} bg={'blue.200'} fontSize={20}>Male: {male}</Tag>
                        <Tag marginRight={5} bg={'green.200'} fontSize={20}>Female: {female}</Tag>
                        <Stack direction={'row'} spacing={7}>
                            <Button onClick={toggleColorMode} marginRight={5}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}

export default NavBar;