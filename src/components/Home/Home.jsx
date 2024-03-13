import { Box, Button, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import vg from '../../assets/images/bg.png'
import { CgGoogle, CgYoutube, } from 'react-icons/cg'
import { SiCoursera, SiUdemy } from 'react-icons/si'
import { DiAws } from 'react-icons/di'
import introVideo from '../../assets/videos/intro.mp4'
const Home = () => {
    return (
        <section className="home">
            <div className="container">
                <Stack
                    direction={['column', 'row']}
                    height="100%"
                    justifyContent={['center', 'space-between']}
                    alignItems="center"
                    spacing={['16', '56']}
                >
                    <VStack width={'full'} alignItems={['center', 'flex-start']} spacing={'8'}>
                        <Heading textAlign={['center','left']} children="LEARN FROM THE EXPERTS" size={'2xl'} />
                        <Text fontSize={'2xl'} fontFamily={'cursive'} children="Find Valueable Content At Reasonable Price" />
                        <Link to="/courses">
                            <Button size={'lg'} colorScheme="yellow">
                                Explore Now
                            </Button>
                        </Link>
                    </VStack>

                    <Image className='vector-graphics' boxSize={"md"} src={vg} objectFit={'contain'} />


                </Stack>
            </div>

            <Box padding={'8'} bg={'blackAlpha.800'}>
                <Heading textAlign={'center'} color={'yellow.400'} fontFamily={'body'} children="OUR BRANDS" />
                <HStack className='brandBanner' justifyContent={'space-evenly'} margin={"4"}>
                    <CgGoogle />
                    <CgYoutube />
                    <SiCoursera />
                    <SiUdemy />
                    <DiAws />
                </HStack>
            </Box>

            <div className="container2">

                <video controls disablePictureInPicture disableRemotePlayback controlsList='nodownload nofullscreen noremoteplayback' src={introVideo}>

                </video>


            </div>

        </section>
    );
};

export default Home;
