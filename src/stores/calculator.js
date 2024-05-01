import { writable } from 'svelte/store';

export const Operation = {
  Increment: 'increment',
  Decrement: 'decrement',
  Multiply: 'multiply',
  Divide: 'divide',
};

const defaultValues = {
  current: 0,
  memory: 0,
  selectedOperation: Operation.Increment,
};

const calculator = writable(defaultValues);

function addNumber(value) {
  calculator.update((currentValue) => {
    return {
      ...currentValue,
      current: parseInt(currentValue.current + value),
    };
  });
}

function del() {
  calculator.update((currentValue) => {
    let stringCurrent = currentValue.current.toString();
    if (stringCurrent.length > 1) {
      stringCurrent = stringCurrent.slice(0, -1);
    } else {
      stringCurrent = '0';
    }
    return {
      ...currentValue,
      current: parseInt(stringCurrent),
    };
  });
}

function reset() {
  calculator.set(defaultValues);
}

function selectOperation(operation) {}

function result() {}

export default {
  subscribe: calculator.subscribe,
  addNumber,
  del,
  reset,
  selectOperation,
  result,
};
