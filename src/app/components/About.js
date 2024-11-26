import staff from "../../../public/constants/staff";
import Image from "next/image"; // Importing the Next.js Image component

const AboutUs = () => {
  return (
    <section className="py-10 bg-white shadow-lg rounded-lg w-full">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-green-800 ">About Us</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          We are passionate about bringing you the most beautiful, customizable
          terrariums. Our mission is to provide a unique and creative experience
          for all plant lovers. Whether youre looking for a new hobby or a
          statement piece for your space, our terrariums will bring nature into
          your home.
        </p>

        {/* Staff Members */}
        <div className="grid bg-white grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {staff.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src={member.imageUrl}
                alt={member.name}
                width={128} // Width of the image (32*4)
                height={128} // Height of the image (32*4)
                className="object-cover rounded-full mb-4 border-4 border-green-200 shadow-md"
                priority // Optionally use priority for faster loading on visible images
              />
              <h3 className="text-xl font-semibold text-green-800">
                {member.name}
              </h3>
              <p className="text-sm text-green-600">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
