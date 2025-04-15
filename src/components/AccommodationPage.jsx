import { Phone, MapPin } from "lucide-react";

const hotels = [
  {
    name: "Hotel Blue Lagoon",
    description: "Comfortable stay with modern amenities near the conference venue.",
    image: "https://source.unsplash.com/400x250/?hotel,room",
    phone: "+91-9876543210",
    mapLink: "https://www.google.com/maps?q=Hotel+Blue+Lagoon+Bhubaneswar",
  },
  {
    name: "Urban Stay Apartments",
    description: "Fully-furnished apartments ideal for long stays. 10 minutes from IIIT Bhubaneswar.",
    image: "https://source.unsplash.com/400x250/?apartment,interior",
    phone: "+91-9988776655",
    mapLink: "https://www.google.com/maps?q=Urban+Stay+Apartments+Bhubaneswar",
  },
  {
    name: "Palm Grove Inn",
    description: "Cozy rooms with complimentary breakfast and easy access to local transport.",
    image: "https://source.unsplash.com/400x250/?resort,exterior",
    phone: "+91-9123456780",
    mapLink: "https://www.google.com/maps?q=Palm+Grove+Inn+Bhubaneswar",
  },
  {
    name: "Hotel Blue Lagoon",
    description: "Comfortable stay with modern amenities near the conference venue.",
    image: "https://source.unsplash.com/400x250/?hotel,room",
    phone: "+91-9876543210",
    mapLink: "https://www.google.com/maps?q=Hotel+Blue+Lagoon+Bhubaneswar",
  },
  {
    name: "Urban Stay Apartments",
    description: "Fully-furnished apartments ideal for long stays. 10 minutes from IIIT Bhubaneswar.",
    image: "https://source.unsplash.com/400x250/?apartment,interior",
    phone: "+91-9988776655",
    mapLink: "https://www.google.com/maps?q=Urban+Stay+Apartments+Bhubaneswar",
  },
  {
    name: "Palm Grove Inn",
    description: "Cozy rooms with complimentary breakfast and easy access to local transport.",
    image: "https://source.unsplash.com/400x250/?resort,exterior",
    phone: "+91-9123456780",
    mapLink: "https://www.google.com/maps?q=Palm+Grove+Inn+Bhubaneswar",
  },
];

export default function AccommodationPage() {
  return (
    <section className="p-6 md:p-12 font-sans bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-blue-800">
        Accommodation
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {hotels.map((hotel, index) => (
          <div key={index} className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
            <img src={hotel.image} alt={hotel.name} className="w-full h-48 object-cover" />
            <div className="p-4 space-y-3">
              <h3 className="text-xl font-semibold text-gray-800">{hotel.name}</h3>
              <p className="text-sm text-gray-600">{hotel.description}</p>
              <div className="flex items-center gap-2 text-blue-700">
                <MapPin size={18} />
                <a href={hotel.mapLink} target="_blank" rel="noopener noreferrer" className="underline text-sm">
                  View on Map
                </a>
              </div>
              <button
                onClick={() => window.open(`tel:${hotel.phone}`)}
                className="mt-2 inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
              >
                <Phone size={18} /> Call Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Map section */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-blue-800 mb-4 text-center">Location Overview</h3>
        <div className="w-full h-96">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1ZiSY6FsyCyDz9XEgZpKzY3zKIgY&hl=en" // Replace with a custom map if needed
            width="100%"
            height="100%"
            className="rounded-xl shadow-md"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
