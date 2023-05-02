import React from 'react';
import Sidebar from '../Sidebar';
import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import cursor from '../../../assets/images/cursor.png';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import CourseModel from './CourseModel';

const AdminCourses = () => {
  const courses = [
    {
      _id: 3434,
      poster: {
        url: 'https://picsum.photos/640/360',
      },
      title: 'react Course',
      createdBy: 'aman',
      category: 'web development',
      views: 23,
      numOfVideos: 12,
    },
  ];
  const { isOpen, onClose, onOpen } = useDisclosure();
  const courseDetailHandler = userId => {
    onOpen();
    console.log(userId);
  };
  const deleteButtonHandler = userId => {
    console.log(userId);
  };
  const deleteLeactureButtonHandler = (courseId, leactureId) => {
    console.log(courseId);
    console.log(leactureId);
  };

  const addLectureHandler = (e, courseId, title, description, video) => {
      e.preventDefault( );
  }


  return (
    <Grid
      css={{
        cursor: `url(${cursor}), default`,
      }}
      minH={'100vh'}
      templateColumns={['1fr', '5fr 1fr']}
    >
      <Box p={['0', '8']} overflowX={'auto'}>
        <Heading
          textTransform={'uppercase'}
          children="All Users"
          my="16"
          textAlign={['center', 'left']}
        />
        <TableContainer width={['100vw', 'full']}>
          <Table variant={'simple'} size={'lg'}>
            <TableCaption>All available Course in the database</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {courses.map((element, index) => (
                <Row
                  courseDetailHandler={courseDetailHandler}
                  deleteButtonHandler={deleteButtonHandler}
                  key={element._id}
                  item={element}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <CourseModel
          isOpen={isOpen}
          onClose={onClose}
          id={"84983493cousresid"}
          deleteButtonHandler={deleteLeactureButtonHandler}
          courseTitle={'React Course'}
          addLectureHandler={addLectureHandler}
        />
      </Box>
      <Sidebar />
    </Grid>
  );
};

function Row({ item, courseDetailHandler, deleteButtonHandler }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>
        <Image src={item.poster.url} />
      </Td>
      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            onClick={() => courseDetailHandler(item._id)}
            variant={'outline'}
            color={'purple.500'}
          >
            View Lectures
          </Button>
          <Button
            onClick={() => deleteButtonHandler(item._id)}
            color={'purple.600'}
          >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}
export default AdminCourses;
