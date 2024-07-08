/* eslint-disable */
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import CallList from '../components/home/call-list.vue'
import Messages from '../components/home/messages.vue'
import Contact from '../components/home/contact.vue'
import AddContact from '../components/home/add-contact.vue'
import Meeting from '../components/home/meeting.vue'
import Invite from '../components/home/invite.vue'
import Assistant from '../components/home/assistant.vue'
import UseAccount from '../pages/use-account.vue'
import SipAccount from '../pages/sip-account.vue'
import FetchAccount from '../pages/fetch.vue'
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/call-list',
    name: 'CallList',
    component: CallList
  },
  {
    path: '/messages',
    name: 'Messages',
    component: Messages
  },

  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/add-contact',
    name: 'AddContact',
    component: AddContact
  },
  {
    path: '/meeting',
    name: 'Meeting',
    component: Meeting
  },
  {
    path: '/invite',
    name: 'Invite',
    component: Invite
  },
  {
    path: '/assistant',
    name: 'Assistant',
    component: Assistant
  },
  {
    path: '/use-account',
    name: 'UseAccount',
    component: UseAccount
  },
  {
    path: '/sip-account',
    name: 'SipAccount',
    component: SipAccount
  },
  {
    path: '/fetch',
    name: 'FetchAccount',
    component: FetchAccount
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../pages/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../pages/register.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgotPassword',
    component: () => import(/* webpackChunkName: "forgotPassword" */ '../pages/forgotPassword.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
