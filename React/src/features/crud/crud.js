// ==========================================
// CRUD DE USUARIOS
// ==========================================

// Nombre de la clave donde guardaremos
// los usuarios en LocalStorage
const CLAVE_STORAGE = "usuarios";


// ==========================================
// INICIAR CRUD
// ==========================================

function iniciarCRUD() {

    // Buscar el formulario
    const formulario = document.getElementById("formularioUsuarios");

    // Buscar botones
    const btnAgregar = document.getElementById("btnAgregar");
    const btnLimpiar = document.getElementById("btnLimpiar");

    // Buscar campos
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const documento = document.getElementById("documento");
    const email = document.getElementById("email");
    const telefono = document.getElementById("telefono");
    const fecha = document.getElementById("fecha");

    // Buscar elementos de la tabla
    const tablaUsuarios = document.getElementById("tablaUsuarios");
    const contadorUsuarios = document.getElementById("contadorUsuarios");
    const mensajeSinUsuarios = document.getElementById("mensajeSinUsuarios");


    // Verificar que todos los elementos existan
    if (
        !formulario ||
        !btnAgregar ||
        !btnLimpiar ||
        !nombre ||
        !apellido ||
        !documento ||
        !email ||
        !telefono ||
        !fecha ||
        !tablaUsuarios ||
        !contadorUsuarios ||
        !mensajeSinUsuarios
    ) {
        console.error("No se encontraron todos los elementos del CRUD.");
        return;
    }


    // ==========================================
    // OBTENER USUARIOS
    // ==========================================

    function obtenerUsuarios() {

        const usuariosGuardados =
            localStorage.getItem(CLAVE_STORAGE);

        if (!usuariosGuardados) {
            return [];
        }

        try {

            return JSON.parse(usuariosGuardados);

        } catch (error) {

            console.error(
                "Error leyendo LocalStorage:",
                error
            );

            return [];

        }

    }


    // ==========================================
    // GUARDAR USUARIOS
    // ==========================================

    function guardarUsuarios(usuarios) {

        localStorage.setItem(
            CLAVE_STORAGE,
            JSON.stringify(usuarios)
        );

    }


    // ==========================================
    // MOSTRAR ERROR
    // ==========================================

    function mostrarError(campo, mensaje) {

        quitarError(campo);

        campo.classList.add("is-invalid");

        const mensajeError =
            document.createElement("div");

        mensajeError.className =
            "mensaje-error text-danger small mt-1";

        mensajeError.textContent = mensaje;

        campo
            .closest(".col-12")
            .appendChild(mensajeError);

    }


    // ==========================================
    // QUITAR ERROR
    // ==========================================

    function quitarError(campo) {

        campo.classList.remove("is-invalid");

        const contenedor =
            campo.closest(".col-12");

        if (!contenedor) {
            return;
        }

        const errorAnterior =
            contenedor.querySelector(".mensaje-error");

        if (errorAnterior) {
            errorAnterior.remove();
        }

    }


    // ==========================================
    // VALIDAR CAMPO
    // ==========================================

    function validarCampo(campo) {

        const valor =
            campo.value.trim();


        // ------------------------------
        // NOMBRE
        // ------------------------------

        if (campo === nombre) {

            if (valor === "") {

                mostrarError(
                    campo,
                    "El nombre es obligatorio."
                );

                return false;

            }

            if (valor.length < 3) {

                mostrarError(
                    campo,
                    "El nombre debe tener mínimo 3 caracteres."
                );

                return false;

            }

            if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/.test(valor)) {

                mostrarError(
                    campo,
                    "El nombre solo puede contener letras."
                );

                return false;

            }

        }


        // ------------------------------
        // APELLIDO
        // ------------------------------

        if (campo === apellido) {

            if (valor === "") {

                mostrarError(
                    campo,
                    "El apellido es obligatorio."
                );

                return false;

            }

            if (valor.length < 3) {

                mostrarError(
                    campo,
                    "El apellido debe tener mínimo 3 caracteres."
                );

                return false;

            }

            if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/.test(valor)) {

                mostrarError(
                    campo,
                    "El apellido solo puede contener letras."
                );

                return false;

            }

        }


        // ------------------------------
        // DOCUMENTO
        // ------------------------------

        if (campo === documento) {

            if (valor === "") {

                mostrarError(
                    campo,
                    "El documento es obligatorio."
                );

                return false;

            }

            if (!/^\d+$/.test(valor)) {

                mostrarError(
                    campo,
                    "El documento solo puede contener números."
                );

                return false;

            }

        }


        // ------------------------------
        // EMAIL
        // ------------------------------

        if (campo === email) {

            if (valor === "") {

                mostrarError(
                    campo,
                    "El correo electrónico es obligatorio."
                );

                return false;

            }

            const regexEmail =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!regexEmail.test(valor)) {

                mostrarError(
                    campo,
                    "Ingresa un correo electrónico válido."
                );

                return false;

            }

        }


        // ------------------------------
        // TELÉFONO
        // ------------------------------

        if (campo === telefono) {

            if (valor !== "" && !/^\d{10}$/.test(valor)) {

                mostrarError(
                    campo,
                    "El teléfono debe tener exactamente 10 números."
                );

                return false;

            }

        }


        // ------------------------------
        // FECHA
        // ------------------------------

        if (campo === fecha) {

            if (valor !== "") {

                const fechaSeleccionada =
                    new Date(valor + "T00:00:00");

                const hoy =
                    new Date();

                hoy.setHours(0, 0, 0, 0);

                if (fechaSeleccionada > hoy) {

                    mostrarError(
                        campo,
                        "La fecha no puede ser futura."
                    );

                    return false;

                }

            }

        }


        quitarError(campo);

        return true;

    }


    // ==========================================
    // VALIDAR USUARIO COMPLETO
    // ==========================================

    function validarFormulario() {

        let formularioValido = true;


        if (!validarCampo(nombre)) {
            formularioValido = false;
        }


        if (!validarCampo(apellido)) {
            formularioValido = false;
        }


        if (!validarCampo(documento)) {
            formularioValido = false;
        }


        if (!validarCampo(email)) {
            formularioValido = false;
        }


        if (!validarCampo(telefono)) {
            formularioValido = false;
        }


        if (!validarCampo(fecha)) {
            formularioValido = false;
        }


        return formularioValido;

    }


    // ==========================================
    // MOSTRAR USUARIOS
    // ==========================================

    function mostrarUsuarios() {

        const usuarios =
            obtenerUsuarios();


        // Limpiar tabla

        tablaUsuarios.innerHTML = "";


        // Actualizar contador

        contadorUsuarios.textContent =
            `${usuarios.length} usuario${usuarios.length === 1 ? "" : "s"}`;


        // Mostrar mensaje si no existen usuarios

        if (usuarios.length === 0) {

            mensajeSinUsuarios.style.display =
                "block";

            return;

        }


        mensajeSinUsuarios.style.display =
            "none";


        // Crear filas

        usuarios.forEach((usuario, indice) => {

            const fila =
                document.createElement("tr");


            fila.innerHTML = `

                <td>
                    ${indice + 1}
                </td>

                <td>
                    ${escapeHTML(usuario.nombre)}
                </td>

                <td>
                    ${escapeHTML(usuario.apellido)}
                </td>

                <td>
                    ${escapeHTML(usuario.documento)}
                </td>

                <td>
                    ${escapeHTML(usuario.email)}
                </td>

                <td>
                    ${escapeHTML(usuario.telefono || "No registrado")}
                </td>

                <td>
                    ${escapeHTML(usuario.fecha || "No registrada")}
                </td>

                <td>

                    <button
                        type="button"
                        class="btn btn-danger btn-sm btn-eliminar"
                        data-id="${usuario.id}"
                    >

                        <i
                            class="bi bi-trash me-1"
                            aria-hidden="true"
                        ></i>

                        Eliminar

                    </button>

                </td>

            `;


            tablaUsuarios.appendChild(fila);

        });

    }


    // ==========================================
    // PROTEGER TEXTO HTML
    // ==========================================

    function escapeHTML(texto) {

        const div =
            document.createElement("div");

        div.textContent =
            texto ?? "";

        return div.innerHTML;

    }


    // ==========================================
    // AGREGAR USUARIO
    // ==========================================

    btnAgregar.addEventListener(
        "click",
        function () {

            // Validar formulario

            if (!validarFormulario()) {
                return;
            }


            const usuarios =
                obtenerUsuarios();


            const valorDocumento =
                documento.value.trim();


            const valorEmail =
                email.value.trim().toLowerCase();


            // ==================================
            // VALIDAR DOCUMENTO REPETIDO
            // ==================================

            const documentoExiste =
                usuarios.some(
                    usuario =>
                        usuario.documento === valorDocumento
                );


            if (documentoExiste) {

                mostrarError(
                    documento,
                    "Este documento ya está registrado."
                );

                return;

            }


            // ==================================
            // VALIDAR EMAIL REPETIDO
            // ==================================

            const emailExiste =
                usuarios.some(
                    usuario =>
                        usuario.email.toLowerCase() === valorEmail
                );


            if (emailExiste) {

                mostrarError(
                    email,
                    "Este correo electrónico ya está registrado."
                );

                return;

            }


            // ==================================
            // CREAR USUARIO
            // ==================================

            const nuevoUsuario = {

                id: Date.now(),

                nombre:
                    nombre.value.trim(),

                apellido:
                    apellido.value.trim(),

                documento:
                    valorDocumento,

                email:
                    valorEmail,

                telefono:
                    telefono.value.trim(),

                fecha:
                    fecha.value

            };


            // ==================================
            // GUARDAR
            // ==================================

            usuarios.push(nuevoUsuario);

            guardarUsuarios(usuarios);


            // ==================================
            // MOSTRAR TABLA
            // ==================================

            mostrarUsuarios();


            // ==================================
            // LIMPIAR FORMULARIO
            // ==================================

            formulario.reset();


            quitarError(nombre);
            quitarError(apellido);
            quitarError(documento);
            quitarError(email);
            quitarError(telefono);
            quitarError(fecha);


            alert("Usuario agregado correctamente.");

        }
    );


    // ==========================================
    // ELIMINAR USUARIO
    // ==========================================

    tablaUsuarios.addEventListener(
        "click",
        function (evento) {

            const boton =
                evento.target.closest(".btn-eliminar");


            if (!boton) {
                return;
            }


            const id =
                Number(boton.dataset.id);


            const confirmar =
                confirm(
                    "¿Seguro que deseas eliminar este usuario?"
                );


            if (!confirmar) {
                return;
            }


            const usuarios =
                obtenerUsuarios();


            const usuariosActualizados =
                usuarios.filter(
                    usuario =>
                        usuario.id !== id
                );


            guardarUsuarios(
                usuariosActualizados
            );


            mostrarUsuarios();

        }
    );


    // ==========================================
    // BOTÓN LIMPIAR
    // ==========================================

    btnLimpiar.addEventListener(
        "click",
        function () {

            formulario.reset();


            quitarError(nombre);
            quitarError(apellido);
            quitarError(documento);
            quitarError(email);
            quitarError(telefono);
            quitarError(fecha);

        }
    );


    // ==========================================
    // VALIDACIÓN EN TIEMPO REAL
    // ==========================================

    nombre.addEventListener(
        "input",
        function () {
            validarCampo(nombre);
        }
    );


    apellido.addEventListener(
        "input",
        function () {
            validarCampo(apellido);
        }
    );


    documento.addEventListener(
        "input",
        function () {

            // Eliminar cualquier cosa que no sea número

            documento.value =
                documento.value.replace(/\D/g, "");

            validarCampo(documento);

        }
    );


    email.addEventListener(
        "input",
        function () {
            validarCampo(email);
        }
    );


    telefono.addEventListener(
        "input",
        function () {

            // Eliminar cualquier cosa que no sea número

            telefono.value =
                telefono.value.replace(/\D/g, "");

            validarCampo(telefono);

        }
    );


    fecha.addEventListener(
        "change",
        function () {
            validarCampo(fecha);
        }
    );


    // ==========================================
    // MOSTRAR USUARIOS AL INICIAR
    // ==========================================

    mostrarUsuarios();


    console.log(
        "CRUD iniciado correctamente."
    );

}