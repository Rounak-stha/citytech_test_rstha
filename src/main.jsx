import { createRoot } from 'react-dom/client'
import router from './router'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')).render(
	<App>
		<RouterProvider router={router} />
	</App>
)
