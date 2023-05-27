
export const authenticateUser = async (username: string, password: string) => {
    try {
        const response = await fetch('authentication/login', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({ username, password})
        })

        if (response.ok) {
            //User is authenticated
            console.log('User authenticated')
        } else {
            //Auth failed
            console.log('Auth failed')
        }
    } catch (error) {
        //Handle error
        console.log('Auth error:', error)
    }
}