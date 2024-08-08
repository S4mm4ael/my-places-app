interface ICoordinates {
  lat: number;
  lng: number;
}

interface IPickedLocation extends ICoordinates {
  address: string;
}

export {IPickedLocation, ICoordinates};
