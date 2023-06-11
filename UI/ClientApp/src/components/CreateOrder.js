import React, { useState } from 'react';
import './CreateOrderStyles.css';
import { useNavigate } from 'react-router-dom';
import {Nav} from "reactstrap";

const CreateOrder = () => {
    const navigator = useNavigate();
    const [showNotification, setShowNotification] = useState(false);
    const [orderData, setOrderData] = useState({
        senderAddress: '',
        senderCity: '',
        receiverAddress: '',
        receiverCity: '',
        cargoWeight: '',
        pickupCargoDate: '',
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setOrderData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const response = await fetch('https://localhost:7004/api/OrderForm/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });

            if (!response.ok) {
                throw new Error('Failed to create order');
            }
            setShowNotification(true);

            // Reset the form data
            setOrderData({
                senderAddress: '',
                senderCity: '',
                receiverAddress: '',
                receiverCity: '',
                cargoWeight: '',
                pickupCargoDate: '',
            });
            setTimeout(() => {
                navigator('/');
            }, 2000);
    
        } catch (error) {
            console.error('Error creating order:', error);
        }
    };

    return (
        <div className="form-container">
            <h2>Create Order</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Sender Address: </label><br />
                    <input type="text" name="senderAddress" value={orderData.senderAddress} onChange={handleChange} />
                </div>
                <div>
                    <label>Sender City: </label><br />
                    <input type="text" name="senderCity" value={orderData.senderCity} onChange={handleChange} />
                </div>
                <div >
                    <label>Receiver Address: </label><br />
                    <input type="text" name="receiverAddress" value={orderData.receiverAddress} onChange={handleChange} />
                </div>
                <div>
                    <label>Receiver City: </label><br />
                    <input type="text" name="receiverCity" value={orderData.receiverCity} onChange={handleChange} />
                </div>
                <div>
                    <label>Cargo Weight: </label><br />
                    <input type="text" name="cargoWeight" value={orderData.cargoWeight} onChange={handleChange} />
                </div>
                <div>
                    <label>Pickup Cargo Date: </label><br />
                    <input type="text" name="pickupCargoDate" value={orderData.pickupCargoDate} onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
            {showNotification && (
                <div className="notification">
                    Order submitted successfully!
                </div>
            )}
        </div>
    );
};

export default CreateOrder;