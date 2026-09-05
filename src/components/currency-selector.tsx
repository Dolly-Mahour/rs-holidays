"use client";

import React from "react";
import { useCurrency, Currency } from "@/src/context/CurrencyContext";

export default function CurrencySelector() {
  const { currency, setCurrency } = useCurrency();

  const options: { code: Currency; symbol: string; label: string }[] = [
    { code: "INR", symbol: "₹", label: "INR" },
    { code: "USD", symbol: "$", label: "USD" },
    { code: "EUR", symbol: "€", label: "EUR" },
  ];

  return (
    <div className="btn-group btn-group-sm rounded-pill overflow-hidden border border-secondary shadow-sm" role="group">
      {options.map((opt) => (
        <button
          key={opt.code}
          type="button"
          onClick={() => setCurrency(opt.code)}
          className={`btn px-2 py-1 fw-semibold ${
            currency === opt.code
              ? "btn-danger text-white"
              : "btn-light text-dark bg-white"
          }`}
          style={{ fontSize: "12px", transition: "all 0.2s ease" }}
        >
          {opt.symbol} {opt.label}
        </button>
      ))}
    </div>
  );
}
