import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react';
import {
  TiSocialYoutubeCircular,
  TiSocialInstagramCircular,
} from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';
import React from 'react';

const Footer = () => {
  return (
    <Box padding={'4'} bg="blackAlpha.900" minH={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width="full">
          <Heading children="All Right Reserved" color={'white'} />
          <Heading
            fontFamily={'body'}
            size={'sm'}
            children="@Aman Gusain"
            color={'yellow.400'}
          />
        </VStack>
        <HStack
          spacing={['2', '10']}
          alignItems={'center'}
          justifyContent={'center'}
          color={'white'}
          fontSize="50"
        >
          <a href="https://www.youtube.com/@amangusainvlogs9156"  target={'_blank'}>
            <TiSocialYoutubeCircular />
          </a>
          <a href="https://instagram.com/_guyfromthehills_"  target={'_blank'}>
            <TiSocialInstagramCircular />
          </a>
          <a href="https://github.com/amangusain302" target={'_blank'}>
            <DiGithub />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
