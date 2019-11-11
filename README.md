# create-react-app

```js
npm i -g create-react-app
create-react-app projectName
// or
npx create-react-app projectName
```

# react and react-dom

```js
import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return <div>Hi There!</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
```

# 01.JSX

### babel : react jsx

https://babeljs.io/

### JSX vs HTML

- 엘리먼트의 style 프로퍼티 사용 시 문법이 다름
- 엘리먼트에 class 추가할 때 문법이 다름
- JSX는 JS 변수를 참조할 수 있음

#### html

```html
<div style="background-color:red;color:white"></div>
<label class="label" for="name">label</label>
```

#### jsx

```jsx
<div style={{ backgroundColor:'red',color:white}}>
<label className="label" htmlFor="name">{getLabelText()}</label>
```

# 02.Components

- Function or Class
- 유저에게 보여줄 html 생성 (JSX)
- 유저로부터 받은 이벤트 핸들링 (Event Handlers)

### semantic ui

https://semantic-ui.com/

### Communicating with Props

- Component Nesting
- Component Reusability
- Component Configuration

```jsx
<ApprovalCard>
  <CommentDetail
    author="Sam"
    timeAgo="Today at 4:45PM"
    content="content1"
    avatar={faker.image.avatar()}
  />
</ApprovalCard>;

{
  props.children;
}
```

### Functional Components and Class Components

#### Class Components

- 일반적으로 코드를 조직화하기 편하다
- 처음 시작하기 좋다
- 유저 인풋을 핸들링하기 쉽다

# 03.Seasons

### Geolocation API

```js
window.navigator.geolocation.getCurrentPosition(
  position => console.log(position),
  err => console.log(err)
);
```

### Rules of Class

- javascript class여야 한다.
- React.Component를 확장해야한다.
- jsx를 리턴하는 render 함수를 반드시 정의해야한다.

### Rules of State

- 클래스 컴포넌트에서만 가능하다
- State는 컴포넌트에 대응하는 데이터를 담은 자바스크립트 오브젝트다
- State가 업데이트되면, 컴포넌트가 즉시 재렌더링된다
- State는 컴포넌트가 생성될때 반드시 초기화되어야 한다
- State는 'setState' 함수로만 업데이트 가능하다

### Component Lifecycle

- constructor
  1번만 셋업되어야할 작업들 넣기
- render
  JSX에 리턴되어야할 것들 외에는 넣지 말것
- componentDidMount
  데이터 가져오기 넣기
- componentDidUpdate
  state/props가 변경될 때 데이터를 더 가져오기 넣기
- componentWillUnmount
  클린업하기 넣기

#### Other lifecyle methods (rarely used)

- shouldComponentUpdate
- getDerivedStateFromProps
- getSnapshotBeforeUpdate

### defaultProps

```jsx
// bad
{
  props.message || "Loading...";
}

// good
Spinner.defaultProps = {
  message: "Loading..."
};
```

### helper function

```jsx
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request..." />;
  }

  // React says we have to define render!!
  render() {
    // if (this.state.errorMessage && !this.state.lat) {
    //   return <div>Error: {this.state.errorMessage}</div>;
    // }

    // if (!this.state.errorMessage && this.state.lat) {
    //   return <SeasonDisplay lat={this.state.lat} />;
    // }

    // return <Spinner message="Please accept location request..." />;
    return <div className="border red">{this.renderContent()}</div>;
  }
```
