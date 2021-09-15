## What I did

<br/ >

### Post 프로덕션 리팩토링

- [PR 보기](https://github.com/woowacourse-teams/2021-pick-git/pull/252)
- 팀원과의 도메인 분석을 통해 Aggregate 패턴 기반으로 Post 리팩토릭 진행.

<br/ >

### 테스트 코드 리팩토링

<br/ >

### DirtiesContext 제거를 통한 테스트 속도 향상

- [PR 바로가기](https://github.com/woowacourse-teams/2021-pick-git/pull/468)
- 기존 Acceptance Test 및 Integration Test에 있는 DirtiesContext를 제거.   
- db초기화를 위한 로직 추가.

<br/ >

### Acceptance Test를 도와주는 Builder 제작

- [PR 바로가기](https://github.com/woowacourse-teams/2021-pick-git/pull/333)
- RestAssured의 복잡성을 최소화 시킨 Builder 제작.

<br/ >

### 코드리뷰

- [모든 comment 보기](https://github.com/woowacourse-teams/2021-pick-git/issues?page=4&q=commenter%3Abperhaps+is%3Aclose)
- 코드리뷰 문화를 통해 팀의 전체적인 코드 퀄리티를 향상시킵니다.

<br/ >

### CI/CD 구성

- Jenkins Pipeline 전략 생성 및 구성.
- Sonarqube 설정.

<br/ >

### 인프라 구성

- AWS EC2와 AWS S3를 통한 인프라 환경 구성.
- 각 서버를 Bastion Server를 통해 접속하도록 구성.

<br/ >

### s3 proxy 구성

- S3의 Public 접근 금지 정책으로 인한 테스트 문제등을 해소하기 위한 프록시.
- S3에 접근 가능하도록 하는 AWS IAM Role이 적용된 EC2에 파일 업로드용 서버를 만들어 외부네트워크에서도 파일 업로드 기능을 사용할 수 있도록 변경.

<br/ >

### 파일 업로드 기능 구현

- [PR 보기](https://github.com/woowacourse-teams/2021-pick-git/pull/100)

<br/ >

### Rest docs 적용

- [PR 보기](https://github.com/woowacourse-teams/2021-pick-git/pull/201)

<br/ >

### Interceptor 등록 로직 자동화(어노테이션화) 구현

- [PR 보기](https://github.com/woowacourse-teams/2021-pick-git/pull/466)
- [블로그 포스팅 보기](https://bperhaps.tistory.com/entry/Component-Scan-구현하기-feat-Pickgit-Authorization-Intercepter-register)

<br/ >

## DB Replication

- DB Replication을 통해 slave가 조회쿼리를 담당하도록 변경
- [PR 보기](https://github.com/woowacourse-teams/2021-pick-git/pull/475)

