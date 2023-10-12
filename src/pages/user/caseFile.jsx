import {
  Box,
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
  Center,
  VStack,
  StackDivider,
  Button,
} from '@chakra-ui/react';
import React from 'react';

export default function CaseFile() {
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
            >
              Schedule a Call
            </Button>
          </Center>
        </VStack>
      </Flex>
    </>
  );
}
