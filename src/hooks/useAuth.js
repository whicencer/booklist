import { useSelector } from "react-redux"

export const useAuth = () => {
    const {email, token, id, isAuth} = useSelector(state => state.auth)
    return {
        email,
        token,
        id,
        isAuth
    }
}