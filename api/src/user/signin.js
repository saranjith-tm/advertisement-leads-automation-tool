import userFetch from "./lib/user.fetch.js";

export default async (req, res) => {
  try {
    const user = await userFetch();

    return res.json({ message: "Success", data: user });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
