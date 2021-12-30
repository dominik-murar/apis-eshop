function OrderItem({ order }) {
  const date = new Date(parseInt(order.OrderDate) * 1000);
  const dateFormated = new Intl.DateTimeFormat("en-GB").format(date);

  return (
    <div className="col" key={toString(order.idOrder)}>
      <div className="d-flex flex-row justify-content-between align-items-center border-bottom pt-3">
        <div className="card-desc">
          <p className="book-subtitle">
            <b className="h5">Order {order.idOrder} | </b>
            {dateFormated}
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
