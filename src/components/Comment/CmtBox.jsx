import React from "react";

// 评论列表输入框组件
export default class CmtBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <label>评论人：</label><br />
            <input type="text" ref="user" /><br />
            <label>评论内容：</label><br />
            <textarea cols="30" rows="4" ref="content"></textarea><br />
            <input type="button" value="发表评论" onClick={this.postComment} />
        </div>
    }

    postComment = () => {
    //    1、获取评论人和评论内容
        var cmtInfo = {user:this.refs.user.value, content: this.refs.content.value};
    //    2、从本地存储中，先获取之前的评论数组
        var list = JSON.parse(localStorage.getItem('cmts') || '[]');
        //3、把最新的评论unshift到list中去
        list.unshift(cmtInfo);
        //4、再把最新的评论数组，保存到本地存储中去
        localStorage.setItem('cmts', JSON.stringify(list))

        this.refs.user.value = this.refs.content.value = "";
        this.props.reload();
    }
}