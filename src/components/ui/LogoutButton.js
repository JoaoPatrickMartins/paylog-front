
function LogoutButton(){
    function handleLogout(){
        console.log('logout')
    }
    return(
        <button onClick={handleLogout}>Sair</button>
    )
}

export default LogoutButton;