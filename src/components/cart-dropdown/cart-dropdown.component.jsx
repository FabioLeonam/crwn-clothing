import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';
import CustomButtom from '../custom-button/custom-button.component';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
            )) 
        ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
    </div>
    <CustomButtom onClick={() => {
      history.push('/checkout'); 
      dispatch(toggleCartHidden())
      }}>
        GO TO CHECKOUT</CustomButtom>
  </div>
)
    
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));