# Trophy quiz

<img width="160" alt="Screen Shot 2021-09-02 at 6 18 09 PM" src="https://user-images.githubusercontent.com/25860602/131817989-ec41e04c-86b9-447f-8e57-e25bb31ea2a5.png">

https://trophy-quiz.vercel.app 
(mobile UI)

Solve Quiz, and get Trophies!

- ReactCancel changes
- Recoil
- Styled-component
- react-testing-library

## Getting started

1. git clone `https://github.com/david718/trophy-quiz.git`
2. cd trophy-quiz
3. yarn install
   - yarn start
   - yarn test

## Business logic

- use Recoil to manage global state

### Recoil State tree

- src/state
  - QuizDifficulty : Select quiz difficulty to update queryDataState In LandingPage
  - QuizNumbers : Input quiz numbers(amount) to update queryDataState In LandingPage
  - QueryData : QueryData for axios request in initilaPropsState
  - InitialProps : get queryData, and request quiz data from server API by axios(if queryData was updated, initialPropsState was updated, too)
  - CurrentQuizIndex : index of current quiz in quiz datas(array)
  - SelectedAnswer : answer of current quiz, selected by user
  - QuizResults : after selecting answer, quiz result data(current quiz index, duration, corrent) was put in quizResults(quiz result array)

## View logic

- Component hierarchy : according to the Atomic design principle
  - Atoms : only html tag (with styled component)
  - Molucules : Reuseability was considered, two or more atoms
  - Organisms : Less reuseability. managing Recoil state like container components.
  - Pages : Page with Organisms

### Orgnisms components in Atomic Design

- TitleAnimation : In LandingPage, title and animation
- QuizDifficulty : In LandingPage, select quiz difficulty
- QuizNumbers : In LandingPage, input numbers of quiz
- LandingFooter : has start button
- Quiz : current quiz component, user can select an answer of 4 examples
- QuizResult : render animation for result, after user select answer
- QuizFooter : next or results button
- TrophyNumbers : render numbers of trophy about numbers of correct quiz
- Duration : all duration during solving quiz
- ScoreChart : chart about numbers of correct and incorrect answers
- ResultsFooter : start page button and retry button
- OrganismShimmer : when async request is in loading, render shimmer page

## Test

Integration test with react testing library

### Business Logic test list

Test for async InitialPropsState that requests quiz data from server

- initialProps.test.tsx
  - when amount set as 3 and difficulty set as easy, in initialProps check amount and difficulty of response quiz data

### View Logic test list

integration test for each pages(Landing, Quiz, Results)

- LandingPage.test.tsx
  - when quiz numbers value was changed, it was rendered properly
  - when quiz difficulty value was changed, it was rendered properly
- QuizPage.test.tsx
  - 4 examples of quiz were rendered
  - when page was rendered at first, button was disabled
  - when user selects answer, button will be enabled
- ResultPage.test.tsx
  - duration of all quiz solving was rendered
  - numbers of correct and incorrect answer was rendered
