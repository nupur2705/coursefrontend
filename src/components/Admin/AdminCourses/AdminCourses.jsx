import { Box, Button, Grid, HStack, Heading, Image, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Sidebar from '../Dashboard/Sidebar'
import cursor from "../../../assets/images/cursor.png"
import { RiDeleteBin7Fill } from 'react-icons/ri';
import CourseModal from './CourseModal';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourses, getCourseLectures } from '../../../redux/actions/course';
import Loading from '../../Layout/Loader/Loader'
import { addLecture, deleteCourse, deleteLecture } from '../../../redux/actions/admin';
import toast from 'react-hot-toast';
const AdminCourses = () => {
  const {isOpen,onClose,onOpen} = useDisclosure();
  const dispatch = useDispatch();
  const {lectures,courses} = useSelector(state => state.course);
  const {loading,error,message} = useSelector(state => state.admin);
  const addLectureHandler = async (e, courseId, title, description, video) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('title', title);
    myForm.append('description', description);
    myForm.append('file', video);

    await dispatch(addLecture(courseId, myForm));
    dispatch(getCourseLectures(courseId));
  };

  const [courseId,setCourseId] =useState('');
  const [courseTitle,setCourseTitle] =useState('');


  const courseDetailHandler =  (courseId,title) => {
    dispatch(getCourseLectures(courseId));
    onOpen();
    setCourseId(courseId);
    setCourseTitle(title);
  }
  const deleteButtonHandler = async (userId) => {
    await dispatch(deleteCourse(userId));
    dispatch(getAllCourses());
  }

  const deleteLectureButtonHandler = async (courseId, lectureId) => {
    await dispatch(deleteLecture(courseId, lectureId));
    dispatch(getCourseLectures(courseId));
  };
  useEffect(()=>{
    dispatch(getAllCourses())
    if(message){
      toast.success(message);
      dispatch({type: 'clearMessage'});
    }
    if(error){
      toast.error(error);
      dispatch({type: 'clearError'});
    }
  }
  ,[dispatch,error,message])
  return (
    loading ? (<Loading />): (<Grid css={{
      cursor: `url(${cursor}) ,default`
    }} minH={"100vh"} templateColumns={["1fr", "7fr 1fr"]}>
      <Box p={["0", "16"]} overflowX={"auto"}>
        <Heading textTransform={"uppercase"} children="All Courses" my={'16'} textAlign={["center", "left"]} />
        <TableContainer w={['100vh', "full"]}>
          <Table variant={"simple"} size={"lg"}>
            <TableCaption>All available courses in the database</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric >Views</Th>
                <Th isNumeric >Lectures</Th>
                <Th isNumeric >Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                courses&&courses.map(item => (<Row courseDetailHandler={courseDetailHandler} deleteButtonHandler={deleteButtonHandler} key={item._id} item={item} />))
              }
            </Tbody>
          </Table>
        </TableContainer>
        <CourseModal loading={loading} lectures={lectures} id={courseId} courseTitle={courseTitle} isOpen={isOpen} onClose={onClose} deleteLectureButtonHandler={deleteLectureButtonHandler} addLectureHandler={addLectureHandler}/>
      </Box>
      <Sidebar />
    </Grid>)
  )
};

export default AdminCourses

function Row({ item, courseDetailHandler, deleteButtonHandler }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td><Image src={item.poster.url} /></Td>
      <Td>{item.title}</Td>
      <Td textTransform="uppercase">{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric >{item.views}</Td>
      <Td isNumeric >{item.numOfVideos}</Td>


      <Td isNumeric >
        <HStack justifyContent={"flex-end"}>
          <Button onClick={() => { courseDetailHandler(item._id,item.title) }} variant={"outline"} color={"purple.500"}>View  Lectures</Button>
          <Button onClick={() => { deleteButtonHandler(item._id) }} color={"purple.600"}>
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  )
}