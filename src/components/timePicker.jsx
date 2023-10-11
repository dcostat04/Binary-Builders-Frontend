import {
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper
} from "@chakra-ui/react";

export default function TimePicker({ type }) {
    return (<NumberInput
        defaultValue={15}
        max={type === "hour" ? 23 : 60}
        keepWithinRange={false}
        clampValueOnBlur={false}
        placeholder='Issue Description'
        border="1px solid black"
        width={[20, 40, 60]}
        margin="0.5em"
    >
        <NumberInputField />
        <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
        </NumberInputStepper>
    </NumberInput>
    );
}