"use client";
import { useState } from "react";
import { CarType } from "./page";
import { handleBuy } from "@/actions/actions";
type CardProps = {
  cars: CarType[];
};

export default function CarCard({ cars }: CardProps) {
  const [message, setMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  function handleClick(car: CarType) {
    setMessage(`Car ${car}`);
    setShowToast(true);

    setTimeout(() => setShowToast(false), 3000);
  }
  return (
    <>
      {cars.map((car: CarType) => (
        <div
          key={car.id}
          className="card bg-base-100 w-96 shadow-xl m-4 max-h-96"
        >
          <figure>
            <img
              src="https://robbreport.com/wp-content/uploads/2023/09/RR_50_Most_Expensive_Cars_You_Can_Buy_Right_Now_Rolls_Royce_Spectre.jpg"
              alt={car.model}
              className="object-cover h-48 w-full"
            />
          </figure>
          <div className="card-body max-h-48">
            <h2 className="card-title max-h-7">
              {car.model}
              <div className="badge badge-info whitespace-nowrap">
                {car.status}
              </div>
            </h2>
            <p>${car.price.toLocaleString()}</p>
            <button className="btn btn-primary" onClick={() => handleClick(car)}>
              Buy Now
            </button>
          </div>
        </div>
      ))}

      {/* Toast Notification */}
      {showToast && (
        <div
          role="alert"
          className="alert alert-info fixed bottom-4 right-4 z-50 flex items-center p-4 bg-blue-100 border-t-4 border-blue-500 text-blue-700 rounded shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-6 w-6 shrink-0 stroke-current mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>{message}</span>
        </div>
      )}
    </>
  );
}
