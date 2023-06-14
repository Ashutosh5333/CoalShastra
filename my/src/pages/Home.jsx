import React from 'react'
import { Box ,Text} from '@chakra-ui/react'
import Nav from '../component/Nav'
import Dashboard from '../component/Dashboard'
import { Dasboardfrom } from '../component/Dasboardfrom'

const Home = () => {
  return (
    <>
    <Box  h="100vh">
    <Nav/>

    <Dashboard/>
   



    </Box>
    </>
  )
}

export default Home