import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";

Vue.use(VueRouter);

/**
 * Note: 当子路由children的长度大于等于1的时候子导航才会显示
 * 详细参考下面配置
 *
 * hidden: true                   为真的时当前路由不会显示在侧导航中
 * alwaysShow: true               为真时根路由会显示在侧导航中
 *                                
 *                                
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */
const routes = [
  {
    path: "/",
    redirect: "/TaskManagement",
    component: Home,
    meta: {
      title: "首页",
      icon: "el-icon-user"
    },
    alwaysShow: true,
    children: [
      {
        path: "/PlanManagement",
        component: () =>
          import(/* webpackChunkName: "PlanMangement" */ "../components/planManagement/PlanManagement.vue"),
        meta: {
          title: "计划管理",
        }
      },
	  {
	    path: "/DistrictManagement",
	    component: () =>
	      import(/* webpackChunkName: "DistrictManagement" */ "../components/districtManagement/DistrictManagement.vue"),
	    meta: {
	      title: "片区管理",
	    }
	  },
	  {
	    path: "/TaskManagement",
	    component: () =>
	      import(/* webpackChunkName: "TaskManagement" */ "../components/taskManagement/TaskManagement.vue"),
	    meta: {
	      title: "任务管理",
	    }
	  },
	  {
	    path: "/EventManagement",
	    component: () =>
	      import(/* webpackChunkName: "EventManagement" */ "../components/eventManagement/EventManagement.vue"),
	    meta: {
	      title: "事件管理",
	    }
	  }
    ]
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: { title: "关于我们", icon: "el-icon-heavy-rain" },
    hidden: true
  },
  {
    path: "/contact",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: { title: "联系我们", icon: "el-icon-heavy-rain" },
  }
];

const router = new VueRouter({
  routes
});
export { routes };
export default router;
