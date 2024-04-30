<script>
  import { KeyType } from '../utils/keyType';

  export let value;
  export let type = KeyType.Basic;
  export let onPress = (value) => {};
  export let extraClasses = '';

  let bgColor = 'bg-key-basic';
  let hoverColor = 'hover:bg-key-basic-hover';
  let shColor = 'shadow-key-basic-sh';
  let textColor = 'text-key-basic-text';
  let textSize = 'text-base';

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
  on:click={() => onPress(value)}
  class={`${bgColor} ${textColor} ${textSize} ${shColor} ${extraClasses}
  p-1 pt-2 min-h-[3.75rem] rounded-md shadow-[0_4px]
  ${hoverColor}
  transition-[background-color] duration-150`}>{value}</button
>
