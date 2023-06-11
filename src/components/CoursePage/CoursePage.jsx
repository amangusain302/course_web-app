import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
// import introVideo from '../../assets/videos/intro.mp4';
import { Navigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCourseLectures } from '../../redux/action/course';
import Loader from '../Layout/Loader/Loader';

const CoursePage = ({user}) => {

//   const LectureTitle = 'LectureTitle';
  const [lectureNumber, setlectureNumber] = useState(0);
//   const Description = 'hello this is my first lecture';

  // const lectures = [
  //   {
  //     _id: 'ieweworwe849wor',
  //     title: 'Learn new react js frameworks',
  //     description:
  //       ' this is my first lecture on react js new frameworks like share',
  //     video: {
  //       url: introVideo,
  //     },
  //   },
  //   {
  //       _id: 'ieweworwe2323or',
  //       title: 'Learn new node js frameworks',
  //       description:
  //         ' this is my first lecture on node js new frameworks like share',
  //       video: {
  //         url: introVideo,
  //       },
  //     },
  //     {
  //       _id: 'iewewo9943rweruwor',
  //       title: 'Learn new angular js frameworks',
  //       description:
  //         ' this is my first lecture on angular js new frameworks like share',
  //       video: {
  //         url: introVideo,
  //       },
  //     },
  // ];


  const dispatch = useDispatch();
  const params = useParams();
  var {loading, lectures, error} = useSelector(state => state.courses );
// setlectureNumber(lectures.length);
  useEffect(() => {
    dispatch(getCourseLectures(params.id));
  }, [dispatch, params.id])


  if(user.role!=='admin' && (user.subscription===undefined || user.subscription.status !== "active"))
  {
    return <Navigate to={"/subscribe"}/>
  }
  // if(!lectures)
  // {
  //   return <Loader/>
  // }
  // if(!lectures.length){
  //   return <Navigate to={"/courses"} state={"There is no leacture present in this course."}/>
  // lectures = [
  //   {
  //     _id: 'ieweworwe849wor',
  //     title: 'Learn new react js frameworks',
  //     description:
  //       ' this is my first lecture on react js new frameworks like share',
  //     video: {
  //       url: introVideo,
  //     },
  //   },
  // ]
  // }
console.log("before the course page return")
  return (
    loading ? <Loader/> :
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
  {    lectures && lectures.length > 0 
        ? <>
         <Box>
        <video
          w={'100%'}
          // autoPlay
          controls
          src={lectures[lectureNumber].video.url}
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
        />
        <Heading
          m={4}
          size={'lg'}
          children={`#${
            lectureNumber + 1
          } ${`${lectures[lectureNumber].title}`}`}
        />
        <Heading m={4} size={'md'} children={`Description`} />
        <Text m={4} children={`${lectures[lectureNumber].title}`}></Text>
      </Box>
      <VStack>
        {
            lectures.map((element, index) => (
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
        </>
        : <Heading children="No Lectures"/>
  }
    </Grid>
  );
};

export default CoursePage;
