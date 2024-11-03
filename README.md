# react-for-beginners
#2.1 :: Before React

✅ 클릭을 카운팅해주는 JS 앱 만들기

﻿- 자바스크립트로 만들어 보기﻿

이런 방식으로는 계~ 속 변수설정을 해주고 계~ 속 이벤트리스너를 추가해줘야 한다.

=> 좀 더 편리하고, 설계적인 방식의 프로그래밍이 필요 !


#2.2 :: Our First React Element ~ #2.3 :: Events in React

자바스크립트로 엘리먼트를 생성하고 HTML로 바꾸는 방식의 힘 !!
addEventLister를 반복하는 것 대신에 프로퍼티에서 이벤트를 바로 등록 :)


#2.4 :: Recap
1. React JS와 ReactDOM을 설치해주었다.

-React JS가 인터렉티브한 앱의 원동력!

-ReactDOM은 React 엘리먼트들을 가져다가 HTML로 바꾸는 역할을 한다.

2. React.createElement로 엘리먼트 생성!

-각각의 엘리먼트들은 프로퍼티들을 가질 수 있다. (style, class, event listener, content 등 ..)

3. React JS는 스마트하기 때문에 event listener로 등록해준 것을 알고 자동으로 이벤트를 업데이트 해준다.


#2.5 ~ #2.6 JSX
1. JSX로 엘리먼트를 더 편리하게 생성하기 위해 <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script> 요 바벨 코드를 임포트 해주었다.

2. const Title = ( <h3 id="title" onMouseEnter={() => console.log("mouse enter")}>Hello I'm a title</h3>
    ); 이런식으루 HTML코드와 매우 흡사하게 적어주는데 ,, 이게 다임 !

3. 컴포넌트와 해주기 위해 저 const를 화살표 함수 형태로 바꿔준다.

4. <Title /> 이런식으로 맨앞글자는 무조건 대문자로, 해당 형태로 표기해주면 완성 ~ 🐰

왜 잔디 제대로 안심어짐? ㅠㅠ
