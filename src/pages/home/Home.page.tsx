import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { authLogout, selectAuth } from "../../redux/auth/auth.slice";

const HomePage = (): JSX.Element => {

  const navigate = useNavigate();
	const dispatch = useAppDispatch();
  const { userInfo } = useAppSelector(selectAuth);

	const logoutHandler = (): void => {
		dispatch(authLogout());
		navigate('/login');
	};

	useEffect((): void => {
    if (!userInfo) {
      navigate('/login');
    }
  }, [navigate, userInfo]);

  return (
    <>
      <div className="container pt-5">
        <div className="row">
          <div className="col-12">
            <h2>Home Page</h2>
            <button onClick={logoutHandler} type="button" className="btn btn-danger">Log Out</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage