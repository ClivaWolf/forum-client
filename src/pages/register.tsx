import MainLayout from "../layouts/main.layout";
import RegisterFields from "../widgets/registerFields";

function Register() {
    return ( 
        <MainLayout>
            <h1>Register</h1>
            <RegisterFields></RegisterFields>
        </MainLayout>
     );
}

export default Register;