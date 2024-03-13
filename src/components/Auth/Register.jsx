import {
    Avatar,
    Box,
    Button,
    Container,
    FormLabel,
    Heading,
    Input,
    VStack,
  } from '@chakra-ui/react';
  import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
  import { Link } from 'react-router-dom';
import { register } from '../../redux/actions/user';
  export const fileUploadCss = {
    cursor:"pointer",
    marginLeft:"-5%",
    width:"110%",
    border:"none",
    height:"100%",
    color:"#ECC94B",
    backgroundColor:"white",

}
  const fileUploadStyle = {
    "&::file-selector-button":fileUploadCss
  }


  const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [imagePrev,setImagePrev] = useState('')
    const [image,setImage] = useState('')
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
    const dispatch = useDispatch();
    const handlerRegister = (e) => {
      e.preventDefault();
      const myform = new FormData();
      myform.append("name",name);
      myform.append("email",email);
      myform.append("password",password);
      myform.append("file",image);
      dispatch(register(myform));
    }


    return (
      <Container height={'95vh'}>
        <VStack height={'full'} justifyContent={'center'} spacing={'16'}>
          <Heading textTransform={'uppercase'} children="Register Here" />
          <form onSubmit={handlerRegister} style={{ width: '100%' }} action="">
            <Box my={'4'} display={"flex"} justifyContent={'center'}>
                <Avatar src={imagePrev} size={'2xl'} />
            </Box>
            <Box marginY={'4'}>
              <FormLabel htmlFor="name" children="Name" />
              <Input
                type="text"
                focusBorderColor="yellow.500"
                placeholder="Enter Your Name"
                required
                id="name"
                value={name}
                onChange={e => {
                  setName(e.target.value);
                }}
              />
            </Box>
            <Box marginY={'4'}>
              <FormLabel htmlFor="email" children="Email Address" />
              <Input
                type="email"
                focusBorderColor="yellow.500"
                placeholder="abc@gmail.com"
                required
                id="email"
                value={email}
                onChange={e => {
                  setEmail(e.target.value);
                }}
              />
            </Box>
            <Box marginY={'4'}>
              <FormLabel htmlFor="password" children="Password" />
              <Input
                type="password"
                focusBorderColor="yellow.500"
                placeholder="Enter Your Password"
                required
                id="password"
                value={password}
                onChange={e => {
                  setPassword(e.target.value);
                }}
              />
            </Box>
            <Box marginY={'4'}>
              <FormLabel htmlFor="chooseAvatar" children="Choose Avatar" />
              <Input
              accept='image/*'
                type="file"
                focusBorderColor="yellow.500"
                required
                id="chooseAvatar"
                css={fileUploadStyle}
                onChange={changeImageHandler}
              />
            </Box>

            <Button my={'4'} colorScheme="yellow" type="submit">
              Sign Up
            </Button>
            <Box my='4'>
                Already Sign Up? <Link to='/login'><Button colorScheme='yellow' variant={'link'}>Login</Button> here</Link>
            </Box>
          </form>
        </VStack>
      </Container>
    );
  };
  export default Register