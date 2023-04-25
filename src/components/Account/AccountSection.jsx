import { AccountSectionApproval } from "./AccountSectionApproval";
import { AccountSectionCloseAccount } from "./AccountSectionCloseAccount";
import { AccountSectionContact } from "./AccountSectionContact";
import { AccountSectionDownloadAccount } from "./AccountSectionDownloadAccount";
import { AccountSectionTransmission } from "./AccountSectionTransmission";
import { AccountSectionTravel } from "./AccountSectionTravel";

export const AccountSection = () => {
  return (
    <section className="px-5 md:px-[10vw] py-[10vh] flex flex-col gap-10 md:gap-5">
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl font-bold">Account</h1>
      </div>
      <AccountSectionContact />
      <hr />
      <AccountSectionTransmission />
      <hr />
      <AccountSectionApproval />
      <hr />
      <AccountSectionTravel />
      <hr />
      <AccountSectionDownloadAccount />
      <hr />
      <AccountSectionCloseAccount />
    </section>
  );
};
