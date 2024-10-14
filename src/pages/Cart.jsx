import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../redux/CartSlice";
import { useEffect } from "react";
import { fetchCart } from "../redux/cartOps";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);
  return (
    <div>
      <h2 className="text-4xl">Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <img src={item.thumbnail} />
            <p>{item.title}</p>
            <p>{item.price}</p>
            <p></p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Cart;
