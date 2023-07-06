export default function Cart({ cart }) {
  return (
    <div>
      <h2>Cart</h2>
      {Object.entries(cart).map(([itemId, count]) => (
        <div key={itemId}>
          <p>Item ID: {itemId}</p>
          <p>Count: {count}</p>
        </div>
      ))}
    </div>
  );
}