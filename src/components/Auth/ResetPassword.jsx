import { Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { resetPassword } from '../../redux/actions/profile';
import toast from 'react-hot-toast';

const ResetPassword = () => {
    const [password,setPassword] = useState('');
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {loading,message,error} = useSelector(state => state.profile);
    const submitHandler = async (e) => {
      e.preventDefault();
      await dispatch(resetPassword(params.token,password));
    }
    useEffect(()=>{
        if(message){
          toast.success(message)
          dispatch({type:"clearMessage"})
          navigate('/login');
        }
        if(error){
          toast.success(error)
          dispatch({type:"clearError"})
        }
    },[dispatch,error,message,navigate])
    return (
      <Container py={'16'} h={'90vh'}>
          <form onSubmit={submitHandler}>
              <Heading children="Reset Password" my={'16'} textAlign={['center','left']} textTransform={'uppercase'} />
              <VStack spacing={'8'}>
                <FormLabel htmlFor="email" children="Email Address" />
                <Input
                  type="password"
                  focusBorderColor="yellow.500"
                  placeholder="New Password"
                  required
                  id="email"
                  value={password}
                  onChange={e => {
                    setPassword(e.target.value);
                  }}
                />
                <Button isLoading={loading} type="submit" width={'full'} colorScheme='yellow'>Reset Password</Button>
              </VStack>
          </form>
      </Container>
    )
}

export default ResetPassword