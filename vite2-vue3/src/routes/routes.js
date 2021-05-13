export default [
  {
    path: '/',
    component: () => import('views/features/index.vue'),
    children: [],
  },
  {
    path: '/features',
    component: () => import('views/features/index.vue'),
    children: [],
  },
]
