import UsersList from './containers/UsersList'
import UsersAdd from './containers/UsersAdd'
import UsersEdit from './containers/UsersEdit'

const routes = [
  {
    path: '/list',
    name: 'UsersList',
    component: UsersList
  },
  {
    path: '/add',
    name: 'UsersAdd',
    component: UsersAdd
  },
  {
    path: '/edit/:id',
    name: 'UsersEdit',
    component: UsersEdit
  },
]

export default routes