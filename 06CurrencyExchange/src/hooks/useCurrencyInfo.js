import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Correct API URL for the latest exchange rates from a base currency (USD)
        const url = `https://open.er-api.com/v6/latest/${currency}`;

        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }
                return res.json();
            })
            .then((res) => {
                setData(res.rates); // Store exchange rates data
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, [currency]);

    return { data, loading, error };
}

export default useCurrencyInfo;
