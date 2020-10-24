import React, { Component } from 'react';
import { Menu } from "antd";
import { Link } from 'dva/router';
import LeftList from '@components/leftMenu/leftMenu.json'
const { SubMenu, Item } = Menu;

class Index extends Component {
  constructor(props) {
    super(props);
  }

  createLeftMenu = (data) => {
    return data.map((item)=>{
        if(item.children) {
          return (
            <SubMenu
              key={item.id}
              title={item.categoryName}
            >
              {
                this.createLeftMenu(item.children)
              }
            </SubMenu>
          )
        }
        else {
          return (
              <Item key={item.id}>
                <Link to={item.id}>{item.categoryName}</Link>
              </Item>
          )
        }
    })
  }
  render() {
    return (
        <Menu
          mode="inline"
          theme="dark"
        >
          {
            this.createLeftMenu(LeftList.data.children)
          }
        </Menu>
    );
  }
}

export default Index;
