import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Flex,
  Box,
  Input,
  FormControl,
  Select,
  Textarea,
  Button,
  useDisclosure,
  Stack,
  Center,
  Heading,
  Progress,
} from '@chakra-ui/react';

import CustomModal from '../../components/customModal';

export default function Referral() {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);
  const [address, setAddress] = useState([]);
  const [city, setCity] = useState([]);
  const [citizenship_id, setCitizenship_id] = useState([]);
  const [description, setDescription] = useState([]);
  const [relation, setRelation] = useState([]);
  const [issue, setIssue] = useState([]);
  const [response, setResponse] = useState({});
  const [submit, setSubmit] = useState(false);
  const [isError, setIsError] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleNameChange = event => {
    setName(event.target.value);
  };
  const handleEmailChange = event => {
    setEmail(event.target.value);
  };
  const handlePhoneChange = event => {
    setPhone(event.target.value);
  };
  const handleAddressChange = event => {
    setAddress(event.target.value);
  };
  const handleCityChange = event => {
    setCity(event.target.value);
  };
  const handleCitizenshipIDChange = event => {
    setCitizenship_id(event.target.value);
  };
  const handleDescriptionChange = event => {
    setDescription(event.target.value);
  };
  const handleRelationChange = event => {
    setRelation(event.target.value);
  };
  const handleIssueChange = event => {
    setIssue(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    console.log('abc');
    setSubmit(true);
    try {
      const tempResponse = await axios.post(
        'http://127.0.0.1:8000/api/booking/',
        JSON.stringify({
          name,
          email,
          phone,
          address,
          city,
          issue,
          description,
          citizenship_id,
          relation,
        })
      );
      console.log(tempResponse?.data);
      if (tempResponse?.data?.status === "ERROR")
        setIsError(true);
      else
        setResponse(tempResponse?.data);
      setTimeout(() => {
        window.location.reload("/")
      }, 10000)
    } catch (error) {
      //show error page
      setIsError(true)
    }
  };

  useEffect(() => { console.log(response); }, [response]);

  return (<>
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundImage={'/img/login_banner.jpg'}
      backgroundSize={'cover'}
      backgroundRepeat="no-repeat"
      justifyContent="center"
      alignItems="center"
      border="1px solid red"
    >
      {
        submit && Object.keys(response).length === 0 && <Progress size='lg' width="100%"
          isIndeterminate
          position={"absolute"}
          top="0%"
          left="0%"
          height="10px" />
      }


      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        padding="2em"
      >

        {submit && response?.status === "OKAY" && (
          <CustomModal
            type="success"
            message="Your referral has been submitted with reference ID: 123"
            isOpen={isOpen}
            onClose={onClose}
          />
        )}
        {submit && isError && (
          <CustomModal
            type="error"
            message="There was some error submitting your form"
            isOpen={isOpen}
            onClose={onClose}
          />
        )}

        <form onSubmit={handleSubmit}>
          <Stack
            spacing={4}
            p="1rem"
            backgroundColor="white"
            boxShadow="md"
            rounded={'md'}
          >

            <Center>
              <Heading size={'xl'} color="blue.400">
                Give a Referral
              </Heading>
            </Center>
            <FormControl
              display="flex"
              flexDirection={'column'}
              alignItems={'center'}
              width="auto"
              padding="1em"
            >
              <Input
                placeholder={'Full name as per goverment ID'}
                border="1px solid black"
                width={[250, 400, 700]}
                margin="0.5em auto"
                onChange={handleNameChange}
                value={name}
                required={true}
              />
              <Input
                required
                placeholder={'Email'}
                type="email"
                border="1px solid black"
                width={[250, 400, 700]}
                margin="0.5em auto"
                onChange={handleEmailChange}
                value={email}
              />

              <Input
                required
                placeholder={'Phone Number'}
                type="number"
                border="1px solid black"
                width={[250, 400, 700]}
                margin="0.5em auto"
                onChange={handlePhoneChange}
                value={phone}
              />

              <Input
                required
                placeholder={'Address'}
                border="1px solid black"
                width={[250, 400, 700]}
                margin="0.5em auto"
                onChange={handleAddressChange}
                value={address}
              />

              <Input
                required
                placeholder={'City'}
                border="1px solid black"
                width={[250, 400, 700]}
                margin="0.5em auto"
                onChange={handleCityChange}
                value={city}
              />

              <Input
                required
                placeholder={'Citizenship ID'}
                border="1px solid black"
                width={[250, 400, 700]}
                margin="0.5em auto"
                onChange={handleCitizenshipIDChange}
                value={citizenship_id}
              />

              <Select
                placeholder="Relation with beneficiary"
                border="1px solid black"
                width={[250, 400, 700]}
                margin="0.5em auto"
                onChange={handleRelationChange}
                value={relation}
                required
              >
                <option value="Self">Self</option>
                <option value="Family">Family</option>
                <option value="Friend">Friend</option>
              </Select>

              <Select
                placeholder="Issue being addressed"
                border="1px solid black"
                width={[250, 400, 700]}
                margin="0.5em auto"
                onChange={handleIssueChange}
                value={issue}
                required
              >
                <option value="Self">Support after suicide</option>
                <option value="Family">Affected by bereavement</option>
                <option value="Friend">
                  Need occupational health counselling
                </option>
                <option value="Friend">
                  Emotional support for domestic abuse
                </option>
                <option value="Friend">Child counselling</option>
              </Select>

              <Textarea
                placeholder="Issue Description"
                border="1px solid black"
                width={[250, 400, 700]}
                margin="0.5em auto"
                onChange={handleDescriptionChange}
                value={description}
                required
              />

              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="blue"
                width="full"
                rounded={'md'}
                onClick={onOpen}
              >
                Submit
              </Button>
            </FormControl>
          </Stack>
        </form>
      </Box>
    </Flex>
  </>
  );
}
