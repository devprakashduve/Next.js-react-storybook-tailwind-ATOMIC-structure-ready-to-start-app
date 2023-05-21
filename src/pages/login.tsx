import React from "react";
import Login from "../../components/organisms/login";
import Header from "../../components/organisms/header";
import Footer from "../../components/organisms/footer";

const LoginPage = () => {
  return (
    <div>
      <Header title={""} />
      <Login />
      <Footer />
    </div>
  );
};

export default LoginPage;
