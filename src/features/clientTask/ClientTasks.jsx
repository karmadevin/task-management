import TaskHeading from "./TaskHeading";
import ActionAreaCard from "./ActionAreaCard";
import CardData from "./CardData";
import "./Clienttasks.css";
import DragAndDrop from "./DragAndDrop";

const ClientTask = () => {
  return (
    <div className="superadmintask-superadmintask">
      <TaskHeading />
      <div className="superadmintask-task">
        {CardData.map((data, index) => (
          <ActionAreaCard
            key={index}
            count={data.count}
            status={data.status}
            color={data.color}
          />
        ))}
      </div>
      <DragAndDrop />
    </div>
  );
};

export default ClientTask;
