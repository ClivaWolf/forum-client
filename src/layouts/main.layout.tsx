import { Layout } from "antd";
import Footer from "../widgets/footer";
import Header from "../widgets/header";
import NavBar from "../widgets/navBar";

function MainLayout(props: any) {
    return (
        <>
            <Header>
                <NavBar></NavBar>
            </Header>
            <Layout className="layout">
                <div className="content">
                    {props.children}
                </div>
            </Layout>
            <Footer></Footer>
        </>
    );
}

export default MainLayout;