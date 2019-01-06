<h2>이벤트 핸들링</h2>
    - 유저가 웹 브라우저에서 DOM요소들과 상호 작용하는 것을 이벤트 라고 함.

<h3>이벤트를 사용할 때 주의 사항</h3>
<ul>
<li>이벤트 이름은 camelCase로 작성한다. <br/> ex) onclick -> onClick으로 작성</li>
<li>이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달</li>
<li>DOM요소에만 이벤트를 설정할 수 있다.</li>
</ul>

<h3>임의 메서드</h3>
    - 컴포넌트에 임의 메서드를 만들면 기본적으로 this에 접근불가<br/>
    - 따라서 컴포넌트 생성자 메서드인 constructor에서 각 메서드를 this와 바인딩해줘야함

<h3>바인딩이란?</h3>
    - "묶다"라는 뜻 즉 메서드에서 this를 사용할 수 있도록 this를 묶어 주는것! 이작업을 하지않으면 메서드에서 this를 부를때 undefined가 리턴됨

<h2>정리</h2>
    - 리액트에서 이벤트를 다루는 것은 순수 자바스크립트 혹은 jQuery랑 비슷하다!