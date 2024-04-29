<script>
  import { KeyType } from '../utils/keyType';

  export let value;
  export let type = KeyType.Basic;
  export let onPress = (value) => {};
  export let extraClasses = '';

  let bgColor = 'bg-key-tertiary';
  let shColor = 'shadow-key-tertiary-sh';
  let textColor = 'text-text-secondary';
  let textSize = 'text-base';

  switch (type) {
    case KeyType.Basic:
      break;
    case KeyType.Primary:
      bgColor = 'bg-key-primary';
      shColor = 'shadow-key-primary-sh';
      textColor = 'text-text-primary';
      textSize = 'text-[1.25rem]';
      break;
    case KeyType.Secondary:
      bgColor = 'bg-key-secondary';
      shColor = 'shadow-key-secondary-sh';
      textColor = 'text-text-primary';
      textSize = 'text-[1.25rem]';
      break;
    default:
      break;
  }
</script>

<button
  on:click={() => onPress(value)}
  class={`${bgColor} ${textColor} ${textSize} p-1 pt-2 min-h-[3.75rem] min-w-[3.75rem] rounded-md shadow-[0_4px] ${shColor} ${extraClasses}`}
  >{value}</button
>
