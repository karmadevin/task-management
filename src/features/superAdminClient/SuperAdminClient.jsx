import "./SuperadminClient.css";
import ClientHeader from "./clientHeader";
import ClientList from "./clientList";

const SuperAdminClient = () => {
  return (
    <div className="SuperadminUser">
      <ClientHeader />
      <ClientList />
    </div>
  );
};

export default SuperAdminClient;
