// src/pages/Home.js

import { useState, useRef, useEffect } from 'react';
import initToken from '../initToken';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:9000';

export default function Home() {
    //localStorage 에 저장된 토큰을 사용할 준비를 한다.
    initToken(localStorage.token);

    const [notice, setNotice] = useState([]);

    useEffect(() => {
        //공지 사항을 요청을 통해 받아온다.
        axios
            .get('/notice')
            .then((res) => {
                //spring boot 서버가 응답한 json 문자열이 javascript 배열로 변경되어 있다.
                console.log(res.data);
                setNotice(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const inputNotice = useRef();
    //추가 버튼을 누르면 호출되는 함수
    const handleAdd = () => {
        //input 요소에 입력한 내용을 읽어와서 state 변경
        setNotice([...notice, inputNotice.current.value]);
        inputNotice.current.value = '';
    };

    const [token, setToken] = useState('');

    const getToken = () => {
        //토큰을 발급 받는 요청이기 때문에 토큰 보내지 않기
        axios
            .get('/hello/token', { headers: { Authorization: 'none' } })
            .then((res) => {
                console.log(res.data);
                setToken(res.data);
                //토큰을 localStorage 에 저장하기 (react 와 상관없는 웹브라우저의 저장소)
                localStorage.token = res.data;
                //axios 의 요청헤더에 자동으로 토큰이 담기도록 한다.
                initToken(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const request = () => {
        axios
            .get('/fortune')
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <h1>인덱스 페이지 입니다.</h1>
            <button onClick={getToken}>토큰 받아오기</button>
            <button onClick={request}>토큰과 함께 요청하기</button>
            <p>{token}</p>
            <h3>공지사항</h3>
            <div className="row">
                <div className="col">
                    <input className="form-control" ref={inputNotice} type="text" placeholder="공지사항 입력..." />
                </div>
                <div className="col">
                    <button className="btn btn-primary" onClick={handleAdd}>
                        추가
                    </button>
                </div>
            </div>
            <ul>
                {notice.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    );
}
