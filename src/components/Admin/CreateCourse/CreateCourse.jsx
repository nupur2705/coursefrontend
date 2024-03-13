import { Button, Container, Grid, Heading, Image, Input, Select, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Sidebar from '../Dashboard/Sidebar'
import cursor from "../../../assets/images/cursor.png"
import { fileUploadCss } from '../../Auth/Register'
import { useDispatch, useSelector } from 'react-redux'
import { createCourse } from '../../../redux/actions/admin'
import toast from 'react-hot-toast'

const CreateCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [category, setCategory] = useState("");
  const [imagePrev, setImagePrev] = useState("");
  const [image, setImage] = useState("");

  const categories = ["Web development", "Artificial", "Intelliegence", "Data Structure & Algorithm", "App Development", "Data Science", "Game Development"]

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    console.log(file)
    const reader =new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    }
}
const {loading,message,error} = useSelector(state => state.admin);
const dispatch = useDispatch();
const submitHandler = (e) => {
  e.preventDefault();
  const newform = new FormData();
  newform.append("title",title);
  newform.append("description",description);
  newform.append("createdBy",createdBy);
  newform.append("category",category);
  newform.append("file",image);
  dispatch(createCourse(newform));
}
useEffect(()=>{
  if(message){
    toast.success(message);
    dispatch({type: 'clearMessage'});
  }
  if(error){
    toast.success(error);
    dispatch({type: 'clearError'});
  }

},[dispatch,error,message])
  return (
    <Grid css={{
      cursor: `url(${cursor}) ,default`
    }} minH={"100vh"} templateColumns={["1fr", "7fr 1fr"]}>
      <Container py={"16"}>
        <form onSubmit={submitHandler}>
          <Heading textTransform={"uppercase"} children="Create Course" my={'16'} textAlign={["center", "left"]} />
          <VStack m={"auto"} spacing={"8"}>
            <Input
              type="text"
              focusBorderColor="purple.300"
              placeholder="Title"
              value={title}
              onChange={e => {
                setTitle(e.target.value);
              }}
            />
            <Input
              type="text"
              focusBorderColor="purple.300"
              placeholder="Description"
              value={description}
              onChange={e => {
                setDescription(e.target.value);
              }}
            />
            <Input
              type="text"
              focusBorderColor="purple.300"
              placeholder="Creator Name"
              value={createdBy}
              onChange={e => {
                setCreatedBy(e.target.value);
              }}
            />

            <Select
              focusBorderColor='purple.300'
              value={category}
              onChange={(e)=>{setCategory(e.target.value)}}
            >
              <option value="">Catogory</option>
              {
                categories.map((item)=>(<option key={item} value={item}>{item}</option>))
              }
            </Select>
            <Input
                accept='image/*'
                type="file"
                focusBorderColor="yellow.500"
                required
                css={{
                  "&::file-selector-button":{...fileUploadCss,color:"purple"}
                }}
                onChange={changeImageHandler}
              />
              {
                imagePrev && (
                  <Image src={imagePrev} boxSize={"64"} objectFit={"contain"} />
                )
              }
              <Button isLoading={loading}  w={"full"} colorScheme='purple' type='submit'>
                Create
              </Button>


          </VStack>
        </form>
      </Container>
      <Sidebar />
    </Grid>
  )
}

export default CreateCourse