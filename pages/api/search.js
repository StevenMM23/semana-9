import Feminicidios from "@/Models/feminicidioSchema";
import { connectMongoDB } from "@/libs";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ msg: "Only post request are alloweded" });
    return;
  }
  const query = req.body.query;
  console.log(query);

  try {
    await connectMongoDB();
    const results = await Feminicidios.find({
      $or: [
        { NombreVictima: { $regex: new RegExp(query, "i") } },
        { NombreVictimario: { $regex: new RegExp(query, "i") } },
      ],
    });
    
    console.log(results);
    res.status(200).send(results);
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: "Error retrieving data" });
  }
}
