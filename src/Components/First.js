import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Csscomponents/First.css';
import Quizpage from './Quizpage';

function First() {
    const Qbox = document.getElementById('qInputBox');
    const fError = document.getElementById('Ferror');
    const [inputApple , setInputApple] = useState('');
    const navi = useNavigate();

    const apple = {
        state : 'apple'
    }

    function firstInput(e) {
        setInputApple(e.target.value);
    }

    function caller() {
        if(inputApple === apple.state) {
            Qbox.style.border = '1px solid green';
            fError.style.display = 'none';
        } else {
            Qbox.style.border = '1px solid red';
            fError.style.display = 'block'
        }
    }

    function pageChange() {
        navi('/Quizpage');
    }

    return(
        <div className='firstContainer'>
        <div id='firstTitle'><h1>첫번째 퀴즈</h1></div>
        <li id='firstQ'>사과를 영어로 적으시오</li>
        <div id='qInputBox'><input id='qInput' onChange={firstInput} placeholder='정답'></input></div>
        <button id='firstClick' onClick={caller}>확인</button>
        <p><button id='firstBack' onClick={pageChange}>이전으로</button></p>
        <div id='Ferror'>*틀렸습니다.</div>
        </div>
    );
}

export default First