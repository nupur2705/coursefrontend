import { Avatar, Box, Button, Container, HStack, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import introVideo from '../../assets/videos/intro.mp4'
import { RiSecurePaymentFill } from 'react-icons/ri'
import termAndCondition from '../../assets/docs/termsAndCondition'
const Founder = () => (
    <Stack direction={['column',"row"]} spacing={['4','16']} padding={"8"}>
        <VStack>
            <Avatar boxSize={['40','48']} />
            <Text children="Co-Founder" opacity={'0.7'} />
        </VStack>
        <VStack justifyContent={"center"} alignItems={["center",'flex-start']} >
            <Heading children="Nupur Satpathy" size={['md','lg']} />
            <Text textAlign={['center','left']} children={`Hi, I am a full-stack developer.
            Our mission is Create quality product.`} />
        </VStack>
    </Stack>
)

const VideoPlayer = () => (
    <Box>
<video autoPlay muted loop controls disablePictureInPicture disableRemotePlayback controlsList='nodownload nofullscreen noremoteplayback' src={introVideo}>

                </video>
    </Box>
)
const TandC = ({termAndCondition}) => (
    <Box>
        <Heading size={"md"} children="Term & Condition" textAlign={["center",'left']} my="4" />
        <Box h={'sm'} p={"4"} overflowY={"scroll"}>
            <Text letterSpacing={"widest"} fontFamily={"heading"} textAlign={["center",'left']} >{termAndCondition}</Text>
            <Heading my="4" size={"xs"} children="Refund only applicable for cancellation within 7 days." />
        </Box>
    </Box>
)
const About = () => {
  return (
    <Container maxW={"container.lg"} padding={"16"} boxShadow={"lg"}>
        <Heading children="About Us" textAlign={['center',"left"]} />
        <Founder />
        <Stack m="8" direction={["column","row"]} alignItems={"center"} >
            <Text fontFamily={"cursive"} m={"8"} textAlign={['center','left']}>
                We are a video streaming platform with some premium courses available at low price 
            </Text>
<Link to={"/subscribe"} ><Button colorScheme="yellow" variant={"ghost"}>CheckOut Our Courses</Button></Link>
        </Stack>
        <VideoPlayer/>

        <TandC termAndCondition={termAndCondition} />
        <HStack my={"4"} p={"4"}>
            <RiSecurePaymentFill />
            <Heading size={"xs"} fontFamily={"sans-serif"} textTransform={"uppercase"} children="Payment is secured by Razorpay" />
        </HStack>
    </Container>
  )
}

export default About