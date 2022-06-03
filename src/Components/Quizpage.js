import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Csscomponents/Quizpage.css';

function Quizpage() {
    const userName = window.localStorage.getItem('userName');
    const navi = useNavigate();

    function oneChange() {
        navi('/First');
    }

    function twoChange() {
        navi('/Two');
    }

    function threeChange() {
        navi('/three');
    }
    

    return(
        <div className='pageContainer'>
        <h1 id='pageTitle' >QUIZ Site!!</h1>
        <p><div id='well'>어서 오세요 {userName} 님!</div></p>

        <ul>
            <div id='firstQuiz' onClick={oneChange}>첫번째 퀴즈</div>
            <div id='TwoQuiz' onClick={twoChange}>두번째 퀴즈</div>
            <div id='ThreeQuiz' onClick={threeChange}>세번째 퀴즈</div>
        </ul>
        </div>
    );
};

export default Quizpage