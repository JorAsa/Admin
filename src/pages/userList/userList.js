import UserPng from "../../assets/images/imagesUser.png";
import user from "../../assets/images/user.png";
import PropTypes from 'prop-types';
import React from "react";
import { NameContext } from "../../utils/context";
import { useNavigate } from "react-router";
import { useContext } from "react";

export const UserList = React.memo(({ list }) => {
    const { name } = useContext(NameContext);
    const navigate = useNavigate();

    const handleUser = (id) => {
        navigate(`/user-detalis/${id}`);
    }

    return (
        <div className="globalHeader">
            <div className="listHeader">
                <div className="headerUserImg">
                    <div className="userImgList">
                        <img src={user} className="userImg" />
                    </div>
                    <div className="headerListUser">
                        <h1>{name}</h1>
                        <h5>Вaше имя</h5>
                    </div>
                </div>
                <div>
                    <div className="headerList">
                        <h1 className="headerUserList" onClick={() => navigate('/create-user')}>Create User &#x271B;</h1>
                        <h5>Создать пользователя</h5>
                    </div>
                </div>
            </div>
            <div className="listUser">
                {list.map((i, j) => {
                    return (
                        <div key={j} className="userList" onClick={() => { handleUser(i.id) }}>
                            <div style={{ display: "flex" }}>
                                <img src={UserPng} className="userPng" />
                                <h3 className="nameEmail">{i.name}</h3>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
});

UserList.propTypes = {
    list: PropTypes.array,
};