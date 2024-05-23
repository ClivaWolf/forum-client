import { Input, Space } from "antd";
import CardStyled from "../../entities/card";
import AvatarUpload from "../../features/avatarUpload";
import MainLayout from "../../layouts/main.layout";
import Title from "../../shared/typography/title";

import styles from './userProfile.module.css'

function UserProfile() {
    return (
        <MainLayout>
            <Title level={2} >User Profile</Title>
            <CardStyled>
                <Space direction="horizontal" size="middle" >
                    <AvatarUpload></AvatarUpload>
                    <Space direction="vertical" size="middle">
                        <Input placeholder="Имя" value={'testName'}></Input>
                        <Input placeholder="Имя" value={'testLastName'}></Input>
                    </Space>
                </Space>
            </CardStyled>
        </MainLayout>
    );
}

export default UserProfile;