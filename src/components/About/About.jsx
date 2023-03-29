import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import introVideo from '../../assets/videos/intro.mp4';
import termAndCondition from '../../assets/docs/termandcondition'

const Founder = () => {
  return (
    <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
      <VStack>
        <Avatar
          src="https://avatars.githubusercontent.com/u/73630808?v=4"
          boxSize={[40, 48]}
        />
        <Text children="Founder" opacity={0.7} />
      </VStack>

      <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
        <Heading children="Aman Gusain" size={['md', 'xl']} />
        <Text
          textAlign={['center', 'left']}
          children={`Hi, I am a Full-Stack developer. 
                Our Mission is to provide Quality Content thourgh this App`}
        />
      </VStack>
    </Stack>
  );
};

const VideoPlayer = () => (
  <Box>
    <video
      autoPlay
      muted
      controls={false}
      loop
      src={introVideo}
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
    />
  </Box>
);

const TandC = ({ termsAndCondition }) => (
  <Box>
    <Heading
      size={'md'}
      children="Term & Condition"
      textAlign={['center', 'left']}
      my={4}
    />
    <Box height={'sm'} p={4} overflow='scroll'>
      <Text
        fontFamily={'heading'}
        letterSpacing={'widest'}
        textAlign={['center', 'left']}
      >
     {termsAndCondition}
      </Text>
      <Heading my='4' size={'xs'} children='Refund Only Applicable for cancellation within 7 days' />
    </Box>
  </Box>
);

const About = () => {
  return (
    <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>
      <Heading children="About us" textAlign={['center', 'left']} />
      <Founder />
      <Stack m={8} direction={['column', 'row']} alignItems="center">
        <Text fontFamily={'cursive'} m="8" textAlign={['center', 'left']}>
          We are a video streaming platform with some premium courses available
          only for premium users.
        </Text>

        <Link to="/subscribe">
          <Button variant={'ghost'} colorScheme="yellow">
            Checkout Our Plan
          </Button>
        </Link>
      </Stack>
      <VideoPlayer />
      <TandC termsAndCondition={termAndCondition} />
      <HStack marginY={4} p={4}>
        <RiSecurePaymentFill />
        <Heading
          size={'xs'}
          fontFamily="sans-serif"
          textTransform={'uppercase'}
          children={'Payment is secured by Razorpay'}
        />
      </HStack>
    </Container>
  );
};

export default About;
