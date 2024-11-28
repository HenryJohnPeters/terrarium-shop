"use client";
import staff from "../../../public/constants/staff"; // Assuming staff data is coming from here
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        {/* Mission Statement */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-green-800 mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 mx-auto max-w-3xl">
            At That Green Lady, we are passionate about bringing nature into
            people&apos;s lives through our beautiful and customizable
            terrariums. We believe in creating unique, personalized pieces that
            bring joy, calm, and a touch of greenery into any space. Our mission
            is to make it easy for anyone to design their perfect terrarium and
            experience the beauty of nature in the comfort of their home.
          </p>
        </div>

        {/* Staff Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-green-800 mb-12">
            Meet The Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {staff.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="object-cover rounded-full mb-6 border-4 border-green-500"
                />
                <h3 className="text-2xl font-semibold text-green-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-lg text-green-600">{member.title}</p>
                <p className="text-sm text-gray-600 mt-4">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-semibold text-green-800 mb-4">
            Join Us on Our Journey!
          </h3>
          <p className="text-lg text-gray-700 mx-auto max-w-2xl mb-6">
            We are always looking for talented and passionate individuals to
            join our team. If you love plants, creativity, and working with an
            amazing team, we&apos;d love to hear from you. Let&apos;s work
            together to bring the beauty of nature into homes across the world.
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-105">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
