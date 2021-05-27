import './ActivitybarRow.css';
import ActivitybarRow from "./ActivitybarRow";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Activitybar() {
    return (
        <div className="activitybar">
            <ActivitybarRow Icon={AccountCircleIcon} name="Rainamira Azzahra" status="listeting to..."/>
            <ActivitybarRow Icon={AccountCircleIcon} name="Rayhan Ali" status="listeting to..."/>
            <ActivitybarRow Icon={AccountCircleIcon} name="Radisa Hussein" status="listeting to..."/>
        </div>
    );
}

export default Activitybar;