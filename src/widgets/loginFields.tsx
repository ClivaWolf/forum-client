import { Badge, Input, Space, Button } from 'antd'
import CardStyled from '../entities/card';

function LoginFields() {
    return (
        <form action="">
            <CardStyled>
                <Space direction="vertical" size="middle">
                    <Badge>Нет аккаунта? <a href="/register">Зарегистрироваться</a> </Badge>
                    <Input type="text" placeholder='отображаемое имя (логин)' required />
                    <Input type="password" placeholder='пароль' required />

                    <Button type="primary" htmlType="submit" size="large" block>Войти</Button>
                </Space>
            </CardStyled>
        </form>
    );
}

export default LoginFields;