import React, { useEffect } from "react";
import IPage from "../interfaces/page";
import logging from "../config/logging";
import { useAuth } from "../context/authContext";

const HomePage: React.FunctionComponent<IPage> = (props) => {
  useEffect(() => {
    logging.info(`Loading ${props.name}`);
  }, [props.name]);
  const { signIn, signOut } = useAuth();
  return (
    <div>
      <button onClick={signIn}>Sign In!</button>
      <button onClick={signOut}>Sign Out!</button>
    </div>
  );
};

export default HomePage;
