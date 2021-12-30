import React, { useState } from "react";

export const OrdersContext = React.createContext({
  orders: [],
  setOrders: () => {},
});

const mockOrders = [
  { idCustomer: 1, idOrder: 1, OrderDate: "1640464388", OrderItems: 4 },
  { idCustomer: 1, idOrder: 2, OrderDate: "1637872388", OrderItems: 5 },
  { idCustomer: 1, idOrder: 3, OrderDate: "1637872388", OrderItems: 3 },
  { idCustomer: 1, idOrder: 4, OrderDate: "1637181188", OrderItems: 4 },
];

export const OrdersContextProvider = ({ children }) => {
  const [orders, setOrders] = useState(mockOrders);
  return (
    <OrdersContext.Provider value={{ orders, setOrders }}>
      {children}
    </OrdersContext.Provider>
  );
};
