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

function addComma() {}

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

function resolveOperation(a, b, operation) {
  switch (operation) {
    case Operation.Increment:
      return a + b;
    case Operation.Decrement:
      return a - b;
    case Operation.Multiply:
      return a * b;
    case Operation.Divide:
      if (b == 0) {
        return a;
      } else return a / b;
  }
}

function selectOperation(operation) {
  calculator.update((prevValue) => {
    // Consecutive mathematical operations trigger subtotal
    if (prevValue.memory !== 0) {
      const subTotal = resolveOperation(
        prevValue.memory,
        prevValue.current,
        prevValue.selectedOperation
      );
      return {
        memory: subTotal,
        current: 0,
        selectedOperation: operation,
      };
    } else
      return {
        memory: prevValue.current,
        current: 0,
        selectedOperation: operation,
      };
  });
}

function result() {}

export default {
  subscribe: calculator.subscribe,
  addNumber,
  del,
  reset,
  selectOperation,
  result,
};
