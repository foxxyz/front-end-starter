import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

export default {
    plugins: [vue()],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        }
    }
}
