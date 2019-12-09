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

---

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

---

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

### Class Components

- 일반적으로 코드를 조직화하기 편하다
- 처음 시작하기 좋다
- 유저 인풋을 핸들링하기 쉽다

---

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

```js
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

---

# 04.pics

### event handling flow

- User types in input
- Callback gets invoked
- We call setState with the new value
- component rerenders
- input is told what its value is (coming from state)

### Controlled vs Uncontrolled

React World

```js
state -> {term: 'hi there'}
```

DOM world

```html
<input value="{go" look at state to get current value} />>
```

### free image api test

https://unsplash.com/developers

### axios

```js
// .then()
onSearchSubmit(term) {
  axios.get('https://api.unsplash.com/search/photos', {
    params: {
      query: term
    },
    headers: {
      Authorization: 'Client-ID 5869ea741bfb94a8215604a6abc0ec1ba600e8515eeeb3dbab751fdfa598640d'
    }
  }).then(res => {
    console.log(res.data.results);
  });
}

// async & await
onSearchSubmit = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    params: {
      query: term
    },
    headers: {
      Authorization: 'Client-ID 5869ea741bfb94a8215604a6abc0ec1ba600e8515eeeb3dbab751fdfa598640d'
    }
  });

  this.setState({
    images: response.data.results
  })
}
```

#### axios.create

```js
import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 5869ea741bfb94a8215604a6abc0ec1ba600e8515eeeb3dbab751fdfa598640d"
  }
});
```

### React Refs

- 단일 DOM 엘리먼트에 접근가능하다
- constructor안에서 ref를 생성하고, 특정 JSX를 props으로 넘긴다.

```js
constructor(props) {
  super(props);
  this.imageRef = React.createRef();
}

componentDidMount() {
  console.log(this.imageRef);
}

render() {
  const { urls, description } = this.props.image;
  return (
    <div>
      <img
        ref={this.imageRef}
        src={urls.regular}
        alt={description}
      />
    </div>
  );
}
```

### callbacks on image load

```js
componentDidMount() {
  this.imageRef.current.addEventListener('load', this.setSpans);
}

setSpans = () => {
  console.log(this.imageRef.current.clientHeight);
}
```

---

# 05.video

### 프로젝트 목표

- props로 비디오 검색 구현하기

#### google youtube & search api

https://console.developers.google.com/
https://developers.google.com/s/results?q=search%20api

---

# 06.songs

### 프로젝트 목표

- redux: createStore, combineReducers
- react-redux: Provide, connect()

---

# 07.blog ( Async Actions with Redux Thunk)

### 프로젝트 목표

- reducers 목적 이해
- Redux에서의 API 요청 이해
- redux-thunk 미들웨어 이해

### JSONPlaceholder API

jsonplaceholder.typicode.com

### 일반적인 Redux 데이터 로딩 과정

- 컴포넌트가 스크린에 렌더링된다
- 컴포넌트의 componentDidMount 라이프사이클 메서드가 호출된다
- componentDidMount 메서드에서 액션 크리에이터를 호출한다

  └ 컴포넌트는 데이터 패칭이 정의된 액션 크리에이터의 호출을 담당한다.

  ```js
  // PostList.js
  componentDidMount() {
    this.props.fetchPosts()
  }
  ```

- 액션 크리에이터에서 비동기 API 요청을 실행한다.
- API가 data를 반환한다
- 액션 크리에이터가 패치된 데이터를 payload 프로퍼티에 담아서 action을 반환한다.

  └ 액션 크리에이터는 API 요청을 담당한다. _(이곳이 Redux-Thunk가 역할하는 시점)_

- 어떤 리듀서가 액션을 보고 있다가, payload에 데이터를 반환한다.
- 우리가 새로운 state 오브젝트를 생성하면, reduc/react-redux는 앱을 reredering한다.

  └ 패칭 데이터가 들어와서 새로운 state가 생성되면, mapStateToProps 함수를 통해 컴포넌트로 들어온다.

### Redux Cycle

Action Creator -> Action -> dispatch -> middleware(thunk, saga...) -> Reducers -> State

- redux: 리덕스 라이브러리
- react-redux: 리액트와 리덕스 사이의 통합 레이어
- axios: 네트워크 요청을 도와줌
- redux-thunk: 리덕스 애플리케이션 내에서 요청을 도와주는 미들웨어

### Middleware in Redux

- dispatch 하는 모든 액션과 함께 호출되는 함수이다.
- 액션과 함께 Stop, Modify가 가능하다.
- 엄청나게 많은 오픈소스 미들웨어가 존재한다.
- 보편적으로 미들웨어를 사용하는 목적은 비동기 액션 처리이다.

### Normal Rules

- 액션 크리에이터는 반드시 plain action object를 반환해야한다.
- 액션은 반드시 type 프로퍼티를 가져야 한다.
- 액션은 옵셔널하게 payload를 가질 수 있다.

### Rules with Redux Thunk

github.com/reduxjs/redux-thunk

1. 액션 크리에이터는 plain action object를 반환할 수도 있고, function을 반환할 수도 있다. (함수인 경우 즉시 실행)
2. 액션 크리에이터가 plain action object를 반환하면 바로 reducer로 넘어간다.
3. 액션 크리에이터가 function을 반환하면, dispatch, getState를 인자로 받는 function을 실행한뒤, 요청이 끝날때까지 기다렸다가 요청 완료 후 액션을 디스패치한다.
4. 다시 1번으로 넘어간다.
5. plain object이 생성된다.

#### api/jsonPlaceholder.js

```js
import axios from "axios";

