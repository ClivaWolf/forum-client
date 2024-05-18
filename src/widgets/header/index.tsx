import { Layout } from "antd";
import styles from "./header.module.css";

const { Header: AntHeader } = Layout;

function Header(props: any) {
    return ( 
        <AntHeader className={styles.header}>
            {props.children}
        </AntHeader>
     );
}

export default Header;