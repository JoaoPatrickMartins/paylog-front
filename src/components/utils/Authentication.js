import { useState, useEffect } from 'react' 

function Authentication ({ user, password }) {
    const [registeredUsers, setRegisteredUsers] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:5000/users', {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setRegisteredUsers(data)
        })
        .catch((err) => console.log(err))
    }, [])

    for(let i = 0; i <= registeredUsers.length; i = i + 1 ) {
        if( (registeredUsers[i].email === user) && (registeredUsers[i].password === password) ){
            console.log(registeredUsers.id)
            return registeredUsers.id
        }
    }

    return null
}

export default Authentication