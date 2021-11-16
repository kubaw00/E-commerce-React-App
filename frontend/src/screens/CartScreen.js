import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import { Link } from 'react-router-dom';
import { Row, Col, ListGroup, Form, Button, Card } from 'react-bootstrap';
import { addToCart } from '../actions/cartActions';
import { useNavigate, useLocation, useParams } from 'react-router';

const CartScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let { id: productId } = useParams();
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  });

  return <div>sdfsdf</div>;
};

export default CartScreen;
