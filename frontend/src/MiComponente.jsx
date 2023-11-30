import React, { useState } from 'react';
import axios from 'axios';

const MiComponente = () => {
  const [usuario, setUsuario] = useState({
    nombre: '',
    correo: '',
    telefono: ''
  });

  // Función para enviar datos al backend al hacer submit en el formulario
  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:4567/usuarios', usuario);
      console.log('Respuesta del servidor:', response);
      // Puedes manejar la respuesta del servidor aquí, como actualizar el estado del componente, mostrar un mensaje, etc.
      return response.data;
    } catch (error) {
      console.error('Error al enviar datos al servidor:', error);
      // Manejar errores de la solicitud al servidor
    }
  };

  // Función para manejar cambios en los campos del formulario
  const handleChange = (event) => {
    setUsuario({ ...usuario, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nombre" value={usuario.nombre} onChange={handleChange} placeholder="Nombre" />
      <input type="text" name="correo" value={usuario.correo} onChange={handleChange} placeholder="Correo" />
      <input type="text" name="telefono" value={usuario.telefono} onChange={handleChange} placeholder="Teléfono" />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default MiComponente;
