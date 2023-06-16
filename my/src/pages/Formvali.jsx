import React, { useState } from "react";

import {
  Button,
  Box,
  Card,
  CardBody,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import {Link, useNavigate} from "react-router-dom";


const Formvali = () => {
  const colorScheme = useColorModeValue("blue", "green");
  const [show, setShow] = useState(false);
  const [error, SetError] = useState(false);
  const [isEmail, setisEmail] = useState(false);
  const [isPassword, setisPassword] = useState(false);
  const [isName, setisName] = useState(false);
  const [ismobile, setisMobile] = useState(false);
  const navigate = useNavigate() 
  const toast = useToast();

  const [post, SetPost] = useState({
    name: "",
    email: "",
    password: "",
    mobile:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetPost({ ...post, [name]: value });
  };

  const handleSubmit = () => {
    if (post.email !== "" && post.name !== "" && post.password !== "") {
      toast({
        position: "top",
        colorScheme: "green",
        status: "success",
        title: "Logged Successfully",
        description: `Name: ${post.name},  
        Email: ${post.email}, 
          Mobile: ${post.mobile}`,
        duration: 3000, // Display toast for 3 seconds
      });
      navigate("/dash")
    } else {
      if (post.email === "") {
        setisEmail(true);
      }
      if (post.password === "") {
        setisPassword(true);
      }
      if (post.name === "") {
        setisName(true);
      }
      if (post.mobile === "") {
        setisMobile(true);
      }
    }
  };

  const handleClickShow = () => {
    setShow(!show);
  };

  return (
    <>
    <Box bg="blue" color="#fff" w="100%" h="10vh" display="flex" justifyContent={"space-around"}>
      
        <Link to="/" >
         <Box mt="10px"> Home Page   </Box>
        </Link>
    <Link to="/dash">
         <Box mt="10px"> Dashboard  </Box>
    </Link>

    </Box>

       
       <Box   w="100%" m="auto" mt="5px" >
      <Card  p="5" >
        <CardBody>
          <VStack maxW="xl" spacing={5} m="auto"  boxShadow={"lg"} p="5">
          
            <InputGroup>
              <FormControl mt="10px" isInvalid={isName}>
                <FormLabel fontWeight={"bold.100"} color={isName && "red"}>
                  Name
                </FormLabel>

                <Input
                  h="50px"
                  type="name"
                  name="name"
                  placeholder="Name"
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


            <InputGroup>
              <FormControl mt="10px" isInvalid={ismobile}>
                <FormLabel fontWeight={"bold.100"} color={ismobile && "red"}>
                 Mobile no
                </FormLabel>

                <Input
                  h="50px"
                  type="number"
                  name="mobile"
                  placeholder="Mobile No"
                  onChange={handleChange}
                />
                {!ismobile ? (
                  <FormHelperText h="10px"></FormHelperText>
                ) : (
                  <FormErrorMessage color="red">
                    Mobile is required.
                  </FormErrorMessage>
                )}
              </FormControl>
            </InputGroup>


            <InputGroup position="relative">
              <FormControl mt="10px" isInvalid={isEmail}>
                <FormLabel fontWeight={"bold.100"} color={isEmail && "red"}>
                  Email
                </FormLabel>

                <Input
                  h="50px"
                  placeholder="Email*"
                  type="email"
                  name="email"
                  onChange={handleChange}
                />
                {!isEmail ? (
                  <FormHelperText h="10px"></FormHelperText>
                ) : (
                  <FormErrorMessage color="red">
                    Email is required.
                  </FormErrorMessage>
                )}
              </FormControl>
            </InputGroup>

            <InputGroup position="relative">
              <FormControl mt="12px" isInvalid={isPassword}>
                <FormLabel fontWeight={"bold.100"} color={isPassword && "red"}>
                  Password
                </FormLabel>
                <InputGroup size="md">
                  <Input
                  placeholder="Password*"
                    h="50px"
                    type={show ? "text" : "password"}
                    name="password"
                    onChange={handleChange}
                  />
                  <InputRightElement>
                 
                  </InputRightElement>
                </InputGroup>
                <Box
                  display="flex"
                  justifyContent={"space-between"}
                  alignItems="center"
                >
                  {!isPassword ? (
                    <FormHelperText h="10px"></FormHelperText>
                  ) : (
                    <FormErrorMessage color="red">
                      Password is required.
                    </FormErrorMessage>
                  )}
                  {/* <Box color="#035fb2" fontSize={"13px"}>
                    Forgot password?
                  </Box> */}
                </Box>
              </FormControl>{" "}
            </InputGroup>
            <Button
              onClick={handleSubmit}
              width="100%"
              colorScheme={colorScheme}
              size="lg"
            >
                Submit
            </Button>
          </VStack>
        </CardBody>
      </Card>

      </Box>
    </>
  );
};

export default Formvali;

