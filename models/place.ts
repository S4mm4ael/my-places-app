import {ICoordinates} from "./location";

interface IPlace {
  title: string;
  address: string;
  location: ICoordinates;
  imageUri: string;
  id: string;
}

class Place implements IPlace {
  constructor(
    public title: string,
    public address: string,
    public location: ICoordinates,
    public imageUri: string,
    public id: string
  ) {
    this.title = title;
    this.address = address;
    this.location = location;
    this.imageUri = imageUri;
    this.id = id;
  }
}

export {IPlace, Place};
