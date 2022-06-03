import React , {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../Csscomponents/Signup.css';

function Signup() {
    const [stateIds , setStateIds] = useState('');
    const [statePasswords , setStatePasswords] = useState('');
    const [userNames , setuserNames] = useState('');

    const navi = useNavigate();

    function stateId(e) {
        setStateIds(e.target.value);
    }

    function statePassword(e) {
        setStatePasswords(e.target.value);
    }

    function userName(e) {
        setuserNames(e.target.value);
    }

    const errorID = document.getElementById('signIderror');
    const signIdBox = document.getElementById('signID');
    const errorMail = document.getElementById('signIdmail');
    const signPw = document.getElementById('signPassword');
    const errorPwMail = document.getElementById('signPwmail');
    const nameBox = document.getElementById('signName');
    const regId = /^[0-9a-zA-Z]*@[0-9a-zA-Z]*.[a-zA-Z]{2,3}$/i;
    const regPw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    function storage() {
        // sessionStorage.setItem('stateIds' , stateIds);
        // sessionStorage.setItem('statePasswords' , statePasswords);
        // sessionStorage.setItem('userName' , userNames);

       window.localStorage.setItem('stateIds' , stateIds);
       window.localStorage.setItem('statePasswords' , statePasswords);
       window.localStorage.setItem('userName' , userNames);

        if(stateIds === '' || statePasswords === '' || userNames === '') {
            emy();
        } else if(signIdBox.style.borderColor === 'green' && signPw.style.borderColor === 'green' && nameBox.style.borderColor === 'green'){
            alert('회원가입 완료');
            alert('로그인 페이지로 이동합니다.');
            navi('/Home');
        }
    };


    function emy() {
        if(stateIds === '') {
            errorID.style.display = 'block';
            signIdBox.style.borderColor = 'red';
        }

        if(statePasswords === '') {
            errorID.style.display = 'block';
            signPw.style.borderColor = 'red';
        }

        if(userNames === '') {
            errorID.style.display = 'block';
            nameBox.style.borderColor = 'red';
        }
    }

    function idScan() {
        if(stateIds === '') {
            errorID.style.display = 'block';
            signIdBox.style.borderColor = 'red';
        } else {
            signIdBox.style.borderColor = 'black';
        }

        if(stateIds.match(regId) == null) {
            errorMail.style.display = 'block';
            signIdBox.style.borderColor = 'red';
        } else {
            errorMail.style.display = 'none';
            signIdBox.style.borderColor = 'green';
        }

        if(signIdBox.style.borderColor === 'green' && signPw.style.borderColor === 'green' && nameBox.style.borderColor === 'green') {
            errorID.style.display = 'none';
        }
    }

    function pwScan() {
        if(statePasswords === '') {
            errorID.style.display = 'block';
            signPw.style.borderColor = 'red';
        } else {
            signPw.style.borderColor = 'black';
        }

        if(statePasswords.match(regPw) == null) {
            errorPwMail.style.display = 'block';
            signPw.style.borderColor = 'red';
        } else {
            errorPwMail.style.display = 'none';
            signPw.style.borderColor = 'green';
        }

        if(signIdBox.style.borderColor === 'green' && signPw.style.borderColor === 'green' && nameBox.style.borderColor === 'green') {
            errorID.style.display = 'none';
        }
    }

    function scanName() {
        if(userNames === '') {
            nameBox.style.borderColor = 'red';
        } else {
            nameBox.style.borderColor = 'green';
        }

        if(signIdBox.style.borderColor === 'green' && signPw.style.borderColor === 'green' && nameBox.style.borderColor === 'green') {
            errorID.style.display = 'none';
        }
    }

    // function idError() {
    //     if(stateIds === '') {
    //         errorID.style.display = 'block'
    //     } else {
    //         errorID.style.display = 'none'
    //     }
    // }

    return(
        <div className='signContainer'>
        <div id='titles'><a href='/Home'>QUIZ SITE</a></div>
        <div id='signID'><input id='singInputID' placeholder='아이디' onChange={stateId}></input>
        <li id='signIdmail'>*이메일 형식이 아닙니다.</li><button id='scanId' onClick={idScan}>확인</button>
        </div>
        <div id='signPassword'><input id='singInputPass' type='password' placeholder='비밀번호' onChange={statePassword}></input>
        <li id='signPwmail'>*최소8자 ,문자 숫자 특수문자사용</li><button id='scanPw' onClick={pwScan}>확인</button>
        </div>
        <div id='signName'><input id='signInputName' placeholder='사용자 이름' onChange={userName}></input>
        <button id='scanId' onClick={scanName}>확인</button>
        </div>
        <p><button id='signButton' onClick={storage}>가입하기</button></p>
        <li id='signIderror'>*빈칸을 채워 주세요.</li>
        </div>
    );
}

export default Signup