export default axios.create({
  baseURL: "http://jsonplaceholder.typicode.com"
});
```

#### actions/index.js

```js
import jsonPlaceholder from "../api/jsonPlaceholder";

// Bad approach!!!!
// Error: Actions must be plain objects. Use custom middleware for async actions.
// export const fetchPosts = async () => {
//     const response = await jsonPlaceholder.get('/posts');

//     return {
//         type: 'FETCH_POSTS',
//         payload: response
//     }
// };

// with promise
// export const fetchPosts = () => {
//     const promise = jsonPlaceholder.get('/posts');

//     return {
//         type: 'FETCH_POSTS',
//         payload: promise
//     }
// };

// with redux-thunk
// export const fetchPosts = () => {
// 	return async (dispatch, getState) => {
// 		const response = await jsonPlaceholder.get('/posts');

// 		dispatch({
// 			type: 'FETCH_POSTS',
// 			payload: response
// 		});
// 	}
// };
// =>
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({
    type: "FETCH_POSTS",
    payload: response
  });
};
```

### flow

[Action Creators]
fetchPosts
fetchUser

[Action]
{
type: 'FETCH_POST',
payload: response.data
}
{
type: 'FETCH_USER',
payload: response.data
}

[ **\_\_\_** Store **\_\_\_** ][reducers]
postsReducer
userReducer
[ ____________________ ]

### Ruls of Reducers

1. 첫번째로 reducer가 호출되며 초기화된다.

2. 'undefined'를 제외한 어떤 값이든 리턴해야 한다.

3. PRODUCES 'STATE', OR DATA TO BE USED INSIDE OF YOUR APP USING ONLY PREVIOUS STATE AND THE ACTION
   [첫번째로 리듀서가 호출될 때]
   underfined, action #1을 인자로 받아서, reducer는 state v1을 반환한다.
   [두번째로 리듀서가 호출될 때]
   state v1과 action #2를 인자로 받아서, reducer는 state v2를 반환한다.

4. MUST NOT RETURN REACH 'OUT OF ITSELF' TO DECIDE WHAT VALUE TO RETURN (REDUCERS ARE PURE)
   기존 상태와 액션을 통해서만 리턴할 값을 결정해야 한다.

5. state argument를 직접 변경(mutate)하면 안된다.

```js
// mutate array
const colors = ['red', 'green']
colors.push('purple')
colors
> ['red', 'green'. 'purple']

// mutate object
const profile = { name: 'alex'}
profile.name = 'sam'


// immutate
const name = 'sam'
name[0]
> 's'
name[0] = 'x'
name[0]
> 's'
```

### memoize

https://lodash.com

npm i --save lodash

```js
function getUser(id) {
  fetch(id);
  return "Mad a request!";
}

// 기존 함수를 감싸서,
// 아규먼트를 세팅하여 한번만 호출하면,
// 메모아이제이션 된다.
// 두번째부터는 기존 함수가 호출되는게 아니라,
// 메모아이즈 된 리턴값이 반환된다.
const memoizedGetUser = _.memoize(getUser);

// fetch users
// export const fetchUser = id => async dispatch => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: "FETCH_USER", payload: response.data });
// };

// export const fetchUser = function(id) {
//   return _.memoize(async function(dispatch) {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({ type: "FETCH_USER", payload: response.data });
//   });
// };

export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
});
```

---
