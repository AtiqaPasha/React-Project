import { useContext, useState } from 'react';
import { BsFillCartFill } from 'react-icons/bs'
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartItems from './CartItems';
import { CartContext } from '../context/addtoCart/context';

function Cart() {
    const [show, setShow] = useState(false);

    const { state, dispatch } = useContext(CartContext)

    return (
        <>
            <button type="button" onClick={() => setShow(true)} className="btn  position-relative">
                <BsFillCartFill />
                {state.cart && state.cart.length > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {state.cart.length}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                )}
            </button>

            <Offcanvas show={show} onHide={() => setShow(false)} placement='end' name="end" style={{backgroundColor:'#66023c'}}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className='text-white'>
                        Cart
                        <button className='ms-4 btn btn-outline-dark'
                            onClick={() => dispatch({ type: "CLEAR_CART" })}
                        >
                            Clear Cart
                        </button>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {state.cart && state.cart.length > 0 ? (
                        state.cart.map((val, key) => <CartItems key={key} data={val} />)
                    ) : (
                        <p className='text-white'>No items in the cart.</p>
                    )}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Cart;
