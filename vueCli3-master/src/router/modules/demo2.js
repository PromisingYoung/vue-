const meta = { auth: false }
const demo2 = {
    path: '/demo2',
    name: 'demo2',
    meta,
    component: () => import('@/page/demo2/index.vue'),
    children: (pre => [
        { path: 'demo1', name: `${pre}1`, component: () => import('@/page/demo2/children/childOne.vue'), meta: { ...meta, title: 'sb' } },
    ])('demo2-')
}
export default demo2