import { LeftPanel } from "../components/Login/LeftPanel";
import { RightPanel } from "../components/Login/RightPanel";

export const Login = () => {
  return (
    <div className="grid grid-cols-12">
      <LeftPanel />
      <RightPanel />
    </div>
  );
};
