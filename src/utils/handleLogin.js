const LOGIN_ENPOINT = 'https://jp-dev.cityremit.global/web-api/config/v1/auths/login'

export async function handleLogin(userId, userPass) {
	const res = await fetch(LOGIN_ENPOINT, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ login_id: userId, login_password: userPass, ip_address: '27.111.20.170' })
	})

	if (!res.ok) return false
	const response = await res.json()
	console.log(response.data)
	const { full_name, login_id, profile_picture, jwt_token } = response.data[0]
	localStorage.setItem('fullName', full_name)
	localStorage.setItem('email', login_id)
	localStorage.setItem('picture', profile_picture)
	localStorage.setItem('token', jwt_token)
	return true
}
