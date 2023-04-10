import mongoose, { Schema, model, models } from "mongoose";

const FeminicidioSchema = new Schema({
  tipodocumentoVictima: { type: String },
  DocumentoVictima: { type: String },
  NombreVictima: { type: String },
  ApellidoVictima: { type: String },
  FechaNacimientoVictima: { type: Date },
  NombreVictimario: { type: String },
  ApellidoVictimario: { type: String },
  TipoDocumentoVictimario: { type: String },
  DocumentoVictimario: { type: String },
  FechaNacimientoVictimario: { type: Date },
  FechaIngreso: { type: Date, default: Date.now },
  FotoVictima: { type: String },
  FotoVictimario: { type: String },
});

const Feminicidios =
  model("Feminicidio") || mongoose.model("Feminicidio", FeminicidioSchema);

export default Feminicidios;
