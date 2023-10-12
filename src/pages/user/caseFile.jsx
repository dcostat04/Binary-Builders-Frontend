import { Box, Flex, Text } from '@chakra-ui/layout';
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
        alignItems="center"
      >
        <Box
          display={'flex'}
          flexDirection={'column'}
          //   border="1px solid red"
          //   alignItems={'center'}
          justifyContent={'center'}
          padding="2em"
          backgroundColor={'white'}
        >
          <Flex margin={'0.5em 0'}>
            <Text fontStyle={'bold'} fontSize={'1.6em'}>
              Acronym:{' '}
            </Text>
            <Text fontSize="1.6em">{'a'}</Text>
          </Flex>
          <Flex margin={'0.5em 0'}>
            <Text fontStyle={'bold'} fontSize={'1.6em'}>
              Full Name:{' '}
            </Text>
            <Text fontSize="1.6em">{'a'}</Text>
          </Flex>
          <Flex margin={'0.5em 0'}>
            <Text fontStyle={'bold'} fontSize={'1.6em'}>
              Email:{' '}
            </Text>
            <Text fontSize="1.6em">{'a'}</Text>
          </Flex>
          <Flex margin={'0.5em 0'}>
            <Text fontStyle={'bold'} fontSize={'1.6em'}>
              Phone:{' '}
            </Text>
            <Text fontSize="1.6em">{'a'}</Text>
          </Flex>
          <Flex margin={'0.5em 0'}>
            <Text fontStyle={'bold'} fontSize={'1.6em'}>
              Date of birth:{' '}
            </Text>
            <Text fontSize="1.6em">{'a'}</Text>
          </Flex>
          <Flex margin={'0.5em 0'}>
            <Text fontStyle={'bold'} fontSize={'1.6em'}>
              Issue:{' '}
            </Text>
            <Text fontSize="1.6em">{'a'}</Text>
          </Flex>
          <Flex margin={'0.5em 0'}>
            <Text fontStyle={'bold'} fontSize={'1.6em'}>
              Description:{' '}
            </Text>
            <Text fontSize="1.6em">{'a'}</Text>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
