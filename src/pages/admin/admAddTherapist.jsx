import { useState } from 'react';
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
  FormControl,
  InputRightElement,
  Image,
  Center,
  Select,
} from '@chakra-ui/react';
import {
  FaUserAlt,
  FaLock,
  FaPhone,
  FaMailBulk,
  FaLocationArrow,
} from 'react-icons/fa';

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const CFaPhone = chakra(FaPhone);
const CFaMailBulk = chakra(FaMailBulk);
const CFaLocation = chakra(FaLocationArrow);

export default function Addtherapy() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

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
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Box minW={{ base: '90%', md: '468px' }}>
          <form>
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
                  Add Therapist
                </Heading>
              </Center>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    type="text"
                    placeholder="First and Middle Name"
                    required
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input type="text" placeholder="Last Name" required />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaPhone color="gray.300" />}
                  />
                  <Input type="tel" placeholder="Phone No" required />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaMailBulk color="gray.300" />}
                  />
                  <Input type="email" placeholder="Email Address" required />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaLocation color="gray.300" />}
                  />
                  <Input type="text" placeholder="Location" required />
                </InputGroup>
              </FormControl>
              <FormControl>
                <Select placeholder="Select Therapy Expertise">
                  <option value="option1">Support after suicide</option>
                  <option value="option2">
                    Need occupational health counselling
                  </option>
                  <option value="option3">Affected by bereavement</option>
                  <option value="option4">
                    Emotional support for domestic abuse
                  </option>
                  <option value="option5">Child counselling</option>
                </Select>
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
                    placeholder="Enter Password"
                    required
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
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
                    placeholder="Confirm Password"
                    required
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="blue"
                width="full"
                rounded={'md'}
              >
                Add Therapist
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
