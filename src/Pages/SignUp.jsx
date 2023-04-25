import { LeftPanel } from "../components/Signup/LeftPanel";
import { RightPanel } from "../components/Signup/RightPanel";

export const SignUp = () => {
  return (
    <div className="grid grid-cols-12">
      <LeftPanel />
      <RightPanel />
    </div>
  );
};
