import { resolve } from 'path'

import { defineConfig } from '@umijs/max'

const variablesPath = resolve(__dirname, 'src/styles/variables.less').replace(
  /\\/g,
  '/'
)

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'demo'
  },
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      name: '首页',
      path: '/home',
      component: './Home'
    }
  ],
  npmClient: 'pnpm',
  tailwindcss: {},
  lessLoader: {
    modifyVars: {
      hack: `true; @import "${variablesPath}";`
    }
  }
})
