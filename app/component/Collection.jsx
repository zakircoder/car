import React from "react";

const cars = [
  {
    title: "Dodge Charger",
    img: "/dodge_21chargerscatpksd7t_angularfront_smokeshow 1.png",
    year: "2016",
    km: "15k",
    fuel: "Auto",
    price: "10.000$",
    type: "Rent",
  },
  {
    title: "Audi RS7",
    img: "/audi_rs7sportback 1.png",
    year: "2016",
    km: "15k",
    fuel: "Auto",
    price: "60.000$",
    type: "Buy",
  },
  {
    title: "Audi RS7",
    img: "/2021_audi_rs-7-sportback_base_032_nar 1.png",
    year: "2016",
    km: "15k",
    fuel: "Auto",
    price: "15.000$",
    type: "Rent",
  },
  {
    title: "Range Rover Velar",
    img: "/12222_cc0640_032_1ag 1.png",
    year: "2020",
    km: "15k",
    fuel: "Auto",
    price: "65.000$",
    type: "Buy",
  },
];

export default function CarCollection() {
  return (
    <section className="w-full py-20 bg-white">
        <div className="container">
        <h1 className="text-center text-4xl font-bold mb-14">
        We Have Everything You Need
      </h1>

      {/* Car Cards */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cars.map((car, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl duration-300"
          >
            {/* Car Title */}
            <h2 className="text-xl font-semibold text-blue-900 p-4">
              {car.title}
            </h2>

            {/* Car Image */}
            <div className="bg-gray-200 w-full h-40 flex items-center justify-center">
              <img src={car.img} alt={car.title} className="h-full object-contain" />
            </div>

            {/* Car Details */}
            <div className="px-4 py-3 text-gray-700 text-sm flex justify-between">
              <p>{car.year}</p>
              <p>🚗 {car.km}</p>
              <p>⚙️ {car.fuel}</p>
            </div>

            {/* Price */}
            <div className="text-center pb-3 font-semibold text-blue-900 text-lg">
              {car.price}
            </div>

            {/* Button */}
            <div className="px-4 pb-5">
              <button
                className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 duration-200"
              >
                {car.type}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Brand Section */}
      <h2 className="text-center text-3xl font-bold my-16">Our Luxury Brand</h2>

      <div className="flex justify-evenly gap-5 mb-10">
        {[
          { name: "Audi", icon: "/audiii 1.png" },
          { name: "Mercedez", icon: "/merco 1.png" },
          { name: "Land Rover", icon: "/range 1.png" },
          { name: "Ferrari", icon: "/ferrarii 1.png" },
          { name: "Tesla", icon: "/tesla 1.png" },
        ].map((brand, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-5 py-2 bg-[#C4C4C4] rounded-[13px] hover:bg-gray-300 duration-200"
          >
            <img src={brand.icon} alt={brand.name} className="w-full" />
            <span>{brand.name}</span>
          </div>
        ))}
      </div>

      {/* See Store Button */}
      <div className="text-center mt-6">
        <button className="text-lg font-semibold border-b-2 border-yellow-600 pb-1 hover:text-yellow-700 duration-200">
          See The Store
        </button>
      </div>
        </div>
    </section>
  );
}
