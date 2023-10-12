import { Image, Flex, Button, HStack, chakra, Link } from '@chakra-ui/react';
import React from 'react';

export default function Header() {
  return (
    <chakra.header id="header">
      <Flex w="100%" px="6" py="5" align="center" justify="space-between">
        <Image src="/img/logo.png" h="50px" />

        <HStack as="nav" spacing="5">
          <Link href="https://listening-ear.co.uk/donate/">
            <Button variant="nav" color={'cyan.200'}>
              {' '}
              Donate{' '}
            </Button>
          </Link>
          <Link href="https://listening-ear.co.uk/contact/">
            <Button variant="nav" color={'teal.200'}>
              {' '}
              Contact{' '}
            </Button>
          </Link>
          <Link href="/user/referral">
            <Button variant="nav" color={'blue.200'}>
              {' '}
              Refer{' '}
            </Button>
          </Link>
          <Link>
            <Button variant="nav" color={'blue.500'}>
              {' '}
              More{' '}
            </Button>
          </Link>
        </HStack>
      </Flex>
    </chakra.header>
  );
}
