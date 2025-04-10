import { createWebHistory, createRouter } from "vue-router";



const base = '/Vue-Template-Project';


function generateRoutes() {
  const pageFiles = import.meta.glob("/src/pages/*.vue");
  const routes = [];

  for (const path in pageFiles) {
    const componentName = path.split("/").pop().replace(".vue", "");
    const routePath = componentName === "Home" ? "/" : `/${componentName.toLowerCase()}`;

    routes.push({
      path: base.concat(routePath),
      component: pageFiles[path],
      name: componentName,
    });
  }
  
  routes.push({
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("/src/pages/NotFound.vue"),
    });

  return routes;
}

const routes = generateRoutes();

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
