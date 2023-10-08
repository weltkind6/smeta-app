import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
    const [offerData, setOfferData] = useState(null);
    console.log('offerData', offerData)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://offer.okonti.ru/api/get_offer_data/89A67');
                setOfferData(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {offerData ? (
                <div>
                    <h1>{offerData.title}</h1>
                    <p>{offerData.description}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default MyComponent;
