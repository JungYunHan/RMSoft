# node 이미지 사용
FROM node:12

# 패키지 우선 복사
COPY ./package* /usr/src/app/ 
WORKDIR /usr/src/app
RUN npm install

# 소스 복사
COPY . /usr/src/app

# mongo 서버 실행
EXPOSE 3000
CMD node app.js

