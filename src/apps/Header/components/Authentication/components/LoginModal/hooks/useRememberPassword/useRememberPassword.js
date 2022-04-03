import { useEffect, useState } from "react";

const useRememberPassword = () => {
  const rememberedPassword = localStorage.getItem('TMA_REMEMBERED_PASSWORD');

  const [rememberPassword, setRememberPassword] = useState(!!localStorage.getItem('TMA_REMEMBERED_PASSWORD'));

  useEffect(() => {
    if (rememberPassword) {
      return;
    }

    localStorage.removeItem('TMA_REMEMBERED_PASSWORD');
  }, [rememberPassword]);

  const onRememberPassword = ({
    emailAddress,
    password,
  }) => {
    if (!rememberPassword) {
      return;
    }

    localStorage.setItem('TMA_REMEMBERED_PASSWORD', JSON.stringify({
      emailAddress,
      password,
    }));
  }

  return {
    rememberedPassword,
    rememberPassword, 
    setRememberPassword,
    onRememberPassword,
  }
}

export default useRememberPassword;
