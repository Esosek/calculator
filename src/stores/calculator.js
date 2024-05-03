import { writable } from 'svelte/store';

export const Operation = {
  Increment: 'increment',
  Decrement: 'decrement',
  Multiply: 'multiply',
  Divide: 'divide',
};

const defaultValues = {
  current: '',
  memory: 0,
  selectedOperation: Operation.Increment,
};

const calculator = writable(defaultValues);

function addNumber(value) {
  calculator.update((prevValue) => {
    return {
      ...prevValue,
      current:
        prevValue.current == 0 ? value : prevValue.current.toString() + value,
    };
  });
}

function addComma() {
  calculator.update((prevValue) => {
    let currentString = prevValue.current.toString();

    if (!currentString.includes('.')) {
      currentString += '.';
    }

    return {
      ...prevValue,
      current: currentString,
    };
  });
}

function del() {
  calculator.update((prevValue) => {
    let stringCurrent = prevValue.current.toString();
    if (stringCurrent.length > 1) {
      stringCurrent = stringCurrent.slice(0, -1);
    } else {
      stringCurrent = '';
    }
    return {
      ...prevValue,
      current: stringCurrent,
    };
  });
}

function reset() {
  calculator.set(defaultValues);
}

function resolveOperation(firstNumber, secondNumber, operation) {
  let a = isNaN(parseFloat(firstNumber)) ? 0 : parseFloat(firstNumber);
  let b = isNaN(parseFloat(secondNumber)) ? 0 : parseFloat(secondNumber);

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
        current: '',
        selectedOperation: operation,
      };
    } else
      return {
        memory: prevValue.current,
        current: '',
        selectedOperation: operation,
      };
  });
}

function result() {
  calculator.update((prevValue) => {
    const total = resolveOperation(
      prevValue.memory,
      prevValue.current,
      prevValue.selectedOperation
    );
    return {
      ...prevValue,
      memory: 0,
      current: total,
    };
  });
}

export default {
  subscribe: calculator.subscribe,
  addNumber,
  addComma,
  del,
  reset,
  selectOperation,
  result,
};
