import { Route, Routes } from 'react-router-dom';

import { Home } from './pages';
import BsNavbar from './components/BsNavbar';

function App() {
    return (
        <div className="container">
            <BsNavbar />
            <Routes>
                <Route path="/" Component={Home}></Route>
            </Routes>
        </div>
    );
}

// import 한 곳에 무엇을 리턴해줄지 결정하기
export default App;
