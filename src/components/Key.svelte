<script>
  import calculator, { Operation } from '../stores/calculator';
  import { KeyType } from '../utils/keyType';

  export let value;
  export let type = KeyType.Basic;
  export let extraClasses = '';

  let bgColor = 'bg-key-basic';
  let hoverColor = 'hover:bg-key-basic-hover';
  let shColor = 'shadow-key-basic-sh';
  let textColor = 'text-key-basic-text';
  let textSize = 'text-base';

  function onPress() {
    // console.log('Button pressed:', value);

    switch (value) {
      case 'DEL':
        calculator.del();
        break;
      case 'RESET':
        calculator.reset();
        break;
      case '.':
        calculator.addComma();
        break;
      case '+':
        calculator.selectOperation(Operation.Increment);
        break;
      case '-':
        calculator.selectOperation(Operation.Decrement);
        break;
      case 'x':
        calculator.selectOperation(Operation.Multiply);
        break;
      case '/':
        calculator.selectOperation(Operation.Divide);
        break;
      case '=':
        calculator.result();
        break;
      default:
        calculator.addNumber(value);
        break;
    }
  }

  switch (type) {
    case KeyType.Primary:
      bgColor = 'bg-key-primary';
      hoverColor = 'hover:bg-key-primary-hover';
      shColor = 'shadow-key-primary-sh';
      textColor = 'text-key-primary-text';
      textSize = 'text-[1.25rem]';
      break;
    case KeyType.Secondary:
      bgColor = 'bg-key-secondary';
      shColor = 'shadow-key-secondary-sh';
      hoverColor = 'hover:bg-key-secondary-hover';
      textColor = 'text-key-secondary-text';
      textSize = 'text-[1.25rem]';
      break;
    default:
      break;
  }
</script>

<button
  on:click={onPress}
  class={`${bgColor} ${textColor} ${textSize} ${shColor} ${extraClasses}
  p-1 pt-2 min-h-[3.75rem] rounded-md shadow-[0_4px]
  ${hoverColor}
  transition-[background-color] duration-150`}>{value}</button
>
