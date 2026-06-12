import React, { useEffect, useRef, useState } from "react";

const NearbyClinics = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [placesService, setPlacesService] = useState(null);
  const [searchQuery, setSearchQuery] = useState("clinic");
  const [markers, setMarkers] = useState([]);
  const [infoWindow, setInfoWindow] = useState(null);

  // Load map script once
  useEffect(() => {
    if (!window.google) {
      const script = document.createElement("script");
      const apiKey = import.meta.env.VITE_API_KEY

      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
      script.async = true;
      script.onload = initMap;
      document.body.appendChild(script);
    } else {
      initMap();
    }
  }, []);

  const initMap = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          loadMap(userLocation);
        },
        () => {
          // fallback location (e.g., Mumbai)
          loadMap({ lat: 19.076, lng: 72.8777 });
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
      loadMap({ lat: 19.076, lng: 72.8777 }); // fallback
    }
  };

  const loadMap = (location) => {
    const mapInstance = new window.google.maps.Map(mapRef.current, {
      center: location,
      zoom: 15,
    });

    const infoWin = new window.google.maps.InfoWindow();
    setInfoWindow(infoWin);

    const service = new window.google.maps.places.PlacesService(mapInstance);
    setMap(mapInstance);
    setPlacesService(service);

    searchNearbyClinics(service, location, infoWin);
  };

  const searchNearbyClinics = (service, location, infoWin) => {
    const request = {
      location,
      radius: 3000, // 3km radius
      keyword: searchQuery,
    };

    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        clearMarkers();
        const newMarkers = results.map((place) => {
          const marker = new window.google.maps.Marker({
            position: place.geometry.location,
            map,
            title: place.name,
          });

          marker.addListener("click", () => {
           infoWin.setContent(
  `<div><strong>${place.name}</strong><br>${place.vicinity}</div>`
);

            infoWin.open(map, marker);
          });

          return marker;
        });
        setMarkers(newMarkers);
      }
    });
  };

  const clearMarkers = () => {
    markers.forEach((marker) => marker.setMap(null));
    setMarkers([]);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (placesService && map) {
      const center = map.getCenter();
      searchNearbyClinics(placesService, center, infoWindow);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h2 className="text-2xl font-bold text-[#01224B]">Search Nearby Clinics</h2>
      <form onSubmit={handleSearch} className="flex gap-2 w-full max-w-md">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search clinics, hospitals..."
          className="flex-1 rounded border border-gray-300 p-2 focus:border-[#004BA6] focus:ring focus:ring-[#004BA6]/50"
        />
        <button
          type="submit"
          className="rounded bg-[#004BA6] px-4 py-2 text-white hover:bg-[#01224B] transition"
        >
          Search
        </button>
      </form>
      <div
        ref={mapRef}
        className="w-full max-w-3xl h-[500px] mt-4 rounded-lg border border-gray-300"
      ></div>
    </div>
  );
};

export default NearbyClinics;