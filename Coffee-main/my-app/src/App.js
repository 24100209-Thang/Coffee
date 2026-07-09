import React, { useState, useEffect } from 'react';
import './App.css';

// ----- Component hiển thị danh sách khách hàng từ database -----
function CustomerList() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3306/api/customers')
      .then((res) => {
        if (!res.ok) throw new Error(`Lỗi HTTP: ${res.status}`);
        return res.json();
      })
      .then((json) => {
        setCustomers(json.data || []); // backend trả { success, count, data: [...] }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Đang tải dữ liệu khách hàng...</p>;
  if (error) return <p style={{ color: 'red' }}>Lỗi: {error}</p>;

  return (
    <table className="table" style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ background: '#f5f5f5', textAlign: 'left' }}>
          <th style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Name</th>
          <th style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>ID</th>
          <th style={{ padding: '10px', borderBottom: '2px solid #ddd' }}>Status</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((c) => (
          <tr key={c.CUSTOMER_ID} style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '10px' }}>{c.CUSTOMER_NAME}</td>
            <td style={{ padding: '10px' }}>{c.CUSTOMER_ID}</td>
            <td style={{ padding: '10px' }}>{c.EMP_ID ? 'Active' : 'Unassigned'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function App() {
  return (
    <div style={{ maxWidth: '900px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h2>Danh sách khách hàng</h2>
      <CustomerList />
    </div>
  );
}

export default App;