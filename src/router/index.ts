import UnknownView from '@/views/Common/UnknownView.vue'
import GameOverviewView from '@/views/Games/GameOverviewView.vue'
import LobbyView from '@/views/Lobby/LobbyView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/lobby',
      name: 'lobby',
      component: LobbyView
    },
    {
      path: '/',
      redirect: {
        name: 'lobby'
      }
    },
    {
      path: '/game/:gameId',
      name: 'gameOverview',
      component: GameOverviewView
    },
    {
      path: '/404',
      name: 'unknown',
      component: UnknownView
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: {
        name: 'unknown'
      }
    }
  ]
})

export default router
