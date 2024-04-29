<script>
  import { KeyType } from '../utils/keyType';
  import Key from './Key.svelte';

  function onBtnPressed(value) {
    console.log('Button pressed:', value);
  }
</script>

<div class="bg-keypad p-4 rounded-md grid grid-cols-4 gap-4">
  <Key value="7" onPress={onBtnPressed} />
  <Key value="8" onPress={onBtnPressed} />
  <Key value="9" onPress={onBtnPressed} />
  <Key value="DEL" type={KeyType.Secondary} onPress={onBtnPressed} />
  <Key value="4" onPress={onBtnPressed} />
  <Key value="5" onPress={onBtnPressed} />
  <Key value="6" onPress={onBtnPressed} />
  <Key value="+" onPress={onBtnPressed} />
  <Key value="1" onPress={onBtnPressed} />
  <Key value="2" onPress={onBtnPressed} />
  <Key value="3" onPress={onBtnPressed} />
  <Key value="-" onPress={onBtnPressed} />
  <Key value="." onPress={onBtnPressed} />
  <Key value="0" onPress={onBtnPressed} />
  <Key value="/" onPress={onBtnPressed} />
  <Key value="x" onPress={onBtnPressed} />
  <Key
    value="RESET"
    type={KeyType.Secondary}
    onPress={onBtnPressed}
    extraClasses="col-span-2"
  />
  <Key
    value="="
    type={KeyType.Primary}
    onPress={onBtnPressed}
    extraClasses="col-span-2"
  />
</div>
