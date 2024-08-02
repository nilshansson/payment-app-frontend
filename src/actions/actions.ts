"use server";
import { CarType } from "@/app/cars/page";
import { revalidatePath } from "next/cache";

export async function handleBuy(car: CarType) {
  const carId = car.id;
  try {
    const response = await fetch(
      "https://warehouse-app-ynorbbawua-uc.a.run.app/car",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ carId }),
      },
    );
    console.log(carId);

    if (response.ok) {
      const data = await response.json();
      revalidatePath("/cars");
    } else {
      const errorData = await response.json();
    }
  } catch (error) {
    console.error("Error posting data:", error);
  }
}
