const formulario = document.getElementById("formulario");
const contenedor = document.getElementById("contenedor");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const mail = document.getElementById("mail").value;
    const direc = document.getElementById("direc").value;
    const ciudad = document.getElementById("ciudad").value;

});

function FormField(legendText, labelText, inputType, labelText2, inputType2) {
    this.fieldset = document.createElement('fieldset');

    this.legend = document.createElement('legend');
    this.legend.textContent = legendText;

    this.label = document.createElement('label');
    this.label.textContent = labelText;

    this.input = document.createElement('input');
    this.input.type = inputType;

    this.label2 = document.createElement('label');
    this.label2.textContent = labelText2;

    this.input2 = document.createElement('input');
    this.input2.type = inputType2;

    this.fieldset.appendChild(this.legend);
    this.fieldset.appendChild(this.label);
    this.fieldset.appendChild(this.input);
    this.fieldset.appendChild(this.label2);
    this.fieldset.appendChild(this.input2);

    this.form = document.getElementById('formulario');

    if (this.form) {
        this.form.appendChild(this.fieldset);
        
    } else {
        console.error('Formulario no encontrado.');
    }
    
}

// Crear una instancia del objeto con los parámetros deseados
const miCampo = new FormField('Datos Personales', 'Nombre:', 'text', 'Correo electróncino:', 'text');
const miCampo2 = new FormField('Información de dirección', 'Dirección:', 'text', 'Ciudad:', 'text');

const button = document.createElement('input');
button.value = 'Enviar';
button.type = 'submit';
if (formulario) {
  formulario.appendChild(button);
}