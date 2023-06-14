import { Box, Button, Input, Select, Text } from "@chakra-ui/react";
import React from "react";
import {
  Tabs,
  TabList,
  TabIndicator,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { MdArrowDropDown } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import MiddlePage from "./MiddlePage";
import { Dasboardfrom } from "./Dasboardfrom";

const Dashboard = () => {
  return (
    <>
      <Box w="100vw" height={"90vh"}>
        <Box w="90%" m="auto" display={"flex"} p="2" justifyContent={"space-between"}>
          <Box fontWeight={"600"}>Market Details</Box>
          <Box fontWeight={"600"}>Select Market</Box>
        </Box>

        {/* --------- Heading line ------------ */}

        <Box border={"1px solid gray"} w="90vw" m="auto" mt="10px" h="10vh">
          <Tabs position="relative" variant="unstyled">
            <TabList>
              <Tab> <AiFillStar/> </Tab>
              <Tab>Fav </Tab>
              <Tab>USAGUJ </Tab>
              <Tab>WCL</Tab>
              <Tab> VIZAGPT </Tab>
              <Tab>INDOGUJ </Tab>
              <Tab>NMANGPT </Tab>
              <Tab>USAUN </Tab>
              <Tab>ECL</Tab>
              <Tab>ENKAPT </Tab>
              <Tab> VIZAGPT </Tab>
            </TabList>
            <TabIndicator
              mt="-1.5px"
              height="2px"
              bg="blue.500"
              borderRadius="1px"
            />
            <TabPanels>
              <TabPanel></TabPanel>
              <TabPanel></TabPanel>
              <TabPanel></TabPanel>
            </TabPanels>
          </Tabs>
        </Box>

        {/* -------------------------- Search bar and currency -------------------------- */}

        <Box
          border="1px solid gray"
          w="90vw"
          m="auto"
          mt="10px"
          display={"flex"}
          justifyContent={"space-between"}
          p="2"
        >
          <Box
            w="50%"
            h="13vh"
            display={"flex"}
            justifyContent={"space-around"}
          >
            <Box w="8vw" m="auto" >
              <Text fontSize={".6rem"}> Currency </Text>
          
               <Select   icon={<MdArrowDropDown />} placeholder="INR">
                <option value="INR">INR </option>
                <option value="INR">INR </option>
              </Select>
            </Box>

            <Box w="12vw" m="auto" >
              <Text fontSize={".6rem"}> Payment Methods </Text>
              <Select placeholder="Phone pe">
                <option value="phone pe">Phone pe </option>
                <option value="option2">Google pay</option>
                <option value="option3">Net banking</option>
              </Select>
            </Box>

            <Box w="15vw" m="auto" >
              <Text fontSize={".6rem"}> Lifting Days </Text>
                <Input placeholder="Lifting Days" />
            </Box>

            <Box w="10vw" m="auto">
               <Button bg="none" color="blue" > Clear All </Button>
            </Box>
          </Box>

          <Box  w="40vw" h="13vh">
           
           <Box w="30vw" m="auto" mt="15px" >
            <Input m="auto" placeholder="Search vessal type etc ..." />
           </Box>

          </Box>
        </Box>


          {/* -------------------------- */}


       <MiddlePage/>




       <Dasboardfrom/>

      </Box>
    </>
  );
};

export default Dashboard;
