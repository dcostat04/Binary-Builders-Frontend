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
  Progress,
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
  const [submit, setSubmit] = useState(false);
  const [isError, setIsError] = useState(false);
  const { isOpen, onClose } = useDisclosure();
  const parse = val => val.replace(/^\$/, '');

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
    setSubmit(true);
    try {
      const tempResponse = await axios.post(
        'http://127.0.0.1:8000/api/Confirmation/',
        JSON.stringify({
          DOB: birthDate.getDate() + "/" + birthDate.getMonth() + "/" + birthDate.getFullYear(),
          issue,
          description,
          date: date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear(),
          time: hour + ':' + min + ':' + sec,
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
      setIsError(true)
    }
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
        height="100vh"
      >
        {submit && response?.status === "OKAY" && (
          <CustomModal
            type="success"
            message="Your confirmation has been submitted"
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
                    onDateChange={setBirthDate}
                    border="1px solid black"
                    width={[250, 300, 400]}
                    margin="1em auto"
                    form
                  />
                </Center>

                <Center width={'95%'}>
                  <Select
                    placeholder="Issue being addressed"
                    border="1px solid black"
                    width={[250, 400, 700]}
                    margin="1em auto"
                    onChange={handleIssueChange}
                    value={issue}
                    required
                    displayFormat="DD/MM/YYYY"
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
                    onDateChange={setDate}
                    border="1px solid black"
                    width={[150, 100, 100]}
                  />
                </Center>

                <Center width={'95%'}>
                  <Flex margin={"1em auto"} alignItems={"center"}>
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
