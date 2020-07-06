import React from 'react';
import { Button } from 'antd'
import {Link} from 'react-router-dom'
import 'antd/dist/antd.css';
const Home = () => {
    return (
        <div>
            <Button type="primary"><Link to='login'>返回</Link></Button>
        </div>
    )
}

// class Home extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {}
//         this.handleClick = this.handleClick.bind(this);
//     }
//     render() {
//         return (
//             <div onClick={this.handleClick}>首页</div>
//         );
//     }
//     componentDidMount() {
//         console.log(this.props.history)
//     }
//     handleClick() {
//         console.log('页面跳转')
//         this.props.history.push('/login')
//     }
// }

export default Home;
