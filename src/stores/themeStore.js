import { writable } from 'svelte/store';

export const Theme = { Default: 'default', Light: 'light', Neon: 'light' };

export default writable(Theme.Default);
