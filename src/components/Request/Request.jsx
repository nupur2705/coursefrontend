import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { requestCourse } from '../../redux/actions/other';
import toast from 'react-hot-toast';

const Request = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [coures, setCourse] = useState('');
    const dispatch = useDispatch();
    const {loading,error,message} = useSelector(state => state.other);
    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(requestCourse(name,email,coures));
    }
    useEffect(()=>{
        if(message) {
            toast.success(message)
            dispatch({type:'clearMessage'})
        }
        if(error) {
            toast.error(error);
            dispatch({type:'clearError'})
        }
    },[dispatch,error,message]);
    return (
        <Container h="92vh" py="16" >
            <VStack h="full" justifyContent={"center"} spacing={"16"}>
                <Heading children="Request New Course" />
                <form onSubmit={submitHandler} style={{ width: '100%' }}>
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
                        <FormLabel htmlFor="coures" children="Course" />
                        <Textarea
                            focusBorderColor="yellow.500"
                            placeholder="Explain the course..."
                            required
                            id="coures"
                            value={coures}
                            onChange={e => {
                                setCourse(e.target.value);
                            }}
                        />
                    </Box>
                    <Button isLoading={loading} my={'4'} colorScheme="yellow" type="submit">
                        Submit
                    </Button>


                    <Box my='4'>
                        See available course!<Link to='/courses'><Button colorScheme='yellow' variant={'link'}>Click</Button> here</Link>
                    </Box>
                </form>
            </VStack>

        </Container>
    )
}

export default Request