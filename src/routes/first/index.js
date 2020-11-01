import React, {Component} from 'react';
import { Link } from 'dva/router';
import { Button } from 'antd';
import { connect } from 'dva';

class Index extends Component {

  add = () => {
    // this.props.dispatch({
    //   type: 'first/add',
    //   payload:{
    //     num: 1
    //   }
    // })
    this.props.add();
  }
  minus = () => {
    // this.props.dispatch({
    //   type: 'first/minus',
    //   payload:{
    //     num: 1
    //   }
    // })
    this.props.minus();
  }
  render() {
    console.log('props', this.props);
    return (
      <div>
        <Link to='/three'>{this.props.num}</Link>
        <Button onClick={this.add}>点我+1</Button>
        <Button onClick={this.minus}>点我-1</Button>
      </div>
    );
  }
}
const mapStateToProps = (state) =>{
  console.log(state);
  return state.first;
}
export default connect(mapStateToProps,(dispatch)=>{
  return {
    add: ()=> dispatch({
      type: 'first/add',
      payload:{
        num: 1
      }}),
    minus: ()=> dispatch({
          type: 'first/minus',
          payload:{
            num: 1
          }
      })
  }
})(Index);
