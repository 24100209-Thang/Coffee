// import logo from './logo.svg';
// import './App.css';

// export default function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React from 'react';
import './App.css'; // Sẽ tạo file CSS bên dưới

function GoogleClone() {
  return (
    <div className="google-container">
      {/* Header - Các liên kết trên cùng */}
      <div className="header">
        <div className="header-left">
          <a href="#">Giới thiệu</a>
          <a href="#">Quảng cáo</a>
          <a href="#">Doanh nghiệp</a>
        </div>
        <div className="header-right">
          <a href="#">English</a>
        </div>
      </div>

      {/* Nội dung chính */}
      <div className="main-content">
        {/* Logo Google */}
        <div className="logo">
          <h1 style={{ fontSize: '80px', fontWeight: 'bold' }}>
            <span style={{ color: '#4285F4' }}>G</span>
            <span style={{ color: '#EA4335' }}>o</span>
            <span style={{ color: '#FBBC05' }}>o</span>
            <span style={{ color: '#4285F4' }}>g</span>
            <span style={{ color: '#34A853' }}>l</span>
            <span style={{ color: '#EA4335' }}>e</span>
          </h1>
        </div>

        {/* Ô tìm kiếm */}
        <div className="search-box">
          <div className="search-bar">
            <svg className="search-icon" viewBox="0 0 24 24" width="20" height="20">
              <path fill="#9aa0a6" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
            <input 
              type="text" 
              className="search-input" 
              placeholder="Tim trên Google"
            />
            <div className="search-actions">
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="#9aa0a6" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Các nút bên dưới ô tìm kiếm */}
        <div className="buttons">
          <button className="btn">Xem trang đầu tiên tìm được</button>
          <button className="btn">Google hỗ trợ các ngôn ngữ:</button>
        </div>

        {/* Quốc gia */}
        <div className="country">
          <span>Việt Nam</span>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-left">
          <a href="#">Giới thiệu</a>
          <a href="#">Quảng cáo</a>
          <a href="#">Doanh nghiệp</a>
          <a href="#">Cách hoạt động của Tim kiểm</a>
        </div>
        <div className="footer-right">
          <a href="#">Quyền riêng tư</a>
          <a href="#">Điều khoản</a>
          <a href="#">Cài đặt</a>
        </div>
      </div>
    </div>
  );
}

export default GoogleClone;