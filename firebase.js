console.log('firebase file');

// Your web app's Firebase configuration : 내 firebase에 대한 정보
const firebaseConfig = {
    apiKey: "AIzaSyAi__ilpZ4bzd5BLISSG1IjMUBCkJv4mVM",
    authDomain: "fir-test-8d8b4.firebaseapp.com",
    databaseURL: "https://fir-test-8d8b4-default-rtdb.firebaseio.com",
    projectId: "fir-test-8d8b4",
    storageBucket: "fir-test-8d8b4.appspot.com",
    messagingSenderId: "985693515928",
    appId: "1:985693515928:web:3ce49daa43b2877dd560ed"
  };

  // Firebase 앱 초기화
  const app = firebase.initializeApp(firebaseConfig);

  // Firebase 의 실시간 데이터베이스
  const database = firebase.database()

  // Firebase에 데이터 쓰기 ★
  const writeUserData = (userId, name, email) =>{
    firebase.database().ref('users/'+userId).set({
        name : name,
        email : email
    })
  }

  // Firebase에 있는 데이터 읽기
  const readUserData = (userId)=>{
    const userRef = firebase.database().ref('users/') // 'users/' 라는 경로의 참조를 가져옴
    
    userRef.once('value').then((res)=>{
        const data = res.val()
        console.log(data);
    })
  }

/* Mission
 1. addUserBtn 이라는 id를 가진 버튼을 클릭 시
 2. 사용자가 input에 입력한 세개의 데이터를 각각 console창에 찍어보기
 3. 02.JS 실전 폴더 -> ex04 참고
*/

let addUserBtn = document.getElementById('addUserBtn')
let frm = document.frm.elements

addUserBtn.addEventListener('click', ()=>{
    console.log(frm[0].value);
    console.log(frm[1].value);
    console.log(frm[2].value);

    writeUserData(frm[0].value , frm[2].value , frm[1].value)
})

let getUserBtn = document.getElementById('getUserBtn')
getUserBtn.addEventListener('click',()=>{
    console.log('유저가져오기 ck');
    readUserData('hi')
})