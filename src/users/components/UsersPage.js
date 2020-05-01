import React, {useEffect} from 'react';
import {Button, Col, Layout, Row} from 'antd';
import PageTitle from '../../common/components/PageTitle';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../actions";
import UsersTable from "./UsersTable";

function UsersPage() {
    const { Header, Content } = Layout;
    const users = useSelector(state => state.users.users);
    const dispatch = useDispatch();

    useEffect(() => {
        const loadUses = async () => {
            dispatch(await getUsers());
        };
        loadUses();
    }, []);

    return (
        <>
            <Header className="site-layout-sub-header-background">
                <PageTitle title="Users" />
            </Header>
            <Content>
                <div className="site-layout-background">
                    <Row>
                        <Col span={24} style={{ paddingBottom: '20px' }}>
                            <Button type="primary"><Link to='/users/add-user'>Add user</Link></Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <UsersTable />
                        </Col>
                    </Row>
                </div>
            </Content>
        </>
    );
}

export default UsersPage;
