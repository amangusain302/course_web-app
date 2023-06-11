import {
  Avatar,
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { fileUploadCss } from '../Auth/Register';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromPlaylist, updateProfilePicture } from '../../redux/action/profile';
import { cancelSubscription, getMyProfile } from '../../redux/action/user';
import { toast } from 'react-hot-toast';

const Profile = ({user}) => {
  console.log(user, "profile data")
  // const user = {
  //   name: 'Aman',
  //   email: 'amangusain@gmail.com',
  //   createdAt: String(new Date().toISOString()),
  //   role: 'user',
  //   subscription: {
  //     status: 'active',
  //   },
  //   playlist: [
  //     {
  //       course: 'travelling',
  //       poster:
  //         'https://images.freeimages.com/images/large-previews/a61/glowing-bridge-and-town-on-the-sunset-background-1639953.jpg',
  //     },
  //     {
  //       course: 'Mountain Climbing',
  //       poster:
  //         'https://images.freeimages.com/variants/5RSj8u49jqEFqqVrDyntydjd/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d',
  //     },
  //   ],
  // };
  const dispatch = useDispatch();

  const removeFromPlaylistHandler = id => {
    console.log(id);
    dispatch(removeFromPlaylist(id));
    dispatch(getMyProfile());
  };

  var {loading, message , error} = useSelector(state => state.profile);
  const {loading : subLoading, message: subMessage , error : subError} = useSelector(state => state.subscription);
  loading = subLoading;
  message = subMessage;
  error = subError;

  console.log(subMessage , "ggggg")

  const changeImageSubmitHandler = async(e , image) => {
    e.preventDefault();
    const myProfilePicture = new FormData();

    myProfilePicture.append('file', image);

    await dispatch(updateProfilePicture(myProfilePicture));
    dispatch(getMyProfile());
    // console.log(image)
  }

  const cancelSubscriptionHandler = async () => {
    await dispatch(cancelSubscription());
    dispatch(getMyProfile());
  }


  useEffect(() => {
    if(error){
      toast.error(error);
      dispatch({type:"clearError"})
    } 
    if(message){
      toast.success(message);
      dispatch({type:"clearMessage"})
    }
  }, [dispatch,error, message])

  const {isOpen, onClose , onOpen} = useDisclosure()

  return (
    <Container minH={'95vh'} maxW={'container.lg'} py="8">
      <Heading children="Profile" m="8" textTransform={'uppercase'}></Heading>
      <Stack
        justifyContent={'flex-start'}
        direction={['column', 'row']}
        alignItems={'center'}
        spacing={['8', '16']}
        padding={'8'}
      >
        <VStack>
          <Avatar boxSize={'48'} src={user.avatar.url}/>
          <Button colorScheme={'yellow'} variant={'ghost'}  onClick={onOpen}>
            Change Photo
          </Button>
        </VStack>

        <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
          <HStack>
            <Text children="Name" fontWeight={'bold'} />
            <Text children={user.name} />
          </HStack>{' '}
          <HStack>
            <Text children="Email" fontWeight={'bold'} />
            <Text children={user.email} />
          </HStack>
          <HStack>
            <Text children="Created At" fontWeight={'bold'} />
            <Text children={user.CreatedAt.split('T')[0]} />
          </HStack>
          {user.role !== 'admin' && (
            <HStack>
              <Text children="Subscription" fontWeight={'bold'} />
              {user.subscription?.status === 'active' ? (
                <Button color={'yellow.500'} isLoading={loading} onClick={cancelSubscriptionHandler} variant={'unstyled'}>
                  Cancel Subscription
                </Button>
              ) : (
                <Link to="/subscribe">
                  <Button colorScheme={'yellow'}>Subscribe</Button>
                </Link>
              )}
            </HStack>
          )}
          <Stack direction={['column', 'row']} alignItems={'center'}>
            <Link to="/updateprofile">
              <Button>Update Profile </Button>
            </Link>
            <Link to="/changepassword">
              <Button>Change password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>
      <Heading children="Playlist" size={'md'} my="8" />
      {user.playlist.length > 0 && (
        <Stack
          direction={['column', 'row']}
          alignItems={'center'}
          flexWrap={'wrap'}
          p={'4'}
        >
          {user.playlist.map((element, index) => (
            <VStack w="48" m="2" key={index}>
              <Image
                boxSize={'full'}
                objectFit="contain"
                src={element.poster}
              />
              <HStack>
                <Link to={`/course/${element.course}`}>
                  <Button  variant={'ghost'} colorScheme={'yellow'}>
                    Watch Now
                  </Button>
                </Link>
                <Button
                  onClick={() => removeFromPlaylistHandler(element.course)}
                >
                  <RiDeleteBin7Fill />
                </Button>
              </HStack>
            </VStack>
          ))}
        </Stack>
      )}
      <ChangePhotoBox changeImageSubmitHandler={changeImageSubmitHandler} loading={loading} isOpen={isOpen} onClose={onClose}/>
    </Container>
  );
};

export default Profile;
function ChangePhotoBox({isOpen, onClose, changeImageSubmitHandler, loading}) {

    const [image, setImage] = useState("")
    const [imagePrev, setImagePrev] = useState("")
    
    const changeImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setImagePrev(reader.result)
          setImage(file);
        }
      }

      const closeHandler = () => {
        onClose();
        setImage('');
        setImagePrev('');
      }
  return (
    <Modal isOpen={isOpen} onClose={closeHandler}>
      <ModalOverlay backdropFilter={'blur(10px)'} />
      <ModalContent>
        <ModalHeader>
            Change Photo
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container>
            <form onSubmit={(e) => changeImageSubmitHandler(e,image)}>
              <VStack spacing={'8'}>
              {
                imagePrev &&   <Avatar src={imagePrev} boxSize={'48'} />
              }
                <Input
                  type={'file'}
                  css={{ '&::file-selector-button': fileUploadCss}}
                  onChange={changeImage}
                />
                <Button isLoading={loading} w="full" colorScheme='yellow' type='submit'>Change</Button>
              </VStack>
            </form>
          </Container>
        </ModalBody>
        <ModalFooter>
            <Button mr="3" onClick={closeHandler}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
