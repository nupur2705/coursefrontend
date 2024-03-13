import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { contactUs } from '../../redux/actions/other';
import toast from 'react-hot-toast';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(contactUs(name,email,message));
    }
    const {loading ,error,message:stateMessage} = useSelector(state => state.other);
    useEffect(()=>{
        if(error){
            toast.error(error);
            dispatch({type:'clearError'});
        }
        if(stateMessage){
            toast.success(stateMessage);
            dispatch({type:'clearMessage'});
        }
    },[dispatch,stateMessage,error])
    return (
        <Container h="92vh" py="16" >
            <VStack h="full" justifyContent={"center"} spacing={"16"}>
                <Heading children="Contact Us" />
                <form onSubmit={submitHandler} style={{ width: '100%' }}>
                    <Box marginY={'4'}>
                        <FormLabel htmlFor="name" children="Name" />
                        <Input
                            type='text'
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
                        <FormLabel htmlFor="message" children="Message" />
                        <Textarea
                            focusBorderColor="yellow.500"
                            placeholder="Comments"
                            required
                            id="massage"
                            value={message}
                            onChange={e => {
                                setMessage(e.target.value);
                            }}
                        />
                    </Box>
                    <Button isLoading={loading} my={'4'} colorScheme="yellow" type="submit">
                        Submit
                    </Button>


                    <Box my='4'>
                        Request for a course? <Link to='/request'><Button colorScheme='yellow' variant={'link'}>Click</Button> here</Link>
                    </Box>
                </form>
            </VStack>

        </Container>
    )
}

export default Contact