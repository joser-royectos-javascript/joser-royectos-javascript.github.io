var Persona = /** @class */ (function () {
    function Persona(nombre, email, direccionPostal, fechaNacimiento, telefono) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.direccionPostal = direccionPostal;
        this.fechaNacimiento = fechaNacimiento;
    }
    Persona.prototype.getFechaNacimiento = function () {
        return this.fechaNacimiento;
    };
    Persona.prototype.setFechaNacimiento = function (fecha) {
        this.fechaNacimiento = fecha;
    };
    Persona.prototype.calcularCoeficiente = function (numero) {
        // Lógica para calcular el coeficiente
        return numero * 2;
    };
    Persona.prototype.obtenerEficiencia = function () {
        return this.esEficiente() ? "Eficiente" : "No eficiente";
    };
    Persona.prototype.esEficiente = function () {
        // Lógica para determinar si es eficiente
        return true;
    };
    // Método para verificar si la persona es mayor de edad
    Persona.prototype.esMayorDeEdad = function (edadLimite) {
        var hoy = new Date();
        var edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        var mes = hoy.getMonth() - this.fechaNacimiento.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < this.fechaNacimiento.getDate())) {
            var edad_1 = hoy.getFullYear() - fechaNacimiento.getFullYear();
        }
        return edad >= edadLimite;
    };
    // Método para calcular la edad a partir de la fecha de nacimiento
    Persona.prototype.calcularEdad = function (fechaNacimiento) {
        var hoy = new Date();
        var edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        var mes = hoy.getMonth() - fechaNacimiento.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
            edad--;
        }
        return edad;
    };
    return Persona;
}());
// Ejemplo de uso
var direccion = {
    calle: "Calle Principal",
    numero: 123,
    localidad: "Ciudad"
};
var fechaNacimiento = new Date(1990, 0, 1);
var persona = new Persona("Juan", "juan@example.com", direccion, fechaNacimiento);
console.log(persona.esMayorDeEdad(18)); // Salida: true si es mayor de 18 años
console.log(persona.obtenerEficiencia()); // Salida: "Eficiente" o "No eficiente"
console.log(persona.calcularEdad(fechaNacimiento)); // Salida: Edad actual
console.log(persona.nombre); // Salida: nombre.
