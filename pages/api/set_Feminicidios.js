import Feminicidios from "@/Models/feminicidioSchema";
import { connectMongoDB } from "@/libs";


export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ msg: "Only post request are alloweded" });
    return;
  }
  const response = req.body;
  console.log(response);

  try {
    await connectMongoDB();
    Feminicidios.create(response).then((data) => {
      console.log(data);
      res.status(201).send(data);
    });
  } catch (error) {
    console.log(error);

    res.status(400).send({ msg: "Error sending Data" });
  }
}
