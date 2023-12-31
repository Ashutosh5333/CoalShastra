import React from "react";
import { Box, Divider, Text } from "@chakra-ui/react";
import { AiFillStar, AiOutlineShareAlt } from "react-icons/ai";
import { FaDownload, FaInfo } from "react-icons/fa";
import { GiUsaFlag } from "react-icons/gi";
import { ImLocation2 } from "react-icons/im";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import Rightpage from "./Rightpage";
import {data} from "./data"

 console.log(data)


const MiddlePage = () => {
  return (
    <>
      <Box
        w="90vw"
        m="auto"
        display={"flex"}
        justifyContent={"space-between"}
        flexDirection={{base:"column",md:"column",lg:"row"}}
        mt="20px"    gap="5px">

        <Box border=".5px solid gray" w={{base:"80%",md:"80%",lg:"50%"}} boxShadow={"2xl"} m={{base:"auto"}} 
         overflow="scroll" h="80vh"
        >

        {
           data.length > 0 && data.map((el) =>{
             return <Box  p="2">
            <Box display={"flex"} justifyContent={"space-between"}>
              <Box p="5">
                <Text fontSize={".8rem"} color="#591ad6">
                    {el.title}
                </Text>
              </Box>

              <Box
                w="15vw"
                display={"flex"}
                justifyContent={"space-between"}
                gap="5px"
              >
                <Box m="auto">
                  <AiOutlineShareAlt />
                </Box>
                <Box m="auto">
                  <FaDownload color="blue" />
                </Box>

                <Box m="auto">
                  <AiFillStar color="yellow" />
                </Box>
              </Box>
            </Box>

            {/* ------------------------------------- */}

            <Box
              w="60%"
              display={"flex"}
              flexDirection={"row"}
              h="10vh"
              mt="-20px"
            >
              <Box display="flex" flexDirection={"row"} m="auto">
                <Text color="red" textAlign={"center"} mt="5px">
                  <GiUsaFlag />
                </Text>
                <Text fontSize={"0.8rem"}>{el.Country} | </Text>
              </Box>
              <Box display="flex" flexDirection={"row"} m="auto">
                <Text textAlign={"center"}>
                  <ImLocation2 />
                </Text>
                <Text fontSize={"0.8rem"}> {el.Port} </Text>
              </Box>
              <Box display="flex" flexDirection={"row"} m="auto">
                <Text fontSize={"0.8rem"}> | {el.Kgcl} </Text>
              </Box>
            </Box>

            {/* ------------------------------------------------- */}
            <Box
              w="90%"
              h="10vh"
              mt="-10px"
              display="flex"
              flexDireaction="row"
            >
              <Box m="auto" display="flex" flexDireaction="row">
                <Text mt="5px">
                  {" "}
                  <MdOutlineMapsHomeWork />{" "}
                </Text>
                <Text mr="2px" fontSize={"1rem"} fontWeight={"600"}>
              
                  {el.description}
                </Text>
              </Box>
            </Box>

            {/* ------------------------------------------------------- */}

            <Box display="flex" justifyContent={"space-evenly"}>
              <Box m="auto">
                <Text color="gray" fontSize={"0.8rem"}>
                  {" "}
                  Bid Price /MT{" "}
                </Text>
                <Text fontWeight={"600"}> {el.currency} 0.00 </Text>
              </Box>

              <Box m="auto">
                <Text color="gray" fontSize={"0.8rem"}>
                  {" "}
                  Floor Price /MT{" "}
                </Text>
                <Text fontWeight={"600"}> INR ***** </Text>
              </Box>

              <Box m="auto">
                <Text color="gray" fontSize={"0.8rem"}>
                  Last Match{" "}
                </Text>
                <Text fontWeight={"600"}> INR 0.00 </Text>
              </Box>
            </Box>

            <Divider />
          </Box>
          

           })


        }
          

     



          {/* ---------------- complete1 ------------  */}
{/* 
          <Box  p="2">
            <Box display={"flex"} justifyContent={"space-between"}>
              <Box p="5">
                <Text fontSize={".8rem"} color="#591ad6">
                  {" "}
                  TEST EAUCTION 6750 NAR{" "}
                </Text>
              </Box>

              <Box
                w="15vw"
                display={"flex"}
                justifyContent={"space-between"}
                gap="5px"
              >
                <Box m="auto">
                  <AiOutlineShareAlt />
                </Box>
                <Box m="auto">
                  <FaDownload color="blue" />
                </Box>

                <Box m="auto">
                  <AiFillStar color="yellow" />
                </Box>
              </Box>
            </Box>


            <Box
              w="60%"
              display={"flex"}
              flexDirection={"row"}
              h="10vh"
              mt="-20px"
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

       
            <Box
              w="90%"
              h="10vh"
              mt="-10px"
              display="flex"
              flexDireaction="row"
            >
              <Box display="flex" flexDireaction="row" mt="10px">
                <Text mt="5px">
                  {" "}
                  <MdOutlineMapsHomeWork />{" "}
                </Text>
                <Text
                  mr="2px"
                  textAlign={"start"}
                  fontSize={"1rem"}
                  fontWeight={"600"}
                >
                  {" "}
                  Test Vessel eAuction 6750 NAR
                </Text>
              </Box>
            </Box>

      

            <Box display="flex" justifyContent={"space-evenly"}>
              <Box m="auto">
                <Text color="gray" fontSize={"0.8rem"}>
                  {" "}
                  Bid Price /MT{" "}
                </Text>
                <Text fontWeight={"600"}> INR 0.00 </Text>
              </Box>

              <Box m="auto">
                <Text color="gray" fontSize={"0.8rem"}>
                  {" "}
                  Floor Price /MT{" "}
                </Text>
                <Text fontWeight={"600"}> INR ***** </Text>
              </Box>

              <Box m="auto">
                <Text color="gray" fontSize={"0.8rem"}>
                  Last Match{" "}
                </Text>
                <Text fontWeight={"600"}> INR 0.00 </Text>
              </Box>
            </Box>
          </Box> */}

          {/* ------------------ complete 2 -----------  */}
{/* 
          <Box p="2">
            <Box display={"flex"} justifyContent={"space-between"}>
              <Box p="5">
                <Text fontSize={".8rem"} color="#591ad6">
                  MV SAMJHON SOLIDARITY{" "}
                </Text>
              </Box>

              <Box
                w="15vw"
                display={"flex"}
                justifyContent={"space-between"}
                gap="5px"
              >
                <Box m="auto">
                  <AiOutlineShareAlt />
                </Box>
                <Box m="auto">
                  <FaDownload color="blue" />
                </Box>

                <Box m="auto">
                  <AiFillStar color="yellow" />
                </Box>
              </Box>
            </Box>

            <Box
              w="60%"
              display={"flex"}
              flexDirection={"row"}
              h="10vh"
              mt="-20px"
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
                <Text fontSize={"0.8rem"}> | 6908 INAR (Kcal/kg) </Text>
              </Box>
            </Box>
            <Box
              w="90%"
              h="10vh"
              mt="-10px"
              display="flex"
              flexDireaction="row"
            >
              <Box display="flex" flexDireaction="row" mt="10px">
                <Text mt="5px">
                  {" "}
                  <MdOutlineMapsHomeWork />{" "}
                </Text>
                <Text mr="2px" fontSize={"1rem"} fontWeight={"600"}>
                  MV SAMJOHN SOLIDARITY
                </Text>
              </Box>
            </Box>

            <Box display="flex" justifyContent={"space-evenly"}>
              <Box m="auto">
                <Text color="gray" fontSize={"0.8rem"}>
                  {" "}
                  Bid Price /MT{" "}
                </Text>
                <Text fontWeight={"600"}> INR 0.00 </Text>
              </Box>

              <Box m="auto">
                <Text color="gray" fontSize={"0.8rem"}>
                  {" "}
                  Floor Price /MT{" "}
                </Text>
                <Text fontWeight={"600"}> INR ***** </Text>
              </Box>

              <Box m="auto">
                <Text color="gray" fontSize={"0.8rem"}>
                  Last Match{" "}
                </Text>
                <Text fontWeight={"600"}> INR 0.00 </Text>
              </Box>
            </Box>
          </Box> */}

          {/* ------------------ complete 3 ---------------- */}
        </Box>

        {/* ------------- Right -------------- */}


        <Rightpage/>
       



        {/* ---------------------- */}
      </Box>
    </>
  );
};

export default MiddlePage;
