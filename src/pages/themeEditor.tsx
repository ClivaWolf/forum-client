import { useEffect, useState } from "react";
import MainLayout from "../layouts/main.layout";
import CardStyled from "../entities/card";
import Title from "../shared/typography/title";
import { Button, Card } from "antd";
import MinimizeCard from "../entities/card/minimizeCard";

function ThemeEditor() {
    const [themes, setThemes] = useState([]);

    useEffect(() => {
        fetch('api/theme/names/all').then((response) => response.json())
            .then((data) => setThemes(data.map((obj: { name: any; }) => obj.name)));
    }, [])

    const [themeConfig, setThemeConfig] = useState({});

    return (
        <MainLayout>
            <Title level={3}>Theme Editor</Title>
            <CardStyled >
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    {themes.map((theme: string) => (
                        <Button
                        onClick={() => fetch('api/theme/byName/' + theme).then((response) => response.json()).then((data) => setThemeConfig(data))}
                        >{theme}</Button>
                    ))}
                </div>
            </CardStyled>
            <MinimizeCard>
                <pre>{JSON.stringify(themeConfig, null, 2)}</pre>
            </MinimizeCard>
        </MainLayout>
    );
}

export default ThemeEditor;