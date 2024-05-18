import MainLayout from "../layouts/main.layout";
import LoginFields from "../widgets/loginFields";
import RegisterFields from "../widgets/registerFields";

function Login() {
    return ( 
        <MainLayout>
            <h1>Login</h1>
            <RegisterFields></RegisterFields>
            <LoginFields></LoginFields>
        </MainLayout>
     );
}

export default Login;