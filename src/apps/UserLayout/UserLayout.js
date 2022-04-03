import React from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import styled from 'styled-components';
import { useUser } from "../../contexts/UserContext";
import DashboardPage from "./components/DashboardPage";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 5rem auto;
  display: flex;
`;

const Menu = styled.div`
  border-right: 1px solid rgb(100 116 139 / 12%);
  padding-right: 5rem;
  margin-right: 5rem;
`;

const UserLayout = () => {
  const { user, loading } = useUser();

  if (loading) {
    return <div>Loading</div>
  }

  if (!user) {
    return (<Navigate to="/" />)
  }

  return (
    <Wrapper>
      <Menu>
        <p>
          <Link to="/user/dashboard">User</Link>
        </p>
        <p>
          <Link to="/user/change-password">Change password</Link>
        </p>
      </Menu>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/change-password" element={<div>ChangePassword</div>} />
      </Routes>
    </Wrapper>
  )
}

export default UserLayout;
