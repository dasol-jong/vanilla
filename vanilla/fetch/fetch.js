document.getElementById("clickBtn").addEventListener("click", getUserInfo);

// fetch란 Ajax를 구현하는 기술중 최신 기술이다.
// Ajax 특징:
// 1) 페이지 새로고침 없이 서버에 요청
// 2) 서버로부터 데이터를 받고 작업을 수행

function getUserInfo() {
  fetch("work1.html").then(function (response) {
    response.text().then(function (text) {
      document.getElementById("userInfo").innerHTML = text;
    });
    //fetch 뒤에는 연결할 서버 혹은 파일
    //fetch api에 따르면 fetch함수를 부르면서 부르는 callback 함수의 첫 번째 인자로는
    //'response'라는 객체를 받는다고 설명되어 있다.

    if (response.status === 200) {
      console.log("데이터 통신 성공!");
    } else {
      alert("데이터 통신 실패..");
    }
  });
}
// 위 코드를 해석해보면,
// 클릭 버튼을 누르면 fetch가 연결 된 getUserInfo 함수가 실행된다.
// work1.html에 있는 내용이 userInfo라고 만들어 놓은 부분에 넣어진다.
// response가 객체인것을 알았기에 이를 활용하여 로직을 짤 수 있게 되었다.
// 만약 response.status === 200 이면 통신 성공! 이란 콘솔을 띄우고
// 그게 아니라면 데이터 통신 실패란 경고창을 띄우게 하였다.

// 출처: https://velog.io/@haileyself/TIL-Ajax-fetch-promise-uak0t7wne7
