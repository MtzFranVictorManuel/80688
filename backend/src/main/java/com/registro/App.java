package com.registro;

import static spark.Spark.*;
import java.util.ArrayList;
import java.util.List;
/**
 * Hello world!
 *
 */
public class App {
    public static void main(String[] args) {

        List<String> usuarios = new ArrayList<>();

        post("/usuarios", (request, response) -> {
            if (usuarios.size() >= 15) {
                response.status(400); 
                return "No es posible agregar más usuarios. Límite alcanzado (15 usuarios).";
            }
            String nombre = request.queryParams("nombre");
            String correo = request.queryParams("correo");
            String telefono = request.queryParams("telefono");

            System.out.println("Nombre: " + nombre);
            System.out.println("Correo: " + correo);
            System.out.println("Teléfono: " + telefono);

            String nuevoUsuario = "Nombre: " + nombre + ", Correo: " + correo + ", Teléfono: " + telefono;

            usuarios.add(nuevoUsuario);

            return "Usuario creado correctamente";
        });
        //devulve a todos los usuarios
        get("/usuarios", (request, response) -> {           
            return usuarios.toString(); 
        });

        // se modifica el usuario con el id que se le pase
        put("/usuarios/:indice", (request, response) -> {
            int indice = Integer.parseInt(request.params(":indice"));

            if (indice >= 0 && indice < usuarios.size()) {
                String nombre = request.queryParams("nombre");
                String correo = request.queryParams("correo");
                String telefono = request.queryParams("telefono");

                String usuarioActualizado = "Nombre: " + nombre + ", Correo: " + correo + ", Teléfono: " + telefono;
                usuarios.set(indice, usuarioActualizado);

                return "Usuario actualizado correctamente";
            } else {
                response.status(404); 
                return "Usuario no encontrado";
            }
        });
    }
}
