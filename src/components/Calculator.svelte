<script>
  import ThemeToggle from '../components/ThemeToggle.svelte';
  import Keypad from './Keypad.svelte';
  import calculator from '../stores/calculator';
</script>

<body
  class="flex items-start sm:items-center justify-center w-full min-h-lvh bg-main-bg text-base text-text-primary font-bold transition-[background-color] duration-150"
>
  <main class="p-6 space-y-6 max-w-screen-sm w-full">
    <div class="flex justify-between items-center mb-4">
      <h1>calc</h1>
      <ThemeToggle />
    </div>
    <p
      class="text-end bg-calc-screen py-4 px-6 rounded-md transition-[background-color] duration-150"
    >
      {$calculator.current.toLocaleString()}
    </p>
    <Keypad />
  </main>
</body>

<style>
  body {
    font-family: 'League Spartan', 'system-ui', 'sans-serif';
  }
</style>
