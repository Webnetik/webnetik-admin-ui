import React, {useEffect, useState} from 'react'
import {Col, Layout, Row, Button} from "antd";
import PageTitle from "../../common/components/PageTitle";
import {Link} from "react-router-dom";
import {useParams} from "react-router";
import UserForm from './NewUserForm';
import {getUser} from "../actions";

function AddOrModifyUserPage() {
    const { Header, Content } = Layout;
    let { id } = useParams();

    const [ title, setTitle ] = useState(null);
    const [ user, setUser] = useState(null);

    useEffect(() => {
        const loadUser = async () => {
            console.log('id: ', id);
            if(!!id) {
                setTitle('Edit user');
                const user = await getUser(id);
                setUser({id, ...user});
            } else {
                setUser({});
                setTitle('Add new user');
            }
        };
        loadUser();
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
