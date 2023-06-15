import React from "react";
import { Box, Image, Text, TabIndicator, useBreakpointValue } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Dashboard from "./Dashboard";

const Nav = () => {
  const SmallScreen = useBreakpointValue({ base: true, md: false, lg: false });

  return (
    <>
      <Box
        border="3px solid blue"
        h="13vh"
        display={"flex"}
        justifyContent={"space-around"}
        bg="blue"
      >
      



        <Box  w="10vw" m={{base:"",lg:"auto"}} mt={{base:"20px"}} >
          <Image src="https://coalshastra.com/images/coalshastra-logo-white.png" />
        </Box>

         {/* ---------------- */}
{
  !SmallScreen && <Box   w="60vw" m="auto" mt="15px" >
          <Tabs position="relative" variant="unstyled">
            <TabList color="#FFFFFF">
              <Tab>Home </Tab>
              <Tab>My Listing </Tab>
              <Tab>Market</Tab>
              <Tab>inbox </Tab>
              <Tab>Brand Stores </Tab>
            </TabList>
            <TabIndicator  mt="-1.5px" height="2px"  bg="blue.500" borderRadius="1px"
/>
            <TabPanels>
              <TabPanel>
              
              </TabPanel>
              <TabPanel>
             
              </TabPanel>
              <TabPanel>
                

              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>

}
       


          <Box w="15vw" display={"flex"}
           justifyContent={"space-between"}
          >
             
             <Box m="auto">
               <Text color={"#ffffff"}> Login  </Text>
              </Box>
              <Box m="auto"  bg="#fff" p="2" borderRadius={"5px"}> 
               <Text color="blue" fontSize={".6rem"} > Signup </Text> 
              </Box>
          
         </Box>




      </Box>
    </>
  );
};

export default Nav;
