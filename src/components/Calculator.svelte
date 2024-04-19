<script>
  import ThemeToggle from '../components/ThemeToggle.svelte';
  import Keypad from './Keypad.svelte';
</script>

<body class="bg-main-bg text-base text-light-text font-bold">
  <main class="p-8 space-y-8">
    <div class="flex justify-between items-center">
      <h1>calc</h1>
      <ThemeToggle />
    </div>
    <p class="text-end bg-calc-screen p-4 rounded-md">399,981</p>
    <Keypad />
  </main>
</body>
