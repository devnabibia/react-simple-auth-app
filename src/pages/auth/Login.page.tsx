import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { authLogin, selectAuth } from "../../redux/auth/auth.slice";

type FormValues = {
	email: string;
	password: string;
};

const LoginPage = (): JSX.Element => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	// get store data
	const { userInfo, isLoading, error } = useAppSelector(selectAuth);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>();

	const onSubmit: SubmitHandler<FormValues> = (data): void => dispatch(authLogin(data.email, data.password));

	useEffect((): void => {
		if (userInfo) {
			navigate("/");
		}
	}, [userInfo, navigate]);

	return (
		<div className="container pt-5">
			<div className="row justify-content-center">
				<div className="col-lg-4 col-sm-12">
					<form onSubmit={handleSubmit(onSubmit)}>
						<h5>Inicio de Sesión</h5>
						<div className="form-group mb-3">
							<input
								type="email"
								{...register("email", {
									required: true,
									pattern: {
										value: /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/,
										message: "Debe ingresar un email válido",
									},
								})}
								className={`form-control form-control-sm ${errors.email && `is-invalid`}`}
								placeholder="Correo electrónico"
							/>
							{errors.email?.type === "required" && <div className="invalid-feedback">{`El campo 'email' es requerido`}</div>}
							{errors.email?.message && <div className="invalid-feedback">{errors.email?.message}</div>}
						</div>
						<div className="form-group mb-3">
							<input
								type={"password"}
								{...register("password", {
									required: true,
									minLength: 6,
								})}
								className={`form-control form-control-sm ${errors.password && `is-invalid`}`}
								placeholder="Contraseña"
							/>
							{errors.password?.type === "required" && <div className="invalid-feedback">Este campo es requerido</div>}
							{errors.password?.type === "minLength" && (
								<div className="invalid-feedback">{`Debe ingresar al menos 6 caracteres`}</div>
							)}
						</div>
						{/* Error Alert */}
						{error && (
							<div className="alert alert-danger" role="alert">{error}</div>
						)}
						<div className="d-grid">
							<button className="btn btn-primary btn-sm" type="submit" disabled={isLoading}>
								<span className={`${isLoading && "spinner-border spinner-border-sm"}`}></span>{" "}
								{!isLoading ? "Iniciar Sesión" : "Cargando..."}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
