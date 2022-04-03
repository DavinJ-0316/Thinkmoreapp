import React, { useContext } from "react";
import { UserContext } from "../../../../contexts/UserContext";

const DashboardPage = () => {
  const { user } = useContext(UserContext)

  if (!user) {
    return null;
  }

  return (
    <ul>
      <li>id: {user.id}</li>
      <li>Email: {user.email}</li>
    </ul>
  )
}

export default DashboardPage;
