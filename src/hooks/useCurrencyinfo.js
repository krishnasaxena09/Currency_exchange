import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency = "USD") {
  const [data, setData] = useState({});

  useEffect(() => {
    const url = `https://api.frankfurter.app/latest?from=${baseCurrency}`;

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res.rates);
      })
      .catch((err) => {
        console.error("Currency fetch error:", err);
        setData({});
      });
  }, [baseCurrency]);

  return data;
}

export default useCurrencyInfo;
