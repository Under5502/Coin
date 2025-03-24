# Tài liệu API WebSocket

## 1. API: `get_price_signals`

### Mô tả
Lấy danh sách tín hiệu giá của các đồng tiền điện tử, bao gồm thời gian, tên tín hiệu, biểu tượng, giá và mô tả biến động giá.

### Request
```json
{
  "action": "get_price_signals"
}
```

### Response
```json
{
  "action": "get_price_signals",
  "success": true,
  "data": [
    {
      "id": 360,
      "timestamp": "2025-03-20T02:06:00Z",
      "signal_name": "BTC",
      "symbol": "BTC",
      "price": 85666.63,
      "description": "BTC đang biến động giảm mạnh"
    },
    {
      "id": 321,
      "timestamp": "2025-03-20T02:06:00Z",
      "signal_name": "ETH",
      "symbol": "ETH",
      "price": 2027.9,
      "description": "ETH đang biến động đẩy mạnh"
    }
  ]
}
```

### Lưu ý
- Tín hiệu giá sắp xếp theo thời gian mới nhất.
- Mô tả chỉ ra xu hướng giá.

---

## 2. API: `get_price_alerts`

### Mô tả
Lấy danh sách cảnh báo giá của các đồng tiền điện tử, bao gồm thời gian, biểu tượng, giá cảnh báo, giá hiện tại, loại cảnh báo và thời gian tạo.

### Request
```json
{
  "action": "get_price_alerts"
}
```

### Response
```json
{
  "action": "get_price_alerts",
  "success": true,
  "data": [
    {
      "id": 438,
      "timestamp": "2025-03-20T02:10:00Z",
      "symbol": "ETH",
      "alert_price": 0.0246206,
      "current_price": 2031.32,
      "alert_type": "mua vào",
      "created_at": "2025-03-20T02:09:12Z"
    },
    {
      "id": 440,
      "timestamp": "2025-03-20T02:10:00Z",
      "symbol": "SOL",
      "alert_price": 0.03744757,
      "current_price": 133.57,
      "alert_type": "mua vào",
      "created_at": "2025-03-20T02:09:12Z"
    }
  ]
}
```

### Lưu ý
- Cảnh báo giá sắp xếp theo thời gian mới nhất.
- `alert_price` dương: "mua vào", âm: "bán gấp".

---

## 3. API: `get_large_orders`

### Mô tả
Lấy danh sách lệnh giao dịch lớn của các đồng tiền điện tử, bao gồm thời gian, mã lệnh, biểu tượng, hướng giao dịch, số lượng, giá và thời gian tạo.

### Request
```json
{
  "action": "get_large_orders"
}
```

### Response
```json
{
  "action": "get_large_orders",
  "success": true,
  "data": [
    {
      "id": 5332,
      "timestamp": "2025-03-20T02:14:07Z",
      "order_id": "1742436846896000000-SOL",
      "symbol": "SOL",
      "side": "sell",
      "amount": 0.04,
      "price": 133.47,
      "created_at": "2025-03-20T02:14:07Z"
    },
    {
      "id": 5335,
      "timestamp": "2025-03-20T02:14:07Z",
      "order_id": "1742436846896000000-SOL",
      "symbol": "SOL",
      "side": "sell",
      "amount": 0.04,
      "price": 133.47,
      "created_at": "2025-03-20T02:14:07Z"
    }
  ]
}
```

### Lưu ý
- Lệnh giao dịch sắp xếp theo thời gian mới nhất.
- `order_id` có thể trùng nhưng `id` khác.

---

## 4. API: `get_price_data`

### Mô tả
Lấy tổng hợp dữ liệu về giá của các đồng tiền điện tử, bao gồm cảnh báo giá, thay đổi giá và tín hiệu giá.

### Request
```json
{
  "action": "get_price_data"
}
```

### Response
```json
{
  "action": "get_price_data",
  "success": true,
  "data": {
    "price_alerts": [
      {
        "id": 483,
        "timestamp": "2025-03-20T02:18:00Z",
        "symbol": "ETH",
        "alert_price": -0.00789757,
        "current_price": 2025.78,
        "alert_type": "bán gấp",
        "created_at": "2025-03-20T02:17:02Z"
      }
    ],
    "price_changes": [
      {
        "id": 483,
        "timestamp": "2025-03-20T02:18:00Z",
        "asset": "ETH",
        "alert_type": "bán gấp",
        "price_change": -0.01,
        "current_price": 2025.78
      }
    ],
    "price_signals": [
      {
        "id": 483,
        "timestamp": "2025-03-20T02:18:00Z",
        "signal_name": "ETH",
        "symbol": "ETH",
        "price": 2025.78,
        "description": "ETH đang biến động giảm mạnh"
      }
    ]
  }
}
```

### Lưu ý
- Dữ liệu sắp xếp theo thời gian mới nhất.
- `alert_price` và `price_change` dương: "mua vào", âm: "bán gấp".
