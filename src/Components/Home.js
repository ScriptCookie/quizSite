import React , { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Csscomponents/Home.css';

function Home() {

    const [inputIds , setInputids] = useState('');
    const [inputPasswords , setInputpasswords] = useState('');

    const navi = useNavigate();
  
    function inputId(e) {
      setInputids(e.target.value);
    };
  
    function inputPassword(e) {
      setInputpasswords(e.target.value);
    };

    // function pageChange() {
    //     navi('/Quizpage');
    // }

    function signupChange() {
        navi('/Signup');
    }

    function errorMail() {
        const errorText = document.getElementById('text');
        errorText.style.display = 'block';

        setTimeout(function() {
            errorText.style.display = 'none';
        }, 2000);
    }

    function errorText() {
        const errorMail = document.getElementById('errorText');
        errorMail.style.display = 'block';

        setTimeout(function() {
            errorMail.style.display = 'none';
        }, 2000);
    }

    function mir() {
        window.localStorage.getItem('stateIds');

        if(inputIds === window.localStorage.getItem('stateIds') && inputPasswords === window.localStorage.getItem('statePasswords') ) {
            navi('/Quizpage');
        } else if (inputIds === '' || inputPasswords === '') { 
            errorText();
        } else {
            errorMail();
        }
    }

    const inputID = document.getElementById('ID');
    const idBox = document.getElementById('idBox');
    const passwordBox = document.getElementById('passwordBox');
    const inputPass = document.getElementById('Password');
    
    function inputIdStyle() {
        inputID.style.backgroundColor = 'rgba(0 , 0 , 0 , .2)';
        idBox.style.border = '2px solid green';
        passwordBox.style.borderTop = 'none';

        inputPass.style.backgroundColor = 'white';
        passwordBox.style.border = '1px solid black';
        idBox.style.borderBottom = 'block';
    }

    function inputButtonStyle() {
        inputID.style.backgroundColor = 'white';
        idBox.style.border = '1px solid black';
        passwordBox.style.borderTop = 'block';

        inputPass.style.backgroundColor = 'rgba(0 , 0 , 0 , .2)';
        passwordBox.style.border = '2px solid green';
        idBox.style.borderBottom = 'none';
    }

    // function story() {
    //     sessionStorage.getItem('stateIds');
    //     sessionStorage.getItem('statePasswords');
    //     console.log('????????? ????????? :' , sessionStorage.getItem('stateIds'));
    // }
    return(
        <div className='container'>
        <div id='title'>QUIZ SITE</div>
        <div id='idBox'><input id='ID' placeholder='?????????' onChange={inputId} onClick={inputIdStyle}></input></div>
        <div id='passwordBox'><input id='Password' type='password' placeholder='????????????' onChange={inputPassword} onClick={inputButtonStyle}></input></div>

        {/* <p>????????? : {inputIds}</p>
        <p>???????????? : {inputPasswords}</p> */}
        <p>
        {/* <button onClick={pageChange}>??????</button> */}
        <button id='loginButton' onClick={mir}>Login</button>
        <p></p>
        <button id='signupButton' onClick={signupChange}>????????????</button>
        <li id='text'>*????????? ??? ??????????????? ???????????????.</li>
        <li id='errorText'>*????????? ?????? ?????????.</li>
        </p>
        {/* <button onClick={story}>??????</button> */}
        </div>
    );
};

export default Home