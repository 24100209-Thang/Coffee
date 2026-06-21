# Coffee

Thành viên: Nguyễn Hữu Thắng
Đối tượng phụ trách
EMPLOYEE

# Chức năng đã thực hiện

Create Employee:POST /api/employees
Read EmployeeGET /api/employees/
Update Employee:PUT /api/employees/
Delete Employee: DELETE /api/employees/

# Cấu trúc source code

src/
├── controllers/
│ └── employee.controller.js
├── services/
│ └── employee.service.js
├── repositories/
│ └── employee.repository.js
└── routes/
└── employee.routes.js

# Mô tả: Đối tượng Employee dùng để quản lý thông tin nhân viên trong hệ thống Coffee Shop.

Các chức năng đã triển khai:

Thêm nhân viên mới vào hệ thống.
Xem danh sách nhân viên.
Xem chi tiết nhân viên theo mã nhân viên.
Cập nhật thông tin nhân viên.
Xóa nhân viên khỏi hệ thống.


 Thành viên: Đinh Xuân Thạch
 Đối tượng phụ trách
 ITEM

## Chức năng đã thực hiện

### Create Item

POST /api/items

### Read Item

GET /api/items

GET /api/items/:id

### Update Item

PUT /api/items/:id

### Delete Item

DELETE /api/items/:id

## Cấu trúc source code

```text
src/
├── controllers/
│   └── item.controller.js
├── services/
│   └── item.service.js
├── repositories/
│   └── item.repository.js
└── routes/
    └── item.routes.js
```

## Mô tả

Đối tượng Item dùng để quản lý thông tin sản phẩm trong hệ thống Coffee Shop.

Các chức năng đã triển khai:

* Thêm sản phẩm mới vào hệ thống.
* Xem danh sách sản phẩm.
* Xem chi tiết sản phẩm theo mã sản phẩm.
* Cập nhật thông tin sản phẩm.
* Xóa sản phẩm khỏi hệ thống.

Thành viên: Đinh Văn Toàn
Đối tượng phụ trách
CUSTOMER

# Chức năng đã thực hiện

### Create Customer

POST /api/customers

### Read Customer

GET /api/customers

GET /api/customers/:id

### Update Customer

PUT /api/customers/:id

### Delete Customer

DELETE /api/customers/:id

# Cấu trúc source code

```text
src/
├── controllers/
│   └── customer.controller.js
├── services/
│   └── customer.service.js
├── repositories/
│   └── customer.repository.js
└── routes/
    └── customer.routes.js
```

# Mô tả

Đối tượng **Customer** dùng để quản lý thông tin khách hàng trong hệ thống Coffee Shop.

Các chức năng đã triển khai:

* Thêm khách hàng mới vào hệ thống.
* Xem danh sách khách hàng.
* Xem chi tiết khách hàng theo mã khách hàng.
* Cập nhật thông tin khách hàng.
* Xóa khách hàng khỏi hệ thống.
