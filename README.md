

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
> tempo




### 🕹프로젝트 과정
---------------------------------------
1. 페이지 구조 


#### 반응형 마크업


#### 로그인 & 회원가입

 <img src="https://user-images.githubusercontent.com/92570023/188264544-1d087f64-890d-404f-b622-c33935cf280b.gif" width="600px" height="400px" title="" alt="RubberDuck"></img><br/>
 
 
 


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








#### 홈화면




#### 도서 검색 

 <img src="https://user-images.githubusercontent.com/92570023/188264648-b5e26082-22bf-4215-8d49-ca7092754ec9.gif" width="600px" height="400px" title="" alt="RubberDuck"></img><br/>

 <pre>
 <code>
  사용한 API 
  
  // 책 검색 기본 
  GET /v3/search/book HTTP/1.1
  Host: dapi.kakao.com
  Authorization: KakaoAK ${REST_API_KEY}
  
  
  // 원하는 검색어와 함께 결과 형식 파라미터를 선택적으로 추가
  curl -v -X GET "https://dapi.kakao.com/v3/search/book?target=title" \
  // 쿼리 파라미터에 검색어 입력 
  --data-urlencode "query=미움받을 용기" \
  // 헤더에 접근 토큰 
  -H "Authorization: KakaoAK ${REST_API_KEY}"
  
 
 </code>
 </pre>


#### 도서 검색 상세페이지 



