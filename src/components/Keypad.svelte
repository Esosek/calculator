<script lang="ts">
  import { KeyType } from '../utils/keyType';
  import Key from './Key.svelte';
</script>

<div class="bg-keypad p-4 rounded-md grid grid-cols-4 gap-4">
  <Key value="7" />
  <Key value="8" />
  <Key value="9" />
  <Key value="DEL" type={KeyType.Secondary} />
  <Key value="4" />
  <Key value="5" />
  <Key value="6" />
  <Key value="+" />
</div>
