import { useState, useEffect } from "react";
function Cart({ items }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(items.reduce((sum, item) => sum + item.price, 0));
  }, [items]);

  console.log(items);

  return <div>Total: {total}</div>;
}

export default Cart;
