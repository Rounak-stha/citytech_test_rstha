import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../components/Input'
import { handleLogin } from '../utils/handleLogin'
import { toast } from 'react-hot-toast'

export default function Login() {
	const userIdRef = useRef()
	const passwordRef = useRef()
	const navigate = useNavigate()

	async function handleSubmit() {
		const loginSuccessful = await handleLogin(userIdRef.current.value, passwordRef.current.value)
		if (loginSuccessful) navigate('/about')
		else toast.error('Incorrect Credentials')
	}
	return (
		<div className='h-full flex gap-3 flex-col justify-center items-center'>
			<div className='flex justify-center items-center flex-col gap-2'>
				<Input type='text' placeholder='User Id' ref={userIdRef} />
				<Input type='password' placeholder='Password' ref={passwordRef} />
			</div>
			<button
				onClick={async () => await handleSubmit()}
				className='rounded-md bg-blue-500 text-white font-semibold px-4 py-2'
			>
				Login
			</button>
		</div>
	)
}
