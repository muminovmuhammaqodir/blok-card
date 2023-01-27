import { useState } from "react";
import Input from "../../helpers/input";

const Main = () => {
	const [data, setdata] = useState([
		{
			title: "Lorem, ipsum.",
			relationShip: "qarindosh",
			phone: "+998 90 921 37 11",
		},
	]);

	const [state, setState] = useState({
		title: "",
		relationShip: "",
		phone: "",
	});

	const onChangehandler = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
        
	};

	const addForm = (e) => {
		e.preventDefault();

        setdata([...data, { ...state }]);
        
        setState({ title: "", relationShip: "", phone: "" });
	};

	return (
		<main className="d-flex mt-5 gap-5">
			<form
				className="d-flex flex-column w-50 gap-4 align-items-center "
				onSubmit={addForm}>
				<h2>New contact form</h2>

				<Input
					type={"text"}
					placeholder={"name"}
					value={state.title}
					onChangehandler={onChangehandler}
					name={"title"}
				/>
				<Input
					type={"text"}
					placeholder={"RelationShip"}
					value={state.relationShip}
					onChangehandler={onChangehandler}
					name={"relationShip"}
				/>
				<Input
					type={"Number"}
					placeholder={"Phone"}
					value={state.phone}
					onChangehandler={onChangehandler}
					name={"phone"}
				/>

				<button className="btn btn-primary w-100 p-2">Add Contack</button>
			</form>

			<div  className="w-50 overflow-y-scroll mainCards">
				<h2 className="text-center">Contacts</h2>
				{data.map((item) => {
					return (
						<div
							key={item.title}
							className="border border-1 p-4 rounded mt-5">
							<h3>{item.title}</h3>
							<p>{item.relationShip}</p>
							<p className="text-primary ">{item.phone}</p>
						</div>
					);
				})}
			</div>
		</main>
	);
};

export default Main;
