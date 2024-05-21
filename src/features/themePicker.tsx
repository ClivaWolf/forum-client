import { Button, Dropdown, Space } from "antd";
import { useContext } from "react";
import { ThemeContext } from "../shared/themeContext/context";

function ThemePicker() {

    const themeObj = useContext(ThemeContext);
    
    const themes = themeObj.themes;

    const items = themes.map((theme: string) => ({
        key: theme,
        label: (
            <Button
                type={theme === themeObj.theme ? 'primary' : 'default'}
                onClick={() => themeObj.setTheme(theme)}
            >
                {theme}
            </Button>
        ),
    }));

    return (
        <Dropdown menu={{ items }}> 
            <a onClick={(e) => e.preventDefault()}>
                <Space>
                    Hover me
                </Space>
            </a>
        </Dropdown>
    );
}

export default ThemePicker;