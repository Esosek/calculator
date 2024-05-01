import { writable } from 'svelte/store';

export const Operation = {
  Increment: 'increment',
  Decrement: 'decrement',
  Multiply: 'multiply',
  Divide: 'divide',
};

function addNumber(value) {
  calculator.update((currentValue) => {
    return {
      ...currentValue,
      current: parseInt(currentValue.current + value),
    };
  });
}

function selectOperation(operation) {}

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

function reset() {}

function result() {}

const calculator = writable({
  current: 0,
  memory: 0,
  selectedOperation: Operation.Increment,
});

export default {
  subscribe: calculator.subscribe,
  addNumber,
  selectOperation,
  del,
  reset,
  result,
};
