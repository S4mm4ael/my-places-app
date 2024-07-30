interface IPlace {
  title: string;
  address: string;
  location: string;
  imageUri: string;
  id?: string;
}

class Place implements IPlace {
  constructor(
    public title: string,
    public address: string,
    public location: string,
    public imageUri: string
  ) {
    this.title = title;
    this.address = address;
    this.location = location;
    this.imageUri = imageUri;
    this.id = new Date().getTime().toString();
  }
}

export {IPlace, Place};
