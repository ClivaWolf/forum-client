import { Card } from "antd";

import styles from "./card.module.css"

function CardStyled(props: any) {
    return ( 
        <Card className={styles.card} {...props}>
            {props.children}
        </Card>
     );
}

export default CardStyled;