import React, { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    const [hoveredOrderId, setHoveredOrderId] = useState(null);
    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await fetch('https://localhost:7004/api/OrderForm/get-all');
            if (!response.ok) {
                throw new Error('Failed to fetch orders');
            }
            const data = await response.json();
            setOrders(data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };
    const handleOrderClick = (order) => {
        navigate('/orders/{order.id}', { state: { order } });
    };
    const handleMouseEnter = (orderId) => {
        setHoveredOrderId(orderId);
    };

    const handleMouseLeave = (orderId) => {
        setHoveredOrderId(null);
    };


    return (
        <div>
            <h2>Orders</h2>
            {/* Render the orders */}
            {orders.map(order => (
                <div key={order.id} style={
                    hoveredOrderId === order.id
                        ? { ...orderContainerStyle, ...orderContainerHoverStyle }
                        : orderContainerStyle
                } onMouseEnter={() => handleMouseEnter(order.id)} onMouseLeave={() => handleMouseLeave(order.id)} onClick={() => handleOrderClick(order)}>
                        <p>ID: {order.id}</p>
                        <p>Sender Address: {order.senderAddress}</p>
                        <p>Receiver Address: {order.receiverAddress}</p>
                        <p>Pickup Cargo Date: {order.pickupCargoDate}</p>
                </div>
            ))}
        </div>
    );
};
const orderContainerStyle = {
    borderRadius: '10px',
    backgroundColor: '#f2f2f2',
    padding: '10px',
    margin: '10px 0',
    transition: 'box-shadow 0.3s ease',
    boxShadow: '0 0 0 rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    // Add additional styles as needed
};

const orderContainerHoverStyle = {
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    // Add additional hover styles as needed
};


export default Orders;  