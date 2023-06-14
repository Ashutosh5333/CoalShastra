import React from 'react'
import { Box, Image, TabIndicator } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'


const Nav = () => {


  return (
    <>
      <Box border="3px solid blue" h="10vh" display={"flex"}  justifyContent={"space-around"} 
       bg="blue"
      >
           
            <Box border="3px solid yellow" w="10vw" m="auto" > 
               <Image  src="https://coalshastra.com/images/coalshastra-logo-white.png" />
            </Box>

            <Box border="3px solid red" w="80vw" > 
            <Tabs position="relative" variant="unstyled">
    <TabList>
      <Tab>Home </Tab>
      <Tab>My Listing </Tab>
      <Tab>Market</Tab>
      <Tab>inbox </Tab>
      <Tab>Brand Stores </Tab>

    </TabList>
    <TabIndicator
      mt="-1.5px"
      height="2px"
      bg="blue.500"
      borderRadius="1px"
    />
    <TabPanels>
      <TabPanel>
        <p>one!</p>
      </TabPanel>
      <TabPanel>
        <p>two!</p>
      </TabPanel>
      <TabPanel>
        <p>three!</p>
      </TabPanel>
    </TabPanels>
  </Tabs>
             </Box>



      </Box>
    </>
  )
}

export default Nav