import { useState, useEffect } from 'react';
function getFetchedCurrency(currency) {
   let [data, setData] = useState({});
   useEffect(() => {
      const controller = new AbortController();
      fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`, {
         signal: controller.signal,
      })
         .then((response) => response.json())
         .then((data) => setData(data.rates))
         .catch((e) => {
            if (e.message === 'signal is aborted without reason') return;
         });

      return () => {
         controller.abort();
      };
   }, [currency]);

   return data;
}

export default getFetchedCurrency;
