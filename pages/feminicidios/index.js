import { useEffect, useState } from "react";
import axios from "axios";
import SearchPage from "@/components/SearchPage";

export default function PageFeminicidios() {
  const [formData, setFormData] = useState({
    tipodocumentoVictima: "",
    DocumentoVictima: "",
    NombreVictima: "",
    ApellidoVictima: "",
    FechaNacimientoVictima: "",
    NombreVictimario: "",
    ApellidoVictimario: "",
    TipoDocumentoVictimario: "",
    DocumentoVictimario: "",
    FechaNacimientoVictimario: "",
    FotoVictima: "",
    FotoVictimario: "",
  });
  const [feminicidios, setFeminicidios] = useState([]);
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post(`/api/set_Feminicidios`, formData)
      .then((res) => {
        console.log(formData);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    
      
    setFormData({
      tipodocumentoVictima: "",
      DocumentoVictima: "",
      NombreVictima: "",
      ApellidoVictima: "",
      FechaNacimientoVictima: "",
      NombreVictimario: "",
      ApellidoVictimario: "",
      TipoDocumentoVictimario: "",
      DocumentoVictimario: "",
      FechaNacimientoVictimario: "",
      FotoVictima: "",
      FotoVictimario: "",
    });
    alert("Femenicidio registrado exitosamente");
  };
  useEffect(() => { 
    const getFeminicidios = async() => { 
        axios.get(`/api/get_Feminicidios`).then((res) => { 
            console.log(res);
            setFeminicidios(res.data)
        }).catch((err) => { 
            console.log(err);
        })
    }

    getFeminicidios();
  }, [formData])
  return (
    <div>
     <h1>Formulario de Feminicidios</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Tipo de documento de la víctima:
          <input
            type="text"
            name="tipodocumentoVictima"
            value={formData.tipodocumentoVictima}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Documento de la víctima:
          <input
            type="text"
            name="DocumentoVictima"
            value={formData.DocumentoVictima}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Nombre de la víctima:
          <input
            type="text"
            name="NombreVictima"
            value={formData.NombreVictima}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Apellido de la víctima:
          <input
            type="text"
            name="ApellidoVictima"
            value={formData.ApellidoVictima}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Fecha de nacimiento de la víctima:
          <input
            type="date"
            name="FechaNacimientoVictima"
            value={formData.FechaNacimientoVictima}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Nombre del victimario:
          <input
            type="text"
            name="NombreVictimario"
            value={formData.NombreVictimario}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Apellido del victimario:
          <input
            type="text"
            name="ApellidoVictimario"
            value={formData.ApellidoVictimario}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Tipo de documento del victimario:
          <input
            type="text"
            name="TipoDocumentoVictimario"
            value={formData.TipoDocumentoVictimario}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Documento del victimario:
          <input
            type="text"
            name="DocumentoVictimario"
            value={formData.DocumentoVictimario}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Fecha de nacimiento del victimario:
          <input
            type="date"
            name="FechaNacimientoVictimario"
            value={formData.FechaNacimientoVictimario}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Foto de la víctima:
          <input type="file" accept="image/*" />
        </label>
        <br />
        <label>
          Foto del victimario:
          <input type="file" accept="image/*" />
        </label>
        <br />
        <button type="submit">Registrar femenicidio</button>
      </form>
        <SearchPage/>
      <h1>Tabla de Femenicidios</h1>
      <table>
        <thead>
          <tr>
            <th>Documento Victima</th>
            <th>Nombre Victima</th>
            <th>Apellido Victima</th>
            <th>Documento Victimario</th>
            <th>Nombre Victimario</th>
            <th>Apellido Victimario</th>
            <th>Fecha Ingreso</th>
          </tr>
        </thead>
        <tbody>
          {feminicidios.map((x) => (
            <tr key={x._id}>

              <td>{x.DocumentoVictima}</td>
              <td>{x.NombreVictima}</td>
              <td>{x.ApellidoVictima}</td>
              <td>{x.DocumentoVictimario}</td>
              <td>{x.NombreVictimario}</td>
              <td>{x.ApellidoVictimario}</td>
              <td>{x.FechaIngreso}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
