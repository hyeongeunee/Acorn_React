import { Component } from 'react';
import PostComponent from './components/PostComponent';
import PostComponent2 from './components/PostComponent2';

class App extends Component {
    //render() 메소드 에서 리턴해주는 jsx 를 활용해서 화면 구성이 된다.
    render() {
        return (
            <div className="container">
                <h1>인덱스 페이지 입니다.</h1>
                <PostComponent />
                <PostComponent2 />
            </div>
        );
    }
}

// import 한 곳에 무엇을 리턴해줄지 결정하기
export default App;
