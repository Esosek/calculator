<script>
  import { onMount } from 'svelte';

  const preferredThemeKey = 'preferred-theme';

  let toggleElement;
  let htmlElement;

  let themeIndex = 0;

  onMount(() => {
    toggleElement = document.getElementById('toggle');
    htmlElement = document.body.parentElement;

    setInitialTheme();
  });

  function setInitialTheme() {
    const preferredTheme = localStorage.getItem(preferredThemeKey);

    if (preferredTheme !== null) {
      themeIndex = parseInt(preferredTheme);
      changeTheme(themeIndex);
    } else {
      if (
        window.matchMedia &&
        !window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        changeTheme(1);
      }
    }
  }

  function changeTheme(targetThemeIndex) {
    themeIndex = targetThemeIndex;
    switch (themeIndex) {
      case 0:
        htmlElement.attributes.getNamedItem('data-theme').value = 'default';
        break;
      case 1:
        htmlElement.attributes.getNamedItem('data-theme').value = 'light';
        break;
      case 2:
        htmlElement.attributes.getNamedItem('data-theme').value = 'neon';
        break;

      default:
        break;
    }

    localStorage.setItem(preferredThemeKey, themeIndex);
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
    <button
      on:click={() => {
        if (themeIndex === 2) {
          changeTheme(0);
        } else changeTheme(themeIndex + 1);
      }}
      class="bg-keypad p-1 rounded-full"
    >
      <div
        id="toggle"
        class="size-4 bg-key-primary rounded-full transition-all hover:bg-key-primary-hover"
      ></div>
    </button>
  </div>
</div>
