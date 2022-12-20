import { useLocation,Navigate } from "react-router-dom"

export const setToken = (token)=>{
    localStorage.setItem('hmsauthtoken', token)// make up your own token
}

export const fetchToken = ()=>{

    return localStorage.getItem('hmsauthtoken')
}

export function RequireToken({children}){

    let auth = fetchToken()
    let location = useLocation()

    if(!auth){

        return <Navigate to='/login' state ={{from : location}}/>;
    }

    return children;
}
