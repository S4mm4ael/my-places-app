interface ICategory {
  id: string;
  title: string;
  color: string;
}

class Category implements ICategory {
  id: string;
  title: string;
  color: string;

  constructor(id: string, title: string, color: string) {
    this.id = id;
    this.title = title;
    this.color = color;
  }
}

export default Category;
