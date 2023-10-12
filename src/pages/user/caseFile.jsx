import {
  Box,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Heading,
  Center,
  VStack,
  Button,
  Progress,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function CaseFile() {
  const [submit, setSubmit] = useState(false);
  const [response, setResponse] = useState({});


  const handleButtonClick = async () => {
    setSubmit(true);
    try {
      const tempResponse = await axios.post("http://127.0.0.1:8000/api/MeetingLink/",
        { "email": "9415kks@gmail.com" }
      );
      console.log(tempResponse);
      setResponse(tempResponse);
    } catch (error) {
      console.log(error);
      setSubmit(false);
    }
  }

  useEffect(() => {
    if (Object.keys(response).length > 0)
      setSubmit(false);
  }, [response])

  return (
    <>
      <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        backgroundImage={'/img/login_banner.jpg'}
        backgroundSize={'cover'}
        backgroundRepeat="no-repeat"
        justifyContent="center"
      >
        {
          submit && Object.keys(response).length === 0 && <Progress size='lg' width="100%"
            isIndeterminate
            position={"absolute"}
            top="0%"
            left="0%"
            height="10px" />
        }
        <VStack
          //   divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          height={'85%'}
        >
          <Heading color={'white'}>Case File</Heading>
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            backgroundColor={'white'}
            width={'75%'}
            rounded={'md'}
          >
            <TableContainer>
              <Center>
                <Heading>Client Entries</Heading>
              </Center>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Detail Issues</Th>
                    <Th>Acronym</Th>
                    <Th>Date</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Kartik Srivastava</Td>
                    <Td>K_GTIS</Td>
                    <Td>12-10-2023</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            padding="2em"
            backgroundColor={'white'}
            width={'75%'}
            rounded={'md'}
          >
            <TableContainer>
              <Center>
                <Heading>Therapist Entries</Heading>
              </Center>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Detail Issues</Th>
                    <Th>Therapist Name</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Kartik Srivastava</Td>
                    <Td>Kartik Srivastava</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
          <Center>
            <Button
              borderRadius={0}
              type="submit"
              variant="solid"
              colorScheme="blue"
              rounded={'md'}
              onClick={handleButtonClick}
            >
              Schedule a Call
            </Button>
          </Center>
        </VStack>
      </Flex>
    </>
  );
}
