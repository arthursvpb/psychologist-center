import './styles.scss';

import { Button, Divider, Space, Table } from 'antd';

import { DeleteFilled, EditFilled, EyeFilled } from '@ant-design/icons';

const columns = [
  {
    title: 'Patient',
    width: 75,
    dataIndex: 'patient',
    key: 'patient',
    fixed: 'left',
  },
  {
    title: 'Scheduled date',
    dataIndex: 'date',
    key: '1',
    width: 75,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: '2',
    width: 75,
  },
  {
    title: 'Subject',
    dataIndex: 'subject',
    key: '3',
    width: 75,
  },

  {
    title: 'Duration',
    dataIndex: 'duration',
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
    patient: `Harry Potter ${i}`,
    date: `4 Privet Drive ${i}`,
    status: `harry@potter.com ${i}`,
    subject: `Male`,
    duration: `Little Whinging ${i}`,
  });
}

export const Sessions = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>Sessions</h1>
        <Button type="primary">New Session</Button>
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
