import { Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { forgetPassword } from '../../redux/actions/profile';
import toast from 'react-hot-toast';

const ForgetPassword = () => {
    const [email,setEmail] = useState('');
    const dispatch = useDispatch();
    const {loading,message,error} = useSelector(state => state.profile);
    const submitHandler = async (e) => {
      e.preventDefault();
      await dispatch(forgetPassword(email));
    }
    useEffect(()=>{
      try {
        if(message){
          toast.success(message)
          dispatch({type:"clearMessage"})
        }
        if(error){
          toast.success(error)
          dispatch({type:"clearError"})
        }
      } catch (error) {
        
      }
    },[dispatch,error,message])
  return (
    <Container py={'16'} h={'90vh'}>
        <form onSubmit={submitHandler}>
            <Heading children="Forget Password" my={'16'} textAlign={['center','left']} textTransform={'uppercase'} />
            <VStack spacing={'8'}>
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
              <Button isLoading={loading} type="submit" width={'full'} colorScheme='yellow'>Send Reset Link</Button>
            </VStack>
        </form>
    </Container>
  )
}

export default ForgetPassword