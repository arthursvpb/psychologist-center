import './styles.scss';

import { Button, Divider, Space, Table } from 'antd';

import { DeleteFilled, EditFilled, EyeFilled } from '@ant-design/icons';

const columns = [
  {
    title: 'Name',
    width: 75,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: '1',
    width: 75,
  },
  {
    title: 'E-mail',
    dataIndex: 'email',
    key: '2',
    width: 75,
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: '3',
    width: 75,
  },

  {
    title: 'City',
    dataIndex: 'city',
    key: '4',
    width: 75,
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 40,
    render: () => (
      <Space size="middle">
        <a>
          <EyeFilled style={{ color: 'var(--blue-400)' }} />
        </a>
        <a>
          <EditFilled style={{ color: 'var(--green-600)' }} />
        </a>
        <a>
          <DeleteFilled style={{ color: 'var(--red-500)' }} />
        </a>
      </Space>
    ),
  },
];
const data = [];

for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Harry Potter ${i}`,
    address: `4 Privet Drive ${i}`,
    email: `harry@potter.com ${i}`,
    gender: `Male`,
    city: `Little Whinging ${i}`,
  });
}

export const Patients = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>My Patients</h1>
        <Button type="primary">New Patient</Button>
      </div>
      <Divider />
      <Table
        columns={columns}
        dataSource={data}
        summary={() => (
          <Table.Summary>
            <Table.Summary.Row>
              <Table.Summary.Cell index={0} colSpan={2}></Table.Summary.Cell>
            </Table.Summary.Row>
          </Table.Summary>
        )}
        sticky
      />
    </>
  );
};
