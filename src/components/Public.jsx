import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          <span role="img" aria-label="">
            👋
          </span>
        </h1>
      </header>
      <main className="public__main">
        <p style={{ marginBottom: "20px" }}>Task Management Tool</p>
        {/* Login */}
        <div className="container" id="login">
          <Link to="/login">
            <button type="submit" value="Login">
              Login
            </button>
          </Link>
        </div>
      </main>
      <footer></footer>
    </section>
  );
  return content;
};

export default Public;
