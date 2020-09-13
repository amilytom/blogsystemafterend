import Vue from 'vue';
import Router from 'vue-router';
import Cookies from 'js-cookie';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({y: 0}),
  routes: [
    {
      path: '/',
      redirect: '/intro'
    },
    {
      path: '/',
      name: 'Home',
      component: () => import('../components/Home.vue'),
      meta: {title: '自述文件'},
      children: [
        {
          path: '/intro',
          name: 'Intro',
          component: () => import('../views/intro.vue'),
          meta: {title: '系统首页'}
        },
        {
          path: '/cate',
          mame: 'Cate',
          component: () => import('../views/cate.vue'),
          meta: {title: '分类管理'}
        },
        {
          path: '/article',
          mame: 'Article',
          component: () => import('../views/article.vue'),
          meta: {title: '文章管理'}
        },
        {
          path: '/info',
          mame: 'Info',
          component: () => import('../views/info.vue'),
          meta: {title: '文章管理'}
        },
        {
          path: '/admin',
          name: 'Admin',
          component: () => import('../views/admin.vue'),
          meta: {title: '管理员管理'}
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/login.vue')
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
});

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

export default router;

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
  const token = Cookies.get('access-token');
  if (!token && to.path !== '/login') {
    next('/login');
  }
  next();
});
