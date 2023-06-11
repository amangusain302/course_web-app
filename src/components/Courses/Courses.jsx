import {
  Button,
  Container,
  Heading,
  HStack,
  Input,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { getAllCourse } from '../../redux/action/course';
import { toast } from 'react-hot-toast';
import { addToPlaylist } from '../../redux/action/profile';
import { getMyProfile } from '../../redux/action/user';

const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  loading,
  lectureCount,
  index,
  click
}) => {

  console.log(id)
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={imageSrc} boxSize="60" objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        maxW="200px"
        size={'sm'}
        fontFamily={'sans-serif'}
        noOfLines={3}
        children={title}
      />
      <Text noOfLines={2} children={description} />

      <HStack>
        <Text
          fontWeight={'bold'}
          textTransform="uppercase"
          children={'Creator'}
        />
        <Text
          fontFamily={'body'}
          textTransform="uppercase"
          children={creator}
        />
      </HStack>
      <Heading
        textAlign={'center'}
        size="xs"
        children={`Lectures - ${lectureCount}`}
        textTransform="uppercase"
      />
      <Heading
        size="xs"
        children={`Views - ${views}`}
        textTransform="uppercase"
      />
      <Stack direction={['column , row']} alignItems={"center"}>
        <Link to={`/course/${id}`} >
          <Button colorScheme={'yellow'}>Watch Now</Button>
        </Link>
          <Button isLoading={click===index ? loading : false} variant={'ghost'} colorScheme={'yellow'} onClick={() => addToPlaylistHandler(id, index)}>Add to playlist</Button>
      </Stack>
    </VStack>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const [click, setClick] = useState('');
  const dispatch = useDispatch();
  const {state} = useLocation();

const addToPlaylistHandler = async(courseId, clickIndex) => {
  await dispatch(addToPlaylist(courseId));
  dispatch(getMyProfile());
  setClick(clickIndex);
}
  
  const categories = [
    'Web development',
    'Artificial Intellegence',
    'Data Structure & Algorithm ',
    'App Development',
    'Data Science',
    'Game Development',
  ];

  const {loading, courses=[], error, message} = useSelector(state => state.courses)

  useEffect( () => {
    dispatch(getAllCourse(category, keyword));

    if(error){
      toast.error(error);
      dispatch({type : "clearError"});
    }
    if(state){
      toast.error(state);
      dispatch({type : "clearError"});
    }

    if(message){
      toast.success(message);
      dispatch({type : "clearMessage"});
    }

  }, [category, keyword, dispatch, state, error, message])
  return (
    <Container minH={'95vh'} maxW="container.lg" paddingY={'8'}>
      <Heading children="All Courses" m={'8'} />
      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search a course..."
        type={'text'}
        focusBorderColor={'yellow.500'}
      />
      <HStack
        overflowX={'auto'}
        paddingY="8"
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {categories.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minW={'60'}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>
      <Stack
        direction={['Column', 'row']}
        flexWrap="wrap"
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start ']}
      >
       {
        (courses.length > 0) ? 
         courses.map( (item, index) => (
          <Course
          title={item.title}
          description={item.description}
          views={item.views}
          imageSrc={item.poster.url}
          id={item._id}
          creator={item.createdBy}
          lectureCount={item.numOfVideos}
          loading={loading}
          click={click}
          addToPlaylistHandler={addToPlaylistHandler}
          index={index}
        />
        )) : <Heading mt={4} children={"Course Not Found"}/>
       }
      </Stack>
    </Container>
  );
};

export default Courses;
