import HeaderLogin from "../components/LoginHeader";
import Login from "../components/Login"
export default function LoginPage(){
    return(
        <>
                <HeaderLogin
                heading="CONNECTEZ VOUS À VOTRE COMPTE "
                paragraph="Vous n'avez pas de compte ?"
                linkName="Signup"
                linkUrl="/signup"
                />
            <Login/>
        </>
    )
}

