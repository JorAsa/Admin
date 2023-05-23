import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import createUser from "../../assets/images/download.png";
import PropTypes from 'prop-types';

export const CreateUser = ({ list, setList }) => {
    const navigate = useNavigate();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data, event) => {
        event.preventDefault();
        event.stopPropagation();

        if (data.gender === "male" || data.gender === "female") {
            setList([...list, { name: data.name, email: data.email, status: data.status, gender: data.gender, id: list.length + 1 }]);
            navigate('/user-list');
        } else if (data.gender !== "male" || data.gender !== "female") {
            alert("Gender must be male or female");
        };
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="formcreate">
                    <div className="divcreate">
                        <h1>New User</h1>
                        <h5>Новый пользователь</h5>
                    </div>
                    <div className="divcreate">
                        <h2>Enter your name</h2>
                        <h5>Введите ваше Имя</h5>
                        <input {...register("name", { required: true })} placeholder="Name" type="text" className="inpurCreate" />
                        {errors.name && <span style={{ color: "red" }}>This field is required</span>}
                    </div>
                    <div className="divcreate">
                        <h2>Enter your email</h2>
                        <h5>Введите вашу электронную почту</h5>
                        <input {...register("email", { required: true })} placeholder="Email" type="email" className="inpurCreate" />
                        {errors.email && <span style={{ color: "red" }}>This field is required</span>}
                    </div>
                </div>
                <div className="formcreate">
                    <div className="divcreate">
                        <h2>Enter your Status</h2>
                        <h5>Введите свой статус</h5>
                        <input {...register("status", { required: true })} placeholder="Status" type="status" className="inpurCreate" />
                        {errors.status && <span style={{ color: "red" }}>This field is required</span>}
                    </div>
                    <div className="divcreate">
                        <h2>Enter your Gender</h2>
                        <h5>Введите свой пол</h5>
                        <input {...register("gender", { required: true })} placeholder="Gender" type="gender" className="inpurCreate" />
                        {errors.gender && <span style={{ color: "red" }}>This field is required</span>}
                    </div>
                    <div className="Createbutton">
                        <img src={createUser} className="imgCreate" />
                        <input type="submit" value={"Add User"} className="buttonCreate" />
                    </div>
                </div>
            </form>
        </>
    );
};

CreateUser.propTypes = {
    list: PropTypes.array,
    setList: PropTypes.func,
};