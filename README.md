# 지금날씨

>이전에 제작한 프로젝트 리뉴얼 버전입니다.
[이전 버전 프로젝트](https://github.com/hj9118/weatherApp)

`geolocationAPI`를 이용해 현위치의 날씨 정보를 제공해줍니다. 
> [페이지 바로가기](https://jigeum-weather.netlify.app/)

# 시작 가이드

```
gh clone https://github.com/hj9118/jigeum-weather.git
npm init
npm start
```


## 기술 스택
![stackticon result](https://firebasestorage.googleapis.com/v0/b/stackticon-81399.appspot.com/o/images%2F1692775439418?alt=media&token=3741a36b-b478-4180-8106-6845bcb98b11)

## 주요 기능

\- `geolocationAPI`를 통한 현 위치 감지
\- 현위치 날씨 정보 제공

##  파일 구조
```
src  
 ┣ component  
 ┃ ┣ DustStep.js  #미세먼지 단계 구분
 ┃ ┣ Transform.js  #기타 변환 함수 저장
 ┃ ┣ WeatherCard.js  # 날씨 정보 및 API호출 담당
 ┃ ┗ WeatherIcon.js  # 날씨 아이콘 모음
 ┣ App.js  
 ┣ App.scss  
 ┗ index.js
```

## 관련 API

- [openweathermap](https://openweathermap.org/)
날씨 정보 및 지명 정보 제공
`Current Weather Data`, `Air Pollution API`, `Geocoding API` 사용
- Geolocation API
`getCurrentPosition()`을 통해 기기 좌표 반환

## 제작과정
[1. 디자인과 구현](https://mexocoxon.tistory.com/315)</br>
[2. 배포 및 수정](https://mexocoxon.tistory.com/316)</br>
[3. 성능체크와 번역](https://mexocoxon.tistory.com/322)</br>

[에러노트 - 쓰이지 않는 코드는 배포에 도움되지 않는다 : Unreachable code ](https://mexocoxon.tistory.com/319)</br>
[에러노트 - null값을 의심하고 의심하고 또 의심하라 : Cannot read properties of null](https://mexocoxon.tistory.com/324)</br>
[에러노트 - useEffect는 어떻게 값을 처리하길래 : React Hook useEffect has a missing dependency](https://mexocoxon.tistory.com/323)