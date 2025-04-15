import { useState } from 'react';
import { MapPin } from 'lucide-react';
import Modal from 'react-modal';
import puriTemple2 from '../assets/Places of Interest/puri temple 2.jpeg';
import puriTemple1 from '../assets/Places of Interest/puri temple 1.jpeg';
import puriTemple3 from '../assets/Places of Interest/puri temple 3.jpg'; // can be same if duplicate
import puriTemple4 from '../assets/Places of Interest/puri temple 4.jpg';
import puriBeach1 from '../assets/Places of Interest/puri sea beach 1.jpg'; // can be same if duplicate
import puriBeach2 from '../assets/Places of Interest/puri sea beach 2.jpg'; // can be same if duplicate
import puriBeach3 from '../assets/Places of Interest/puri sea beach 3.jpg'; // can be same if duplicate
import puriBeach4 from '../assets/Places of Interest/puri sea beach 4.jpg'; // can be same if duplicate
import chilika1 from '../assets/Places of Interest/chilika 1.jpg';
import chilika2 from '../assets/Places of Interest/chilika 2.jpg'; // can be same if duplicate
import chilika3 from '../assets/Places of Interest/chilika 3.png'; // can be same if duplicate
import chilika4 from '../assets/Places of Interest/chilika 4.png'; // can be same if duplicate
import konark1 from '../assets/Places of Interest/konark 1.jpg'; // can be same if duplicate
import konark2 from '../assets/Places of Interest/konark 2.jpg'; // can be same if duplicate
import konark3 from '../assets/Places of Interest/konark 3.jpg'; // can be same if duplicate
import konark4 from '../assets/Places of Interest/konark 4.webp'; // can be same if duplicate
import lingaraj1 from '../assets/Places of Interest/lingaraj 1.jpg'; // can be same if duplicate
import lingaraj2 from '../assets/Places of Interest/lingaraj 2.jpg'; // can be same if duplicate
import lingaraj3 from '../assets/Places of Interest/lingaraj 3.jpg'; // can be same if duplicate
import lingaraj4 from '../assets/Places of Interest/lingaraj 4.jpg'; // can be same if duplicate 
import uday1 from '../assets/Places of Interest/Udayagiri 1.jpeg'; // can be same if duplicate
import uday2 from '../assets/Places of Interest/Udayagiri 2.jpeg'; // can be same if duplicate
import uday3 from '../assets/Places of Interest/Udayagiri 3.webp'; // can be same if duplicate
import uday4 from '../assets/Places of Interest/Udayagiri 4.jpg'; // can be same if duplicate
import n1 from '../assets/Places of Interest/Nandankanan 1.jpg'; // can be same if duplicate
import n2 from '../assets/Places of Interest/Nandankanan 2.jpg'; // can be same if duplicate
import n3 from '../assets/Places of Interest/Nandankanan 3.jpeg'; // can be same if duplicate  
import n4 from '../assets/Places of Interest/Nandankanan 4.webp'; // can be same if duplicate
import rt1 from '../assets/Places of Interest/Rajarani temple 1.jpg'; // can be same if duplicate
import rt2 from '../assets/Places of Interest/Rajarani temple 2.jpg'; // can be same if duplicate
import rt3 from '../assets/Places of Interest/Rajarani temple 3.jpg'; // can be same if duplicate
import rt4 from '../assets/Places of Interest/Rajarani temple 4.jpg'; // can be same if duplicate

import mt1 from '../assets/Places of Interest/Mukteshwar Temple 1.jpg'; // can be same if duplicate
import mt2 from '../assets/Places of Interest/Mukteshwar Temple 2.webp'; // can be same if duplicate
import mt3 from '../assets/Places of Interest/Mukteshwar Temple 3.jpg'; // can be same if duplicate
import mt4 from '../assets/Places of Interest/Mukteshwar Temple 4.jpg'; // can be same if duplicate

