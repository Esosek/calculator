<script>
  import { KeyType } from '../utils/keyType';
  import Key from './Key.svelte';
</script>

<div class="bg-keypad p-6 rounded-md grid grid-cols-4 gap-4">
  <Key value="7" />
  <Key value="8" />
  <Key value="9" />
  <Key value="DEL" type={KeyType.Secondary} />
  <Key value="4" />
  <Key value="5" />
  <Key value="6" />
  <Key value="+" />
  <Key value="1" />
  <Key value="2" />
  <Key value="3" />
  <Key value="-" />
  <Key value="." />
  <Key value="0" />
  <Key value="/" />
  <Key value="x" />
  <Key value="RESET" type={KeyType.Secondary} extraClasses="col-span-2" />
  <Key value="=" type={KeyType.Primary} extraClasses="col-span-2" />
</div>
