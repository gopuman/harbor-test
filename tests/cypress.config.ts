import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        baseUrl: 'https://harbor-test.uclusters.app.uffizzi.com/',
    },
});