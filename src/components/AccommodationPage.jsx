import { Phone, MapPin, Globe } from "lucide-react";

const hotels = [
  {
    name: "MAYFAIR Lagoon",
    location: "Mayfair Hotels & Resorts Ltd, 8-B, Jayadev Vihar, Bhubaneswar, Odisha 751013",
    website: "https://www.mayfairhotels.com/mayfair-lagoon-bhubaneswar/",
    mapLink: "https://www.google.com/maps/place/MAYFAIR+Lagoon,+Bhubaneswar,+Mayfair+Hotels+%26+Resorts+Ltd,+8-B,+Jayadev+Vihar,+Bhubaneswar,+Odisha+751013/data=!4m2!3m1!1s0x3a1909c66e104471:0x1b99a6f59a58679c?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI0LjUwLjQYACCenQoqdSw5NDIyNjA0Miw5NDI0MjUzNSw5NDIyMzI5OSw5NDIxNjQxMyw5NDIxMjQ5Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxNzUyMyw5NDIxODY1Myw5NDIyOTgzOSw0NzA4NDM5Myw5NDIxMzIwMEICSU4%3D",
    image: "https://assets.simplotel.com/simplotel/image/upload/x_0,y_111,w_2756,h_1550,r_0/q_80,w_900,h_506,dpr_1,f_auto,fl_progressive,c_limit/mayfair-lagoon-bhubaneswar/P_RPX2944_e1r0ny"
  },
  {
    name: "Swosti Premium",
    location: "P1, Jaydev Vihar, Nandankanan Rd, Bhubaneswar, Odisha 751013",
    website: "https://www.swostihotels.com/swosti-premium-bhubaneswar/",
    mapLink: "https://www.google.com/maps/place/Swosti+Premium+-+Luxury+5-Star+Hotel+in+Bhubaneswar/@20.3040675,85.8231421,17z/data=!4m9!3m8!1s0x3a1909b8a098adcd:0x99b961f708f4afad!5m2!4m1!1i2!8m2!3d20.3040675!4d85.8231421!16s%2Fg%2F1ptx6tc55?entry=tts&g_ep=EgoyMDI1MDEyOS4xIPu8ASoASAFQAw%3D%3D",
    image: "https://assets.simplotel.com/simplotel/image/upload/x_0,y_0,w_1920,h_1080,r_0/q_80,w_900,h_506,dpr_1,f_auto,fl_progressive,c_limit/swosti-group/Front_Elevation_Swosti_Puri_lngcbu"
  },
  {
    name: "The Crown",
    location: "A1/(a, Indradhanu Market, IRC Village, Nayapalli, Bhubaneswar, Odisha 751015",
    website: "https://www.seleqtionshotels.com/en-in/the-crown-bhubaneswar/",
    mapLink: "https://www.google.com/maps/place/The+Crown,+Bhubaneswar+-+IHCL+SeleQtions,+A1%2F(a,+Indradhanu+Market,+IRC+Village,+Nayapalli,+Bhubaneswar,+Odisha+751015/data=!4m2!3m1!1s0x3a19099ed63ad0bd:0x9c769caf740e8415?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI0LjUwLjQYACCenQoqdSw5NDIyNjA0Miw5NDI0MjUzNSw5NDIyMzI5OSw5NDIxNjQxMyw5NDIxMjQ5Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxNzUyMyw5NDIxODY1Myw5NDIyOTgzOSw0NzA4NDM5Myw5NDIxMzIwMEICSU4%3D",
    image: "https://www.seleqtionshotels.com/content/dam/seleqtions/en/in/our-hotels/the-crown-bhubaneswar-ihcl-seleqtions/new-gallery/dji-0220-rs.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg"
  },
  {
    name: "Lemon Tree Premier",
    location: "Plot No – B/1334, Maitree Vihar Road, Chandrasekharpur, Bhubaneswar, Odisha",
    website: "https://www.lemontreehotels.com/lemon-tree-premier/bhubaneswar/hotel-bhubaneswar",
    mapLink: "https://www.google.com/maps/place/The+Crown,+Bhubaneswar+-+IHCL+SeleQtions,+A1%2F(a,+Indradhanu+Market,+IRC+Village,+Nayapalli,+Bhubaneswar,+Odisha+751015/data=!4m2!3m1!1s0x3a19099ed63ad0bd:0x9c769caf740e8415?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI0LjUwLjQYACCenQoqdSw5NDIyNjA0Miw5NDI0MjUzNSw5NDIyMzI5OSw5NDIxNjQxMyw5NDIxMjQ5Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxNzUyMyw5NDIxODY1Myw5NDIyOTgzOSw0NzA4NDM5Myw5NDIxMzIwMEICSU4%3D",
    image: "https://www.lemontreehotels.com/uploads/hotelslider/28_36_2023_11_36_55Facade.jpg"
  },
  {
    name: "Trident",
    location: "CB-1, Nayapalli, Bhubaneswar, Odisha 751013",
    website: "https://www.tridenthotels.com/hotels-in-bhubaneswar/",
    mapLink: "https://www.google.com/maps/place/Trident+Hotel+Bhubaneswar,+CB-1,+Nayapalli,+Bhubaneswar,+Odisha+751013/data=!4m2!3m1!1s0x3a19a7637bc56af3:0xf96c7e137de4dc71?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI0LjUwLjQYACCenQoqdSw5NDIyNjA0Miw5NDI0MjUzNSw5NDIyMzI5OSw5NDIxNjQxMyw5NDIxMjQ5Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxNzUyMyw5NDIxODY1Myw5NDIyOTgzOSw0NzA4NDM5Myw5NDIxMzIwMEICSU4%3D",
    image: "https://www.tridenthotels.com/-/media/trident-hotel/hotel-in-bhubneshwar/Bhubneswar-Overview/Spa/Desktop-765x580/pool.jpg"
  },
  {
    name: "The New Marrion",
    location: "6th Janpath, Bhubaneswar-751001",
    website: "https://www.thenewmarrion.com/",
    mapLink: "https://www.google.com/maps/place/Hotel+New+Marrion,+6,+Janpath+Rd,+Industrial+Area,+Kharvela+Nagar,+Bhubaneswar,+Odisha+751002/data=!4m2!3m1!1s0x3a19a75416ff8e59:0x3a00b58dab4bbdc5?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI0LjUwLjQYACCenQoqdSw5NDIyNjA0Miw5NDI0MjUzNSw5NDIyMzI5OSw5NDIxNjQxMyw5NDIxMjQ5Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxNzUyMyw5NDIxODY1Myw5NDIyOTgzOSw0NzA4NDM5Myw5NDIxMzIwMEICSU4%3D",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/12/d5/9c/58/new-marrion-hotel.jpg"
  },
  {
    name: "Lyfe Hotels",
    location: "C-5, Road No-8, Janpath Rd, opposite Kali Temple, Bhoi Nagar, Bhubaneswar, Odisha",
    website: "https://www.lyfehotels.com/",
    mapLink: "https://www.google.com/maps/dir//C-5,+Road+No-8,+Janpath+Rd,+opposite+Kali+Temple,+Bhoinagar,+Bhubaneswar,+Odisha+751022/@20.2837331,85.7606652,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3a190918742dda43:0xe6382ccafdfc8239!2m2!1d85.8430669!2d20.2837524?entry=ttu&g_ep=EgoyMDI1MDIyNC4wIKXMDSoASAFQAw%3D%3D",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/515205232.jpg?k=9bf60a7701774bd5169a6cb1b673e3bed232174816d7690a9eea715e09305bc2&o=&hp=1"
  },
  {
    name: "Treebo Trend King's Court",
    location: "Plot no-324, 2nd & 3rd floor, District Center, Chandrasekharpur, Bhubaneswar, Odisha",
    website: "https://www.treebo.com/hotels-in-bhubaneswar/treebo-trend-kings-court-chandrasekharpur-1809320/",
    mapLink: "https://www.google.com/maps/dir//Plot+no-324,2nd+%26+3rd+floor,+District+Center,+Chandrasekharpur,+Bhubaneswar,+Odisha+751016/@20.3262027,85.7359508,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a1909a7d17672eb:0xa6389f4b15bec131!2m2!1d85.8183525!2d20.326222?entry=ttu&g_ep=EgoyMDI1MDIyNC4wIKXMDSoASAFQAw%3D%3D",
    image: "https://r1imghtlak.ibcdn.com/34a2f74a261111ea8e950242ac110004.jpeg?&downsize=350:238&crop=350:238;57,0&output-format=jpg"
  },
  {
    name: "Hotel Pushpak",
    location: "Kalpana Square, Bhubaneswar, Odisha 751006",
    website: "https://www.hotelpushpak.com/",
    mapLink: "https://www.google.com/maps/dir//Plot+No+68,+Kalpana+Square,+Puri+-+Cuttack+Road,+Buddha+Nagar,+Bhubaneswar,+Odisha+751006",
    image: "https://www.hotelpushpak.com/n/images/pushpak-front-main.jpg"
  },
  {
    name: "Welcomhotel by ITC Hotels, Bhubaneswar",
    location: "D/1, Dumduma, Bhubaneswar, Odisha 751019",
    website: "https://www.itchotels.com/in/en/welcomhotel-bhubaneswar-odisha",
    mapLink: "https://www.google.com/maps/dir//Welcomhotel+By+ITC+Hotels,+Bhubaneswar-LEED+Platinum+Certified+Premium+Hotel+Near+the+Airport",
    image: "https://www.itchotels.com/content/dam/itchotels/in/umbrella/welcomHotel/hotel-listing/hotel-listing-card/welcomhotel-bhubaneswar.png"
  },
  {
    name: "Ginger Bhubaneshwar",
    location: "Opposite Nalco Headquarters, Jayadev Vihar, Nandankanan Rd, Nayapalli, Bhubaneswar, Odisha 751013",
    website: "https://www.gingerhotels.com/ginger-bhubaneshwar",
    mapLink: "https://www.google.com/maps/dir//Ginger+Bhubaneswar+Opposite+Nalco+Headquarters,+Jayadev+Vihar,+Nandankanan+Rd,+Nayapalli,+Bhubaneswar,+Odisha+751013",
    image: "https://thebackpackman.wordpress.com/wp-content/uploads/2015/05/hotel-ginger-bhubaneswar.jpg"
  },
  {
    name: "Vivanta Bhubaneswar, DN Square",
    location: "Near DN Regalia Mall, Kalinga Vihar, Patrapada, Bhubaneswar, Odisha 751019",
    website: "https://www.vivantahotels.com/en-in/vivanta-bhubaneswar-dn-square/",
    mapLink: "https://www.google.com/maps/dir//vivanta+bhubaneswarnear+DN+Regalia+Mall,+Kalinga+Vihar,+Patrapada,+Bhubaneswar,+Odisha+751019",
    image: "https://www.vivantahotels.com/content/dam/vivanta/hotels/bhubaneswar/new-images/gallery/Hotel-Facade-0.jpg"
  }
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
              <p className="text-sm text-gray-600">{hotel.location}</p>
              <div className="flex items-center gap-2 text-blue-700">
                <MapPin size={18} />
                <a href={hotel.mapLink} target="_blank" rel="noopener noreferrer" className="underline text-sm">
                  View on Map
                </a>
              </div>
              <button
                onClick={() => window.open(hotel.website, "_blank")}
                className="mt-2 inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
              >
                <Globe size={18} /> View Website
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Map section */}
      {/* <div className="mt-12">
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
      </div> */}
    </section>
  );
}
