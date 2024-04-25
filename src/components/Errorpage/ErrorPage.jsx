import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import "./error-page.css";
function ErrorPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/", { replace: true });
  };
  return (
    <>
      <Helmet>
        <title>Erorr Page</title>
      </Helmet>
      <div className="error-page">
        <div className="content">
          <h1>404</h1>
          <p>Not Found...</p>
        </div>
        <button onClick={handleClick}>Home</button>
      </div>
    </>
  );
}

export default ErrorPage;
