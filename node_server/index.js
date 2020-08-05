const connection = require("./database/connection.js");

const vehiculosController = {
  getAll: () => {
    connection.query(
      "SELECT Marca,Modelo,Puertas,Cilindrada, FORMAT(Precio,2,'de_DE') as Precio from vehiculos",
      (error, vehiculos, fields) => {
        vehiculos.forEach((element) => {
          let respuesta = "";
          if (element.Puertas != null) {
            respuesta += `Marca: ${element.Marca} // Modelo: ${element.Modelo} // Puertas: ${element.Puertas} // Precio: ${element.Precio}`;
          } else if (element.Cilindrada != null) {
            respuesta += `Marca: ${element.Marca} // Modelo: ${element.Modelo} // Cilindrada: ${element.Cilindrada} // Precio: ${element.Precio}`;
          }
          console.log(respuesta);
        });
        vehiculosController.corte();
      }
    );
  },
  getMaxPrecio: () => {
    connection.query(
      "select Marca, Modelo from vehiculos ORDER BY Precio DESC LIMIT 1",
      (error, vehiculo, fields) => {
        console.log(
          `Vehículo más caro: ${vehiculo[0].Marca} ${vehiculo[0].Modelo}`
        );
      }
    );
  },

  getMinPrecio: () => {
    connection.query(
      "select Marca, Modelo from vehiculos ORDER BY Precio LIMIT 1",
      (error, vehiculo, fields) => {
        console.log(
          `Vehículo más barato: ${vehiculo[0].Marca} ${vehiculo[0].Modelo}`
        );
      }
    );
  },

  getY: () => {
    connection.query(
      "select Marca, Modelo, FORMAT(Precio,2,'de_DE') as Precio from vehiculos where Marca like '%Y%'",
      (error, vehiculo, fields) => {
        console.log(
          `Vehículo que contiene en el modelo la letra ‘Y’: ${vehiculo[0].Marca} ${vehiculo[0].Modelo} ${vehiculo[0].Precio}`
        );
        vehiculosController.corte();
      }
    );
  },

  getAllDesc: () => {
    connection.query(
      "select Marca, Modelo from vehiculos order by precio desc",
      (error, vehiculos, fields) => {
        console.log("Vehículos ordenados por precio de mayor a menor:");
        vehiculos.forEach((element, index) => {
          console.log(element.Marca + element.Modelo);
        });
      }
    );
  },

  corte: () => {
    console.log(
      "======================================================================"
    );
  },
};

vehiculosController.getAll();
vehiculosController.getMaxPrecio();
vehiculosController.getMinPrecio();
vehiculosController.getY();
vehiculosController.getAllDesc();
