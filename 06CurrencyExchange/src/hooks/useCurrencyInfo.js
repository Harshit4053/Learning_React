import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://open.er-api.com/v6/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => {
                if (res.rates) {
                    setData(res.rates); // Set the full "rates" object
                } else {
                    setData({}); // Fallback to empty object
                }
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setData({});
            });
    }, [currency]);

    return data; 
}

export default useCurrencyInfo;
