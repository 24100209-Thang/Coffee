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

import React, { useState, useEffect } from 'react';
import './App.css';

function ItemList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/api/items')
      .then((res) => {
        if (!res.ok) throw new Error(`Lỗi HTTP: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setItems(data.data || data); // tuỳ backend trả { data: [...] } hay [...] trực tiếp
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Đang tải dữ liệu...</p>;
  if (error) return <p>Lỗi: {error}</p>;

  return (
    <table border="1" cellPadding="8" style={{ margin: '20px auto', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>Mã SP</th>
          <th>Tên</th>
          <th>Loại</th>
          <th>Giá</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.ITEM_ID}>
            <td>{item.ITEM_ID}</td>
            <td>{item.NAME}</td>
            <td>{item.TYPE}</td>
            <td>{item.PRICE}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function GoogleClone() {
  // ... giữ nguyên toàn bộ code GoogleClone hiện tại của bạn ...
}

function App() {
  return (
    <div>
      <GoogleClone />
      <ItemList />
    </div>
  );
}

export default App;