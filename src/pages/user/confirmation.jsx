import React, { useState } from 'react';
import {
  Box,
  FormControl,
  Select,
  Textarea,
  Button,
  Flex,
  FormLabel,
  useDisclosure,
  Stack,
  Center,
} from '@chakra-ui/react';
import { SingleDatepicker } from 'chakra-dayzed-datepicker';
import TimePicker from '../../components/timePicker';
import axios from 'axios';
import CustomModal from '../../components/customModal';

export default function Confirmation() {
  const [description, setDescription] = useState([]);
  const [issue, setIssue] = useState([]);
  const [date, setDate] = useState(new Date());
  const [birthDate, setBirthDate] = useState(new Date());
  const [hour, setHour] = useState(15);
  const [min, setMin] = useState(15);
  const [sec, setSec] = useState(15);
  const [response, setResponse] = useState({});
  const [success, setSuccess] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const parse = val => val.replace(/^\$/, '');

  const handleDateChange = event => {
    setDate(event.target.value);
  };
  const handleBirthDateChange = event => {
    setBirthDate(event.target.value);
  };
  const handleHourChange = valueString => {
    setHour(parse(valueString));
  };
  const handleMinChange = valueString => {
    setMin(parse(valueString));
  };
  const handleSecChange = valueString => {
    setSec(parse(valueString));
  };
  const handleDescriptionChange = event => {
    setDescription(event.target.value);
  };
  const handleIssueChange = event => {
    setIssue(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    console.log(issue);
    console.log('abc');
    console.log(hour);
    try {
      const tempResponse = await axios.post(
        'http://127.0.0.1:8000/api/Confirmation/',
        JSON.stringify({
          dob: birthDate,
          issue,
          description,
          date,
          time: hour + ':' + min + ':' + sec,
        })
      );
      console.log(response);
      setResponse(tempResponse);
    } catch (error) { }
  };

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
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        padding="2em"
        height="100vh"
      >
        {success && Object.keys(response).length > 0 && (
          <CustomModal
            type="success"
            message="You will be contacted soon"
            isOpen={isOpen}
            onClose={onClose}
          />
        )}
        {!success && (
          <CustomModal
            type="error"
            message="There was some error submitting your form"
            isOpen={isOpen}
            onClose={onClose}
          />
        )}
        <Box minW={{ base: '90%', md: '468px' }}>
          <form onSubmit={handleSubmit}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="white"
              boxShadow="md"
              rounded={'md'}
            >
              <FormControl
                display="flex"
                flexDirection={'column'}
                // alignItems={"center"}
                width="auto"
                padding="1em"
              >
                <Center width={'95%'} alignContent={''}>
                  <FormLabel width="20%">Date of birth:</FormLabel>
                  <SingleDatepicker
                    name="date-input"
                    date={birthDate}
                    onDateChange={handleBirthDateChange}
                    border="1px solid black"
                    width={[250, 300, 400]}
                    margin="1em auto"
                  />
                </Center>

                <Center width={'95%'}>
                  <Select
                    placeholder="Issue being addressed"
                    border="1px solid black"
                    width={[250, 400, 700]}
                    margin="1em auto"
                    onChange={handleIssueChange}
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
                </Center>

                <Center width={'95%'}>
                  <Textarea
                    placeholder="Issue Description"
                    border="1px solid black"
                    width={[250, 400, 700]}
                    margin="1em auto"
                    onChange={handleDescriptionChange}
                    value={description}
                    required
                  />
                </Center>

                <Center width={'95%'}>
                  <FormLabel width={'40%'}>Schedule Appointment:</FormLabel>
                  <SingleDatepicker
                    name="date-input"
                    date={date}
                    onDateChange={handleDateChange}
                    border="1px solid black"
                    width={[150, 100, 100]}
                  />
                </Center>

                <Center width={'95%'}>
                  <Flex>
                    <FormLabel>Hours:</FormLabel>
                    <TimePicker
                      type="hour"
                      value={hour}
                      setValue={handleHourChange}
                    />
                    <FormLabel>Mins:</FormLabel>
                    <TimePicker
                      type="min"
                      value={min}
                      setValue={handleMinChange}
                    />
                    <FormLabel>Seconds:</FormLabel>
                    <TimePicker
                      type="sec"
                      value={sec}
                      setValue={handleSecChange}
                    />
                  </Flex>
                </Center>

                <Button
                  border="1px solid black"
                  width={[150, 300, 600]}
                  margin="1em auto"
                  type="submit"
                >
                  Submit
                </Button>
              </FormControl>
            </Stack>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}
