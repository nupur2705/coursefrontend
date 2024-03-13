import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCourseLectures } from '../../redux/actions/course';
import { Navigate, useParams } from 'react-router-dom';
import Loading from '../Layout/Loader/Loader'
const CoursePage = ({user}) => {
    const [lectureNumber,setLectureNumber] = useState(0);

    const {lectures,loading} = useSelector(state => state.course);
    const dispatch = useDispatch();

    const params = useParams();
    useEffect(() => {
      dispatch(getCourseLectures(params.id));
    }, [dispatch, params.id]);
    if (
        user.role !== 'admin' &&
        (user.subscription === undefined || user.subscription.status !== 'active')
      ) {
        return <Navigate to={'/subscribe'} />;
      }
  return loading ?(<Loading />):(
    <Grid minH={"90vh"} templateColumns={["1fr","3fr 1fr"]}>
        {
            lectures && lectures.length > 0 ?(
                <>
                <Box>
            <video width={"100%"} controls autoPlay disablePictureInPicture disableRemotePlayback controlsList='nodownload noremoteplayback' src={lectures[lectureNumber].video.url}>

                </video>
                <Heading m={"4"} children={`#${lectureNumber+1} ${lectures[lectureNumber].title}`} />
                <Heading m={"4"} children="Description" />
                <Text m="4" children={lectures[lectureNumber].description}>
                    
                </Text>
        </Box>
        <VStack>
            {
                lectures && lectures.map((item,index)=>(
                            <button onClick={()=>{setLectureNumber(index)}} style={{width:"100%", padding:"1rem",textAlign:"center",margin:"0",borderBottom:"1px solid rgba(0,0,0,0.2)"}}  key={item._id}><Text noOfLines={1}>#{index+1} {item.title}</Text></button>
                        ))
            }
        </VStack>
        </>
            ):(
                <Heading children=" No Lecture" />
            )
        }
    </Grid>
  )
}

export default CoursePage