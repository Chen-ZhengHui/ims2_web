import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import index from '../components/workbench/index.vue'
import project from '../components/project/project.vue'
import visualization from '../components/visualization/visualization.vue'
import chat from '../components/chat/chat.vue'
import Calender from '../assets/Calendar-encapsulation/Calender.vue'
import Planningdesk from '../components/project/Childlink/Planningdesk.vue'
import Brain from '../components/project/Childlink/Planning_desk/Brain.vue'
import Gantt from '../components/project/Childlink/Planning_desk/Gantt.vue'
import task_list from '../components/project/Childlink/Planning_desk/task_list.vue'
import Subproject from '../components/project/Childlink/Subproject.vue'
import Subtask from '../components/project/Childlink/Subtask.vue'
import TaskKandan from '../components/project/Childlink/Tasksub/TaskKandan.vue'
import reportform from '../components/project/Childlink/reportform/reportform.vue'
import complete from '../components/project/Childlink/complete/complete.vue'
import conduct from '../components/project/Childlink/conduct/conduct.vue'
import Navigation from '../views/Navigation.vue'
import backstage from '../components/enterprise/backstage.vue' //后台首页
import member from '../components/enterprise/organizational/member.vue' //成员管理
import role from '../components/enterprise/organizational/role.vue' //角色管理
import Enterprise_settings from '../components/enterprise/Enterprise_settings.vue' //企业设置
import account_number from '../components/enterprise/account_number.vue' //账号
import individualization from '../components/enterprise/individualization.vue' //个性化
import approve from '../components/more/approve.vue' //审批
import Theme_library from '../components/more/Theme_library.vue' //主题库
import Pets from '../components/more/Pets.vue' //IP宠物
import Functional_label from '../components/more/Functional_label.vue' //职能标签
import creator from '../components/enterprise/organizational/Role_management/creator.vue' //创建者
import administrators from '../components/enterprise/organizational/Role_management/administrators.vue' //管理员
import HR from '../components/enterprise/organizational/Role_management/HR.vue' //人事
import Finance from '../components/enterprise/organizational/Role_management/Finance.vue' //财务
import members from '../components/enterprise/organizational/Role_management/members.vue' //成员
import Schedule from '../assets/Schedule-reminder/Schedule.vue'

Vue.use((Router))

const originalPush = Router.prototype.push

Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)

}
export default new Router({
  routes: [
    //登录页
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [{
        //审批
        path: '/approve',
        name: 'approve',
        component: approve
      }, {
        //主题库
        path: '/Theme_library',
        name: 'Theme_library',
        component: Theme_library
      }, {
        //宠物
        path: '/Pets',
        name: 'Pets',
        component: Pets
      }, {
        //职能标签
        path: '/Functional_label',
        name: 'Functional_label',
        component: Functional_label
      }, {
        path: '/index',
        name: 'index',
        component: index,
      }, {
        path: '/project',
        name: 'project',
        component: project,
        children: [{
          path: '/Planningdesk',
          name: 'Planningdesk',
          component: Planningdesk,
          children: [{
            path: '/Brain',
            name: 'Brain',
            component: Brain,
          }, {
            path: '/Gantt',
            name: 'Gantt',
            component: Gantt,
          }, {
            path: '/task_list',
            name: 'task_list',
            component: task_list,
          }]
        }, {
          path: '/Subproject',
          name: 'Subproject',
          component: Subproject,
          children: [{
            path: '/complete',
            name: 'complete',
            component: complete,
          }, {
            path: '/conduct',
            name: 'conduct',
            component: conduct,
          }]
        }, {
          path: '/Subtask',
          name: 'Subtask',
          component: Subtask,
          children: [{
            path: '/TaskKandan',
            name: 'TaskKandan',
            component: TaskKandan,
          }, {
            path: '/reportform',
            name: 'reportform',
            component: reportform
          }]
        }]

      }, {
        path: '/visualization',
        name: 'visualization ',
        component: visualization
      }, {
        path: '/chat',
        name: 'chat',
        component: chat
      }, {
        path: '/Navigation',
        name: 'Navigation',
        component: Navigation,
        children: [{
          //后台
          path: '/backstage',
          name: 'backstage',
          component: backstage,
        }, {
          //成员
          path: '/member',
          name: 'member',
          component: member,
        }, {
          //角色
          path: '/role',
          name: 'role',
          component: role,
          children: [{
            //创建者
            path: "/creator",
            name: 'creator',
            component: creator,
          }, {
            //管理员
            path: "/administrators",
            name: 'administrators',
            component: administrators,
          }, {
            //人事
            path: "/HR",
            name: "HR",
            component: HR,
          }, {
            //财务
            path: "/Finance",
            name: "Finance",
            component: Finance,
          }, {
            //成员
            path: "/members",
            name: "members",
            component: members
          }]
        }, {
          //企业
          path: '/Enterprise_settings',
          name: Enterprise_settings,
          component: Enterprise_settings
        }, {
          //账号
          path: '/account_number',
          name: account_number,
          component: account_number
        }, {
          //个性化
          path: '/individualization',
          name: individualization,
          component: individualization
        }]
      }]
    }
  ]
})