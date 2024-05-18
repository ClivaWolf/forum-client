import { Button, Dropdown, Space } from "antd";

function ThemePicker() {
    let themeList = ['light', 'dark', 'neon'];
    
    const items = themeList.map((theme) => ({
        key: theme,
        // label: (<Button onClick={}> {theme}</Button>)
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