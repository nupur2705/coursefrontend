import { Button, Container, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import {HiXCircle} from 'react-icons/hi'
import { Link } from 'react-router-dom'

const PaymentFail = () => {
  return (
    <Container h={"90vh"}>
      <VStack justifyContent={"center"} h={"full"} spacing={"4"}>
    <HiXCircle size={"5rem"}/>
        <Heading my={"8"} textAlign={"center"}>Payment Fail</Heading>
        <Link to={"/subscribe"}><Button variant={"ghost"}>Try Again</Button></Link>
      </VStack>
    </Container>
  )
}

export default PaymentFail