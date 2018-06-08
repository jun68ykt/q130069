// components/DataExtract.js
import React, { Component } from 'react';
/*
import {
  RaisedButton
} from 'material-ui';
*/
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import assign from 'object-assign';

import * as actionDataExtract from '../actions/actionDataExtract';

class DataExtract extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
  }
  // 検索ボタン押下イベントハンドラー
  onBtnSearchClick = (event) => {
    // データ抽出実行
    this.props.actions.getTrnSales();
    console.log(this.props);

    /*    ★★★
        this.props.actions.getTrnSales() を実行することによって、
        セットされたthis.props.stateのデータをここで使用したい場合には、
        どうすれば良いでしょうか？？？
  ★★★ */

    event.preventDefault();
  };

  render() {
    return (
      <div style={{ display: "inline-block", verticalAlign: "top", marginTop: "5px" }}>
        {/*
        <RaisedButton
          label="検索"
          backgroundColor="#2962FF"
          style={{ width: "85px" }}
          labelStyle={{ color: "#fff", fontWeight: "bold", fontSize: "14px" }}
          icon={<CachedIcon color={"#fff"} style={{ marginLeft: "0px" }} />}
          labelPosition="after"
          onClick={this.onBtnSearchClick}
        />*/}
        <a href="" onClick={this.onBtnSearchClick}>ここをクリック</a>

        <br />
        <ul>
          {this.props.state.items.map(item => <li key={item.id}>{item.name}</li>)}
        </ul>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    state: state.ReducerDataExtract
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators (
      assign({}, null, {
        getTrnSales: actionDataExtract.getTrnSales,
      }), dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataExtract);
