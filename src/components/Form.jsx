import { useState } from "react";

const Form = () => {
  return (
    <section className="bg-[#FEC48F] flex flex-col items-center justify-center sm:flex-row sm:justify-around py-6">
      <div className="self-start">
        <form className="bg-white bg-opacity-30 p-3 w-[300px]">
          <h2 className="font-bold text-lg">Book Now Bike</h2>
          <div className="flex flex-col">
            <div className="flex flex-col gap-4">
              <div>
                <label className="block" htmlFor="name">
                  Name and Surname
                </label>
                <input
                  type="text"
                  className="px-2"
                  name="name"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block" htmlFor="phone">
                  Telephone Number
                </label>
                <input
                  type="text"
                  className="px-2"
                  name="phone"
                  placeholder="Enter your telephone number"
                />
              </div>
              <div>
                <label className="block" htmlFor="date">
                  Select Date
                </label>
                <input
                  type="date"
                  className="px-2"
                  name="date"
                  placeholder="Enter your telephone number"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  className="px-2"
                  name="email"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block" htmlFor="time">
                  Time
                </label>
                <input
                  type="time"
                  className="px-2"
                  name="phone"
                  placeholder="Enter your telephone number"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="w-[300px]">
        <img src="/bike.png" alt="bike-png" />
      </div>
    </section>
  );
};

export default Form;
