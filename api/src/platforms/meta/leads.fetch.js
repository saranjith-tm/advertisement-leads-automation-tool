import leadsFetch from "./lib/leads.fetch.js";

export default async (req, res) => {
  try {
    const response = await leadsFetch();

    return res.json({ message: "Success", data: response });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
