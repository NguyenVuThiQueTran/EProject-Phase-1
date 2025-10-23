--Nguyễn Vũ Thị Quế Trân
#Khởi động toàn bộ hệ thống container trong nền, dựa theo file docker-compose.yml
## docker-compose up --build

--Test Postmain
## Auth
1. Register 
Method: Get
URL: http://localhost:3000/register
* **Result**
![alt text](public/results/register.png)
![alt text](public/results/registerDB.png)
2. Login
Method: Post
URL: http://localhost:3000/login 
* **Result**
![alt text](public/results/login.png)
3. Dashboard 
Method: Get
URL: http://localhost:3000/dashboard
* **Result**
![alt text](public/results/dashboard.png)

## Product 
1. Create 
Method: POST
URL: http://localhost:3001/api/products
* **Dữ liệu test**
{
  "name": "Panadol Extra",
  "description": "Giảm đau nhanh, cảm cúm, nhức đầu",
  "price": 90000
}
* **Result**
![alt text](public/results/create.png)
![alt text](public/results/createDB.png)
2. Xem sản phẩm 
Method: Get
URL: http://localhost:3001/api/products
* **Result**
![alt text](public/results/Select.png)

## Order 
1. Tạo Order
Method: Post 
URL: http://localhost:3001/api/products/buy
* **Dữ liệu test**
{
"ids": ["68f9804604a4d102f4511e3c"]
}
* **Result**
![alt text](public/results/order.png)
![alt text](public/results/orderDB.png)

## Test localhost
![alt text](public/results/giaodien.png)
