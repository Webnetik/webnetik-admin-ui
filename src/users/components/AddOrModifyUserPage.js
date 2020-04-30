import React, {useEffect, useState} from 'react'
import {Col, Layout, Row, Button} from "antd";
import PageTitle from "../../common/components/PageTitle";
import {Link} from "react-router-dom";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import UserForm from './NewUserForm';
import {getUsers} from "../actions";

function AddOrModifyUserPage() {
    const { Header, Content } = Layout;
    let { id } = useParams();

    const [ title, setTitle ] = useState(null);
    const [ user, setUser] = useState(null);

    const users = useSelector(state => state.users.users);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!!id) {
            if(users === null) {
                dispatch(getUsers());
            }
            const user = users.filter(user => user.id === Number.parseInt(id))[0];
            setUser({id, ...user});
            setTitle('Edit user');
        } else {
            setUser({ username: '', password: '' });
            setTitle('Add new user');
        }
    }, []);

    return (
        <>
            <Header className="site-layout-sub-header-background">
                { title && <PageTitle title={title} /> }
            </Header>
            <Content>
                <div className="site-layout-background">
                    <Row>
                        <Col span={24} style={{ paddingBottom: '20px' }}>
                            <Button type="secondary"><Link to='/users'>Back to users</Link></Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {user !== null && <UserForm defaultValues={user} />}
                        </Col>
                    </Row>
                </div>
            </Content>
        </>
    );
};

export default AddOrModifyUserPage;
