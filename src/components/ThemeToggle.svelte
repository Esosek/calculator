<script>
  import { onMount } from 'svelte';
  import themeStore, { Theme } from '../stores/themeStore';
  import { get } from 'svelte/store';

  let toggleElement;

  onMount(() => {
    toggleElement = document.getElementById('toggle');
  });

  let themeIndex = 0;
  function changeTheme() {
    if (themeIndex >= 2) {
      themeIndex = 0;
    } else themeIndex++;

    themeStore.set(Object.keys(Theme)[themeIndex]);

    toggleElement.style.transform = `translateX(${1.5 * themeIndex}rem)`;
  }
</script>

<div class="text-sm grid grid-cols-[auto_1fr] items-end gap-6">
  <p class="uppercase">theme</p>
  <div class="grid content-center gap-1 min-w-[4.5rem]">
    <ul class="flex justify-around">
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
    <button on:click={changeTheme} class="bg-keypad p-1 rounded-full">
      <div
        id="toggle"
        class="size-4 bg-key-primary rounded-full transition-transform"
      ></div>
    </button>
  </div>
</div>
