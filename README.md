# nodejs, mongoose, docker를 활용한 서버 제작

# Docker Compose 사용하기 

## 실행하기

```
docker-compose up -d
```

## 로그 보기

```
docker-compose logs -f
```

## 종료하기

```
docker-compose down
```

볼륨도 함께 삭제하고 싶다면

```
docker-compose down --volume
```

# postman에서 데이터 조회

## itemInfo GET http://localhost:3000/item
![스크린샷 2022-11-27 오후 2 23 20](https://user-images.githubusercontent.com/56419872/204120622-6e78751d-ab2b-4266-b15d-f60d298bad78.png)

## registeredCompany GET http://localhost:3000/company
![스크린샷 2022-11-27 오후 2 23 53](https://user-images.githubusercontent.com/56419872/204120639-72475843-3c6d-40de-b83a-b2f1019b94dc.png)

## buyer GET http://localhost:3000/buyer
![스크린샷 2022-11-27 오후 2 24 08](https://user-images.githubusercontent.com/56419872/204120643-c46754c2-bea9-4e31-88a1-081e7b2c354a.png)

## purchaseInfo GET http://localhost:3000/purchase
![스크린샷 2022-11-27 오후 2 24 38](https://user-images.githubusercontent.com/56419872/204120654-b5d25acc-fbcb-4ba1-a8ca-f573088dbe9c.png)

# postman에서 데이터 추가

## itemInfo POST http://localhost:3000/item
![스크린샷 2022-11-27 오후 2 29 28](https://user-images.githubusercontent.com/56419872/204120767-3ada2e94-465f-4a15-9b16-49b071b96276.png)

## registeredCompany POST http://localhost:3000/company
![스크린샷 2022-11-27 오후 2 31 42](https://user-images.githubusercontent.com/56419872/204120819-de4517ff-4e64-456a-9008-e0a74533ec35.png)

## buyer POST http://localhost:3000/buyer
![스크린샷 2022-11-27 오후 2 32 53](https://user-images.githubusercontent.com/56419872/204120840-658b880a-f216-4054-8b1c-ee11e8840006.png)


## purchaseInfo POST http://localhost:3000/purchase
![스크린샷 2022-11-27 오후 2 26 30](https://user-images.githubusercontent.com/56419872/204120672-85985788-d9be-4b45-a1a9-ad89545bd81a.png)

# mongoose
![스크린샷 2022-11-27 오후 2 21 42](https://user-images.githubusercontent.com/56419872/204120540-67bc6be1-a30d-431e-8487-098c51f30c81.png)


# ERD 모델링
![스크린샷 2022-11-27 오후 2 44 23](https://user-images.githubusercontent.com/56419872/204121138-6d49e8f4-16c9-4c9d-ab0d-323a69d75326.png)


