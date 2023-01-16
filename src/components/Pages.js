import HomePage from "./HomePage";
import FaultPage from "./FaultPage";
import ProfilePage from "./ProfilePage";

function Pages({ page }) {
  return (
    <div>
      {page === "home" ? <HomePage /> : null}
      {page === "fault" ? <FaultPage /> : null}
      {page === "profile" ? <ProfilePage /> : null}
    </div>
  );
}

export default Pages;
