//使用class关键字，定义父组件
import React from "react";
import CmtItem from "@/components/CmtItem";

export default class CmtList extends React.Component {
    constructor() {
        super();
        this.state = {
            CommentList: [ //评论列表数据
                {id: 1, user: '张三', content: '哈哈，沙发'},
                {id: 2, user: '李四', content: '哈哈，板凳'},
                {id: 3, user: '王五', content: '哈哈，凉席'},
                {id: 4, user: '赵六', content: '哈哈，楼上山炮'}
            ]
        };
    }

    render() {
        return <div>
            {/*注意： 如果在jsx中，想写行内样式，不能为style设置字符串值*/}
            {/*<h1 style={}>这是评论列表组件</h1>*/}
            {/*style={{color: 'red'}}*/}
            {/*在行内样式中，如果是数值类型的样式，不用引号，如果是字符串类型的，则要用引号*/}
            <h1 style={{color: 'red', fontSize:'35px', zIndex: 3, fontWeight: 200, textAlign:'center'}}>这是评论列表组件</h1>
            {this.state.CommentList.map(item => <CmtItem {...item} key={item.id}></CmtItem>)}
        </div>
    }
}