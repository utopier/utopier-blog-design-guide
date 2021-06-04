# Utopier Blog Design Guide

---

## Chapter

1. Overview
2. Public Guide (UIUX, Responsive, Accessibility, CrossBrowser, Performance...)

   - Global Styles
   - Color Pallete
   - CSS Naming

3. Component Dev Cycle
4. Component Architecture

   - Button
   - Navigation
   - SearchBar
   - Input
   - Card
   - List
   - Modal
   - DropDown
   - Slider
   - Loading
   - BarChart
   - PieChart
   - LineChart
   - KoreaMap

---

## 1. Overview

1. Tech
   - Storybook
   - Emotion
   - d3js
   - HTML5
   - CSS3
   - JavaScript
   - TypeScript
   - React
   - UIUX
   - Responsive
   - Animation

---

## 2. Public Guide (UIUX, Responsive, Test, Accessibility, CrossBrowser, Performance)

### 2-1. Global Styles

- **css reset**
  - 브라우저마다 다른 default style의 차이를 최대한 없애 스타일 초기화
  - 종류
    - reset.css
      - 브라우저 간 차이를 최대한 없애는 코드, 브라우저 요소들의 스타일을 0으로 만듬.
    - normalize.css
      - reset.css와 달리 약간의 디자인이 들어감
    - emotion-reset (reset.css 기반)
    - styled-reset (reset css 기반)
    - styled-normalize (normalize.css 기반)

### 2-2. UX Design Trends

- **References**

  - Tencent 2021 UX 디자인 트렌트 리포트
  - https://brunch.co.kr/@upleat/89
  - https://brunch.co.kr/@upleat/90

- **Chapter**
  1.  More Intelligent Service(보다 지능적인 서비스)
      - 실제 시나리오가 기반이 된 사용자 의도 추론
      - 작업을 자동화로 인한 사용자 여정 단순화
      - 정서적 인식을 기반으로 사용자의 요구를 적극적으로 이해
  2.  Natural and Rich Interective Mode(자연스럽고 풍부해진 인터렉티브 모드)
      - 에어 제스처 방식(Air gesture): 더 자유롭고 스마트하게
      - 음성 인식(Voice interaction): 더 정확하고 재미있게
  3.  New Challenges from Hardware(하드웨어의 새로운 도전)
      - 큰 화면: 한 손으로 잡기를 위한 새로운 도전
      - 폴딩 스크린: 새로운 형태의 상호 작용
  4.  New Online UX Brought by Epidemic(펜데믹으로 인한 새로운 온라인 UX)
      - 효율성 지향
      - 사회적 소외감을 줄이는 것에 더 많은 관심
      - 사람과 정보 간의 강력한 연결 가속화
  5.  Human Oriented(사람 중심)
      - Inclusive Design
      - 사용자 개인 정보 주의
      - 건강한 디지털 라이프 스타일
  6.  Inhertance and Innovation of UI(UI의 상속과 혁신)
      - 다크 모드
      - 새로운 모방
      - 다채로운 색상
      - 폰트 장식
      - 더 큰 필렛
      - 풍부한 일러스트레이션
      - 다차원 적인 애니메이션 표현
  7.  More Efficient Design Collaboration Mode(보다 효율적인 설계 협업 모드)
      - 로컬 파일에서 클라우드 협업까지
      - 과학적이고 효과적인 디자인 시스템

1.  **More Intelligent Service(보다 지능적인 서비스)**

