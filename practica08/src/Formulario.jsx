import MiFieldSet from './MiFieldSet'

function Formulario(){
    return (
        <form action="">
    <MiFieldSet titulo="Datos personales" txt1="Nombre" txt2="Apellidos"/>
    <MiFieldSet titulo="Datos generales" txt1="Dirección" txt2="Mail:"/>
    <input type="submit" value="Enviar datos"/>
    </form>
    )
}

export default Formulario