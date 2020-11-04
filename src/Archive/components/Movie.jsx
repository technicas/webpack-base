import React from 'react';

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            routeParams:props.match.params
        };
    }

    render() {
        console.log(this);
        //当使用HashRouter把App根组件的元素包裹起来之后，网站就已经启用路由了
        return <div>
            {/*Movie ---- {this.props.match.params.type} ---- {this.props.match.params.id}*/}
            Movie ---- {this.state.routeParams.type} ---- {this.state.routeParams.id}
        </div>
    }

}