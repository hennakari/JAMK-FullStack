import React from 'react';
import { VStack, HStack, SimpleGrid, GridItem, Heading, Center } from '@chakra-ui/react';
import Chart from "./chart";
import { useBreakpointValue } from "@chakra-ui/react";

const ChakraGrid = () => {
    const columns = useBreakpointValue( {sm: 3, md: 6, lg: 9, xl: 12, "2xl": 12 })
    const colSpan = useBreakpointValue( {sm: 6, md: 4, lg: 3, xl: 3 })
    return (
        <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
            <HStack spacing={3} alignItems="flex-start">
                <Heading size="2xl">Työssäoppimisjaksolla menee näin:</Heading>
            </HStack>
            <SimpleGrid columns={columns} columnGap={3} rowGap={6} w="full">
                <GridItem className="ruutu" colSpan={3}>
                    {/* <Text>Eka ruutu</Text> */}
                    <Center>
                        <Chart height={'46vh'} width={'20vw'} chartId={'cd7c426b-2a93-45ce-8870-caf210098ebe'}/>
                    </Center>
                </GridItem>
                <GridItem className="ruutu" colSpan={3}>
                {/* <Text>Toka ruutu</Text> */}
                    <Center>
                        <Chart height={'46vh'} width={'20vw'} chartId={'e2aa4cfa-d6ff-4bb7-9107-f02a1fa5d66a'}/>
                    </Center>
                </GridItem>
                <GridItem className="ruutu" colSpan={3}>
                {/* <Text>Kolmas ruutu</Text> */}
                    <Center>
                        <Chart height={'46vh'} width={'20vw'} chartId={'8392c116-f2a2-4b70-830d-0b4a89b15f8c'}/>
                    </Center>
                </GridItem>
                <GridItem className="ruutu" colSpan={3}>
                {/* <Text>Neljäs ruutu</Text> */}
                    <Center>
                        <Chart height={'46vh'} width={'20vw'} chartId={'3039d3c0-a55f-4229-9df9-589254a643df'}/>
                    </Center>
                </GridItem>
                <GridItem className="ruutu" colSpan={useBreakpointValue( {sm: 3, md: 6, lg: 6, xl: 8, "2xl": 8 })}>
                {/* <Text>Viides ruutu</Text> */}
                    <Center>
                        <Chart className="chart-d" height={'46vh'} width={'80vw'} chartId={'1b15e847-bdb6-4139-a1e7-938c714c4a87'}/>
                    </Center>
                </GridItem>
                <GridItem className="ruutu" colSpan={useBreakpointValue( {sm: 3, md: 4, lg: 3, xl: 4, "2xl": 4 })}>
                {/* <Text>Kuudes ruutu</Text> */}
                    <Center>
                        <Chart className="chart-d" height={'46vh'} width={'35vw'} chartId={'75ddbab3-a823-4b0d-8946-c265ea2c6d7b'}/>
                    </Center>
                </GridItem>
                <GridItem className="ruutu" colSpan={useBreakpointValue( {sm: 3, md: 4, lg: 3, xl: 4, "2xl": 4 })}>
                {/* <Text>Seiska ruutu</Text> */}
                    <Center>
                        <Chart className="chart-d" height={'46vh'} width={'35vw'} chartId={'41268173-ee6c-4a73-875d-173cf002cf21'}/>
                    </Center>
                </GridItem>
                <GridItem className="ruutu" colSpan={useBreakpointValue( {sm: 3, md: 6, lg: 6, xl: 8, "2xl": 8 })}>
                {/* <Text>Kasi ruutu</Text> */}
                    <Center>
                        <Chart className="chart-d" height={'46vh'} width={'80vw'} chartId={'a03eb9ee-f79b-4547-b7eb-64558a87b7c6'}/>
                    </Center>
                </GridItem>
                <GridItem className="ruutu" colSpan={useBreakpointValue( {sm: 3, md: 6, lg: 6, xl: 6, "2xl": 6 })}>
                    {/* <Text>Ysi ruutu</Text> */}
                    <Center>
                        <Chart className="chart-d" height={'60vh'} width={'60vw'} chartId={'8f9f9ec6-cc89-44a5-ae4f-6c5534f65b1c'}/>
                    </Center>
                </GridItem>
                <GridItem className="ruutu" colSpan={useBreakpointValue( {sm: 3, md: 6, lg: 6, xl: 6, "2xl": 6 })}>
                {/* <Text>Kymppi ruutu</Text> */}
                    <Center>
                        <Chart className="chart-d" height={'60vh'} width={'60vw'} chartId={'0bb41bab-cb61-4900-a341-6bf0f0747638'}/>
                    </Center>
                </GridItem>
            </SimpleGrid>
        </VStack>
    );
};

export default ChakraGrid;
