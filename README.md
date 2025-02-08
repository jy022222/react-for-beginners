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


#3.4:: State Functions <br>
🩵 state를 바꾸는 두가지 방법

1️⃣ setCounter를 이용하여 원하는 값 넣어주기

const [counter, setCounter] = React.useState(0);
const onClick = () => {
    setCounter(987);
    //setCounter("Hello"); << 이렇게 문자로 넣어줄 수도 있음
}
 
이런식으로!!


2️⃣ 함수로 이전 값을 이용해서 현재 값 계산하기

const [counter, setCounter] = React.useState(0);
const onClick = () => {
   setCounter((current) => current + 1);
   //첫번째 인자는 현재 값,     return값이 새로운 state
}

이 방법에서 current가 확실히 현재 값이라는 걸 보장하고 있기 때문에

이게 좀 더 직접적이고 분명한 방법이다!


#3.5:: Input and State <br>
✅ Unit Converter 앱 만들기

🩵React로 input minutes에 어떤 숫자를 적었는지 추적해보자

function App (){
    const [minutes, setMinutes] = React.useState();
    const onChange = (event) => {
        setMinutes(event.target.value)
    }
    //onChange 함수를 만들어서 사용자가 input에 입력할때를 감지함 + event.target.value로 값까지 알아냄

    return (
        <div>
            <h1 id="title">Super Converter</h1> 

            <label htmlFor="minutes">Minutes</label>
            <input value={minutes} id="minutes" placeholder="Minutes" type="number" onChange={onChange}/>
            <h4>you wanna convert {minutes}</h4>

            <label htmlFor="hours">Hours</label>
            <input id="hours" placeholder="Hours"  type="number" />
        </div>
    )
}

minutes를 데이터로 갖는 useState를 만들어준 후, 그 minutes의 값을 컴포넌트에 보여주기 위해
input에 value={minutes} << 이렇게 세팅해줌!

그리고 onChange 함수를 생성해서 setMinutes에 사용자가 input에 입력한 value를 받도록 세팅해주고
ipnut에 onChange = {onChange}로 이벤트를 연결해주면 됨!

#3.6:: State Practice One <br>

function App (){
    const [minutes, setMinutes] = React.useState(0);
    const onChange = (event) => {
        setMinutes(event.target.value)
    }

    return (
        <div>
            <h1 id="title">Super Converter</h1> 
            <div>
                <label htmlFor="minutes">Minutes</label>
                <input value={minutes} id="minutes" placeholder="Minutes" type="number" onChange={onChange}/> 
            </div>
            <div>
                <label htmlFor="hours">Hours</label>
                <input value={Math.round(minutes / 60)} id="hours" placeholder="Hours"  type="number" />
                            //분을 시로 변환시키기 위해 minutes를 60으로 나누고 반올림까지!
            </div>



        </div>
    )
}

시간을 나타내주는 Hours 관련된 input과 label도 생성해준 후,
분을 시로 변환시키기 위해  {minutes}  를 60으로 나누고  Math.round  로 반올림까지 해주었다!

🩵 Reset 버튼 사용해보기

const reset = () => setMinutes(0);
    //reset함수 추가

<button onClick={reset}>Reset</button>
    //reset 버튼 추가

setMinutes를 0으로 되돌리는 reset함수를 만들어 준 후,
button에 onClick으로 이벤트 연결만 해주면 됨!


#3.7:: State Practice Two <br>
🩵 단위 변환 뒤집어보기 (Flip)
function App (){
    const [minutes, setMinutes] = React.useState(0);
    const [flipped, setFlipped] =  React.useState(false);
    //Flip useState 만들어주기 (true/false)


    const onChange = (event) => {
        setMinutes(event.target.value)
    };
    const reset = () => setMinutes(0);
    const onFlip = () => setFlipped((current) => !current);
    //flipped이 true 상태면 false를 반환, false 상태면 true를 반환할 것임

    return (
        <div>
            <h1 id="title">Super Converter</h1> 
            <div>
                <label htmlFor="minutes">Minutes</label>
                <input value={minutes} id="minutes" placeholder="Minutes" type="number" onChange={onChange} disabled={flipped === true} /> 
            	//flipped가 true면 disalbed 상태로
            </div>
            <div>
                <label htmlFor="hours">Hours</label>
                <input value={Math.round(minutes / 60)} id="hours" placeholder="Hours"  type="number" disabled={flipped === false} />
            	//flipped가 false면 disalbed 상태로
            </div>
            <button onClick={reset}>Reset</button>
            <button onClick={onFlip}>Flip</button>
        </div>
    )
}

새로 생성해준 true 혹은 false 변수인 flipped !!
사용자가 Flip 버튼을 클릭하면 onFlip 함수가 실행되어 해당 함수는 현재 값 (current)를 받아서 그 반대의 값을 내놓을 것입니다.
그 값으로 input을 disabled 할건지, enabled할 건지 결정할 수 있게 됩니다. 

<input value={minutes} id="minutes" placeholder="Minutes" type="number" onChange={onChange} disabled={flipped} />
<input value={Math.round(minutes / 60)} id="hours" placeholder="Hours"  type="number" disabled={!flipped} />

!를 사용하면 더욱 간결하게 나타낼 수도 있습니다.

 //기존 minutes 변수를 'amount'로 바꿨음
 
 function App (){
        const [amount, setAmount] = React.useState(0);
        const [flipped, setFlipped] =  React.useState(false);
        //Flip useState 만들어주기 (true/false)

        const onChange = (event) => {
            setAmount(event.target.value)
        };
        const reset = () => setAmount(0);
        const onFlip = () => {
            reset();
            setFlipped((current) => !current);
        } 
        //flipped이 true 상태면 false를 반환, false 상태면 true를 반환할 것임
         
        return (
            <div>
                <h1 id="title">Super Converter</h1> 
                <div>
                    <label htmlFor="minutes">Minutes</label>
                    <input value={flipped ? amount * 60 : amount} id="minutes" placeholder="Minutes" type="number" onChange={onChange} disabled={flipped} /> 
                	//삼항연산자 >> flipped 상태면 state 원래 값 보여주기 아니면 변환된 값 보여주기 (시를 분으로)
                </div>
                <div>
                    <label htmlFor="hours">Hours</label>
                    <input value={ flipped ? amount : Math.round(amount / 60)} id="hours" placeholder="Hours"  type="number" onChange={onChange} disabled={!flipped} />
                	//삼항연산자 >> flipped 상태면 state 원래 값 보여주기 아니면 변환된 값 보여주기 (분을 시로)
                </div>
                <button onClick={reset}>Reset</button>
                <button onClick={onFlip}>Flip</button>
            </div>
        )
    }

    삼항연산자를 사용하여 flipped의 상태에 따라 사용자가 입력한 값을 노출할건지, 변환된 값을 노출할건지 설정해줄 수 있습니다.
    이렇게 시를 분으로, 분을 시로 계산해주는 식까지 삼항연산자에 넣어주면
    Pretty cool 하고 sexy한 단위변환기를 구현할 수 있습니다 😀
