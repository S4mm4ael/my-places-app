const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

function getMapPreview(lat: string, lng: string) {
  const imagePreview = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${apiKey}&signature=YOUR_SIGNATURE`;

  return imagePreview;
}

export {getMapPreview};
