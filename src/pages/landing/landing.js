import { useContext, useEffect, useRef, useState } from "react";
import { NameContext } from "../../utils/context";
import { useNavigate } from "react-router";
import Gamin from "../../assets/images/3.jpg";

export const Landing = () => {
    const { setName } = useContext(NameContext);
    const [input, setInput] = useState();
    const navigate = useNavigate();
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleSubmit = () => {
        setName(input);
        navigate('/user-list');
    };

    return (
        <div className="mainDiv">
            <div className="headerDiv">
                <div className="divLanding">
                    <div className="landginDiv"></div>
                    <h3>Landing</h3>
                </div>
                <div className="landingh1">
                    <h1>Enter your name</h1>
                    <h5>Enter your Name to go to user page</h5>
                </div>
                <form onSubmit={handleSubmit}>
                    <input required={true} ref={inputRef} type="text" placeholder="Name" className="landingInput" onChange={(event) => setInput(event.target.value)}/>
                    <button className="landingButton">&#10095;</button>
                </form>
            </div>
            <div className="imgDiv">
                <img src={Gamin} className="imgGame" />
            </div>
        </div>
    );
};