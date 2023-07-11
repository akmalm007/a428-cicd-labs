import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My Profile!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Hi Nama saya adalah Akmal Maulana di sini yang sedang mempratekkan
          CI/CD Pipeline dengan Jenkins untuk melakukan proyek akhir pada
          Dicoding
        </p>
      </div>
    );
  }
}

export default App;
