const Header = (): JSX.Element => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					Simple Auth App
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarText"
					aria-controls="navbarText"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarText">
					<div className="me-auto"></div>
					<span className="navbar-text">
						<a href="https://www.bryan-aguilar.com/" target="_blank" rel="noopener noreferrer">
							{" "}
							www.bryan-aguilar.com
						</a>
					</span>
				</div>
			</div>
		</nav>
	);
};

export default Header;
