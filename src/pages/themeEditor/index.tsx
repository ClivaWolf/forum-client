import { useEffect, useState } from "react";
import MainLayout from "../../layouts/main.layout";
import CardStyled from "../../entities/card";
import Title from "../../shared/typography/title";
import { Button, Card, ColorPicker, Input, message, notification } from "antd";
import MinimizeCard from "../../entities/card/minimizeCard";
import MyColorPicker from "../../entities/myColorPicker";

type MessageType = 'success' | 'info' | 'warning' | 'error';

type ConfigStateType = {
    [key: string]: string;
};

function ThemeEditor() {
    const [themes, setThemes] = useState([]);
    const [themeConfig, setThemeConfig] = useState({ id: '' });
    const [configStates, setConfigStates] = useState<ConfigStateType>({});

    const showNotification = (mess: string, type: MessageType) => {
        message[type](mess);
    };

    useEffect(() => {
        fetch('api/theme/names/all').then((response) => response.json())
            .then((data) => setThemes(data.map((obj: { name: any; }) => obj.name)));
    }, [])

    // Функция для обновления состояния configStates
    const handleInputChange = (key: string, newValue: string) => {
        setConfigStates(prevState => ({ ...prevState, [key]: newValue }));
    };

    const handleThemeConfig = (key: string, newValue: string) => {
        setThemeConfig({ ...themeConfig, [key]: newValue });
    };

    return (
        <MainLayout>
            <Title level={3}>Theme Editor</Title>
            <CardStyled >
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    {themes.map((theme: string) => (
                        <Button key={theme}
                            onClick={() => {
                                setThemeConfig({ id: '' });
                                fetch('api/theme/byName/' + theme).then((response) => response.json()).then((data) => setThemeConfig(data))
                            }}
                        >{theme}</Button>
                    ))}
                </div>
            </CardStyled>
            <MinimizeCard>
                <pre>{JSON.stringify(themeConfig, null, 2)}</pre>
            </MinimizeCard>
            <CardStyled style={{ maxWidth: '1000px', textAlign: 'end' }}>
                {Object.entries(themeConfig).map(([keys, values]) => (
                    <div key={keys} style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ marginRight: '10px', minWidth: '200px' }}>
                            <Title level={5}>{keys}</Title>
                        </div>
                        {typeof values === 'string' && values.startsWith('#') ? (
                            <MyColorPicker value={values}
                                onChangeComplete={(bgColor: any) => {
                                    setThemeConfig({ ...themeConfig, [keys]: bgColor.toHexString() });
                                }}
                            />
                        ) : (
                            <InputWithStart
                                value={values}
                                onChange={(e: any) => handleThemeConfig(keys, Number.isNaN(Number(e.target.value)) ? e.target.value : Number(e.target.value))}
                                style={{
                                    marginLeft: '10px',
                                    minWidth: '250px',
                                    textAlign: 'center',
                                }}
                            />
                        )}
                    </div>
                ))}
            </CardStyled>
            <CardStyled>
                <Button type="primary"
                    onClick={() => {
                        fetch('api/theme/' + themeConfig.id, {
                            method: 'PATCH',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(themeConfig)
                        })
                            .then((response) => {
                                if (!response.ok) {
                                    throw new Error(`HTTP error status: ${response.status}`);
                                }
                                return response.json();
                            })
                            .then((data) => {
                                console.log(data);
                                showNotification('Тема обновлена', 'success');
                            })
                            .catch((error) => {
                                console.error('Произошла ошибка:', error);
                                showNotification('Произошла ошибка при обновлении темы', 'error');
                            });
                    }}
                >Update</Button>
                <Button type="default"
                    onClick={() => {
                        //setThemeConfig({ id: '' })
                        console.log(themeConfig);
                        fetch('api/theme', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(themeConfig)
                        })//.then(()=>document.location.reload());

                    }}>
                    Save as new</Button>
            </CardStyled>
        </MainLayout>
    );
}

export default ThemeEditor;

function InputWithStart(props: any) {
    const [val, setVal] = useState(props.value);

    // Объединение исходного и нового обработчиков onChange
    const combinedOnChange = (e: any) => {
        // Вызов нового обработчика, если он был передан
        if (props.onChange) {
            props.onChange(e);
        }

        // Обновление внутреннего состояния
        setVal(e.target.value);
    };

    return (
        <Input {...props}
            value={val}
            onChange={combinedOnChange}
        />
    );
}
