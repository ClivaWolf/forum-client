import { Typography } from "antd";

function Title( props: any ) {
    return ( 
        <Typography.Title level={props.level}>
            {props.children}
        </Typography.Title>
     );
}



export default Title;