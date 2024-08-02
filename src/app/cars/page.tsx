"use server";
import CarCard from "./car-cards";

export type CarType = {
  id: string;
  status: string;
  model: string;
  price: number;
};

export default async function CarsPage() {
  const response = await fetch(
    "https://warehouse-app-ynorbbawua-uc.a.run.app/cars"
  );
  const cars = await response.json();
  console.log(cars);
  return (
    <main className="flex flex-wrap items-center justify-center ">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://www.motortrend.com/uploads/2022/02/8-Most-Expensive-Cars-List-McLaren-Speedtail.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-neutral-content font-bold">
              Nils and Ottos Car Shop
            </h1>
            <p className="mb-6 text-lg text-neutral-content leading-relaxed">
              At Nils and Otto's Luxury Car Shop, we redefine the luxury car
              buying experience. Our showroom features a handpicked selection of
              the world's most prestigious automotive brands, including Tesla,
              Porsche, and BMW. Whether you are looking for the latest model or
              a timeless classic, our collection is sure to impress even the
              most discerning car enthusiast.
            </p>

            <p className="mb-6 text-lg text-neutral-content leading-relaxed">
              Explore our showroom and experience the pinnacle of luxury and
              performance. At Nils and Otto's, we don't just sell cars; we
              deliver dreams on wheels.
            </p>
          </div>
        </div>
      </div>
      <CarCard cars={cars}/>
    </main>
  );
}
