import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { AiFillStar, AiOutlineShareAlt, AiTwotoneFire } from "react-icons/ai";
import { FaDownload, FaInfo } from "react-icons/fa";
import { GiUsaFlag } from "react-icons/gi";
import { ImLocation2 } from "react-icons/im";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import {SiHandshake} from "react-icons/si"


const Rightpage = () => {
  return (
    <>
      <Box  
      w={{base:"80%",md:"80%",lg:"50%"}} m={{base:"auto"}} >

        <Box borderRadius={"5px"} bg="#c3dce3" p="1" w="90%" m="auto">
          <Text
            textAlign={"center"}
            fontWeight={"600"}
            fontSize={"0.8rem"}
            color="blue"
          >
            {" "}
            All Price are including CESS{" "}
          </Text>
        </Box>

        {/* --------top heading------- */}

        <Box
          bg="red.200"
          borderRadius={"5px"}
          p="1"
          w="90%"
          m="auto"
          display={"flex"}
          justifyContent={"space-between"}
          mt="5px"
        >
          <Box w="15%" m="auto">
            <Text textAlign={"start"} fontWeight={"600"} fontSize={"0.8rem"}>
              HOT Listing{" "}
            </Text>
          </Box>

          <Box w="80%">
            <Text fontSize={"0.8rem"} color="red">
              Accepting terms , without any modifications, of a HOT listing will
              lead to complusury bid/ offer acceptance.{" "}
            </Text>
          </Box>
        </Box>

        {/* --------------- red heading ^^---------------- */}

        <Box p="2">
          <Box h="25vh" display={"flex"} justifyContent={"space-between"}>
            <Box w="85%" p="2">
              <Text p="2" fontWeight={"600"} fontSize={"0.8rem"}>
                {" "}
                MV SAMJOHN SOLIDARITY{" "}
              </Text>

              <Box
                w="70%"
                mt="-15px"
                display={"flex"}
                flexDirection={"row"}
                h="10vh"
              >
                <Box display="flex" flexDirection={"row"} m="auto">
                  <Text color="red" textAlign={"center"} mt="5px">
                    <GiUsaFlag />
                  </Text>
                  <Text fontSize={"0.8rem"}>United States | </Text>
                </Box>
                <Box display="flex" flexDirection={"row"} m="auto">
                  <Text textAlign={"center"}>
                    <ImLocation2 />
                  </Text>
                  <Text fontSize={"0.8rem"}> Tuna Port </Text>
                </Box>
                <Box display="flex" flexDirection={"row"} m="auto">
                  <Text fontSize={"0.8rem"}> | 6750 INAR (Kcal/kg) </Text>
                </Box>
              </Box>

              <Box display={"flex"} flexDireaction="row" p="2" mt="-15px">
                <Text mt="5px">
                  {" "}
                  <FaDownload />{" "}
                </Text>
                <Text mr="10px">Download Report </Text>
              </Box>

              <Box p="2" mt="-15px">
                <Text fontWeight={"600"}> All Listings </Text>
              </Box>
            </Box>

            <Box w="25%">
              <Text fontSize={"0.8rem"} color="gray">
                {" "}
                Last match{" "}
              </Text>
              <Text color={"blue"} fontSize={"0.8rem"}>
                INR 1400.00 / MT{" "}
              </Text>
            </Box>
          </Box>
        </Box>

        {/* ------------------------ Required qty --------------------- */}

        <Box
          display={"flex"}
          justifyContent={"space-between"}
          gap="5"
          h="35vh"
        >
          <Box w="50%" p="2">
            <Box
              borderBottom={"1px solid gray"}
              display={"flex"}
              justifyContent={"space-between"}
              gap="5"
            >
              <Text fontSize={"0.8rem"} color="gray">
                {" "}
                Required Qty{" "}
              </Text>
              <Text fontSize={"0.8rem"} color="gray">
                {" "}
                Buyers{" "}
              </Text>
            </Box>

            <Text color={"gray"} fontSize={"0.8rem"}>
              {" "}
              #31886 | <span style={{ color: "blue" }}> (votes) </span>{" "}
            </Text>

            <Box display={"flex"} justifyContent={"space-between"} gap="5">
              <Text fontSize={"0.8rem"}> 1000 MT</Text>
              <Text fontSize={"0.8rem"} color="green">
                {" "}
                INR 12505.00MT >{" "}
              </Text>
            </Box>

            <Box display={"flex"} justifyContent={"space-between"} gap="5">
              <Text color="gray"> 30 Lifting Days </Text>
              <Text fontSize={"0.8rem"} color="gray">
                {" "}
                Credit (d Days){" "}
              </Text>
            </Box>

            <Box display={"flex"} flexDireaction="row">
              <Text mt="5px">
                {" "}
                <MdOutlineMapsHomeWork />{" "}
              </Text>
              <Text color="gray" fontSize={"0.8rem"} mr="10px">
                {" "}
                MV SAMJOHN SOLIDARITY{" "}
              </Text>
            </Box>

            <Box display={"flex"} flexDireaction="row">
              <Text mt="5px">
                {" "}
                <FaInfo />{" "}
              </Text>
              <Text fontWeight={"600"} fontSize={"0.8rem"} mr="10px">
                Buyers info{" "}
              </Text>
            </Box>

            <Box display={"flex"} justifyContent={"space-between"} gap="5">
              <Text display={"flex"} flexDireaction="row" color="yellow">
                {" "}
                <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
                <AiFillStar />{" "}
              </Text>
              <Text fontSize={"0.8rem"} color="blue">
                {" "}
                5+ (Mutal References){" "}
              </Text>
            </Box>

            <Text color="gray" fontSize={"0.8rem"}>
              {" "}
              10K + Tons | 50+ Deals | 2 + Yr{" "}
            </Text>
          </Box>

          <Box  w="50%" p="2">
            <Box
              borderBottom={"1px solid gray"}
              display={"flex"}
              justifyContent={"space-between"}
              gap="5"
            >
              <Text fontSize={"0.8rem"} color="gray">
                {" "}
               Sellers 
              </Text>
              <Text fontSize={"0.8rem"} color="gray">
                {" "}
            Offer Qty
              </Text>
            </Box>

            <Text color={"gray"} fontSize={"0.8rem"}>
              {" "}
              #31885 | <span style={{ color: "blue" }}> (votes) </span>{" "}
            </Text>

            <Box display={"flex"} justifyContent={"space-between"} gap="5">
              <Text fontSize={"0.8rem"} fontWeight="600" color="red">
                {" "}
                INR 12505.00MT >{" "}
              </Text>
              <Text fontSize={"0.8rem"} fontWeight={"600"}> 700 MT</Text>
            </Box>

            <Box display={"flex"} justifyContent={"space-between"} gap="5">
              <Text color="gray" fontSize={"0.8rem"}> 30 % Advance </Text>
              <Text fontSize={"0.8rem"} color="gray">
                {" "}
           15 Lifting Days
              </Text>
            </Box>

            <Box display={"flex"} flexDireaction="row">
              <Text mt="5px">
                {" "}
                <MdOutlineMapsHomeWork />{" "}
              </Text>
              <Text color="gray" fontSize={"0.8rem"} mr="10px">
                {" "}
                MV SAMJOHN SOLIDARITY{" "}
              </Text>
            </Box>

            <Box display={"flex"} flexDireaction="row">
              <Text mt="5px">
                {" "}
                <FaInfo />{" "}
              </Text>
              <Text fontWeight={"600"} fontSize={"0.8rem"} mr="10px">
                Seller info{" "}
              </Text>
            </Box>

            <Box display={"flex"} justifyContent={"space-between"} gap="5">
              <Text display={"flex"} flexDireaction="row" color="yellow">
                {" "}
                <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
                <AiFillStar />{" "}
              </Text>
              <Text fontSize={"0.8rem"} color="blue">
                {" "}
                5+ (Mutal References){" "}
              </Text>
            </Box>

            <Text color="gray" fontSize={"0.8rem"}>
              {" "}
              10K + Tons | 50+ Deals | 2 + Yr{" "}
            </Text>
          </Box>
        </Box>

        {/* -------- right----------- */}

        <Box
          display={"flex"}
          justifyContent={"space-between"}
          
          gap="5"
          h="35vh"
          mt="10px" 
        >
          <Box w="50%" p="2">
        
            <Text color={"gray"} fontSize={"0.8rem"}>
              {" "}
              #31886 | <span style={{ color: "blue" }}> (votes) </span>{" "}
            </Text>

            <Box display={"flex"} justifyContent={"space-between"} gap="5">
              <Text fontWeight={"600"} fontSize={"0.8rem"}> 1000 MT</Text>
               <Text color={"red"}><AiTwotoneFire/>  </Text>
              <Text fontSize={"0.8rem"} color="green">
                {" "}
                INR 12500.00/MT >{" "}
              </Text>
            </Box>

            <Box display={"flex"} justifyContent={"space-between"} gap="5">
              <Text fontSize={"0.8rem"} color="gray"> 30 Lifting Days </Text>
              <Text fontSize={"0.8rem"} color="gray">
                {" "}
                 LC (30 Days){" "}
              </Text>
            </Box>

            <Box display={"flex"} flexDireaction="row">
              <Text mt="5px">
                {" "}
                <MdOutlineMapsHomeWork />{" "}
              </Text>
              <Text color="gray" fontSize={"0.8rem"} mr="10px">
                {" "}
                MV SAMJOHN SOLIDARITY{" "}
              </Text>
            </Box>

            <Box display={"flex"} flexDireaction="row">
              <Text mt="5px">
             
             <SiHandshake color="yellow" />
              </Text>
              <Text fontWeight={"600"} fontSize={"0.8rem"} mr="10px">
                Buyers info{" "}
              </Text>
            </Box>

            <Box display={"flex"} justifyContent={"space-between"} gap="5">
              <Text display={"flex"} flexDireaction="row" color="yellow">
                {" "}
                <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
                <AiFillStar />{" "}
              </Text>
              <Text fontSize={"0.8rem"} color="blue">
              
              </Text>
            </Box>

            <Text color="gray" fontSize={"0.8rem"}>
              {" "}
              10K + Tons | 50+ Deals | 2 + Yr{" "}
            </Text>
          </Box>

          <Box  w="50%" p="2">
           

            <Text color={"gray"} fontSize={"0.8rem"}>
              {" "}
              #31885 | <span style={{ color: "blue" }}> (votes) </span>{" "}
            </Text>

            <Box display={"flex"} justifyContent={"space-between"} gap="5">
              <Text fontSize={"0.8rem"} fontWeight="600" color="red">
                {" "}
                INR 12505.00MT >{" "}
              </Text>
              <Text fontSize={"0.8rem"} fontWeight={"600"}> 700 MT</Text>
            </Box>

            <Box display={"flex"} justifyContent={"space-between"} gap="5">
              <Text color="gray" fontSize={"0.8rem"}> 30 % Advance </Text>
              <Text fontSize={"0.8rem"} color="gray">
                {" "}
           15 Lifting Days
              </Text>
            </Box>

            <Box display={"flex"} flexDireaction="row">
              <Text mt="5px">
                {" "}
                <MdOutlineMapsHomeWork />{" "}
              </Text>
              <Text color="gray" fontSize={"0.8rem"} mr="10px">
                {" "}
                MV SAMJOHN SOLIDARITY{" "}
              </Text>
            </Box>

            <Box display={"flex"} flexDireaction="row">
              <Text mt="5px">
                {" "}
                <SiHandshake color="yellow" />
              </Text>
              <Text fontWeight={"600"} fontSize={"0.8rem"} mr="10px">
                Seller info{" "}
              </Text>
            </Box>

            <Box display={"flex"} justifyContent={"space-between"} gap="5">
              <Text display={"flex"} flexDireaction="row" color="yellow">
                {" "}
                <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
                <AiFillStar />{" "}
              </Text>
              <Text fontSize={"0.8rem"} color="blue">
                
              </Text>
            </Box>

            <Text color="gray" fontSize={"0.8rem"}>
              {" "}
              10K + Tons | 50+ Deals | 2 + Yr{" "}
            </Text>
          </Box>
        </Box>

      </Box>
    </>
  );
};

export default Rightpage;
