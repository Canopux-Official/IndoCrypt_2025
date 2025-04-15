import { useState } from 'react';
import { MapPin } from 'lucide-react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const PlacesOfInterest = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const placeData = [
    {
      name: 'Lingaraj Temple',
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Lingaraj_Temple_Bhubaneshwar.jpg',
      description:
        'The Lingaraj Temple, dedicated to Lord Shiva, is a classic example of Kalinga architecture. Built in the 11th century, it remains one of the most prominent landmarks of Bhubaneswar. The temple is a blend of both Shaivism and Vaishnavism and was constructed by the Somavamsi dynasty.',
      mapLink: 'https://goo.gl/maps/kSmLVQeUoVA2',
      gallery: [
        'https://upload.wikimedia.org/wikipedia/commons/e/e1/Lingaraj_Temple_Bhubaneshwar.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/d/db/Lingaraj-temple.jpg'
      ]
    },
    {
      name: 'Udayagiri and Khandagiri Caves',
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Udayagiri_Cave_1_Bhubaneswar.jpg',
      description:
        'These rock-cut caves date back to the 2nd century BCE and were used by Jain monks. They are important historical and archaeological landmarks with intricate carvings and inscriptions. The caves were built during the reign of King Kharavela and serve as a monument to Jain heritage.',
      mapLink: 'https://goo.gl/maps/3eLKMWTS7Vo',
      gallery: [
        'https://upload.wikimedia.org/wikipedia/commons/e/e7/Udayagiri_Cave_1_Bhubaneswar.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/b/bf/Khandagiri_Caves.jpg'
      ]
    },
    {
      name: 'Dhauli Shanti Stupa',
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Dhauli_Shanti_Stupa.jpg',
      description:
        'The Dhauli Peace Pagoda marks the site of the Kalinga War fought by Emperor Ashoka. After witnessing the bloodshed, Ashoka embraced Buddhism here, renouncing violence. The white stupa was built in collaboration with Japanese Buddhist monks and symbolizes peace and non-violence.',
      mapLink: 'https://goo.gl/maps/AJxKxBtM88u',
      gallery: [
        'https://upload.wikimedia.org/wikipedia/commons/8/88/Dhauli_Shanti_Stupa.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/2/2e/Dhauli_stupa_sculpture.jpg'
      ]
    },
    {
        name: 'Lingaraj Temple',
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Lingaraj_Temple_Bhubaneshwar.jpg',
        description:
          'The Lingaraj Temple, dedicated to Lord Shiva, is a classic example of Kalinga architecture. Built in the 11th century, it remains one of the most prominent landmarks of Bhubaneswar. The temple is a blend of both Shaivism and Vaishnavism and was constructed by the Somavamsi dynasty.',
        mapLink: 'https://goo.gl/maps/kSmLVQeUoVA2',
        gallery: [
          'https://upload.wikimedia.org/wikipedia/commons/e/e1/Lingaraj_Temple_Bhubaneshwar.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/d/db/Lingaraj-temple.jpg'
        ]
      },
      {
        name: 'Udayagiri and Khandagiri Caves',
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Udayagiri_Cave_1_Bhubaneswar.jpg',
        description:
          'These rock-cut caves date back to the 2nd century BCE and were used by Jain monks. They are important historical and archaeological landmarks with intricate carvings and inscriptions. The caves were built during the reign of King Kharavela and serve as a monument to Jain heritage.',
        mapLink: 'https://goo.gl/maps/3eLKMWTS7Vo',
        gallery: [
          'https://upload.wikimedia.org/wikipedia/commons/e/e7/Udayagiri_Cave_1_Bhubaneswar.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/b/bf/Khandagiri_Caves.jpg'
        ]
      },
      {
        name: 'Dhauli Shanti Stupa',
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Dhauli_Shanti_Stupa.jpg',
        description:
          'The Dhauli Peace Pagoda marks the site of the Kalinga War fought by Emperor Ashoka. After witnessing the bloodshed, Ashoka embraced Buddhism here, renouncing violence. The white stupa was built in collaboration with Japanese Buddhist monks and symbolizes peace and non-violence.',
        mapLink: 'https://goo.gl/maps/AJxKxBtM88u',
        gallery: [
          'https://upload.wikimedia.org/wikipedia/commons/8/88/Dhauli_Shanti_Stupa.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/2/2e/Dhauli_stupa_sculpture.jpg'
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
