interface DireccionPostal {
    calle: string;
    numero: number;
    localidad: string;
}

class Persona {
    nombre: string;
    email: string;
    telefono?: string;
    direccionPostal: DireccionPostal;
    private fechaNacimiento: Date;

    constructor(nombre: string, email: string, direccionPostal: DireccionPostal, fechaNacimiento: Date, telefono?: string) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.direccionPostal = direccionPostal;
        this.fechaNacimiento = fechaNacimiento;
    }

    getFechaNacimiento(): Date {
        return this.fechaNacimiento;
    }

    setFechaNacimiento(fecha: Date): void {
        this.fechaNacimiento = fecha;
    }

    calcularCoeficiente(numero: number): number {
        // Lógica para calcular el coeficiente
        return numero * 2;
    }

    obtenerEficiencia(): string {
        return this.esEficiente() ? "Eficiente" : "No eficiente";
    }

    private esEficiente(): boolean {
        // Lógica para determinar si es eficiente
        return true;
    }

    // Método para verificar si la persona es mayor de edad
    esMayorDeEdad(edadLimite: number): boolean {
        const hoy = new Date();
        const edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - this.fechaNacimiento.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < this.fechaNacimiento.getDate())) {
            let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        }
        return edad >= edadLimite;
    }

    // Método para calcular la edad a partir de la fecha de nacimiento
    calcularEdad(fechaNacimiento: Date): number {
        const hoy = new Date();
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        const mes = hoy.getMonth() - fechaNacimiento.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
            edad--;
        }
        return edad;
    }
}

// Ejemplo de uso
const direccion: DireccionPostal = {
    calle: "Calle Principal",
    numero: 123,
    localidad: "Ciudad"
};
const fechaNacimiento = new Date(1990, 0, 1);
const persona = new Persona("Juan", "juan@example.com", direccion, fechaNacimiento);
console.log(persona.esMayorDeEdad(18)); // Salida: true si es mayor de 18 años
console.log(persona.obtenerEficiencia()); // Salida: "Eficiente" o "No eficiente"
console.log(persona.calcularEdad(fechaNacimiento)); // Salida: Edad actual
console.log(persona.nombre); // Salida: nombre.
