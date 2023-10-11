import React, { useState } from 'react';
import {
    Box,
    Input,
    FormControl,
    FormHelperText,
    Select,
    Textarea,
    Button,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Flex,
    FormLabel,
} from '@chakra-ui/react';
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import TimePicker from '../../components/timePicker';


export default function Confirmation() {
    const [description, setDescription] = useState([]);
    const [issue, setIssue] = useState([]);
    const [date, setDate] = useState(new Date());

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };
    const handleIssueChange = (event) => {
        setIssue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(issue);
        console.log("abc");
    }

    return (
        <Box
            border={"1px solid red"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            padding="2em"
            height="100vh"
        >
            <form
                onSubmit={handleSubmit}
            >
                <FormControl
                    border={"1px solid yellow"}
                    display="flex"
                    flexDirection={"column"}
                    alignItems={"center"}
                    width="auto"
                    padding="1em"
                >
                    <Select
                        placeholder='Issue being addressed'
                        border="1px solid black"
                        width={[250, 400, 700]}
                        margin="0.5em auto"
                        onChange={handleIssueChange}
                        required
                    >
                        <option value='Self'>Support after suicide</option>
                        <option value='Family'>Affected by bereavement</option>
                        <option value='Friend'>Need occupational health counselling</option>
                        <option value='Friend'>Emotional support for domestic abuse</option>
                        <option value='Friend'>Child counselling</option>
                    </Select>

                    <Textarea
                        placeholder='Issue Description'
                        border="1px solid black"
                        width={[250, 400, 700]}
                        margin="0.5em auto"
                        onChange={handleDescriptionChange}
                        required
                    />

                    <SingleDatepicker
                        name="date-input"
                        date={date}
                        onDateChange={setDate}
                        placeholder='Issue Description'
                        border="1px solid black"
                        width={[250, 400, 700]}
                        margin="0.5em auto"
                    />

                    <Flex>
                        <FormLabel>Hours:</FormLabel>
                        <TimePicker />
                        <FormLabel>Mins:</FormLabel>
                        <TimePicker />
                        <FormLabel>Seconds:</FormLabel>
                        <TimePicker />
                    </Flex>



                    <Button
                        border="1px solid black"
                        width={[250, 400, 700]}
                        margin="0.5em auto"
                        type="submit"
                    >
                        Submit
                    </Button>

                </FormControl>
            </form>
        </Box>
    )
}
