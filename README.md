# react-for-beginners
#2.1 :: Before React

✅ 클릭을 카운팅해주는 JS 앱 만들기

﻿- 자바스크립트로 만들어 보기﻿
<!DOCTYPE html>
<html>
<body>
    <span>Total clicks : 0</span>
    <button id="btn">Click me</button>
    // STEP 01. HTML 만들기
</body>
<script>
    let counter = 0;
    const button = document.getElementById('btn');
    const span = document.querySelector('span');
    //STEP 02. HTML을 자바스크립트로 가져온다.
    function handleClick() {
        console.log('I have been clicked');
        counter = counter + 1;
        //STEP 04. 데이터를 업데이트 한다.
        span.innerText = `Total clicks : ${counter}`
        //STEP 05. HTML을 업데이트 한다.
    }
    button.addEventListener("click", handleClick); 
    //STEP 03. 이벤트를 감지한다.
</script>
</html>


1. HTML을 만든다.

2. HTML을 자바스크립트로 가져온다.

3. 이벤트를 감지한다.

4. 데이터를 업데이트 한다.

5. HTML을 업데이트 한다.



이런 방식으로는 계~ 속 변수설정을 해주고 계~ 속 이벤트리스너를 추가해줘야 한다.

=> 좀 더 편리하고, 설계적인 방식의 프로그래밍이 필요 !
