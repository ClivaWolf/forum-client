import Footer from "../widgets/footer";
import Header from "../widgets/header";
import NavBar from "../widgets/navBar";

function MainLayout(props: any) {
    return (
        <>
            <Header>
                <NavBar></NavBar>
            </Header>
            <div className="content">
                {props.children}
            </div>
            <Footer></Footer>
        </>
    );
}

export default MainLayout;