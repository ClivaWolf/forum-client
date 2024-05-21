import { Card } from "antd";
import styles from "./card.module.css"
import { useState } from "react";

function MinimizeCard(props: any) {
    const [isMinimized, setIsMinimized] = useState(false);

    const toggleMinimize = () => {
        setIsMinimized(!isMinimized);
    };
    return (

        <div className={`custom-card ${isMinimized ? 'minimized' : ''}`}>
            <button onClick={toggleMinimize}>
                {isMinimized ? 'Expand' : 'Minimize'}
            </button>
            {!isMinimized && <Card className={styles.card}>
                {props.children}
            </Card>}
        </div>
    );
}

export default MinimizeCard;