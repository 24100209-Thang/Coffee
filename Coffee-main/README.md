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
