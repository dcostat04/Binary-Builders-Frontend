import { useEffect, useState } from 'react';
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  FormControl,
  InputRightElement,
  Image,
  Center,
  Progress,
} from '@chakra-ui/react';
import { FaMailBulk, FaLock } from 'react-icons/fa';
import axios from 'axios';

const CFaMailBulk = chakra(FaMailBulk);
const CFaLock = chakra(FaLock);

export default function Login({ setUser }) {
  const [showPassword, setShowPassword] = useState(false);
  const [response, setResponse] = useState({});
  const [submit, setSubmit] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setSubmit(true);
    try {
      console.log(formData);
      const tempResponse = await axios.post(
        'http://127.0.0.1:8000/api/login/',
        JSON.stringify(formData)
      );
      console.log('Login successful!', tempResponse?.data);
      setUser(true);
      setResponse(tempResponse);
      // window.location.replace('/');
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  useEffect(() => {
    if (Object.keys(response).length > 0)
      setSubmit(false);
  }, [response])

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundImage={'/img/login_banner.jpg'}
      backgroundSize={'cover'}
      backgroundRepeat="no-repeat"
      justifyContent="center"
      alignItems="center"
    >
      {
        submit && Object.keys(response).length === 0 && <Progress size='lg' width="100%"
          isIndeterminate
          position={"absolute"}
          top="0%"
          left="0%"
          height="10px" />
      }
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Box minW={{ base: '90%', md: '468px' }}>
          <form onSubmit={handleSubmit}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="white"
              boxShadow="md"
              rounded={'md'}
            >
              <Center>
                <Image
                  maxW="sm"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  objectFit={'cover'}
                  src="/img/logo.png"
                />
              </Center>
              <Center>
                <Heading size={'xl'} color="blue.400">
                  User Login
                </Heading>
              </Center>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaMailBulk color="gray.300" />}
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {/* <FormHelperText textAlign="right">
                  <Link href="#">Forgot Password?</Link>
                </FormHelperText> */}
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="blue"
                width="full"
                rounded={'md'}
              >
                Login
              </Button>
              <Center>
                <Box>
                  New Registration?{' '}
                  <Link color="blue.500" href="/user/signup">
                    Sign up
                  </Link>
                </Box>
              </Center>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
