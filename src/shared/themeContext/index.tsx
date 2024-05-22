import { SetStateAction, useEffect, useState } from "react";
import { ThemeContext } from "./context";
import { ConfigProvider } from "antd";

const serverURL = import.meta.env.VITE_SERVER_URL

interface ThemeProviderProps {
    children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [themes, setThemes] = useState(['dark']);

    const [theme, setTheme] = useState('dark');
    const [standartToken, setStandartToken] = useState({
        colorLink: '#3b3b3b',
        colorLinkActive: '#3b3b3b',
        colorLinkHover: '#3b3b3b',

        colorPrimary: '#3b3b3b',
        colorPrimaryActive: '#3b3b3b',
        colorPrimaryHover: '#3b3b3b',
        colorPrimaryBg: '#3b3b3b',
        colorPrimaryBorder: '#3b3b3b',
        colorPrimaryBgHover: '#3b3b3b',
        colorPrimaryBorderHover: '#3b3b3b',
        colorPrimaryText: '#3b3b3b',
        colorPrimaryTextActive: '#3b3b3b',
        colorPrimaryTextHover: '#3b3b3b',

        colorText: '#3b3b3b',
        colorTextSecondary: '#3b3b3b',
        colorTextTertiary: '#3b3b3b',
        colorTextQuaternary: '#3b3b3b',

        colorTextBase: '#3b3b3b',
        colorTextDescription: '#3b3b3b',
        colorTextDisabled: '#3b3b3b',
        colorTextHeading: '#3b3b3b',
        colorTextLabel: '#3b3b3b',
        colorTextLightSolid: '#3b3b3b',
        colorTextPlaceholder: '#3b3b3b',

        colorBgLayout: '#3b3b3b',
        colorBgBase: '#3b3b3b',
        colorBgBlur: '#3b3b3b',
        colorBgContainer: '#3b3b3b',
        colorBgContainerDisabled: '#3b3b3b',
        colorBgTextActive: '#3b3b3b',
        colorBgTextHover: '#3b3b3b',

        colorError: '#3b3b3b',
        colorErrorBg: '#3b3b3b',
        colorErrorBorder: '#3b3b3b',
        colorErrorText: '#3b3b3b',

        borderRadius: 3,
        borderRadiusLG: 3,
        borderRadiusOuter: 3,
        borderRadiusSM: 3,
        borderRadiusXS: 3,
        colorBorder: '#3b3b3b',
        colorBorderBg: '#3b3b3b',
        colorBorderSecondary: '#3b3b3b',
        colorInfoBorder: '#3b3b3b',
        colorInfoBorderHover: '#3b3b3b',
        colorErrorBorderHover: '#3b3b3b',
        colorSuccessBorderHover: '#3b3b3b',
        colorSuccessBorder: '#3b3b3b',
        colorWarningBorder: '#3b3b3b',
        colorWarningBorderHover: '#3b3b3b',

        colorInfoText: '#3b3b3b',
        colorInfoTextHover: '#3b3b3b',
        colorInfoBg: '#3b3b3b',
        colorInfoBgHover: '#3b3b3b',
        colorInfoTextActive: '#3b3b3b',
        colorErrorTextActive: '#3b3b3b',
        colorErrorTextHover: '#3b3b3b',
        colorSuccessTextHover: '#3b3b3b',
        colorSuccessTextActive: '#3b3b3b',
        colorSuccessText: '#3b3b3b',
        colorWarningText: '#3b3b3b',
        colorWarningTextActive: '#3b3b3b',
        colorWarningTextHover: '#3b3b3b',

        boxShadow: '0 0 0 0 #3b3b3b',
        boxShadowSecondary: '0 0 0 0 #3b3b3b',
        boxShadowTertiary: '0 0 0 0 #3b3b3b',

        colorFill: '#3b3b3b',
        colorFillContent: '#3b3b3b',
        colorFillContentHover: '#3b3b3b',
        colorFillSecondary: '#3b3b3b',
        colorFillTertiary: '#3b3b3b',
        colorFillQuaternary: '#3b3b3b',

        padding: 3,
        paddingLG: 3,
        paddingSM: 3,
        paddingXS: 3,
        paddingXXS: 3,

        margin: 3,
        marginLG: 3,
        marginSM: 3,
        marginXS: 3,
        marginXXS: 3,
    });


    //http://localhost:3000/api/theme
    // const allTokens = {}
    useEffect(() => {
        fetch('api/theme/names/all').then((response) => response.json())
            .then((data) => setThemes(data.map((obj: { name: any; }) => obj.name)));
        let tmp = 'dark';
        if (localStorage.getItem('theme')) {
            tmp = localStorage.getItem('theme')!;
        }
        fetch('api/theme/byName/'+tmp).then((response) => response.json())
            .then((data) => setStandartToken(data));
    }, [])

    // Функция для обновления темы
    const updateTheme = (newTheme: SetStateAction<string>) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme+'');
        fetch('api/theme/byName/' + newTheme).then((response) => response.json())
            .then((data) => setStandartToken(data));
    };

    // Передаем функцию updateTheme в качестве setTheme, если она существует
    return (
        <ThemeContext.Provider value={{ theme, setTheme: updateTheme, themes }}>
            <ConfigProvider
                // theme={{ token: {

                // } }}>
                theme={{ token: standartToken }}>
                {children}
            </ConfigProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;