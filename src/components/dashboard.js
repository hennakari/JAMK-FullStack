import React from 'react';
import { Flex, Container, Text, Divider, Heading, Spacer } from '@chakra-ui/react';
import ChakraGrid from './chakragrid';
import RecordItem from './recordItem';


const Dashboard = () => {
    return (
        <Container maxW="90%" p={4}>
            <Heading align="center" fontSize="4xl">Työssäoppimisjakson raportointia</Heading>
            <Spacer />
            <Text align="center" fontSize="2xl">Harjoittelu Akamonilla 11.10.-14.12.2021</Text>
            <Divider className="divider" />
            <Flex align="center" fontSize="2xl" direction="row" justifyContent="center" color="#5870CE">
                <Text fontStyle="italic">" </Text>
                <RecordItem />
                <Text fontStyle="italic"> "</Text>
            </Flex>
            <Flex h='auto' py={[0, 2, 4]} bg='white' >
                <ChakraGrid />
            </Flex>
        </Container>
    );
};

export default Dashboard;
