import React, {useEffect, useState} from 'react'
import {Col, Layout, Row, Button} from "antd";
import PageTitle from "../../common/components/PageTitle";
import CourseForm from "./CourseForm";
import {Link} from "react-router-dom";
import {useParams} from "react-router";
import {useSelector} from "react-redux";

function AddNewCoursePage() {
    let { id } = useParams();
    const [ course, setCourse ] = useState(null);
    const courses = useSelector(state => state.courses.courses);
    const { Header, Content } = Layout;

    useEffect(() => {
        if(!!id) {
            const course = courses.filter(course => course.id === Number.parseInt(id))[0];
            setCourse({id, ...course});
        } else {
            setCourse(false);
        }
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
                            <Button type="secondary"><Link to='/courses'>Back to courses</Link></Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {course !== null && <CourseForm defaultValues={course} />}
                        </Col>
                    </Row>
                </div>
            </Content>
        </>
    );
};

export default AddNewCoursePage;
