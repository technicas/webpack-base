import React from 'react';

import CmtItemCss from "@/css/cmtitem.css";

//评论列表项组件
export default class CmtItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <div className={CmtItemCss.cmtItemLine}>
            <h3 className={CmtItemCss.title}>评论人：{this.props.user}</h3>
            <h5 className={CmtItemCss.content}>评论内容：{this.props.content}</h5>
        </div>
    }
}