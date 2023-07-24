import React ,{useState} from 'react'
import TeamList from "./ListTeam";
import "./Team.css"
import PLayerInfor from "./PLayerInfo";
import TeamInfor from "./TeamInfo";
const TeamIndex = () => {
    const [data,setData] = useState('');
    const [showInfor,setshowInfor] = useState(false);
    const [showInfor1,setshowInfor1] = useState(false);
    const [dataInfor,setDataInfo] = useState('');
    const [dataInfor1,setDataInfo1] = useState('');
    const changeType = (e) =>{
        setData(e.target.value);
        console.log(data);
    }
    const dataInfo = (dataInfo)=>{
      console.log(dataInfo);
      setDataInfo(dataInfo);
      setshowInfor(!showInfor);
    }
    const dataInfo1 = (dataInfo1)=>{
      console.log(dataInfo1);
      setshowInfor1(!showInfor1);
      setDataInfo1(dataInfo1);
    }
    const showInfo = (showInfo) =>{
      setshowInfor(showInfo);
    }
    const showInforTeam1 = (showInfor1) =>{
      setshowInfor1(showInfor1);
    }
  return (
    <div><div className="header-search">
    <input
      type="text"
      className="input-match"
      placeholder="Search by name team ..."
      value={dataInfor}
    />
    <select className="select-match" defaultValue={"Team"} onChange={changeType}>
      <option value="Team">Team</option>
      <option value="Player">Player</option>
    </select>
    <select className="select-match" defaultValue={"DEFAULT"}>
      <option value="DEFAULT" disabled>
        Choose a salutation ...
      </option>
      <option value="duo">Đá đơn</option>
      <option value="team">Đá đội</option>
    </select>
    <button className="btn-search">Tìm kiếm</button>
    <button className="btn-search">Thêm</button>
  </div>
    <TeamList typeSearch={data} dataInfo={dataInfo} dataInfo1={dataInfo1}  />
    {showInfor ?
    <PLayerInfor showInfo={showInfo} dataPlayer ={dataInfo} /> :""}
    {showInfor1 ? <TeamInfor showInfoTeam={showInforTeam1} /> : ""}
  </div>
  )
}

export default TeamIndex