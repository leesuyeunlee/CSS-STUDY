# CSS(Cascading style sheet)
## CSS 작성 전 준비사항
* html 문서 준비(태그 작성 완료)
* html, css 파일 별도 폴더 관리
* 최상위 폴더 html 파일 배치
* 하위 폴더명 css, styles 으로 css파일 배치
* ex) index.html, index.css
## css 외부스타일시트와 내부스타일시트
* name.css 외부파일로 분리해서 html에 link로 연결하는 **외부 스타일시트**
* html파일 내에서 head태그 안에 sytle태그로 구분해서 작성하는 **내부 스타일시트**
* 외부스타일시트이 장단점 : 
- 장점 : 1개의 css 파일로 여러개의 html을 관리할 수 있다.
- 단점 : 파일명 또는 파일 위치를 정확히 관리하지 않으면 파일 관리가 어려울 수 있다.
* 내부스타일시트의 장단점 :
- 장점 : html파일 내에 작성하여 태그와 함꺼번에 보기 편하다. 
- 단점 : 2개 이상의 html파일을 동시에 디자인관리하는것이 불가능하다.
## css 선택자 
1. 태그선택자 : `<h1></h1>` -> `h1 {속성:값;}`
2. 클래스선택자 : `<h1 class="a"></h1>` ->`.a {속성:값;}`
2. 아이디선택자 : `<h1 id="b"></h1>` ->` #b {속성:값;}`
4. 자손선택자 : `<h1><em><span></span></em></h1>` -> `h1 em span {속성:값;}`
4. 자손선택자 : `<h1><em><em></em></em></h1>` -> `h1 > em {속성:값;}`
## css 디자인하기
* css 작성 전 html이 미리 디자인이 되어있으면 안된다. 
* **HTML을 디자인 초기화하는 작업이 CSS 디자인 전 반드시 선행되어야 한다 !**
* 초기화 CSS `reset.css` 공통파일(날짜 프로젝트명 표기금지!)
# CSS 글자 표현 속성
## font-family 
* 로컬글꼴(설치글꼴제공) 또는 웹 글꼴(추천)을 연결할 수 있다. 
* "메인대표글꼴", "후보글꼴" (후보제한없음)
* 후보글꼴은 메인글꼴과 모양이 비슷한 글꼴로 연결해야 한다. 
* 글꼴이름에 한글이나 공백이 있으면 ""가 필요하다. 
## font-size
* 웹 글꼴 평균 16px 기준으로 사용 
* 사용 단위 px, %, em, rem 
* 절대값 : px, 상대값 : %, em, rem(권장)
* 16픽셀에 맞춰진 사이즈에서 사이즈조절 가능한 rem을 보통 쓴다. 
# 선택자 우선 순위
* #아이디(3) > .클래스(2) > 태그(1)
1. 다음 중 우선 순위가 가장 높고 낮은 선택자는?
* `#box .a .b p {}` 8
* `#box #a .b p {}` 9
* `#wrap #box .a {}` 8
* `#wrap .a .b p {}` 8
2. 다음 중 우선 순위가 가장 높고 낮은 선택자는?
* `#box #a .b p {}` 9
* `#wrap #box #a {}` 9
* `.a .b p .box {}` 7
* `#box #a .b #p {}` 11
## color 
* 영문명 직접 입력 ex) 테스트용으로 주로 밝은색을 사용한다. 
* aqua, lime, yellow, coral ... 
* 헥사코드 입력 최소값0 ~ 최대갑F RGB 코드 기준
* RGB 웹 색상 기준으로 색상을 섞을 수록 밝아진다.
* #Hex #000000 == #000, #FF00CC => #F0C
* rgba(red, green, blue, alpha) *최대색상 255
## box css
### display
* `block, inline, inline-block`
* 특정 태그가 화면에 어떻게 표시될지 지정하는 속성
* `block` : 새로운 행, 크기, 여백 인식
* `inline` : 내용만큼 크기 인식(그외 크기인식불가능)
* `inline-block` : 내용만큼 크기인식(크기 추가설정가능), 옆으로 정렬
### box-sizing
* `box-sizing:border-box`
* 요소의 너비와 높이를 계살할 때 테두리, 여백(padding) 까지 포함해서 계산하는 속성
* 속성 미적용 시 : w100+h100+padding-top20 = 100*120 
* 속성 적용 시 : w100+h100+padding-top20 = 100*100 
### width, height
* 요소의 너비와 높이
* 절대값px, 상대값%, 화면 상대값 vw, vh
* 상대값 처리는 0~100% 사이 값만 사용한다. 
## form요소와 속성
### `<form action="#" method=""></form>`
* action : 입력된 정보를 제출하는 최종 주소(URL)은 action 속성에 입력합니다.
* method : 입력된 정보를 제출할 때 HTTP 정보를 method 속성에 입력합니다
### `<input type="" name=""`
* type :
* name : 서버(action)전송 시 입력한 데이터 구분 명칭
* readonly : 읽기전용
* autofocus, autocomplete : autocomplete - 자동완성
autofocus - 자동커서
* value와 placeholder의 차이점 : 
placeholder - 미리 제시된 텍스트(활성화 시 제거됨)
value - 미리 제시된 텍스트(활성화 시 제거안됨)
* maxlength : 최대글자 수 지정
### `<textarea?></textarea>`
* rows, cols : 가로세로 길이 
* 사용용도 및 주의사항 :
### input의 입력양식과 선택양식
* text, url 등의 사용자가 직접입력가능한 입력양식
* radio 등의 사용자의 입력이 아닌 선택으로 들어가는 선택양식(데이터구분)(개별데이터x, 그룹데이터구분용)
* 'value' : 입력양식(초기값), 선택양식(개별데이터구분용)