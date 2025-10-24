Sinh viên thực hiện: Nguyễn Vũ Thị Quế Trân - 22664681
Lớp: DHHTTT18A
Môn học: Lập trình hướng dịch vụ
Giảng viên hướng dẫn: Huỳnh Nam

## 1. Mục tiêu & Vấn đề hệ thống giải quyết
Hệ thống mô phỏng quy trình mua hàng trực tuyến, bao gồm các chức năng:
  - Người dùng đăng ký và đăng nhập bằng tài khoản riêng.
  - Người dùng xem sản phẩm, thêm vào giỏ và đặt hàng.
  - Dữ liệu người dùng và sản phẩm được quản lý bởi các dịch vụ tách biệt (microservices).
Mục tiêu:
  - Ứng dụng kiến trúc Microservices trong Node.js.
  - Triển khai toàn bộ hệ thống qua Docker Compose.
  - Thực hiện kiểm thử API bằng Postman.

## 2. Kiến trúc hệ thống

| **Service**               | **Ý nghĩa**                                              | **Cổng mặc định** |
|---------------------------|----------------------------------------------------------|-------------------|
| **API Gateway**           | Cổng giao tiếp trung tâm, định tuyến request tới các service con | 3003              |
| **Auth Service**          | Xử lý đăng ký, đăng nhập, xác thực JWT                  | 3000              |
| **Product Service**       | Quản lý sản phẩm, thêm mới, xem danh sách               | 3001              |
| **Order Service (tuỳ chọn)** | Tạo và quản lý đơn hàng                              | 3002              |
| **MongoDB**               | Lưu trữ dữ liệu người dùng và sản phẩm                  | 27018             |

## 3. Triển khai trên Docker
Bước 1: Mỗi dịch vụ tạo một file Dockerfile.
Bước 2: Cấu hình cho file docker-compose.yml
Bước 3: Chạy lệnh: docker compose up -d


#Khởi động toàn bộ hệ thống container trong nền, dựa theo file docker-compose.yml
## docker-compose up --build

## 4. Test Postmain
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

## 5. Các mẫu thiết kế được sử dụng
- Gateway Pattern: Dùng trong api-gateway để định tuyến các request đến đúng service (auth, product, order).
- Repository Pattern: Tách riêng lớp truy cập dữ liệu trong các service giúp dễ bảo trì và test.
- JWT Authentication: Sử dụng JSON Web Token để xác thực người dùng sau khi đăng nhập.

## 6. Các dịch vụ giao tiếp như thế nào

Hệ thống áp dụng mô hình Microservices Architecture, trong đó các dịch vụ (Auth, Product, Order,...) giao tiếp với nhau thông qua API Gateway và Message Broker.

### Giao tiếp đồng bộ (HTTP – REST API)

- Mọi request từ client (Web hoặc Mobile) đều đi qua API Gateway.
- Gateway định tuyến request đến từng microservice tương ứng:
  - `/api/auth/*` → Auth Service
  - `/api/product/*` → Product Service
  - `/api/order/*` → Order Service
- Các service phản hồi dữ liệu JSON qua Gateway → trả lại client.
