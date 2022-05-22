import { useEffect, useState } from "react";
import api from "../../services/api";

export default function ShowAdvice(props) {
  const [advice, setAdvice] = useState([]);
  const [loading, setLoading] = useState(false);
  const { clicked, setClicked } = props;

  function loadAdvice() {
    api
      .get("/advice")
      .then((response) => {
        setAdvice(response.data.slip);
        console.log("responseaa", response.data);
      })
      .catch((err) => console.log("ops! ocorreu um erro " + err));
  }

  useEffect(() => {
    if (clicked === true) {
      setLoading(true);
      setAdvice({});
      setTimeout(() => {
        setLoading(false);
        loadAdvice();
      }, 1000);
      setClicked(false);
    }
  }, [clicked]);

  return (
    <>
      <div className="m-3">
        <p
          className="dark:text-white mt-6 animate-bounce text-3xl text-center"
          key={advice.id}
        >
          {advice.advice}
        </p>
        {loading && (
          <p className="dark:text-white mt-6 animate-bounce text-3xl text-center">
            Carregando...
          </p>
        )}
      </div>
    </>
  );
}
