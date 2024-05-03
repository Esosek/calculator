<script>
  import ThemeToggle from '../components/ThemeToggle.svelte';
  import Keypad from './Keypad.svelte';
  import calculator from '../stores/calculator';

  const OperationSign = {
    increment: '+',
    decrement: '-',
    multiply: '*',
    divide: '/',
  };
</script>

<body
  class="flex items-start sm:items-center justify-center w-full min-h-lvh bg-main-bg text-base text-text-primary font-bold transition-[background-color] duration-150"
>
  <main class="p-6 space-y-6 max-w-screen-sm w-full">
    <div class="flex justify-between items-center mb-4">
      <h1>calc</h1>
      <ThemeToggle />
    </div>
    <div
      class="flex justify-between bg-calc-screen min-h-[5rem] py-4 px-6 rounded-md transition-[background-color] duration-150"
    >
      <p class="text-sm">
        {$calculator.memory !== 0
          ? `${$calculator.memory.toLocaleString()} ${OperationSign[$calculator.selectedOperation]}`
          : ''}
      </p>
      <p>
        {$calculator.current.toLocaleString()}
      </p>
    </div>
    <Keypad />
  </main>
</body>

<style>
  body {
    font-family: 'League Spartan', 'system-ui', 'sans-serif';
  }
</style>
