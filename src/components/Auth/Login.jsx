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
import {useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../redux/action/user';
import { useCookies } from 'react-cookie';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
      const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const dispatch = useDispatch();
  const submitHandler = async(e) => {
    e.preventDefault();
    dispatch(login(email, password, setCookie))
  }
  return (
    <Container h={'84.6vh'}>
      <VStack h={'full'} justifyContent="center" spacing={'16'}>
        <Heading children={'Welcome to Coures Web'} />
        <form onSubmit={submitHandler} style={{ width: '100%' }}>
          <Box marginY={4}>
            <FormLabel htmlFor="email" children="Email Addresss" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@mail.com"
              type={'email'}
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box marginY={4}>
            <FormLabel htmlFor="password" children="Password" />
            <Input
              required
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter Your Password" 
              type={'password'}
              focusBorderColor="yellow.500"
            />
          </Box>

          <Box>
            <Link to={'/forgetpassword'}>
              <Button fontSize={'sm'} variant="link">
                Forget Password
              </Button>
            </Link>
          </Box>
          <Button my={'4'} type={'submit'} colorScheme={'yellow'}>
            Login
          </Button>
          <Box my="4">
            New User?{' '}
            <Link to="/register">
              <Button colorScheme={'yellow'} variant={"link"} >
                Sign Up
              </Button>{" "}
               here
            </Link> 
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Login;
