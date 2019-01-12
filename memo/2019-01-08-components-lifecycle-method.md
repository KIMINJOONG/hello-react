<p>모든 리액트 컴포넌트에는 라이프사이클(수명주기)가 존재. 컴포넌트 수명은 페이지에 렌더링되기 전 <br/>
    렌더링되기 전 준비 과정에서 시작하여 페이지에서 사라질때 끝이난다.
</p>

<h2>이해</h2>
<p> 라이프사이클의 메서드의 종류는 총 열 가지입니다. Will 접두사가 붙은 메서드는 어떤 작업을 작동하기 전!!에 실행되는 메서드<br/>
    Did접수다가 붙은 메서드는 어떤 작업을 작동한 후!!에 실행되는 메서드
</p>
<p>
    라이프 사이클은 총 세가지 카테고리로 나눈다.
</p>
<ul>
    <li>마운트</li>
    <li>업데이트</li>
    <li>언마운트</li>
</ul>

<h2>마운트</h2>
<p>DOM이 생성되고 웹 브라우저상에 나타나는것 마운트할 때 호출하는 메서드는 아래와 같다.</p>

<ol>
    <li>컴포넌트만들기</li>
    <li>constructor : 컴포넌트를 새로 만들때마다 호출되는 클래스 생성자 메서드</li>
    <li>getDerivedStateFromProps : props에 있는 값을 state에 동기화하는 메서드</li>
    <li>render : 우리가 준비한 UI를 렌더링 하는 메서드</li>
    <li>componentDidMount : 컴포넌트가 웹 브라우저상에 나타난 후 호출하는 메서드</li>
</ol>

<h2>업데이트 : 컴포넌트를 업데이트 할때는 다음 총 네가지 경우</h2>
<ol>
    <li>props가 바뀔 때</li>
    <li>state가 바뀔 때</li>
    <li>부모 컴포넌트가 리렌더링될 때</li>
    <li>this.forceUpdate로 강제로 렌더링을 트리거 할때</li>
</ol>
<p>컴포넌트를 업데이트할때는 다음과 같은 메서드를 호출</p>



<h2>살펴보기</h2>
<h3>render() 함수</h3>
<ul>
    <li>라이프 사이클 메서드 중 유일한 필수 메서드</li>
    <li>컴포넌트 모양새를 정의</li>
    <li>이 메서드안에서 this.props와 this.state에 접근가능</li>
    <li>리액트 요소를 반환 (div같은 태그, 따로 선언한컴포넌트), 아무것도 보여주고 싶지않으면 null , false값을 반환</li>
</ul>
<h4>주의<h4>
<ul>
    <li>절대로 state값을 변형해서는 안된다.</li>
    <li>웹브라우저에 접근해서도 안된다.</li>
    <li>DOM정보를 가져오거나 변화를 줄때는 componentDidMount에서 처리</li>
</ul>

<h2>constructor메서드</h2>
<ul>
    <li>컴포넌트의 생성자 메서드 컴포넌트를 만들때 처음으로 실행</li>
    <li>초기 state를 정할 수 있음</li>
</ul>

<h2>getDerivedStateFromProps메서드</h2>
<ul>
    <li>리액트 v16.3이후에 새로 만든 라이프사이클 메서드</li>
    <li>props로 받아 온 값을 state에 동기화시키는 용도로 사용</li>
    <li>컴포넌트를 마운트 or props를 변경할 때 호출</li>
</ul>

<h2>componentDidMount메서드</h2>
<ul>
    <li>컴포넌트를 만들고, 첫 렌더링을 다 마친 후 실행</li>
    <li>이 안에서 다른 자바스크립트 라이브러리 또는 프레임워크의 함수를 호출, 이벤트 등록, setTimeout, setInterval, 네트워크 요청 같은 비동기 작업 처리</li>
</ul>

<h2>shouldComponentUpdate메서드</h2>
<ul>
    <li>props 또는 state를 변경했을때, 리렌더링을 시작할지 여부를 지정하는 메서드</li>
    <li>이 메서드에서는 반드시 true값 또는 false값을 반환해야함</li>
    <li>컴포넌트를 만들 때 이 메서드를 따로 생성하지않으면 default는 언제나 true</li>
    <li>false값을 반환시 업데이트 과정은 여기에서 중지</li>
    <li>이 메서드 안에서 현재 props와 state는 this.props, this.state로 접근</li>
    <li>새로 설정될 props또는 state는 nextProps와 nextState로 접근</li>
    <li>프로젝트 성능을 최적화할때, 상황에 맞는 알고리즘을 작성하여 리렌더링을 방지할때는 false값을 반환하게 함</li>
</ul>

<h2>getSnapshoptBeforeUpdate메서드</h2>
<ul>
    <li>리액트 16.3이후 만든 메서드</li>
    <li>render메서드를 호출한후 DOM에 변화를 반영하기 바로직전에 호출하는 메서드</li>
    <li>반환하는 값은 componentDidUpdate에서 세번째 파라미터인 snapshot값으로 전달받을수 있음</li>
    <li>주로 업데이트하기 직전의 값을 참고할 일이 있을때 활용(ex: 스크롤바 위치 유지)</li>
</ul>

<h2>componentDidUpdate 메서드</h2>
<ul>
    <li>리렌더링을 완료한 후 실행</li>
    <li>업데이트가 끝난 직후이므로, DOM관련 처리를 해도 무방</li>
    <li>여기에서 prevProps 또는 prevState를 사용하여 컴포넌트가 이전에 가졌던 데이터 접근 가능</li>
    <li>getSnapshotBeforeUpdate에서 반환한 값이 있다면 여기에서 snapshot값을 전달 받을수 있음</li>
</ul>

<h2>componentWillUnmount메서드</h2>
<ul>
    <li>컴포넌트를 DOM에서 제거할 때 실행</li>
    <li>componentDidMount에서 등록한 이벤트, 타이머, 직접생선한 DOM이 있다면 여기에서 제거 작업을 해야함</li>
</ul>

<h2>정리</h2>
<ul>
    <li>마운트 -> constructor -> getDerivedStateFromProps -> render -> componentDidMount</li>
    <li>업데이트 (props변경, 부모리렌더링) -> getDerivedStateFromProps -> render</li>
    <li>업데이트 (setState) -> shouldComponentUpdate (값이 true),(flase일때는 여기서 멈춤) -> render -> getSnapshotBeforeUpdate -> componentDidUpdate</li>
    <li>언마운트 -> componentWillUnmount</li>
</ul>
<ul>
    <li>라이프사이클 메서드는 컴포넌트상태에 변화가 있을 때마다 실행하는 메서드</li>
    <li>서드파티 라이브러리를 사용하거나 DOM을 직접 건드려야하는 상황에서 유용</li>
    <li>컴포넌트 업데이트의 성능을 개선할 때는 shouldComponentUpdate가 중요하게 사용</li>
</ul>