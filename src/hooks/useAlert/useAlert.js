import { useEffect, useState } from "react";

const useAlert = () => {
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    if (!alert) {
      return;
    }

    setTimeout(() => setAlert(), 3000)
  }, [alert])


  return {
    alert,
    setAlert,
  }
}

export default useAlert;
