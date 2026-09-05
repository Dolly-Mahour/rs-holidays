"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Currency = "INR" | "USD" | "EUR";

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (c: Currency) => void;
  formatPrice: (amountInINR?: number | string) => string;
  symbol: string;
}

const CurrencyContext = createContext<CurrencyContextType>({
  currency: "INR",
  setCurrency: () => {},
  formatPrice: () => "₹999",
  symbol: "₹",
});

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrencyState] = useState<Currency>("INR");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("rs_currency") as Currency : null;
    if (saved && ["INR", "USD", "EUR"].includes(saved)) {
      setCurrencyState(saved);
    }
  }, []);

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    if (typeof window !== "undefined") {
      localStorage.setItem("rs_currency", c);
    }
  };

  const formatPrice = (amountInINR: number | string = 999): string => {
    // Fixed base price 999 INR
    const num = 999;
    
    if (currency === "USD") {
      const usdVal = Math.round(num / 83); // ~ $12
      return `$${usdVal}`;
    }
    if (currency === "EUR") {
      const eurVal = Math.round(num / 90); // ~ €11
      return `€${eurVal}`;
    }
    return `₹${num.toLocaleString("en-IN")}`;
  };

  const symbolMap: Record<Currency, string> = {
    INR: "₹",
    USD: "$",
    EUR: "€",
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        formatPrice,
        symbol: symbolMap[currency],
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);
