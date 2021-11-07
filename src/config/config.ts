const config = {
  defaults: {
    namespace: "Application",
  },
  authHeaderKey: "firebase-auth-token",
  baseURL: {
    ROOT: process.env.REACT_APP_ROOT_URL,
    WARDROBE: `${process.env.REACT_APP_ROOT_URL}/wardrobe`,
    PRODUCT: `${process.env.REACT_APP_ROOT_URL}/product`,
    COLLECTION: `${process.env.REACT_APP_ROOT_URL}/collection`,
    OUTFIT: `${process.env.REACT_APP_ROOT_URL}/outfit`,
    CONVERSION: `${process.env.REACT_APP_ROOT_URL}/conversion`,
  },
};

export default config;
