import { Col, Divider, Row } from 'antd';
import { Card } from '../../components/Card';

export const Dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>

      <Divider />
      
      <Row gutter={[16, 16]}>
        <Col>
          <Card title="Sessions scheduled (day)" number="4" />
        </Col>
        <Col>
          <Card title="Sessions scheduled (month)" number="15" />
        </Col>
        <Col>
          <Card title="Sessions canceled (month)" number="12" />
        </Col>
        <Col>
          <Card title="Patients registered" number="122" />
        </Col>
        <Col>
          <Card title="Sessions (individual)" number="43" />
        </Col>
        <Col>
          <Card title="Sessions (pair)" number="33" />
        </Col>
        <Col>
          <Card title="Sessions (group)" number="12" />
        </Col>
      </Row>
    </>
  );
};
