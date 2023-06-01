import { createBrowserRouter, Route, Link } from 'react-router-dom'
import Login from './page/Login'
import Protected from './components/Dashboard'
import Dashboard from './components/Dashboard'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Login />
	},
	{
		path: 'about',
		element: (
			<Protected>
				<Dashboard />
			</Protected>
		)
	}
])

export default router
