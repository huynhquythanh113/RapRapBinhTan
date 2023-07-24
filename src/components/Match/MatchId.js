import React from "react";
import { useParams } from "react-router-dom";
const MatchId = () => {
  const param = useParams();
  return <div>This is id of match {param.matchId}</div>;
};

export default MatchId;
