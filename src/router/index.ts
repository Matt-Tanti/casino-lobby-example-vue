import { createRouter, createWebHistory } from 'vue-router'
import GameOverviewView from '../views/Games/GameOverviewView.vue'
import LobbyView from '../views/Lobby/LobbyView.vue'

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
    }
  ]
})

export default router
