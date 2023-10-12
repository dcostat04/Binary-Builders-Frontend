import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react';

export default function TimePicker({ type, value, setValue }) {
  return (
    <NumberInput
      defaultValue={15}
      max={type === 'hour' ? 23 : 60}
      min={type === "hour" ? 1 : 0}
      keepWithinRange={true}
      clampValueOnBlur={false}
      width={[20, 40, 40]}
      margin="0.5em"
      value={value}
      onChange={setValue}
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
}
