import React, {Component} from 'react';
import { Link } from 'dva/router';
import { Button } from 'antd';
import { connect } from 'dva';

class Index extends Component {

  add = () => {
    this.props.dispatch({
      type: 'first/add',
      payload:{
        num: 1
      }
    })
  }
  minus = () => {
    this.props.dispatch({
      type: 'first/minus',
      payload:{
        num: 1
      }
    })
  }
  render() {
    console.log('props', this.props);
    return (
      <div>
        <Link to='/three'>{this.props.first.num}</Link>
        <Button onClick={this.add}>点我+1</Button>
        <Button onClick={this.minus}>点我-1</Button>
      </div>
    );
  }
}
export default connect(({ first }) => ({
  first,
}))(Index);
