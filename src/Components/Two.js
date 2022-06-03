import React from 'react';
import { useNavigate } from 'react-router-dom';

function Two() {
    const navi = useNavigate();

    function pageChange() {
        navi('/Quizpage');
    }
    return(
        <>
        <h1>두번째 퀴즈</h1>
        <button onClick={pageChange}>이전으로</button>
        </>
    );
}

export default Two