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
      defaultValue={0}
      max={type === 'hour' ? 23 : 60}
      keepWithinRange={true}
      clampValueOnBlur={false}
      width={[59.5]}
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
