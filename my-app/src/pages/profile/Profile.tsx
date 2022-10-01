import { useNavigate, useParams } from "react-router-dom";
import CustomedButton from "../../shared/components/UI/IncrementButton";
import { ROUTES } from "../../shared/routesData/routes";
const Profile = () => {
  const navigate = useNavigate();
  const { username } = useParams();
  return (
    <>
      Profile page form user {username}
      <CustomedButton
        className="button-9"
        onClick={() => {
          navigate(ROUTES.HOME.link);
        }}
        label={"navigate to homepage"}
      />
    </>
  );
};

export default Profile;
