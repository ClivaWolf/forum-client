import { Layout } from "antd";
import styles from "./footer.module.css";
import ThemePicker from "../../features/themePicker";

const { Footer: AntFooter } = Layout;

function Footer(props: any) {
    return ( 
        <AntFooter className={styles.footer}>
            <p>Мой футер</p>
            <ThemePicker></ThemePicker>
            {props.children}
        </AntFooter>
     );
}

export default Footer;