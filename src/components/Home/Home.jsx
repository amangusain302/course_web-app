import React from 'react';
import "./Home.css"
import { Heading, Stack, VStack, Text, Button, Image, Box, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import svg from "../../assets/images/svg.png"
import {CgGoogle , CgYoutube, CgInstagram} from "react-icons/cg"
import {SiCoursera, SiUdemy} from "react-icons/si"
import {DiAws} from "react-icons/di"
import introVideo from "../../assets/videos/intro.mp4"

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          // bg="#ffab67e8"
          direction={['column', 'row']}
          height="100vh"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['0', '56']}
        >
          <VStack width={'full'} alignItems={["center", "flex-end"]} spacing={'8'}>
            <Heading textAlign={['center', "left"]} children="LEARN FROM THE EXPERTS" size={'2xl'}/>
            <Text fontSize={'2xl'} fontFamily={'cursive'} textAlign={['center', "left"]} children="Find Valueable Content At Reasonable Price"/>
            <Link to="/courses">
              <Button size={'lg'} colorScheme="yellow">Explore Now</Button>
            </Link>
          </VStack>
          <Image className='vector-graphics' boxSize={'md'} src={svg} objectFit="contain"/>
        </Stack>
      </div>

      <Box padding={8} bg={"blackAlpha.800"} className="brand-space">
        <Heading textAlign={"center"} fontFamily={"body"} color={"yellow.400"} children="OUR BRANDS" />
        <HStack className='brandsbanner' justifyContent={'space-evenly'} marginTop={10}>
            <CgGoogle/> 
            <CgYoutube/> 
            <CgInstagram/> 
            <SiCoursera/> 
            <SiUdemy/> 
            <DiAws/> 
        </HStack>
      </Box>

      <div className="container2">
        <video
        autoPlay
        muted
        controls={false}
        loop
        src={introVideo}
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        >

        </video>
      </div>
    </section>
  );
};

export default Home;
