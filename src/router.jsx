import { createBrowserRouter, Route, Link } from 'react-router-dom'
import Login from './page/Login'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Login />
	},
	{
		path: 'about',
		element: <div>About</div>
	}
])

export default router
