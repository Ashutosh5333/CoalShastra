import {
    Box,    Button,
    Card,    FormControl, 
    FormErrorMessage,
    FormHelperText,
    InputGroup,
    FormLabel,Input,    Select,    Text,    useColorModeValue,    useToast, Checkbox,} from "@chakra-ui/react";
  import React, { useState } from "react";
  import {IoMdAdd} from "react-icons/io"
import { useNavigate } from "react-router-dom";

export const Dasboardfrom = () => {
  const colorScheme = useColorModeValue("blue", "green");
  const [show, setShow] = useState(false);
  const [error, SetError] = useState(false);
  const [isvessal, setisvessal] = useState(false);
  const [isPassword, setisPassword] = useState(false);
  const [isName, setisName] = useState(false);
  const [ismobile, setisMobile] = useState(false);
  const navigate = useNavigate() 
  const toast = useToast();

  const [post, SetPost] = useState({
    vessal: "",
    quantity: "",
    offer: "",
    payment:"",
    advance:"",
    balance:"",
    daypayment:"",
    liftingdays:"",
    balancetwo:"",
    address:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetPost({ ...post, [name]: value });
  };

console.log(post)

  const handleSubmit = () => {
    if (post.quantity !== "" && post.vessal !== "" && post.offer !== ""
    && post.payment !== "" && post.advance !== "" && post.balance !== ""
    && post.daypayment !== "" && post.liftingdays !== "" && post.balancetwo !== ""
     && post.address !==""
    ) {
      toast({
        position: "top",
        colorScheme: "green",
        status: "success",
        title: "Submit Successfully",
        description: `vessal: ${post.vessal},  
        Quantity: ${post.quantity}, 
          Offer: ${post.offer} 
        Payment: ${post.payment},  
        Balance: ${post.balance}, 
          Advance: ${post.advance}
          daypayment: ${post.daypayment},  
        Lifttingdays: ${post.liftingdays}, 
          balancetwo: ${post.balancetwo}
          balancetwo: ${post.address}
          
          `,
        duration: 3000, // Display toast for 3 seconds
      });
    } 
    else{
      toast({
        position: "top",
        colorScheme: "red",
        status: "success",
        title: "Fill all the details",
      });
       
    }
  };



  return (
    <>
    <Box w="90vw" m="auto" h="100vh" mt="10px"  display={"flex"} justifyContent={"space-between"}
    flexDirection={{base:"column",md:"column",lg:"row"}}
     >

     <Box w="50%"> </Box>


     <Box   w={{base:"80%",md:"80%",lg:"65%"}} m={{base:"auto"}}>
     <Card
        w={{ base: "90%", md: "97%", lg: "97%" }}
        m="auto"
        borderRadius="lg"
        h="100%"
        p="3"
        style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
      >
      <Box display={"flex"} justifyContent={"space-around"} gap="5px" mt="10px" >

                <InputGroup>
              <FormControl isInvalid={isvessal}>
                <FormLabel  fontWeight={400}  color={isvessal && "red"}>
                Vessel(s)
                </FormLabel>
                <Input
                  type="text"
                  name="vessal"
                  placeholder="Vessal"
                  onChange={handleChange}
                />
                {!isName ? (
                  <FormHelperText h="10px"></FormHelperText>
                ) : (
                  <FormErrorMessage color="red">
                    Name is required.
                  </FormErrorMessage>
                )}
              </FormControl>
            </InputGroup>
               
              <FormControl>
                <FormLabel fontWeight={400} color={"gray"}>
                  Quantity
                </FormLabel>
                <Input type="number" name="quantity" placeholder="7000     MT"
                   onChange={handleChange}
                 />
                {!isName ? (
                  <FormHelperText h="10px"></FormHelperText>
                ) : (
                  <FormErrorMessage color="red">
                  Quantity is required.
                  </FormErrorMessage>
                )}
  
              </FormControl>

              <FormControl>
                <FormLabel fontWeight={400} color={"gray"}>
                Offer Price
                </FormLabel>
                <Input
                  type="text"
                  name="offer"
                  placeholder="11000 INR /MT"
                  onChange={handleChange}
                />
                {!isName ? (
                  <FormHelperText h="10px"></FormHelperText>
                ) : (
                  <FormErrorMessage color="red">
                    Name is required.
                  </FormErrorMessage>
                )}
                
              </FormControl>

      </Box>

      <Box display={"flex"} justifyContent={"space-around"} gap="5px" mt="10px">
            <FormControl>
                <FormLabel fontWeight={400} color={"gray"}>
                Payment Terms * 
                </FormLabel>
                
                <Select
                  name="payment"
                  border="1px solid black"
                  color={"gray"}
                     onChange={handleChange}
                >
                 <option value="Cash & Carry">cash & Carry </option>
                 <option value="online">online</option>
                 <option value="Cash & Carry">cash & Carry </option>
                </Select>

                {!isName ? (
                  <FormHelperText h="10px"></FormHelperText>
                ) : (
                  <FormErrorMessage color="red">
                    Name is required.
                  </FormErrorMessage>
                )}
                
              </FormControl>

              <FormControl>
                <FormLabel fontWeight={400} color={"gray"}>
               Advance *
                </FormLabel>
                <Input
                  type="text"
                  name="advance"
                  placeholder="30         %" 
                  onChange={handleChange}
                />
                {!isName ? (
                  <FormHelperText h="10px"></FormHelperText>
                ) : (
                  <FormErrorMessage color="red">
                    Name is required.
                  </FormErrorMessage>
                )}
             
              </FormControl>
              <FormControl>
                <FormLabel fontWeight={400} color={"gray"}>
               Balance 
                </FormLabel>
                <Input
                  type="text"
                  name="balance"
                  placeholder="70         %"
                  onChange={handleChange}
                />
                {!isName ? (
                  <FormHelperText h="10px"></FormHelperText>
                ) : (
                  <FormErrorMessage color="red">
                    balance is required.
                  </FormErrorMessage>
                )}
                
              </FormControl>

      </Box>

      <Box display={"flex"} justifyContent={"space-around"} gap="5px" mt="10px">
            <FormControl>
                <FormLabel fontWeight={400} color={"gray"}>
               No. of  Payment Days * 
                </FormLabel>

                <Select
                   name="daypayment"
                  border="1px solid black"
                  color={"gray"}
                  onChange={handleChange}
                >
                 <option value="Today">Today</option>
                 <option value="Tommorow">Tommorow </option>
                </Select>
                {!isName ? (
                  <FormHelperText h="10px"></FormHelperText>
                ) : (
                  <FormErrorMessage color="red">
                    Name is required.
                  </FormErrorMessage>
                )}
              </FormControl>

              <FormControl>
                <FormLabel fontWeight={400} color={"gray"}>
               Lifting Days *
                </FormLabel>
                <Input
                  type="text"
                  name="liftingdays" placeholder="15"
                  onChange={handleChange}
                />
                {!isName ? (
                  <FormHelperText h="10px"></FormHelperText>
                ) : (
                  <FormErrorMessage color="red">
                  liftingdays is required.
                  </FormErrorMessage>
                )}
                 
              </FormControl>

              <FormControl>
                <FormLabel fontWeight={400} color={"gray"}>
               Balance 
                </FormLabel>
                <Input
                  type="text"
                  name="balancetwo" placeholder="70         %"
                  onChange={handleChange}
                />
                {!isName ? (
                  <FormHelperText h="10px"></FormHelperText>
                ) : (
                  <FormErrorMessage color="red">
                  Balance is required.
                  </FormErrorMessage>
                )}
                
                  
              </FormControl>

      </Box>

   
      <Box display={"flex"} justifyContent={"space-around"} gap="5px" mt="10px">
            

              <FormControl>
                <FormLabel fontWeight={400} color={"gray"}>
              Address *
                </FormLabel>
                <Input
                  type="text"
                  name="address"  placeholder="Tunna Port ,Kutch Gujarat, 370205 " 
                  onChange={handleChange}
                />
                {!isName ? (
                  <FormHelperText h="10px"></FormHelperText>
                ) : (
                  <FormErrorMessage color="red">
                  address is required.
                  </FormErrorMessage>
                )}
            
              </FormControl>
            
      </Box>

         <Box display={"flex"} justifyContent={"space-around"} gap="5px" mt="10px">
            <FormControl>
                <FormLabel fontWeight={400} color={"gray"}>
                Make Your Listing Hot ?
                </FormLabel>
                <Box display="flex" w="50px" justifyContent={"space-between"}>
                <Checkbox size='lg' colorScheme='orange' defaultChecked>
                Hot
                </Checkbox>
                 
                </Box>
                
              </FormControl>

              <FormControl>
                <FormLabel fontWeight={400} color={"gray"}>
                Post Your Listing On ?
                </FormLabel>
                <Box display="flex" flexDirection={"row"} gap="10px" >
                <Box display="flex" w="100px" justifyContent={"space-between"}>
         
                <Checkbox size='lg' colorScheme='orange' defaultChecked>
                      Coal
                </Checkbox>
                 
                </Box>

                <Box display="flex" w="80px" justifyContent={"space-between"} ml="10px">
                <Checkbox size='lg' colorScheme='orange' defaultChecked>
                    Brand
                </Checkbox>
                </Box>
                </Box>
              

              </FormControl>
              

      </Box>

      
      <Box  mt="10px" display="flex" flexDirection={"row"} p="2">
            <Text mt="10px"> <IoMdAdd/> </Text>
            <Text p="2" color="blue"> Add Special Comments  </Text>
     </Box>


     <Box  p="2">
          <Button bg="blue" fontSize={".8rem"} color="#fff"  onClick={handleSubmit} > SUBMIT YOUR PRODUCT </Button> 
     </Box>



      </Card>
     
     
      </Box>  


    </Box>

    
    
    </>
  )
}
