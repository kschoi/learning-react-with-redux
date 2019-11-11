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

# 01.jsx

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

# 02.components

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
