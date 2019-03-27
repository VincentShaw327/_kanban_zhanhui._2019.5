export default (() => {
  window.gconfig = {};
  +(function (global) {
    // 本地开发打开的路径以及端口
    global.linkUrl = 'http://dev.mes.top-link.me/';
    // global.linkUrl = 'http://localhost:3000/';
    // global.linkUrl = 'http://dev.mes.top-link.me/';
    if (process.env.NODE_ENV === 'production') { // 生产环境用不同的接口地址
      global.linkUrl = 'http://dev.mes.top-link.me/';
    }
    global.isDemo_dev=false;
    // 系统一二级菜单
    global.nav = [
      {
        name: '系统主页',
        icon: 'home',
        key: '/home',
        url: '/home',
        authItem:'home',
      },
      /* {
        name: 'monitor',
        icon: 'desktop',
        url: '',
        key: '/scada/punch',
        authItem:'scada',
      }, */
      {
        name: '生产管理',
        icon: 'form',
        url: '',
        key: 'manufacture',
        children: [
          {
            name:'demo1', key: '/demos/one',url:'/demos/one',
          },
          {
            name:'demo2', key: '/demos/two',url:'/demos/two',
          },
          {
            name:'生产任务', key: '/production/task',url:'production/task',authItem:'task_list',
          },
          {
            name:'工单管理', key: '/production/job',url:'/production/job',authItem:'job_list',
          },
          {
            name:'派工单管理', key: '/production/dist',url:'/production/dist',authItem:'dist_list',
          },
          {
            name:'投料计划', key: '/production/feeding',url:'/production/feeding',authItem:'feeding_list',
          },
          /*{
            name:'计划达成率', key: 'planned_completion_rate',url:'planned_completion_rate',
          },*/
        ],
      },
      {
        name: '系统设置',
        icon: 'setting',
        url: '',
        key: 'TSystemSetting',
        children: [
          {
            name:'角色管理', key: '/setting/role',url:'/setting/role',
          },
          /* {
            name:'权限列表', key: '/setting/auth_list',url:'/setting/auth_list',
          }, */
          {
            name:'权限管理', key: '/setting/auth_group_list',url:'/setting/auth_group_list',
          },
          {
            name:'用户列表', key: '/setting/user_list',url:'/setting/user_list',
          },
          {
            name:'个人设置', key: '/setting/user_set',url:'/setting/user_set',
          },
        ],
      },
    ];
  }(window.gconfig));
})()

export const prefix = global.gconfig.linkUrl
// export const suffix = '.json'
export const suffix = ''