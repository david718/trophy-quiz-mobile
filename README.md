# carplat-biz-webview

webview refactoring project

- view logic
- business logic

## Naming

- Organism components : 해당 component 의 타이틀 값을 영어로 번역
  - 특수한 Organism components
    - popup : 페이지이름 + (결과) + popup
    - fixed footer : 페이지이름 + fixed footer
- event handler : 'handle' + '액션(ex) click, change)' + '목적(ex)CarDetail)'

## View logic

Atomic Design 을 활용하여 component 를 분류
Business logic 은 hooks 와 util function 으로 분리

### Component hierarchy

#### 분류 기준

- Atoms : html tag 하나를 리턴하는 component(type 별로 styling 이 되어있다)
- Molecules : 재사용 가능한 component이다. Atoms 가 둘 이상 모여서 이루어짐
- Organisms : 재사용 불가능해도 괜찮은 component로 molecules 와 atom 이 모여서 이루어짐. 해당 repository에서는 완성된 zeplin page design 에서 background 가 white 인 component 를 구분하여 Organisms 로 분류함. state 로부터 데이터를 가져와 처리
- Templates : component 를 데이터 없이 Layout 배치만 완료한 wire frame 개념의 component
- Pages : Template 에 실제 데이터가 주입된 component, state 에서 axios 로 받아온 데이터를 가져와 처리하는 Container component

#### component 분류

- icons
- Atom
  - Button
  - Checkbox
  - Div
  - Shadow
  - Span
  - Tag
  - Title
- Molecules
  - Content
  - FixedFooter
  - InformationItem
  - InputRadio
  - Popup
  - Required
  - Shimmer
  - Tooltip
  - UsageTimer
- Organisms
  - CarAttribute
  - Cards
  - Terms
  - CheckoutOrderFixedFooter
  - CheckoutOrderFailPopup
  - CheckoutOrderPopup
  - CheckoutOrderSuccessPopup
  - CheckoutSubscriptionFixedFooter
  - CheckoutSubscriptionPopup
  - Faq
  - Insurance
  - OrderDetailCancelPopup
  - OrderDetailFixedFooter
  - ParkingZone
  - Payment
  - PaymentPrice
  - Penalty
  - Product
  - Purporse
  - SubDriver
  - UsagePrice
  - UsageTime

#### Organism 컴포넌트 분류

비즈니스로직과 뷰로직 분리 하자!

각 organism 에서 같은 함수를 중복해서 호출한다 → page에서 중복된 함수(ex) state 읽기 함수)를 한번에 호출하여 공통적으로 필요한 state(LocationState, initialProps)를 각 organism 에게 props 로 전달하자(꼭 필요한 props 만 받도록 props 의 중복을 줄이면서)

각 페이지별로 organism 렌더링 조건이 다르다 → 각 페이지별에서 organism 렌더링 조건을 확인 후 렌더링을 컨트롤하자

- organisms
  - state 필요
    - initialProps 가 초기값인 state
      - CheckoutOrderFixedFooter
      - CheckoutOrderPopup
      - Purpose
      - SubDriver
      - UsagePrice
      - UsageTime
    - 로컬 state
      - initialProps 필요(렌더, 기능 등)
        - Cards
        - Terms
        - CheckoutSubscriptionPopup
        - ResponsePopup
        - OrderDetailCancelPopup
        - OrderDetailFixedFooter
      - initialProps 불필요
        - CheckoutOrderSuccessPopup
        - CheckoutSubscriptionFixedFooter
  - state 불필요
    - CarAttribute
    - Faq
    - Insurance
    - ParkingZone
    - Payment
    - PaymentPrice
    - Penalty
    - Product
