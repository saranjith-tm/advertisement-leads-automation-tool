export default (data) => {
  try {
    return "Hey User";
  } catch (error) {
    console.log(error);
    throw error;
  }
};
