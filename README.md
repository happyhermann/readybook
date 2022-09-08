

# 🎓레디북스 온라인 도서 판매 사이트  
 
* 프로젝트 형태: 개인 프로젝트
* 프로젝트 기간: 2022.08.01 ~ 2022.09.05
* 프로젝트 API 제공 출처: 카카오 책 검색 API (+ 패스트 캠퍼스 제공 핀테크 프로젝트 API)
 


## 👆프로젝트 메인 페이지

### ⚙️*개발언어*
<hr/>
<figure class="third">

 <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
 <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css&logoColor=white">
 <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
 <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
 <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
 
 </figure>

### 📚*라이브러리*
<hr/>
<img src="https://img.shields.io/badge/-axios-lightgrey" />
<img src="https://img.shields.io/badge/-recoil--persist-lightgrey" />
<img src="https://img.shields.io/badge/-%20remixicon-lightgrey" />
<img src="https://img.shields.io/badge/-react--router--dom-lightgrey" />


#### 💻배포 주소
> netlify : https://readybooks.netlify.app/




### 🕹프로젝트 과정
---------------------------------------
1. 페이지 구조 






#### 반응형 마크업

<img src="https://user-images.githubusercontent.com/92570023/189014449-c1fdb29c-120f-4245-aecc-75a7ac6a0926.gif" width="600px" height="400px" />

  > 부트스트랩이나 MUI같은 라이브러리 없이 순수 HTML 태그와 CSS로 구현 (+ styled-components 기반)

  > styled-components의 theme.ts에 mobile, desktop, fullSize breakpoint 세팅 => props로 미디어 쿼리 적용

  > 모바일, 데스크탑, 풀 사이즈 순으로 반응형 디자인 레이아웃 구현 (리디북스 사이트와 유사하게)
 
 


#### 홈화면 캐러셀 / 키워드 도서 배열 

<img src="https://user-images.githubusercontent.com/92570023/189014880-f3d0be9d-84d0-4741-bb37-2ab88ab010ac.gif" width="600px" height="400px" alt="carousel" />

 > React-slick 라이브러리 사용하여 홈화면 도서 추천 / 스테디 셀러 캐러셀 구현 
 > slick 라이브러리의 장점은 자체 기능에 breakpoint를 임의로 세팅하고 각 point에 row는 몇개를 줄지, 몇개의 아이템을 
   보여줄 것인지 설정할 수 있게 함으로써 반응형 캐러셀을 간단히 다룰 수 있게 해줌 
   
 > + 가장 위 캐러셀은 라이브러리 없이 useState, styled-components, 자바스크립트로 구현 


캐러셀에 
 <pre>
<code>

1. 캐러셀에 나열된 도서 데이터들은 axios GET으로 호출할 때 axios.all을 사용하여 6개의 인기 도서 키워드를 
query에 넣어서 3개씩 받아오도록 세팅 

2. Response 받은 데이터를 axios.spread를 사용하여 받고, spread 연산자를 이용하여 배열 병합 후 setState 함수에 인자로 넣어줌 

3. 인기 도서 데이터 18개가 합쳐서 하나의 배열을 map을 사용하여 캐러셀에 리스트화 시켜줌 

 

</code>
</pre>





#### 로그인 & 회원가입

 <img src="https://user-images.githubusercontent.com/92570023/188264544-1d087f64-890d-404f-b622-c33935cf280b.gif" width="600px" height="400px" title="" alt="SignUp/In"></img><br/>
 
 
 


사용한 API
<pre>
<code>
// 로그인
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/login
  \ -X 'POST'

// 회원가입
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/login
  \ -X 'POST'
</code>
</pre>

#####기능 설명

> React-hook-form 라이브러리로으로 Validation 설계

>로그인&회원가입 모든 값을 입력하지 않으면 등록 버튼 활성화X

> 이메일 값은 반드시 "@"가 포함되어야 함.

> 비밀번호는 8자리 이상이여야 한다.









#### 도서 검색 

 <img src="https://user-images.githubusercontent.com/92570023/188264648-b5e26082-22bf-4215-8d49-ca7092754ec9.gif" width="600px" height="400px" title="" alt="RubberDuck"></img><br/>

 사용한 API 
 <pre>
 <code>
  // 책 검색 기본 
  GET /v3/search/book HTTP/1.1
  Host: dapi.kakao.com
  Authorization: KakaoAK ${REST_API_KEY}
 </code>
 </pre>
 
 <pre>
 <code>
  // 원하는 검색어와 함께 결과 형식 파라미터를 선택적으로 추가
  curl -v -X GET "https://dapi.kakao.com/v3/search/book?target=title" \
  // 쿼리 파라미터에 검색어 입력 
  --data-urlencode "query=미움받을 용기" \
  // 헤더에 접근 토큰 
  -H "Authorization: KakaoAK ${REST_API_KEY}"
   </code>
 </pre>
 
 기능 설명
 > 검색창에 키워드를 입력하면 입력값과 관련된 도서 정보 데이터를 받아옴

 > 사용자가 입력한 검색값은 최근 검색어 창에 내림차순으로 정렬되고 개별 검색어는 삭제 가능
 
 > 받아온 도서 정보는 각 페이지당 10개씩 나열됨 
 
 > 입력값에 해당하는 도서가 없을 경우 '검색결과 없습니다'라는 배너 사용자에게 보여줌

 > 리스트내 도서 클릭시 해당 도서 상세 페이지로 링크 연결 
 
 
 

  
 



