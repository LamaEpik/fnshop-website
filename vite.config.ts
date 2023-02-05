import { UserConfig, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

interface CustomConfig extends UserConfig {
  serve: {
    hot: boolean
  }
}

const config: CustomConfig = {
  plugins: [vue()],
  serve: {
    hot: true
  }
}

export default defineConfig(config)
