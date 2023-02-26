import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // здесь можно добавить логику для отправки данных на сервер или другую обработку
    // после успешной обработки можно перенаправить пользователя на другую страницу
  };

  // здесь можно добавить логику проверки аутентификации, например, с помощью useContext и useEffect

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              formData={formData}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
            />
          }
        />
        <Route
          path="workplace"
          element={<WorkplacePage formData={formData} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

function HomePage({ formData, handleInputChange, handleSubmit }) {
  return (
    <div>
      <h1>Главная страница</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Имя:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Сообщение:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}

function WorkplacePage({ formData }) {
  return (
    <div>
      <h1>Мой рабочий кабинет</h1>
      <p>Информация из формы:</p>
      <p>Имя: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Сообщение: {formData.message}</p>
    </div>
  );
}

export default App;
