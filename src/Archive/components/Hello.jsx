//第一种创建组件的方式
//组件的首字母一定要是大写
import React from "react";

export default function Hello(props) {
    console.log(props)
    //return null
    //在组件中必须返回一个合法的JSX虚拟DOM元素
    return <div>这是Hello组件 --- {props.name} --- {props.age} --- {props.gender}</div>
}

//把组件暴露出去
//export default Hello