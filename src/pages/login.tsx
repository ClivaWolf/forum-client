import { Link } from "react-router-dom";
import MainLayout from "../layouts/main.layout";
import LoginFields from "../widgets/loginFields";
import RegisterFields from "../widgets/registerFields";
import { Button } from "antd";
import Title from "../shared/typography/title";

function Login() {
    return ( 
        <MainLayout>
            <Title level={2}>Войти</Title>
            <RegisterFields></RegisterFields>
            <LoginFields></LoginFields>
            <Button>
                <Link to="/register">Зарегистрироваться</Link>
            </Button>
        </MainLayout>
     );
}

export default Login;