import dg1 from '../assets/Places of Interest/Dhauligiri 1.jpg';
import dg2 from '../assets/Places of Interest/Dhauligiri 2.jpg'; // can be same if duplicate
import dg3 from '../assets/Places of Interest/Dhauligiri 3.webp'; // can be same if duplicate  
import dg4 from '../assets/Places of Interest/Dhauligiri 4.jpg'; // can be same if duplicate

import os1 from '../assets/Places of Interest/Odisha state museum 1.jpg'; // can be same if duplicate
import os2 from '../assets/Places of Interest/Odisha state museum 2.jpg'; // can be same if duplicate
import os3 from '../assets/Places of Interest/Odisha state museum 3.jpg'; // can be same if duplicate
import os4 from '../assets/Places of Interest/Odisha state museum 4.jpg'; // can be same if duplicate

import bg1 from '../assets/Places of Interest/Botanical garden 1.jpg'
import bg2 from '../assets/Places of Interest/Botanical garden 2.jpg'; // can be same if duplicate
import bg3 from '../assets/Places of Interest/Botanical garden 3.jpg'; // can be same if duplicate
import bg4 from '../assets/Places of Interest/Botanical garden 4.jpg'; // can be same if duplicate


import Dd1 from '../assets/Places of Interest/Deras dam 1.jpg';
import Dd2 from '../assets/Places of Interest/Deras dam 2.webp'; // can be same if duplicate
import Dd3 from '../assets/Places of Interest/Deras dam 3.webp'; // can be same if duplicate
import Dd4 from '../assets/Places of Interest/Deras dam 4.jpg'; // can be same if duplicate

import p1 from '../assets/Places of Interest/pathani-samanta-planetarium 1.jpg';
import p2 from '../assets/Places of Interest/pathani-samanta-planetarium 2.jpg'; // can be same if duplicate
import p3 from '../assets/Places of Interest/pathani-samanta-planetarium 3.jpg'; // can be same if duplicate
import p4 from '../assets/Places of Interest/pathani-samanta-planetarium 4.webp'; // can be same if duplicate


Modal.setAppElement('#root');

