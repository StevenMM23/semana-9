import Feminicidios from "@/Models/feminicidioSchema";
import { connectMongoDB } from "@/libs";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(405).send({ msg: "Only get request are alloweded" });
    return;
  }
  try {
    await connectMongoDB();
    Feminicidios.find({}).then((data) => {
      console.log(data);
      res.status(201).send(data);
    });
  } catch (error) {
    console.log(error);

    res.status(400).send({ msg: "Error sending Data" });
  }

}
