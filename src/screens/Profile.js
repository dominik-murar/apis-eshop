import { Link } from "react-router-dom";
import { OrdersContext } from "../context/OrdersContext";
import OrderItem from "../components/OrderItem";
import Chart from "react-apexcharts";
import { Row } from "react-bootstrap";
import { mockCustomers } from "../App";
import { useContext, useEffect, useState } from "react";

// const mockOrders = [
//   { idOrder: "123", OrderDate: "1640464388", OrderItems: 4 },
//   { idOrder: "321", OrderDate: "1637872388", OrderItems: 5 },
//   { idOrder: "223", OrderDate: "1637872388", OrderItems: 3 },
//   { idOrder: "221", OrderDate: "1637181188", OrderItems: 4 },
// ];

function Profile() {
  const [customer, setCustomer] = useState({});
  const { orders } = useContext(OrdersContext);

  useEffect(() => {
    // fetch("https://apis-zadanie-eshop.herokuapp.com/customer", {
    //   method: "GET",
    // })
    //   .then((response) => response.json())
    //   .then((data) => setCustomer(data[0]));
    setCustomer(mockCustomers[0]);
  }, []);

  // useEffect(() => {
  //   fetch("https://apis-zadanie-eshop.herokuapp.com/order", {
  //     method: "GET",
  //   })
  //     .then((response) => response.json())
  //     .then((data) => setOrders(data));
  //   setOrders(mockOrders);
  // }, [customer]);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const asMonth = (timestamp) => {
    const date = new Date(parseInt(timestamp) * 1000);
    const month = months[date.getMonth()];
    return month;
  };

  const orderItemsNumber = orders.map((order) => order.OrderItems).sort();
  const orderItemsAggregated = {};
  orderItemsNumber.forEach((x) => {
    orderItemsAggregated[x] = (orderItemsAggregated[x] || 0) + 1;
  });
  const chartPieLabels = Object.keys(orderItemsAggregated);
  const chartPieValues = Object.values(orderItemsAggregated);

  const orderDates = orders.map((order) => asMonth(order.OrderDate));
  const orderDatesAggregated = months.reduce(
    (o, key) => ({ ...o, [key]: 0 }),
    {}
  );
  orderDates.forEach((x) => {
    orderDatesAggregated[x] = (orderDatesAggregated[x] || 0) + 1;
  });
  console.log(orderDatesAggregated);

  const chartBarValues = Object.values(orderDatesAggregated);

  return (
    <div>
      <div className="d-flex flex-row justify-content-between align-items-end mb-4">
        <h2 className="mb-0">Profile</h2>
        <Link to={"/"}>continue shopping</Link>
      </div>
      <div>
        <h5>
          {customer.Name} {customer.Surname}
        </h5>
        <p className="mb-0">
          {customer.City}, {customer.State}
        </p>
        <p>{customer.ZipCode}</p>
      </div>
      <div>
        <h2 className="mt-4">Orders</h2>
        {orders.map((order) => (
          <OrderItem order={order} />
        ))}
      </div>
      <div>
        <h2 className="mt-4">Orders Summary</h2>
        <Row>
          <div className="col col-md-6">
            <Chart
              options={{
                title: { text: "Numbers of items in the order:" },
                labels: chartPieLabels,
              }}
              series={chartPieValues}
              type="pie"
            />
          </div>
          <div className="col col-md-6">
            <Chart
              options={{
                title: { text: "Number of orders in the last year:" },
                xaxis: {
                  categories: months,
                },
              }}
              series={[
                {
                  name: "Orders",
                  data: chartBarValues,
                },
              ]}
              type="bar"
            />
          </div>
        </Row>
      </div>
    </div>
  );
}

export default Profile;
