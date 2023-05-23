import { deleteUsers, updateUsers } from "../../store/users/users.action";
import { useDispatch, useSelector } from "react-redux";
import { useState, useMemo } from "react";
import { useParams } from "react-router";
import userDetalis from "../../assets/images/uder-detalis.png";
import PropTypes from 'prop-types';

const commentList = [{}];

export const UserDetalis = ({ list }) => {
    const [comment, setComment] = useState(commentList);
    const [show, setShow] = useState();
    const dispatch = useDispatch();
    const params = useParams();

    const userList = useSelector((state) => state.usersReducer.userList);
    const currentUser = list.find((i) => i.id === +params.id);

    useMemo(() => {
        if (userList.length === 1) {
            setShow(false);
        } else {
            setShow(true);
        }
    }, [userList]);

    const handleAdd = () => {
        const newList = [
            ...userList,
            { name: comment },
        ];
        dispatch(updateUsers(newList));
    };

    const handleDelete = () => {
        dispatch(deleteUsers());
    };

    return (
        <div style={{background:"#e6e5e5",height:"100vh",paddingTop:"2%"}}>
            <div className="globalDivBlue"></div>
            <div className="glovalDiv">
                <div className="infoImg">
                    <div>
                        <img className="imgUser" src={userDetalis}/>
                        <h2 className="userName">{currentUser.name}</h2>
                    </div>
                    <div className="stripFirst"></div>
                    <div style={{width:"80%"}}>
                        <div className="infoName">
                            <h2>Email: </h2>
                            <h3 style={{color:"green"}}>&#x2714;</h3>
                            <h2> {currentUser.email}</h2>
                        </div>
                        <div className="infoName">
                            <h2>User Id: </h2>
                            <h2> {currentUser.id}</h2>
                        </div>
                        <div className="stripSecond"></div>
                        <div className="infoName">
                            <h2>Gender</h2>
                            <h2>Status</h2>
                            <h2>UserName</h2>
                            <h2>Mobile Phone</h2>
                            <h2>Birthdate</h2>
                        </div>
                        <div className="infoName">
                            <h2>{currentUser.gender}</h2>
                            <h2>{currentUser.status}</h2>
                            <h2>- - - - - - -</h2>
                            <h2>- - - - - - -</h2>
                            <h2>- - - - - - -</h2>
                        </div>
                    </div>
                </div>
                <div className="commentDiv">
                    {show === true ?
                        <div>
                            {userList?.map((i, j) => {
                                return (
                                    <div key={j}>
                                        <h3>{i?.name}</h3>
                                    </div>
                                )
                            })}
                            <button className="commentbuttonDelet" onClick={handleDelete}>Delete all comment</button>
                        </div>
                        :
                        <div>
                            <h3 style={{textAlign:"center"}}>Post a comment...</h3>
                        </div>
                    }
                </div>
                <div className="divComent">
                    <input required={true} type="text" placeholder="Write a commetn" onChange={(event) => setComment(event.target.value)} className="commentdiv"/>
                    <button className="commentbutton" onClick={handleAdd}>Add comment</button>
                </div>
            </div>
        </div>
    );
};

UserDetalis.propTypes = {
    list: PropTypes.array,
};