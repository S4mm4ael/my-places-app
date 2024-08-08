const apiKey = process.env.EXPO_PUBLIC_API_KEY;

function getMapPreview(lat: number, lng: number) {
  const imagePreview = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${apiKey}&signature=YOUR_SIGNATURE`;
  return imagePreview;
}

function getAddressFromCoordinates(lat: number, lng: number) {
  let address;

  fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`
  )
    .then((res) => res.json())
    .then((data) => {
      if (!data.results) {
        throw new Error("Failed to fetch address!");
      }

      address = data.results[0].formatted_address;
    });

  return address;
}

export {getMapPreview, getAddressFromCoordinates};
