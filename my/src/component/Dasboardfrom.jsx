import {
    Box,
    Button,
    Card,
    FormControl,
    FormLabel,
    Input,
    Select,
    Text,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import {IoMdAdd} from "react-icons/io"

export const Dasboardfrom = () => {



  return (
    <>
    <Box w="90vw" m="auto" h="100vh" mt="10px"  display={"flex"} justifyContent={"space-between"} >

     <Box w="50%">left </Box>


     <Box  w="60%">
     <Card
        w={{ base: "90%", md: "97%", lg: "97%" }}
        m="auto"
        borderRadius="lg"
        h="100%"
        p="3"
        style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
      >
      <Box display={"flex"} justifyContent={"space-around"} gap="5px" mt="10px" >
            <FormControl>
                <FormLabel fontWeight={400} color={"gray"}>
                 Vessel(s)
                </FormLabel>
                <Select

                  border="1px solid black"
                  color={"gray"}
                >
                  
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel fontWeight={400} color={"gray"}>
                  Quantity
                </FormLabel>
                  <Input placeholder="7000      MT" />
              </FormControl>
              <FormControl>
                <FormLabel fontWeight={400} color={"gray"}>
                Offer Price
                </FormLabel>
                  
                  <Input placeholder="11000 INR /MT" />
              </FormControl>

      </Box>

      <Box display={"flex"} justifyContent={"space-around"} gap="5px" mt="10px">
            <FormControl>
                <FormLabel fontWeight={400} color={"gray"}>
                Payment Terms * 
                </FormLabel>
                <Select

                  border="1px solid black"
                  color={"gray"}
                >
                 <option value="Cash & Carry">cash & Carry </option>
                 <option value="Cash & Carry">cash & Carry </option>
                 <option value="Cash & Carry">cash & Carry </option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel fontWeight={400} color={"gray"}>
               Advance *
                </FormLabel>
                  <Input placeholder="30         %" />
              </FormControl>
              <FormControl>
                <FormLabel fontWeight={400} color={"gray"}>
               Balance 
                </FormLabel>
                  
                <Input placeholder="70         %" />
              </FormControl>

      </Box>

      <Box display={"flex"} justifyContent={"space-around"} gap="5px" mt="10px">
            <FormControl>
                <FormLabel fontWeight={400} color={"gray"}>
               No. of  Payment Days * 
                </FormLabel>
                <Select

                  border="1px solid black"
                  color={"gray"}
                >
                 <option value="Today">Today</option>
                 <option value="Today">Today </option>
                 <option value="Today">Today </option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel fontWeight={400} color={"gray"}>
               Lifting Days *
                </FormLabel>
                  <Input placeholder="15" />
              </FormControl>
              <FormControl>
                <FormLabel fontWeight={400} color={"gray"}>
               Balance 
                </FormLabel>
                  
                <Input placeholder="70         %" />
              </FormControl>

      </Box>

   
      <Box display={"flex"} justifyContent={"space-around"} gap="5px" mt="10px">
            

              <FormControl>
                <FormLabel fontWeight={400} color={"gray"}>
              Address *
                </FormLabel>
                  <Input placeholder="Tunna Port ,Kutch Gujarat, 370205 " />
              </FormControl>
            
      </Box>

      <Box display={"flex"} justifyContent={"space-around"} gap="5px" mt="10px">
            <FormControl>
                <FormLabel fontWeight={400} color={"gray"}>
                Make Your Listing Hot ?
                </FormLabel>
                <Box display="flex" w="50px" justifyContent={"space-between"}>
                <Input width="70px"  type="checkbox" />
                  <Text p="2" fontSize={"0.8rem"}> Hot </Text>
                </Box>
                
              </FormControl>

              <FormControl>
                <FormLabel fontWeight={400} color={"gray"}>
                Post Your Listing On ?
                </FormLabel>
                <Box display="flex" flexDirection={"row"} gap="10px" >
                <Box display="flex" w="100px" justifyContent={"space-between"}>
                <Input width="70px"  type="checkbox" />
                  <Text p="2" fontSize={"0.8rem"}> CoalShatra </Text>
                </Box>

                <Box display="flex" w="80px" justifyContent={"space-between"}>
                <Input width="50px"  type="checkbox" />
                  <Text p="2" fontSize={"0.8rem"}> Brand  </Text>
                </Box>
                </Box>
              

              </FormControl>
              

      </Box>

      
      <Box  mt="10px" display="flex" flexDirection={"row"} p="2">
            <Text mt="10px"> <IoMdAdd/> </Text>
            <Text p="2" color="blue"> Add Special Comments  </Text>
     </Box>


     <Box  p="2">
          <Button bg="blue" fontSize={".8rem"} color="#fff"> SUBMIT YOUR PRODUCT </Button> 
     </Box>



      </Card>
     
     
      </Box>  


    </Box>

    
    
    </>
  )
}
