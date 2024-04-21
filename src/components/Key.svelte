<script>
  import { KeyType } from '../utils/keyType';

  export let value;
  export let size = 1;
  export let type = KeyType.Basic;

  let bgColor = 'key-tertiary';
  let textColor = 'text-dark-text';
  let textSize = 'text-base';

  switch (type) {
    case KeyType.Basic:
      break;
    case KeyType.Primary:
      bgColor = 'key-primary';
      textColor = 'text-light-text';
      textSize = 'text-[1.25rem]';
      break;
    case KeyType.Secondary:
      bgColor = 'key-secondary';
      textColor = 'text-light-text';
      textSize = 'text-[1.25rem]';
      break;
    default:
      break;
  }
</script>

<button
  class={`bg-${bgColor} ${textColor} ${textSize} col-span-${size} p-1 pt-2 rounded-md shadow-[0_5px] shadow-${bgColor}-sh`}
  >{value}</button
>
