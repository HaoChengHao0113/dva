import React, {Component} from 'react';
import { Layout } from "antd";
import TopHeader from '@components/Header';
import LeftMenu from '@components/leftMenu'
import ChildrenContent from '@components/content';

const { Header, Sider, Content } = Layout;

class Index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('children', this.props.children)
    return (
      <Layout>
        <Header>
          <TopHeader></TopHeader>
        </Header>
        <Layout>
          <Sider>
            <LeftMenu></LeftMenu>
          </Sider>
          <Content>
            {/*{ this.props.children }*/}
            <ChildrenContent></ChildrenContent>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Index;
