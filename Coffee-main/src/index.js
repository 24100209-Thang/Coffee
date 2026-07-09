// =============================================
// COFFEESHOP API SERVER - Entry Point
// =============================================
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { testConnection } = require('./config/database');

// Import Routes
const employeeRoutes = require('./routes/employee.routes');
const customerRoutes = require('./routes/customer.routes');
const itemRoutes     = require('./routes/item.routes');
const orderRoutes    = require('./routes/order.routes');
const authRoutes   = require('./auth/auth.routes');
const app = express();
const PORT = process.env.PORT || 3000;

// ---- Middleware ----
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ---- API Routes ----
app.use('/api/employees', employeeRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/items',     itemRoutes);
app.use('/api/orders',    orderRoutes);
app.use('/api/auth',authRoutes);

// ---- Route gốc: danh sách tất cả endpoints ----
app.get('/', (req, res) => {
  res.json({
    message: '☕ CoffeeShop API đang hoạt động!',
    version: '1.0.0',
    endpoints: {
      employees: {
        'GET    /api/employees':      'Lấy tất cả nhân viên',
        'GET    /api/employees/:id':  'Lấy nhân viên theo ID',
        'POST   /api/employees':      'Thêm nhân viên mới',
        'PUT    /api/employees/:id':  'Cập nhật nhân viên',
        'DELETE /api/employees/:id':  'Xóa nhân viên',
      },
      customers: {
        'GET    /api/customers':      'Lấy tất cả khách hàng',
        'GET    /api/customers/:id':  'Lấy khách hàng theo ID',
        'POST   /api/customers':      'Thêm khách hàng mới',
        'PUT    /api/customers/:id':  'Cập nhật khách hàng',
        'DELETE /api/customers/:id':  'Xóa khách hàng',
      },
      items: {
        'GET    /api/items':          'Lấy tất cả sản phẩm (hỗ trợ ?type=... để lọc)',
        'GET    /api/items/:id':      'Lấy sản phẩm theo ID',
        'POST   /api/items':          'Thêm sản phẩm mới',
        'PUT    /api/items/:id':      'Cập nhật sản phẩm',
        'DELETE /api/items/:id':      'Xóa sản phẩm',
      },
      orders: {
        'GET    /api/orders':                       'Lấy tất cả đơn hàng',
        'GET    /api/orders/:id':                   'Lấy đơn hàng theo ORDER_ID',
        'GET    /api/orders/customer/:customerId':  'Lấy đơn hàng của khách hàng',
        'POST   /api/orders':                       'Tạo đơn hàng mới',
        'PUT    /api/orders/:id':                   'Cập nhật đơn hàng',
        'DELETE /api/orders/:id':                   'Xóa đơn hàng',
      },
    },
  });
});

// ---- 404 Handler ----
app.use((req, res) => {
  res.status(404).json({ success: false, message: `Không tìm thấy route: ${req.method} ${req.url}` });
});

// ---- Global Error Handler ----
app.use((err, req, res, next) => {
  console.error('Lỗi server:', err);
  res.status(500).json({ success: false, message: 'Lỗi server nội bộ', error: err.message });
});

// ---- Start Server ----
async function startServer() {
  await testConnection();
  app.listen(PORT, () => {
    console.log(`\n☕ CoffeeShop API đang chạy tại: http://localhost:${PORT}`);
    console.log(`📋 Xem tất cả endpoints: http://localhost:${PORT}/\n`);
  });
}

startServer();
