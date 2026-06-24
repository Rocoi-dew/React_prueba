import { useEffect, useRef, useState } from "react";

function Formulario() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const pwdRef = useRef(null);

  const isSendingRef = useRef(false);

  const previousNameRef = useRef("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [previousName, setPreviousName] = useState("");

  // Hace foco en el input de nombre al cargar el componente
  useEffect(() => {
    nameRef.current.focus();
  }, []);

  // Guarda el nombre anterior
  useEffect(() => {
    if (formData.name !== previousNameRef.current) {
      setPreviousName(previousNameRef.current);
      previousNameRef.current = formData.name;
    }
  }, [formData.name]);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setMessage("");

    // Validación nombre
    if (!formData.name.trim()) {
      setMessage("El nombre es obligatorio.");
      nameRef.current.focus();
      return;
    }

    // Validación email
    if (!formData.email.includes("@")) {
      setMessage("Introduce un email válido.");
      emailRef.current.focus();
      return;
    }

    // Validación contraseña
    if (formData.password.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres.");
      pwdRef.current.focus();
      return;
    }

    // Evitar envíos duplicados
    if (isSendingRef.current) {
      return;
    }

    isSendingRef.current = true;

    try {
      setMessage("Enviando formulario...");

      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Usuario registrado:", formData);

      setMessage("Usuario registrado correctamente.");

      setFormData({
        name: "",
        email: "",
        password: "",
      });

      nameRef.current.focus();
    } catch (error) {
      setMessage("Ha ocurrido un error.");
    } finally {
      isSendingRef.current = false;
    }
  }

  function handleClear() {
    setFormData({
      name: "",
      email: "",
      password: "",
    });

    setMessage("");

    nameRef.current.focus();
  }

  function handleSelectEmail() {
    emailRef.current.select();
  }

  return (
    <main>
      <h1>Registro de usuario</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre</label>

          <input
            ref={nameRef}
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Escribe tu nombre"
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>

          <input
            ref={emailRef}
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="nombre@email.com"
          />

          <button type="button" onClick={handleSelectEmail}>
            Seleccionar email
          </button>
        </div>

        <div>
          <label htmlFor="password">Contraseña</label>

          <input
            ref={pwdRef}
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Mínimo 6 caracteres"
          />
        </div>

        <button type="submit">Registrarse</button>

        <button type="button" onClick={handleClear}>
          Limpiar formulario
        </button>
      </form>

      {message && <p>{message}</p>}

      {previousName && <p>Nombre anterior: {previousName}</p>}
    </main>
  );
}

export default Formulario;