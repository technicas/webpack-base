//使用function构造函数，定义普通的无状态组件
import React from "react";

//第一次封装
// const itemStyle = {border: '1px dashed #ccc', margin:'10px', padding:'10px', boxShadow:'0 0 10px #ccc'};
// const userStyle = {fontSize:'14px'};
// const contentStyle = {fontSize:'12px'};

//第二次封装
const styles = {
    item: {border: '1px dashed #ccc', margin:'10px', padding:'10px', boxShadow:'0 0 10px #ccc'},
    user: {fontSize:'14px'},
    content: {fontSize:'12px'}
};

export default function CmtItem(props) {
    return <div style={styles.item}>
        <h1 style={styles.user}>评论人：{props.user}</h1>
        <p style={styles.content}>评论内容：{props.content}</p>
    </div>
}