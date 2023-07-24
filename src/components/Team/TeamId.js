import React from "react";
import { useParams } from "react-router-dom";
const TeamId = () => {
  const params = useParams();
  return <div> This is id of the team you click {[params.teamId]}</div>;
};

export default TeamId;
