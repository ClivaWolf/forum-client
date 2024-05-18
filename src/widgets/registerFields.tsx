import { Badge, Input, Checkbox, Space, Button } from 'antd'
import CardStyled from '../entities/card';

function RegisterFields() {
    return (
        <form action="">
            <CardStyled>
                <Space direction="vertical" size="middle">
                    <Badge>Уже зарегистрированы? <a href="/login">Войти</a> </Badge>
                    <Input type="text" placeholder='отображаемое имя (логин)' required />
                    <Input type="email" placeholder='email адрес' required />
                    <Input type="password" placeholder='пароль' required />
                    <Input type="password" placeholder='подтвердите пароль' required />

                    <Checkbox required>Соглашение с <a href="#">политикой конфиденциальности</a></Checkbox>

                    <Button type="primary" htmlType="submit" size="large" block>Регистрация</Button>
                </Space>
            </CardStyled>
        </form>
    );
}

export default RegisterFields;