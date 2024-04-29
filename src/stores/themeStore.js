import { writable } from 'svelte/store';

export const Theme = { Default: 'default', Light: 'light', Neon: 'neon' };

export default writable(Theme.Default);
