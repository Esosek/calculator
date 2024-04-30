<script>
  import { onMount } from 'svelte';

  let toggleElement;
  let htmlElement;

  onMount(() => {
    toggleElement = document.getElementById('toggle');
    htmlElement = document.body.parentElement;
  });

  let themeIndex = 0;
  function changeTheme() {
    switch (themeIndex) {
      case 0:
        htmlElement.attributes.getNamedItem('data-theme').value = 'light';
        themeIndex++;
        break;
      case 1:
        htmlElement.attributes.getNamedItem('data-theme').value = 'neon';
        themeIndex++;
        break;
      case 2:
        htmlElement.attributes.getNamedItem('data-theme').value = 'default';
        themeIndex = 0;
        break;

      default:
        break;
    }

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
        class="size-4 bg-key-primary rounded-full transition-all"
      ></div>
    </button>
  </div>
</div>
