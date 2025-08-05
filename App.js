import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black p-6">
      <header className="border-b pb-4 mb-6">
        <h1 className="text-4xl font-bold">ABC LOGISTICS LLC</h1>
        <p className="text-sm">DOT: 2399770 | MC: 1217600</p>
        <p className="text-sm">3110 OLD HIGHWAY 8 #418, ROSEVILLE, MN 55113</p>
        <p className="text-sm">Phone: 763-377-3083 | Email: Abcrabic99@gmail.com</p>
      </header>
      <main className="grid gap-6">
        <section>
          <h2 className="text-2xl font-semibold mb-2">Welcome to ABC LOGISTICS LLC</h2>
          <p>
            At ABC Logistics LLC, we are committed to delivering excellence in freight transportation across the United States.
            Based in Roseville, Minnesota, our mission is to provide dependable, safe, and efficient logistics services backed by
            professionalism and compliance. With a growing fleet and a dedicated team, we ensure every shipment is delivered on
            time, every time.
          </p>
        </section>
      </main>
    </div>
  );
}