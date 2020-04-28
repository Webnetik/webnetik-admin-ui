import React, { useEffect, useState } from 'react'
import { loadCourses } from '../actions/index';
import CoursesTable from "./CoursesTable";
import {Col, Layout, Row} from "antd";
import PageTitle from "../../common/components/PageTitle";
import CourseForm from "./CourseForm";

function CoursesPage() {
    const { Header, Content } = Layout;
    let [courses, setCourses] = useState(null);
    let [loading, setLoading] = useState(false);

    useEffect(() => {
        const getCourses = async () => {
            //setLoading(true);
            //setCourses(await loadCourses());
            //setLoading(false);
        };
        getCourses();
    }, []);

    return (
        <>
            <Header className="site-layout-sub-header-background">
                <PageTitle title="Users" />
            </Header>
            <Content>
                <div className="site-layout-background">
                    <Row>
                        <Col span={24}>
                            <CoursesTable />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CourseForm />
                        </Col>
                    </Row>
                </div>
            </Content>
        </>
    );
};

export default CoursesPage;
