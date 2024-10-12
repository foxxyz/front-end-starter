import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

export default {
    css: {
        preprocessorOptions: {
            sass: {
                api: 'modern-compiler'
            }
        }
    },
    define: {
        __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    },
    plugins: [vue()],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        }
    }
}
