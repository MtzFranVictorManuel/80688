package mx.uv;

import static spark.Spark.*;
/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        get("/",  (request, response) -> "<h1>Hola mundo desde Spark</h1>");

        get("/hola",  (request, response) -> "<h1>Hola hola hola hola hola</h1>");

        get("/adios",  (request, response) -> "<h1>Adios</h1>");

        get("/fin",  (request, response) -> "<h1>Fin</h1>");
    }
}
