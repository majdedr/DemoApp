import { useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "../../shared/routesData/routes";
const Profile = () => {
  const navigate = useNavigate();
  const {username} = useParams();
  return (<>
      Profile page form user {username}
      <button
        onClick={() => {
          navigate(ROUTES.HOME.link);
        }}
      >
        {" "}
        navigate to homepage{" "}
      </button>
    </>
  );
};

export default Profile;
