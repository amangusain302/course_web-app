import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import introVideo from '../../assets/videos/intro.mp4';

const CoursePage = () => {
//   const LectureTitle = 'LectureTitle';
  const [lectureNumber, setlectureNumber] = useState(0);
//   const Description = 'hello this is my first lecture';

  const Lectures = [
    {
      _id: 'ieweworwe849wor',
      title: 'Learn new react js frameworks',
      description:
        ' this is my first lecture on react js new frameworks like share',
      video: {
        url: introVideo,
      },
    },
    {
        _id: 'ieweworwe2323or',
        title: 'Learn new node js frameworks',
        description:
          ' this is my first lecture on node js new frameworks like share',
        video: {
          url: introVideo,
        },
      },
      {
        _id: 'iewewo9943rweruwor',
        title: 'Learn new angular js frameworks',
        description:
          ' this is my first lecture on angular js new frameworks like share',
        video: {
          url: introVideo,
        },
      },
  ];

  return (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
      <Box>
        <video
          w={'100%'}
          // autoPlay
          controls
          src={Lectures[lectureNumber].video.url}
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
        />
        <Heading
          m={4}
          size={'lg'}
          children={`#${
            lectureNumber + 1
          } ${`${Lectures[lectureNumber].title}`}`}
        />
        <Heading m={4} size={'md'} children={`Description`} />
        <Text m={4} children={`${Lectures[lectureNumber].title}`}></Text>
      </Box>
      <VStack>
        {
            Lectures.map((element, index) => (
                <button
                key={element._id}
                style={{
                    width :"100%",
                    padding: "1rem",
                    textAlign : "center",
                    margin : 0,
                    borderBottom: "1px solid rgba(0,0,0,0.2)"
                }}

                onClick={() => setlectureNumber(index)}
                >
                    <Text noOfLines={1}>
                        #{index+1} {element.title}
                    </Text>
                </button>
            ))
        }
      </VStack>
    </Grid>
  );
};

export default CoursePage;
