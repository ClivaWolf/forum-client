import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Item, SubMenu } = Menu;

function NavBar() {
    return ( 
        <Menu mode="horizontal">
        <Item key="1">
            <Link to="/">Главная</Link>
        </Item>
        <SubMenu key="2" title="Подфорумы">
          <Item key="2-1">Пункт 2.1</Item>
          <Item key="2-2">Пункт 2.2</Item>
        </SubMenu>
        <SubMenu key="3" title="Подменю 2">
          <SubMenu key="3-1" title="Подподменю 1">
            <Item key="3-1-1">Пункт 3.1.1</Item>
          </SubMenu>
          <Item key="3-2">Пункт 3.2</Item>
        </SubMenu>
      </Menu>
     );
}

export default NavBar;