import demo1 from "@/page/demo1/index.vue";
import demo2 from "./modules/demo2";
import demo3 from "@/page/demo3/demo3.vue";
import example from "@/page/demo3/example/example.vue";
import example1 from "@/page/demo3/example/example1.vue";
console.log();
let router = [
  {
    path: "/",
    name: "demo1",
    component: demo1
  },
  demo2,
  {
    path: "/demo3",
    name: "demo3",
    component: () => import("@/page/demo3/demo3.vue"),
    children: [
      {
        path: "/example",
        name: "example",
        component: () => import("@/page/demo3/example/example.vue"),
      },
      {
        path: "/example1",
        name: "example1",
        component: () => import("@/page/demo3/example/example1.vue"),
      },
      {
        path: "/example2",
        name: "example2",
        component: () => import("@/page/demo3/example/example2.vue"),
      },
    ]
  }
];
export default router;
