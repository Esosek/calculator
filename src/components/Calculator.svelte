<script>
  import ThemeToggle from '../components/ThemeToggle.svelte';
  import Keypad from './Keypad.svelte';
</script>

<body
  class="flex items-start sm:items-center justify-center w-full min-h-lvh bg-main-bg text-base text-text-primary font-bold transition-[background-color] duration-150"
>
  <main class="p-8 space-y-6 max-w-screen-sm w-full">
    <div class="flex justify-between items-center mb-4">
      <h1>calc</h1>
      <ThemeToggle />
    </div>
    <p
      class="text-end bg-calc-screen p-4 rounded-md transition-[background-color] duration-150"
    >
      399,981
    </p>
    <Keypad />
  </main>
</body>

<style>
  body {
    font-family: 'League Spartan', 'system-ui', 'sans-serif';
  }
</style>
