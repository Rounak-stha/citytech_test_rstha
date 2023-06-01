import { forwardRef, useState } from 'react'

const Input = forwardRef(function MyInput(props, ref) {
	const [value, setValue] = useState('')
	const { placeholder, type } = props
	return (
		<input
			type={type}
			placeholder={placeholder}
			className='px-2 py-1 rounded-md border border-gray-400'
			ref={ref}
			value={value}
			onChange={(e) => setValue(e.target.value)}
		/>
	)
})
export default Input
