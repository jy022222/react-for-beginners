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


#2.5 ~ #2.6 :: JSX
1. JSX로 엘리먼트를 더 편리하게 생성하기 위해 <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script> 요 바벨 코드를 임포트 해주었다.

2. const Title = ( <h3 id="title" onMouseEnter={() => console.log("mouse enter")}>Hello I'm a title</h3>
    ); 이런식으루 HTML코드와 매우 흡사하게 적어주는데 ,, 이게 다임 !

3. 컴포넌트와 해주기 위해 저 const를 화살표 함수 형태로 바꿔준다.

4. <Title /> 이런식으로 맨앞글자는 무조건 대문자로, 해당 형태로 표기해주면 완성 ~ 🐰

왜 잔디 제대로 안심어짐? ㅠㅠ


#3.0 :: State <br>
JSX로 엘리먼트를 생성하는 쉽고 편한 방법으로 코딩을 해주었다!
const root = document.getElementById('root');
    let counter = 0;
    function countUp() {
        counter = counter + 1; 
        render();
    }

    function render() {
        //여기서 한번 렌더링을 한번 더 해줘야 UI가 업데이트 되는 것.
        ReactDOM.render(<Container />, root);
    }

    const Container = () => ( <div>
           <h3 id="title">Total clicks: {counter}</h3>
            <button onClick={countUp}>Click me</button>
        </div>
    )

ReactDOM.render(<Container />, root);

하지만 이 방법은 계속해서 render 함수를 호출하여 렌더링하고 있기 때문에
좋은 방법은 아님! 그렇다면 베스트 방법은?? >> 다음 시간ㅇㅔ .. 

#3.1 ~ #3.3 :: useState <br>
useState를 이용하면 render 함수를 호출하지 않고도 간단하고 똑똑하게 데이터를 업데이트 할 수 있 따!

const [counter, setCounter] = React.useState(0);
const onClick = () => {
    setCounter(counter + 1);
    //setCounter 함수는 ()안에 값을 받아서 그 값으로 업데이트하고, 리렌더링을 일으킴
}

return (
    <div>
        <h3 id="title">Total clicks: {counter}</h3>
        <button onClick={onClick}>Click me</button>
    </div>
)

이렇게 setCounter 안에 counter라는 데이터를 +1 해주는 이벤트를 넣으면
state가 변경되며 컴포넌트가 재생성 (리렌더링) 된다.
이때, DOM 모두가 바뀌는 게 아니라 우리가 바꾸고 있는 부분, 즉 여기선 {counter} << 이 부분만 변경되는
아주 스마트한 일이 일어나고잇는 거시다.
