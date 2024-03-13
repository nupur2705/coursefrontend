import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buySubscription, loadUser } from '../../redux/actions/user';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Subscribe = () => {
  const dispatch = useDispatch();
  const navigation  = useNavigate();
  const {loading,error,subscriptionId} = useSelector(state => state.subscription)
  const {error:courseError} = useSelector(state => state.course)
  const subscribeHandler = async () => {
      await dispatch(buySubscription());
      dispatch((loadUser()));
      navigation("/profile")
  }

  useEffect(()=>{
    if(error){
      toast.error(error);
      dispatch({type:"clearError"});
    }
    if(courseError){
      toast.error(courseError);
      dispatch({type:"clearError"});
    }
    if(subscriptionId){
      toast.success("Subscribed")
    }
  },[error,subscriptionId,courseError,dispatch])
  return (
    <Container h={"90vh"} p={"16"}>
      <Heading children="Welcome" my={"8"} textAlign={"center"} />
      <VStack boxShadow={"lg"} alignItems={"stretch"} borderRadius={"lg"} spacing={"0"}>
        <Box bgColor={"yellow.400"} p={"4"} css={{ borderRadius: "8px 8px 0 0" }}>
          <Text color={"black"} children="Pro Pack - $200.00" />
        </Box>
        <Box p={"4"}>
          <VStack textAlign={"center"} px={"8"} mt={"4"} spacing={"8"}>
            <Text children="Join pro pack and Get access to all content" />
            <Heading size={"md"} children="$200.00" />
          </VStack>
          <Button isLoading={loading} onClick={subscribeHandler} my={"8"} width={"full"} colorScheme={"yellow"}>Buy Now</Button>
        </Box>
        <Box bg={"blackAlpha.600"} p={"4"} css={{ borderRadius: "0 0 8px 8px" }}>
          <Heading color={"white"} textTransform={"uppercase"} size={"sm"} children="100% refund at cancellation" />
          <Text fontSize={"xs"} color={"white"} children="Term & Conditions Apply" />
        </Box>
      </VStack>
    </Container>
  )
}

export default Subscribe