- 인공지능 시대의 도래로 일방향 방식에서 사용자와의 쌍방향 방식으로 진화함.

  - **실제 시나리오가 기반이 된 사용자 의도 추론**

    - 인공 지능 기술이 발달하면서 스마트 기기는 디지털 세계와 물리적 세계를 더 원할하게 연결하고 사용자 상황을 능동적으로 인지함으로써 그들의 니즈에 맞는 정보를 제공할 수 있음.

    1. 디지털 세계와 물리적 세계를 연결시킬 수 있는 방법 찾기

       - 물리적 세게에서의 문제점을 디지털 세계의 인공지능 기술을 통해 해결

    2. 사용자 여정의 과거와 현재 연결하기

       - 물리적 세계에서의 방해 요인을 신중하게 전체적으로 고려해 사용자 행동의 목적을 예측하고 상식과 경험에 근거해 적합한 서비스를 사전에 추천

  - **작업을 자동화로 인한 사용자 여정 단순화**
    - 사용자의 효율성을 높이는 것은 사용자 경험 디자인이 끊임없이 노력해야 하는 방향 중 하나
    - 음성 입력의 도움
      - 음성 입력을 통한 접근은 여러 뎁스를 거쳐야 하는 인터페이스 터치 조작보다 비교적 단순하고 직접적이므로 기기에서 사용자 목표를 명확히 인식
    - 사용자 행동에 기반한 습관 기억 형성
      - 사용자가 장기간 반복하는 행동을 분석 및 처리하는 과정을 통해 사용자 습관 모델을 구축하고 그에 맞게 능동적인 서비스 제공
    - 전문 사용자에 대한 적절한 고려
      - 스마트 기기 자체 조작 시나리오 제공
  - **정서적 인식을 기반으로 사용자의 요구를 적극적으로 이해**
    - 얼굴 인식, 표정 인식, 위치 추적과 같은 기술이 발전함에 따라 기계는 점차 지각 언어를 배우고 사용자 감정과 심리적 요구를 적극적으로 감지함.
    - 지각적 단서를 통한 사용자 감정 측정
      - 표정, 특벽한 시간 또는 키워드를 통해 사용자 감정을 이해하고 찾아내는 것이 필요함. 사용자 감정을 이해하는 것은 자유롭게 탐색하고 오라적이되 조용하게 수행되어야 함. 사용자 실시간 상황에 맞는 서비스를 제공하는지 판단해야 함.
    - 디자인을 위한 지각적 요소의 포괄적 사용
      - 선, 색상, 소리 및 움직임을 사용해 그에 맞는 감정을 전달하고 불러일으킴으로써 인간적인 경험을 제공함.
  - **요약**
    - 더 스마트 해지는 서비스는 사람들에게 다양한 삶의 가능성을 줄 것. 빛이 되어주는 불씨가 통제되지 않으면 화마가 되듯 스마트 서비스도 사람들의 삶에 위험이 될 수도 있음. 이를 방지하고 사람들에게 더 나은 기술을 제공하기 위해서 Xerox Parker 연구 센터는 캄 테크 비전 제시
    - 캄 테크 : 평소에는 존재를 드러내지 않고 숨어있다 필요할 때 나타나 사용자에게 편의를 제공하는 기술

2.  **Natural and Rich Interective Mode(자연스럽고 풍부해진 인터렉티브 모드)**

    - **에어 제스처 방식(Air gesture): 더 자유롭고 스마트하게**
    - **음성 인식(Voice interaction): 더 정확하고 재미있게**

3.  **New Challenges from Hardware(하드웨어의 새로운 도전)**

    - **큰 화면: 한 손으로 잡기를 위한 새로운 도전**
    - **폴딩 스크린: 새로운 형태의 상호 작용**

4.  **New Online UX Brought by Epidemic(펜데믹으로 인한 새로운 온라인 UX)**

    - **효율성 지향**
    - **사회적 소외감을 줄이는 것에 더 많은 관심**
    - **사람과 정보 간의 강력한 연결 가속화**

5.  **Human Oriented(사람 중심)**

    - **Inclusive Design**
    - **사용자 개인 정보 주의**
    - **건강한 디지털 라이프 스타일**

6.  **Inhertance and Innovation of UI(UI의 상속과 혁신)**

    - **다크 모드**
    - **새로운 모방**
    - **다채로운 색상**
    - **폰트 장식**
    - **더 큰 필렛**
    - **풍부한 일러스트레이션**
    - **다차원 적인 애니메이션 표현**

7.  **More Efficient Design Collaboration Mode(보다 효율적인 설계 협업 모드)**
    - **로컬 파일에서 클라우드 협업까지**
    - **과학적이고 효과적인 디자인 시스템**

### 2-3. Color Pallete

- light mode
- dark mode

### 2-4. CSS Naming

### 2-5. UIUX

### 2-6. Responsive

### 2-7. Animation

### 2-8. Test

### 2-9. Accessibility

### 2-10. CrossBrowser

### 2-11. Performance

### 2-12. Storybook

1. Get Started

   - **Install**
     - npx sb init
     - npm run storybook
   - **What's a story?**

     ```typescript
     // Button.stories.tsx
     import React from 'react';
     import { Button } from 'Button';
     import { Story } from '@storybook/react';

     const Template: Story<ButtonProps> = (args) => (
       <Button {...args}>Button</Button>
     );
     export const Primary = Template.bind({});

     Primary.args = {
       primary: true,
       label: 'Primary',
     };
     ```

   - **Browse stories**
     - Sidebar and Canvas
     - Toolbar
     - Addons
   - **Setup**

     ```typescript
     // YourComponent.stories.tsx
     import React, { ComponentProps } from 'react';
     import { Story } from '@storybook/react';
     import { YourComponent } from './YourComponent';

     export default {
       title: 'YourComponent',
       component: YourComponent,
     };

     const Template: Story<ComponentProps<typeof YourComponent>> = (args) => (
       <YourCopmonent {...args} />
     );

     export const FirstStory = Template.bind({});
     FirstStory.args = {};
     ```

     - 스택에 대한 스토리북 구성
     - 구성 요소 스타일 렌더링
     - 자산 및 리소스로드

