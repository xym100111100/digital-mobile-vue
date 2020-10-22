/*
 * @Author: your name
 * @Date: 2020-03-20 10:45:57
 * @LastEditTime: 2020-05-25 15:53:07
 * @LastEditors: Please set LastEditors
 * @Description: 业务相关页面
 * @FilePath: \smart-app\src\router\business.js
 */
const business = [
    {
        path: '/workbench',
        component: () => import('../views/mobile/workbench/index.vue'),
        name: 'workbench',
        hidden: true,
        meta: { title: '工作台', }
    },
    {
        path: '/notice',
        component: () => import('../views/mobile/notice/index.vue'),
        name: 'notice',
        hidden: true,
        meta: { title: '公告动态', }
    },{
        path: '/calendar',
        component: () => import('../views/mobile/calendar/index.vue'),
        name: 'calendar',
        hidden: true,
        meta: { title: '日历', }
    },


];
export default business
