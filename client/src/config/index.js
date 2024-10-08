export const registerFormControls = [
  {
    label: "User Name",
    name: "userName",
    type: "text",
    placeholder: "Enter your user name",
    componentType: "input",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Enter your email",
    componentType: "input",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "Enter your password",
    componentType: "input",
  },
];

export const loginFormControls = [
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Enter your email",
    componentType: "input",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "Enter your password",
    componentType: "input",
  },
];

export const productFormControls = [
  {
    label: "Title",
    name: "title",
    type: "text",
    placeholder: "Enter product title",
    componentType: "input",
  },
  {
    label: "Description",
    name: "description",
    type: "text",
    placeholder: "Enter product description",
    componentType: "textarea",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      {
        id: "men",
        label: "Men",
      },
      {
        id: "women",
        label: "Women",
      },
      {
        id: "kids",
        label: "Kids",
      },
      {
        id: "accessories",
        label: "Accessories",
      },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      {
        id: "puma",
        label: "Puma",
      },
      {
        id: "adidas",
        label: "Adidas",
      },
      {
        id: "levi",
        label: "Levi",
      },
      {
        id: "zara",
        label: "Zara",
      },
      {
        id: "h&m",
        label: "H&M",
      },
    ],
  },
  {
    label: "Price",
    name: "price",
    type: "number",
    placeholder: "Enter the price",
    componentType: "input",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    type: "number",
    placeholder: "enter the sale price",
    componentType: "input",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    type: "number",
    placeholder: "enter the stock amount",
    componentType: "input",
  },
];

export const filterOptions = {
  category: [
    { id: "men", label: "Men" },
    { id: "women", label: "Women" },
    { id: "kids", label: "Kids" },
    { id: "accessories", label: "Accessories" },
  ],
  brand: [
    { id: "puma", label: "Puma" },
    { id: "adidas", label: "Adidas" },
    { id: "levi", label: "Levi" },
    { id: "zara", label: "Zara" },
    { id: "h&m", label: "H&M" },
  ],
};
export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];
export const categoryOptionsMap = {
  men: "Men",
  women: "Women",
  kids: "Kids",
  accessories: "Accessories",
};

export const brandOptionsMap = {
  puma: "Puma",
  adidas: "Adidas",
  levi: "Levi",
  zara: "Zara",
  "h&m": "H&M",
};
