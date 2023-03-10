import { useDispatch } from "react-redux";
import "./App.css";
import { addToCart, removeFromCart } from "./redux/action";

function App() {
  const dispatch = useDispatch();
  const data = {
    name: "rishabh",
    age: 22,
    phno: 32145412321675,
  };
  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch(addToCart(data));
        }}
      >
        Add to cart
      </button>
      <button
        onClick={() => {
          dispatch(removeFromCart(data));
        }}
      >
        remove from cart
      </button>
    </div>
  );
}

export default App;
