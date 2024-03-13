import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changePassword } from '../../redux/actions/profile';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { loadUser } from '../../redux/actions/user';

const ChangePassword = () => {
    const [oldPassword,setOldPassword] = useState("");
    const [newPassword,setNewPassword] = useState("");
    const dispatch = useDispatch();
    const navigation = useNavigate();
    const submitHandler = async(e) => {
      e.preventDefault();
      await dispatch(changePassword(oldPassword, newPassword));
      dispatch(loadUser());
      navigation("/profile")
    };
  
    const { loading, message, error } = useSelector(state => state.profile);
console.log(loading)
  useEffect(() => {
    if (error) {
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);
  return (
    <Container py={"16"} minH={"90vh"}>
        <form onSubmit={submitHandler}>
            <Heading children="Change Password" my={"16"} textAlign={["center","left"]} textTransform={"uppercase"}/>
            <VStack spacing={"8"}>
            <Input
              type="password"
              focusBorderColor="yellow.500"
              placeholder="Old Password"
              required
              id="password"
              value={oldPassword}
              onChange={e => {
                setOldPassword(e.target.value);
              }}
            />


            <Input
              type="password"
              focusBorderColor="yellow.500"
              placeholder="New Password"
              required
              id="password"
              value={newPassword}
              onChange={e => {
                setNewPassword(e.target.value);
              }}
            />
            <Button isLoading={loading} w="full" colorScheme='yellow' type="submit">Change Password</Button>
            </VStack>
        </form>

    </Container>
  )
}

export default ChangePassword