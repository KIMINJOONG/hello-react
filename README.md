<h2>jsx란?</h2>
자바스크립트의 확장 문법으로 XML과 매우 비슷하게 생김
나중에 코드가 번들링되면서 babel-loader를 사용하여 자바스크립트로 변환!

<h2>jsx의 장점</h2>
  <ol>
    <li>보기쉽고 익숙하다.</li>
    <li>오류 검사 -> 바벨이 코드를 변환하는 과정에서 이를 감지</li>
    <li>더욱 높은 활용도 </li>
  </ol>
 

<h2>JSX문법</h2>
  <ol>
    <li>감싸인 요소</li>
    <li>자바스크립트 표현<Br/> - 단순히 DOM요소를 렌더링하는 기능뿐만아니라고 JSX안에서 자바스크립트 표현식이 가능
    단! JSX내부에서 코드를 {}로 감싸야 함</li>
    <li>if문 대신 조건부 연산자 <br/>- JSX내부의 자바스크립트 표현식에서는 if문이 사용 불가능 JSX밖에서 if문을 사용하거나, {}안에 삼항연산자를 사용</li>
    <li>&&를 사용한 조건부 렌더링</li>
    <li>
      인라인 스타일링<br/>- DOM요소에 스타일을 적용할 때는 문자열 형태로 적용할수 없음. 그 대신 CSS스타일을 자바스크립트 객체 형식으로 만들어 적용       (key는 camelCase로 작성)
    </li>
    <li>class대신 className<br/>- class키워드는 이미 자바스크립트에 존재하는 키워드 이기때문에 className을 사용</li>
    <li>꼭 닫아야하는 태그<br/>- JSX에서 닫아주지않는다면 virtual DOM에서 트리형태의 구조를 만들지 못하기때문에 오류가 발생</li>
    <li>주석<br/>- JSX안에서 주석은 자바스크립트와 다름 {/* */} 자바스크립트 표현식을 사용할때 처럼 작성</li>
  </ol>

<h2>정리</h2>
JSX는 HTML과 비슷하지만 완전히 똑같지는 않다.<br/>
코드로 보면 XML형식이지만 실제로는 자바스크립트 객체며, 용도도 다르고 문법도 차이가 남.


<h2>ReactDOM.redner는 무엇을하는 코드일까?</h2>
-컴포넌트를 페이지에 렌더링 하는역할 react-dom 모듈을 불러와 사용가능<br/>
첫번째 파라미터에는 페이지에 렌더링할 내용을 JSX형태로 작성, 두번째 파라미터는 해당 JSX를 렌더링 할 document내부 요소를 설정
id가 root인 요소안에 렌더링 하도록 설정


<h2>컴포넌트</h2>
리액트를 사용하여 애플리케이션의 인터페이스를 설계할 때 사용자가 볼 수 있는 요소는 여러개의 컴포넌트로 구성되어있음

<h2>props란?</h2>
    - properties를 줄인표현으로 컴포넌트 속성을 설정할 때 사용하는 요소.<br/>
    - props 값은 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트(여기서는 App 컴포넌트가 부모 컴포넌트)에서만 설정!<Br/>
    - props에 접근할때는 this 키워드를 사용하여 접근<Br/>
    - props 기본 값 설정 : defaultProps

<h2>props 검증 : propTypes</h2>
    - 컴포넌트의 필수 props를 지정하거나 props 타입을 지정할때 사용<Br/>
    - propTypes를 사용하려면 코드 위쪽에 import PropTypes from 'prop-types'; 를 해줘야함<Br/>
    - 필수 propTypes를 설정할때는 뒤에 isRequired를 불여주면 됨.<Br/>
    - 문자열 종류 외으 값을 컴포넌트에 전달 할때는 { } 로 감싸야함! 아니면 문법오류<Br/>

defaultProps와 propTypes는 필수 사항은 아니다 but 꽤 다른 개발자와 협업을 할때 컴포넌트에 어떤 props가 필요한지 쉽게 알 수 있어 개발 능률올라감


<h2>state</h2>
    - props는 부모 컴포넌트가 설정 컴포넌트 자신은 해당 props를 읽기전용으로만 사용<Br/>
    - 컴포넌트 내부에서 읽고 또 업데이트 할 수 있는 값을 사용하려면 state<Br/>
    - 기본값을 미리 설정해야 사용가능 this.setState()메서드로만 값을 업데이트 해야함<Br/>

<h2>컴포넌트의 생성자 메서드 : constructor()</h2>
    - state 초깃 값은 컴포넌트의 생성자 메서드인 constructor 내부에서 설정<Br/>
    - 생성자 메서드는 컴포넌트를 새로 만들때 실행됨<Br/>
    - 리액트의 Component 클래스를 상속하는데 따로 constructor메서드를 만들어 주지 않으면 Component 클래스의 생성자 메서드를 그대로 사용
      직접 constructor메서드를 작성하여 생성자 메서드에 추가작업을 하려면 먼저 호출해주고 super키워드를 사용해 props를 메서드의 파라미터로 전달
        - props를 전달하는 이유는 컴포넌트를 만들때 props값들을 사용하므로!

<h2>state 값 업데이트:setState()</h2>
    - state값을 업데이트 할 때는 this.setState() 메서드를 사용

<h2>state를 constructor에서 꺼내기</h2>
    - 원래 초기 state는 constructor메서드에서 정의해야하지만, defaultProps와 propsTypes를 정의할때 사용한
      transform-class-propertis문법으로 constructor 바깥에서 정의가능

<h2>state값을 업데이트할 때 주의사항</h2>
    - state 값을 업데이트할때는 무조건!! .setState로만 업데이트!!<Br/>
    - setState()메서드가 하는 역할은 파라미터로 전달받은 필드를 업데이트한후 리렌더링하도록 트리거하는것<Br/>
    - state에 직접 접근하여 수정하면 컴포넌트를 자동으로 리렌더링 하지않음 but this.forceUpdate()메서드를 호출하여 강제로 가능하지만 매우 비효율적

<h2>정리</h2>
    - props는 부모 컴포넌트가 설정 state는 컴포넌트 자체적으로 지닌 값으로 컴포넌트 내부에서 값을 업데이트<Br/>
    - props를 사용한다고 해서 무조건 고정적인것은 아니다!

