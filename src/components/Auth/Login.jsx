import {
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
import {login} from '../../redux/actions/user'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
 
  
  const submitHandler = e => {
    e.preventDefault();
    dispatch(login(email, password));
  };



  return (
    <Container height={'95vh'}>
      <VStack height={'full'} justifyContent={'center'} spacing={'16'}>
        <Heading children="Welcome to CourseBundler" />
        <form onSubmit={submitHandler} style={{ width: '100%' }} action="">
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
          <Box>
            <Link to={'/forgetpassword'}>
              <Button fontSize={'sm'} variant={'link'}>
                Forget Password?
              </Button>
            </Link>
          </Box>
          <Button my={'4'} colorScheme="yellow" type="submit">
            Login
          </Button>
          <Box my='4'>
              New User? <Link to='/register'><Button colorScheme='yellow' variant={'link'}>Sign Up</Button> here</Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Login;
