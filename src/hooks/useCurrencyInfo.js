import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`fetch('https://cdn.jsdelivr.net/gh/fawazahmed/currency-api@l/latest/currencies/${curreny}.json`).then((res) => res.json())
        .then((res) => setData(res[currency]))
    },[currency])

    return data;

}

export default useCurrencyInfo;