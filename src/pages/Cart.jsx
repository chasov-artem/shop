import { useDispatch, useSelector } from "react-redux";
import { selectAmount, selectCart } from "../redux/CartSlice";
import { useEffect } from "react";
import {
  decreaseProductCount,
  fetchCart,
  increaseProductCount,
  removeFromCart,
} from "../redux/cartOps";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const totalAmount = useSelector(selectAmount);
  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);
  return (
    <div className="text-4xl">
      <h2 className="font-bold text-center underline mb-4 text-5xl">Cart</h2>
      <p className="px-4 py-4">Total Amount: ${totalAmount}</p>
      <ul className="flex flex-col gap-4 items-center">
        {cart.map((item) => (
          <li
            className="px-4 grid grid-cols-[120px_3fr_2fr_1fr_1fr] items-center text-xl shadow-md rounded-sm border-2 border-black w-5/6"
            key={item.id}
          >
            <img width={100} src={item.thumbnail} />
            <p>{item.title}</p>
            <p>
              {item.price}$ x {item.count} ={" "}
              {(item.price * item.count).toFixed(2)}$
            </p>

            <div className="flex gap-2 items-center ">
              <button
                onClick={() =>
                  item.count > 0 ? dispatch(decreaseProductCount(item)) : ""
                }
                className="btn"
              >
                -
              </button>
              <span>{item.count}</span>
              <button
                onClick={() => dispatch(increaseProductCount(item))}
                className="btn"
              >
                +
              </button>
            </div>
            <button
              onClick={() => dispatch(removeFromCart(item))}
              className="btn btn-error"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Cart;
