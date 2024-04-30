import { writable } from 'svelte/store';

export const Operation = {
  Increment: 'increment',
  Decrement: 'decrement',
  Multiply: 'multiply',
  Divide: 'divide',
};

function addNumber(value) {}

function selectOperation(operation) {}

function del() {}

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
