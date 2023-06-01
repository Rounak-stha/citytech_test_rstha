import { Toaster } from 'react-hot-toast'

export default function App({ children }) {
	return (
		<div className='h-screen'>
			<Toaster
				toastOptions={{
					style: {
						color: 'white'
					},
					success: {
						iconTheme: {
							primary: '#B0EACD',
							secondary: '#21BF73'
						},
						style: {
							background: '#21BF73'
						}
					},
					error: {
						style: {
							background: '#F38181'
						}
					}
				}}
			/>
			{children}
		</div>
	)
}
