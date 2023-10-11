import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Box,
    Input,
    FormControl,
    FormHelperText,
    Select,
    Textarea,
    Button,
    useDisclosure
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
    const [success, setSuccess] = useState(true);
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };
    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };
    const handleCityChange = (event) => {
        setCity(event.target.value);
    };
    const handleCitizenshipIDChange = (event) => {
        setCitizenship_id(event.target.value);
    };
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };
    const handleRelationChange = (event) => {
        setRelation(event.target.value);
    };
    const handleIssueChange = (event) => {
        setIssue(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("abc");
        try {
            const tempResponse = await axios.post('http://127.0.0.1:8000/api/booking/',
                JSON.stringify({
                    name,
                    email,
                    phone,
                    address,
                    city,
                    issue,
                    description,
                    citizenship_id,
                    relation
                })
            );
            console.log(response);
            setResponse(tempResponse);
        } catch (error) {
            //show error page
            setSuccess(false);
        }
    }

    useEffect(() => { }, [response])

    return (
        <Box
            border={"1px solid red"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            padding="2em"
        >
            {
                success && Object.keys(response).length > 0 &&
                <CustomModal
                    type="success"
                    message="Your referral has been submitted with reference ID: 123"
                    isOpen={isOpen}
                    onClose={onClose}
                />}
            {
                !success && <CustomModal
                    type="error"
                    message="There was some error submitting your form"
                    isOpen={isOpen}
                    onClose={onClose}
                />
            }

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
                    <Input

                        placeholder={"Full name as per goverment ID"}
                        border="1px solid black"
                        width={[250, 400, 700]}
                        margin="0.5em auto"
                        onChange={handleNameChange}
                        value={name}
                        required={true}
                    />
                    <Input
                        required
                        placeholder={"Email"}
                        type="email"
                        border="1px solid black"
                        width={[250, 400, 700]}
                        margin="0.5em auto"
                        onChange={handleEmailChange}
                        value={email}
                    />
                    <FormHelperText>We'll never share your email.</FormHelperText>

                    <Input
                        required
                        placeholder={"Phone Number"}
                        type="number"
                        border="1px solid black"
                        width={[250, 400, 700]}
                        margin="0.5em auto"
                        onChange={handlePhoneChange}
                        value={phone}
                    />

                    <Input
                        required
                        placeholder={"Address"}
                        border="1px solid black"
                        width={[250, 400, 700]}
                        margin="0.5em auto"
                        onChange={handleAddressChange}
                        value={address}
                    />

                    <Input
                        required
                        placeholder={"City"}
                        border="1px solid black"
                        width={[250, 400, 700]}
                        margin="0.5em auto"
                        onChange={handleCityChange}
                        value={city}
                    />

                    <Input
                        required
                        placeholder={"Citizenship ID"}
                        border="1px solid black"
                        width={[250, 400, 700]}
                        margin="0.5em auto"
                        onChange={handleCitizenshipIDChange}
                        value={citizenship_id}
                    />

                    <Select
                        placeholder='Relation with beneficiary'
                        border="1px solid black"
                        width={[250, 400, 700]}
                        margin="0.5em auto"
                        onChange={handleRelationChange}
                        value={relation}
                        required
                    >
                        <option value='Self'>Self</option>
                        <option value='Family'>Family</option>
                        <option value='Friend'>Friend</option>
                    </Select>

                    <Select
                        placeholder='Issue being addressed'
                        border="1px solid black"
                        width={[250, 400, 700]}
                        margin="0.5em auto"
                        onChange={handleIssueChange}
                        value={issue}
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
                        value={description}
                        required
                    />

                    <Button
                        border="1px solid black"
                        width={[250, 400, 700]}
                        margin="0.5em auto"
                        type="submit"
                        onClick={onOpen}
                    >
                        Submit
                    </Button>

                </FormControl>
            </form>
        </Box>
    )
}