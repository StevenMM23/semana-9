import { useState } from "react";
import axios from "axios";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/search", { query: searchQuery });
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "1rem" }}>
      <h1 style={{ textAlign: "center", fontSize: "2rem", margin: "1rem 0" }}>
        Busqueda Inteligente
      </h1>
      <form
        onSubmit={handleSearchSubmit}
        style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
      >
        <label style={{ marginRight: "1rem" }}>Buscar:</label>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          style={{
            padding: "0.5rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
            flex: "1",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#4caf50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            marginLeft: "1rem",
            cursor: "pointer",
          }}
        >
          Buscar
        </button>
      </form>

      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead style={{ backgroundColor: "#4caf50", color: "white" }}>
          <tr>
            <th style={{ padding: "0.5rem" }}>Tipo Documento</th>
            <th style={{ padding: "0.5rem" }}>Documento</th>
            <th style={{ padding: "0.5rem" }}>Nombre</th>
            <th style={{ padding: "0.5rem" }}>Apellido</th>
            <th style={{ padding: "0.5rem" }}>Fecha Nacimiento</th>
            <th style={{ padding: "0.5rem" }}>Nombre Victimario</th>
            <th style={{ padding: "0.5rem" }}>Apellido Victimario</th>
            <th style={{ padding: "0.5rem" }}>Tipo Documento Victimario</th>
            <th style={{ padding: "0.5rem" }}>Documento Victimario</th>
            <th style={{ padding: "0.5rem" }}>Fecha Nacimiento Victimario</th>
            <th style={{ padding: "0.5rem" }}>Fecha Ingreso</th>
            <th style={{ padding: "0.5rem" }}>Foto Victima</th>
            <th style={{ padding: "0.5rem" }}>Foto Victimario</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((result) => (
            <tr key={result._id} style={{ borderBottom: "1px solid #ccc" }}>
              <td style={{ padding: "0.5rem" }}>
                {result.tipodocumentoVictima}
              </td>
              <td style={{ padding: "0.5rem" }}>{result.DocumentoVictima}</td>
              <td style={{ padding: "0.5rem" }}>{result.NombreVictima}</td>
              <td style={{ padding: "0.5rem" }}>{result.ApellidoVictima}</td>
              <td style={{ padding: "0.5rem" }}>
                {result.FechaNacimientoVictima}
              </td>
              <td style={{ padding: "0.5rem" }}>{result.NombreVictimario}</td>
              <td style={{ padding: "0.5rem" }}>{result.ApellidoVictimario}</td>
              <td style={{ padding: "0.5rem" }}>
                {result.TipoDocumentoVictimario}
              </td>
              <td style={{ padding: "0.5rem" }}>
                {result.DocumentoVictimario}
              </td>
              <td style={{ padding: "0.5rem" }}>
                {result.FechaNacimientoVictimario}
              </td>
              <td style={{ padding: "0.5rem" }}>{result.FechaIngreso}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
