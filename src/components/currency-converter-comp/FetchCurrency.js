import { useState, useEffect } from 'react';
function getFetchedCurrency(currency){
    let [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
        .then(response => response.json())
        .then(data => setData(data.rates))
    }, [currency])

    return data;
}

export default getFetchedCurrency;