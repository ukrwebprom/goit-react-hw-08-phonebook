import { Outlet, Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { getIsLogged } from "redux/selectors"

export const PrivateRoute = () => {
    const isLogged = useSelector(getIsLogged);
    return(
        isLogged ? <Outlet /> : <Navigate to="/login" />
    )
}

export const PublicRoute = () => {
    const isLogged = useSelector(getIsLogged);
    return(
        isLogged ?  <Navigate to="/contacts" /> : <Outlet />
    )
}