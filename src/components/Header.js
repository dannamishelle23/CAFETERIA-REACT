import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="menu container">
        <div className="logo">
          <img src="/images/logo.jpg" alt="logo cafeteria" />
        </div>
        <nav className="navbar">
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/informacion">Información</a></li>
            <li><a href="/menu">Menú</a></li>
            <li><a href="/reservas">Reservas</a></li>
          </ul>
        </nav>
      </div>
      <div className="header-content">
        <h1>Bienvenidos!</h1>
        <p>
          En HELD Coffee Shop nos preocupamos porque tu estancia en nuestra cafetería sea reconfortante.
          <br />
          Reserva un espacio con antelación para que puedas degustar de un exquisito menú con tus amigos y familia.
        </p>
        <a href="/reservas" className="boton-1">RESERVA YA!</a>
      </div>
    </header>
  );
};

export default Header;
