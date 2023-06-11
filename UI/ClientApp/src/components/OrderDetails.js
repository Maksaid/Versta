import { useLocation } from 'react-router-dom';

const OrderDetails = () => {
    const location = useLocation();
    const { state: { order } = {} } = location;

    if (!order) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Order Details</h2>
            <div>
                <p>Order ID: {order.id}</p>
                <p>Sender Address: {order.senderAddress}</p>
                <p>Sender City: {order.senderCity}</p>
                <p>Receiver Address: {order.receiverAddress}</p>
                <p>Receiver City: {order.receiverCity}</p>
                <p>Cargo Weight: {order.cargoWeight}</p>
                <p>Pickup Cargo Date: {order.pickupCargoDate}</p>
            </div>
        </div>
    );
};

export default OrderDetails;