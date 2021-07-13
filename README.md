# classting-subject

클래스팅 프론트엔드 엔지니어 포지션 과제

퀴즈 풀이 웹사이트(모바일)

## Business logic

- use Recoil to manage global state

### Recoil State tree

- src/state
  - QuizDifficulty : LandingPage 에서 quiz difficulty 선택하여 queryData 변경
  - QuizNumbers : LandingPage 에서 quiz numbers(amount) 선택하여 queryData 변경
  - QueryData : initilaProps 에서 API 요청을 위한 queryData
  - InitialProps : queryData 를 get(구독) 하고 있음, queryData 수정 시 자동으로 setState
  - CurrentQuizIndex : QuizPage 에서 현재 렌더링하는 Quiz 의 index
  - SelectedAnswer : QuizPage 에서 현재 Quiz 의 examples 중에 유저가 select 한 example
  - QuizResults : QuizPage 에서 유저가 select 한 후, 해당 퀴즈의 index, duration(푸는데 걸린 시간), correct(정답 여부) 를 object 로 묶은 quizResult를 배열로 가지는 state

## View logic

- Atomic Design 을 활용하여 component 를 분류
- Atoms : html tag 하나에 styled component 로 styling 작업만 한 component
- Molucules : Atoms 2개 이상을 합쳐서 표현한 component
- Organisms : Recoil state 를 hooks 를 활용하여 읽어온 후, 렌더링 하는 component

### Orgnisms components

- TitleAnimation : LandingPage 에서 제목과 애니메이션 렌더링
- QuizDifficulty : LandingPage 에서 API를 통해 받아올 quiz 의 difficulty 를 선택
- QuizNumbers : LandingPage 에서 API를 통해 받아올 quiz 의 문제 수 를 선택
- LandingFooter : 렌딩 페이지 시작 버튼 포함한 푸터
- Quiz : QuizPage 에서 하나의 퀴즈를 렌더링
- QuizResult : QuizPage 에서 퀴즈 푼 후, 결과를 보여줌
- QuizFooter : QuizPage 에서 다음 문제 혹은 결과 보기
- TrophyNumbers : ResultsPage 에서 맞춘 문제수 만큼 트로피 개수로 표현
- Duration : Result Page 에서 모든 Quiz 를 푸는데 걸린 시간을 표현
- ScoreChart : ResultsPage 에서 정답 수 오답 수 를 차트로 표현
- ResultsFooter : ResultsPage 에서 시작페이지로, 혹은 다시풀기 버튼 누를 수 있음
- OrganismShimmer : 로딩 시 보여주는 쉬머
- Page : 페이지 레벨의 component

## Test

React testing library 활용

### Business Logic

비동기 요청하는 InitialPropsState test

- initialProps.test.tsx

### View Logic

각 페이지 별 integration test

- LandingPage.test.tsx
- QuizPage.test.tsx
- ResultPage.test.tsx