2. Writing Stories

   - **introduction**

     - where to stories
       - 구성 요소의 스토리는 구성 요소 파일과 함께 존재하는 스토리 파일에 정의됨. 스토리 파일은 개발 전용이며 프로덕션 번들에 포함되지 않음.
       - Button.js | ts, Button.stories.js | ts
     - Component Story Format
       - 구성 요소 스토리 형식(CSF)는 작성하기 쉽고 도구간에 이식 할 수 있는 ES6 모듈 기반 표준.
     - Default Export

       ```typescript
       // Button.stories.tsx
       import React from 'react';
       import { Meta } from '@storybook/react';
       import { Button, ButtonProps } from './Button';

       export default {
         title: 'Components/Button',
         component: Button,
       } as Meta;
       ```

     - Defining stories

       ```typescript
       // Button.stories.tsx
       import React from 'react';
       import { Button } from './Button';

       export const Primary: React.VFC<{}> = () => (
         <Button primary>Button</Button>
       );
       export const Secondary: React.VFC<{}> = () => <Button />;

       Primary.storyName = 'I am the primary';
       ```

     - Using args

       ```typescript
       // Button.stories.tsx
       const Template: Story<ButtonProps> = (args) => <Button {...args} />;

       export const Primary = Template.bind({});
       Primary.args = {
         background: '#ff0',
         label: 'Button',
       };
       ```

       ```typescript
       // ButtonGroup.stories.tsx
       import React from 'react';
       import {Story, Meta} from '@storybook/react';
       import {ButtonGroup, ButtonGroupProps} from '../ButtonGroup';
       import * as ButtonStories from './Button.stories';

       export default {
          title: 'ButtonGroup',
          component: ButtonGroup,
       } as Meta;

       const Template: Story<ButtonGroupProps> = (args) => <ButtonGroup {...args}>

       export const Pair = Template.bind({});
       Pair.args = {
         buttons: [{...ButtonStories.Primary.args}, {...ButtonStories.Secondary.argss}],
         orientation: 'horizontal',
       };
       ```

     - Using parameters

       - 스토리에 대한 정적 메타 데이터 정의
       - 스토리 또는 스토리 그룹 레벨에서 다양한 애드온에 구성을 제공

       ```typescript
       // Button.stories.tsx
       import React from 'react';
       import { Meta } from '@storybook/react';
       import Button from './Button';

       export default {
         title: 'Button',
         component: Button,
         parameters: {
           backgrounds: {
             values: [
               { name: 'red', value: '#f00' },
               { name: 'green', value: '#0f0' },
               { name: 'blue', value: '#00f' },
             ],
           },
         },
       } as Meta;
       ```

     - Using decorators

       ```typescript
       // Button.stories.tsx
       import React from 'react';
       import { Story, Meta } from '@storybook/react';
       import { Button, ButtonProps } from './Button';

       export default {
         title: 'Example/Button',
         component: Button,
         decorators: [
           (Story) => (
             <div style={{ margin: '3em' }}>
               <Story />
             </div>
           ),
         ],
       } as Meta;
       ```

     - Stories for two or more components

       ```typescript
       // List.stories.tsx

       import React from 'react';

       import { Story, Meta } from '@storybook/react';

       import { List, ListProps } from './List';
       import { ListItem, ListItemProps } from './ListItem';

       export default {
         component: List,
         title: 'List',
       } as Meta;

       export const Empty: Story<ListProps> = (args) => <List {...args} />;

       export const OneItem = (args) => (
         <List {...args}>
           <ListItem />
         </List>
       );

       export const ManyItems = (args) => (
         <List {...args}>
           <ListItem />
           <ListItem />
           <ListItem />
         </List>
       );
       ```

   - **Args**
   - **Parameters**
   - **Decorators**
   - **Loaders**
   - **Naming components and hierarchy**

3. Writing Docs
4. Essential addons
5. Configure
6. Workflows
7. Addons

### 2-13. Emotion

### 2-14. React

### 2-15. Typescript

### 2-16. HTML

### 2-17. CSS

---

## 3. Component Dev Cycle

---

## 4. Component Architecture

- Button
- Navigation
- SearchBar
- Input
- Card
- List
- Modal
- DropDown
- Slider
- Loading
- BarChart
- PieChart
- LineChart
- KoreaMap
