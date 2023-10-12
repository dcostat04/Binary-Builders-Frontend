
import { Image, Flex, Button, HStack, chakra, Link } from '@chakra-ui/react';




export default function Header() {

    const handleRefer = () => {
        console.log("sdasd");
    }

    return (
        <chakra.header id="header">
            <Flex
                w="100%"
                px="6"
                py="5"
                align="center"
                justify="space-between"
            >
                <Image src="/img/logo.png" h="50px" />

                <HStack as="nav" spacing="5">

                    <Link>
                        <Button variant="nav" color={'cyan.200'}> Donate </Button>
                    </Link>
                    <Link>
                        <Button variant="nav" color={'teal.200'}> Contact </Button>
                    </Link>
                    <Link to="/user/referral">
                        <Button variant="nav" color={'blue.200'} onClick={handleRefer}> Refer </Button>
                    </Link>
                    <Link>
                        <Button variant="nav" color={'blue.500'}> More </Button>
                    </Link>
                    <Link to="/login">
                        <Button variant="nav" color={'green.500'}> Logout </Button>
                    </Link>

                </HStack>


            </Flex>
        </chakra.header>
    );
}