const PlacesOfInterest = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const placeData = [
    {
      name: 'Jagannath Temple Puri',
      thumbnail: 'https://www.mypuritour.com/wp-content/uploads/2022/08/puri-tour-2022.jpeg',
      description:
        'The Jagannath Temple in Puri is one of the most sacred pilgrimage sites for Hindus, dedicated to Lord Jagannath, a form of Lord Vishnu. Known for its towering spire and intricate carvings, the temple is a masterpiece of Kalinga architecture. It draws millions of devotees each year, especially during the grand Rath Yatra, when the deities are taken out in massive chariots.',
      mapLink: 'https://www.google.com/maps/place/Shree+Jagannatha+Temple+Puri/@19.8049379,84.6643741,9z/data=!4m10!1m2!2m1!1sjagannath+temple+puri!3m6!1s0x3a19c6b8bfe386af:0x8f052c84639c7d48!8m2!3d19.8049379!4d85.8179386!15sChVqYWdhbm5hdGggdGVtcGxlIHB1cmlaFyIVamFnYW5uYXRoIHRlbXBsZSBwdXJpkgEMaGluZHVfdGVtcGxl4AEA!16zL20vMGN2eDd4?entry=ttu&g_ep=EgoyMDI1MDMzMS4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D',
      gallery: [
        puriTemple1,
        puriTemple2,
        puriTemple3,
        puriTemple4
      ]
    },
    {
      name: 'Puri Sea Beach',
      thumbnail: 'https://beaches-searcher.com/images/beaches/356401443/IN401443.jpg',
      description:
        'Puri Beach is a popular destination along the eastern coast of India, known for its golden sands and rhythmic waves of the Bay of Bengal. Its a favorite spot for both pilgrims and tourists, offering a peaceful retreat, especially during sunrise and sunset. The beach also hosts cultural festivals and sand art exhibitions that add to its vibrant charm.',
      mapLink: 'https://www.google.com/maps/search/puri+sea+beach/',
      gallery: [
        puriBeach1,
        puriBeach2,
        puriBeach3,
        puriBeach4
      ]
    },
    {
      name: 'Chilika Lake',
      thumbnail: 'https://www.shutterstock.com/image-photo/chilika-bird-bay-bengal-600nw-1935526933.jpg',
      description:
        'Chilika Lake, located near Puri, is Asia’s largest brackish water lagoon and a haven for nature lovers. It is home to a wide variety of migratory birds, especially during winter, and is one of the few places where you can spot the endangered Irrawaddy dolphins. The lakes scenic beauty and biodiversity make it a must-visit for wildlife enthusiasts and photographers.',
      mapLink: 'https://www.google.com/maps/place/Chilika+Lake/',
      gallery: [
        chilika1,chilika2,chilika3,chilika4
      ]
    },
    {
      name: 'Konark Sun Temple',
      thumbnail: 'https://media.assettype.com/outlooktraveller%2F2023-09%2F03287dc7-f928-45dc-91bb-06acf44690d3%2Fshutterstock_99772349.jpeg?w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&enlarge=true&overlay=false&overlay_position=bottom&overlay_width=100',
      description:
        'The Konark Sun Temple, located in Odisha, is a 13th-century architectural marvel built by King Narasimhadeva I of the Eastern Ganga dynasty. Designed in the shape of a colossal chariot dedicated to the Sun God, Surya, it features intricately carved wheels, horses, and sculptures that reflect the brilliance of ancient Indian craftsmanship. Recognized as a UNESCO World Heritage Site, the temple stands as a symbol of Odisha rich cultural heritage and artistic excellence.',
      mapLink: 'https://www.google.com/maps/place/Konark,+Odisha+752111/@19.8918524,86.0906213,19z/data=!4m6!3m5!1s0x3a19ed591ff3c6b5:0x5ae97a04d50af18b!8m2!3d19.8920686!4d86.091184!16zL20vMDZzeG5q?entry=tts&g_ep=EgoyMDI1MDIyNi4xIPu8ASoASAFQAw%3D%3D',
      gallery: [
        konark1,konark2,konark3,konark4 
      ]
    },
    {
      name: 'Lingaraj Temple',
      thumbnail: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhmOnY2Co6TaeGhyphenhyphenzTkro9391IDhI0JwkUsn6XlHr_KwyNEXXyl3dM7Ydo9T8SrCtQ1ki0gi5ktZGok-GcSAe6L_0m4fPIm0qMD8faJkZRfdsen03fvQYN_cZEwPDrZb0zbgf6cx6bedOa986UmG_FUoQqxZZ4aXO8o8dKZukZrWvAukCO1JpJIx6zbdO1y/s800/Screenshot_20240916-200822_Maps.jpg',
      description:
        'One of the oldest and most revered temples in Bhubaneswar, Lingaraj Temple dates back to the 11th century and is dedicated to Lord Shiva. The temple is a stunning example of Kalinga architecture, featuring a towering 180-ft tall shikhara (&amp;shy;spire&amp;shy;), intricately carved walls, and over 50 smaller shrines within the complex. The sacred Bindu Sagar Lake, believed to have holy water from all major rivers of India, lies nearby. Non-Hindus cannot enter but can view the temple from an external platform.',
      mapLink: 'https://maps.app.goo.gl/s2YxuHpGSsb4UEuw8',
      gallery: [
        lingaraj1,lingaraj2,lingaraj3,lingaraj4
      ]
    },
    {
      name: 'Udayagiri and Khandagiri Caves',
      thumbnail: 'https://i0.wp.com/compass.rauias.com/wp-content/uploads/2024/07/image-24.png',
      description:
        'These rock-cut caves were built during the 2nd century BCE under King Kharavela for Jain monks. Udayagiri (Sunrise Hill) has 18 caves, while Khandagiri has 15, featuring intricate carvings, inscriptions, and meditation chambers. The most famous cave, Rani Gumpha (Queen&rsquo;s Cave), has beautiful sculptures depicting ancient royal life. A trek to the top offers breathtaking views of Bhubaneswar.',
      mapLink: 'https://maps.app.goo.gl/3627PoMugJZgCxCS8',
      gallery: [
          uday1,uday2,uday3,uday4
      ]
    },
    {
      name: 'Nandankanan Zoological Park',
      thumbnail: 'https://orissaguide.com/wp-content/uploads/2024/01/Nandankanan-Zoological-Park-11.jpg',
      description:
        'Spread over 437 hectares, this wildlife park is home to India&rsquo;s first white tiger safari. Other attractions include a herbivore safari, lion safari, reptile park, and an extensive aviary. The Kanjia Lake inside the park offers boating, and the zoo is known for successful conservation programs of species like gharials, pangolins, and Asiatic lions.',
      mapLink: 'https://maps.app.goo.gl/qJpCYH6E4Qxutyxu6',
      gallery: [
        n1,n2,n3,n4
      ]
    },
    {
      name: 'Rajarani Temple',
      thumbnail: 'https://s7ap1.scene7.com/is/image/incredibleindia/rajarani-temple-bhubaneshwar-odisha-2-attr-hero?qlt=82&ts=1727010605038',
      description:
        'Often called the &quot;Love Temple&quot;, Rajarani Temple (11th century) is unique as it has no presiding deity. Its red and yellow sandstone structure is decorated with detailed sculptures of dancing women, musicians, and celestial beings. The temple&rsquo;s name comes from &quot;Rajarani&quot; stone, a special type of sandstone used in its construction.',
      mapLink: 'https://maps.app.goo.gl/PozEYZT2FpAYw3xC6',
      gallery: [
        rt1,rt2,rt3,rt4
      ]
    },
    {
      name: 'Mukteshwar Temple',
      thumbnail: 'https://bhubaneswartourism.in/images//tourist-places/mukteswara-temple-bhubaneswar/mukteswara-temple-bhubaneswar-india-tourism-history.jpg',
      description:
        'Built in the 10th century, this temple is a masterpiece of Odisha&rsquo;s temple architecture, often called the &quot;Gem of Kalinga Architecture&quot;. It is famous for its ornate torana (arched gateway), which resembles Buddhist influences. The temple is dedicated to Lord Shiva and is an important pilgrimage site',
      mapLink: 'https://maps.app.goo.gl/FSKpUSNHrztfPqHx6',
      gallery: [
        mt1,mt2,mt3,mt4
      ]
    },
    {
      name: 'Dhauligiri Shanti Stupa',
      thumbnail: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/17/e0/76/dhauli-peace-pagoda.jpg?w=1200&h=-1&s=1',
      description:
        'This white Buddhist peace pagoda, built by the Japanese in 1972, marks the site where Emperor Ashoka fought the bloody Kalinga War (261 BCE) and later embraced Buddhism. The hilltop location offers panoramic views of the Daya River, where it is believed the river turned red due to the war. The site features beautiful Buddha statues, inscriptions, and Ashokan edicts carved on rock.',
      mapLink: 'https://maps.app.goo.gl/6K8n9y35PxtKM5e79',
      gallery: [
        dg1,dg2,dg3,dg4
      ]
    },
    
    {
        name: 'Odisha State Museum',
        thumbnail: 'https://d3sftlgbtusmnv.cloudfront.net/blog/wp-content/uploads/2024/10/odisha-state-museum-Cover-840x425.jpg',
        description:
          'A paradise for history buffs, this museum showcases a vast collection of ancient manuscripts, palm-leaf inscriptions, stone sculptures, tribal weapons, and rare musical instruments. The highlight is the Pattachitra paintings, a unique Odia art form with intricate detailing. There is also a natural history section with fossils and an impressive collection of rare coins.',
        mapLink: 'https://maps.app.goo.gl/UAuLDzNsiCLzrwgY7',
        gallery: [
          os1,os2,os3,os4
        ]
      },
      {
        name: 'Ekamra Kanan Botanical Garden',
        thumbnail: 'https://www.nandankanan.org/images/botanical.jpg',
        description:
          'This 500-acre garden is the largest botanical garden in Bhubaneswar, featuring a cactus house, rose garden, and orchid house. It is home to a diverse collection of exotic and medicinal plants, making it an ideal place for nature lovers, photographers, and morning walkers. A large artificial lake within the park adds to its beauty, and paddle boating is available.',
        mapLink: 'https://maps.app.goo.gl/M7TURaXsTjTM3rnZA',
        gallery: [
          bg1,bg2,bg3,bg4
        ]
      },
      {
        name: 'Deras Dam',
        thumbnail: 'https://bhubaneswartourism.in/images/places-to-visit/headers/deras-dam-bhubaneswar-tourism-entry-fee-timings-holidays-reviews-header.jpg',
        description:
          'Located about 20 km from Bhubaneswar, Deras Dam is a scenic reservoir surrounded by forests. It serves as a picnic and trekking spot, offering serene water views, lush greenery, and a peaceful atmosphere. The area is part of the Chandaka-Dampara Wildlife Sanctuary, home to elephants and other wildlife.',
        mapLink: 'https://maps.app.goo.gl/bzJmSZVZ9WgYbF9JA',
        gallery: [
          Dd1,Dd2,Dd3,Dd4
        ]
      },
      {
        name: 'Pathani Samanta Planetarium',
        thumbnail: 'https://thenewshashtag.com/wp-content/uploads/2024/06/Pathani-Samanta-Planetarium.jpg',
        description:
          'Named after the great Odia astronomer Pathani Samanta, this planetarium is a hub for astronomy enthusiasts. It offers space shows, interactive exhibits, and a 3D celestial dome where visitors can explore planets, stars, and space phenomena. The center frequently hosts educational workshops and observation programs.',
        mapLink: 'https://maps.app.goo.gl/e7hFtkWvpu8Q9xfL8',
        gallery: [
          p1,p2,p3,p4
        ]
      }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-indigo-800">Places of Interest</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {placeData.map((place, index) => (
          <div key={index} className="bg-white shadow-lg rounded-2xl overflow-hidden transition hover:shadow-xl">
            <img src={place.thumbnail} alt={place.name} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-indigo-700 mb-1">{place.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{place.description.slice(0, 100)}...</p>
              <div className="flex items-center gap-2 text-sm text-blue-600 mb-4">
                <MapPin size={16} />
                <a href={place.mapLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  View on Map
                </a>
              </div>
              <button
                onClick={() => setSelectedPlace(place)}
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition text-sm"
              >
                View Gallery
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Gallery */}
      {selectedPlace && (
        <Modal
          isOpen={true}
          onRequestClose={() => setSelectedPlace(null)}
          contentLabel="Gallery Modal"
          className="max-w-3xl mx-auto my-20 bg-white rounded-lg shadow-xl p-6 outline-none"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start overflow-y-auto z-50"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-indigo-700">{selectedPlace.name} Gallery</h3>
            <button onClick={() => setSelectedPlace(null)} className="text-gray-500 hover:text-red-500 text-xl">✕</button>
          </div>
          <p className="text-sm text-gray-700 mb-4">{selectedPlace.description}</p>
          <div className="grid grid-cols-2 gap-4">
            {selectedPlace.gallery.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Gallery image ${i + 1}`}
                className="w-full h-48 object-cover rounded-md"
              />
            ))}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default PlacesOfInterest;
