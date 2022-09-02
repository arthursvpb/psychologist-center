import './styles.scss';

import { Divider, Space, Table, Tag } from 'antd';
import { DeleteFilled, EditFilled, EyeFilled } from '@ant-design/icons';

import { FormRegisterModal } from '../../components/FormRegisterModal';

const columns = [
  {
    title: 'Patient',
    width: 50,
    dataIndex: 'patient',
    key: 'patient',
    fixed: 'left',
  },
  {
    title: 'Scheduled date',
    dataIndex: 'date',
    key: '1',
    width: 60,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: '2',
    width: 50,
  },
  {
    title: 'Subject',
    dataIndex: 'subject',
    key: '3',
    width: 50,
  },
  {
    title: 'Duration',
    dataIndex: 'duration',
    key: '4',
    width: 50,
  },
  {
    title: 'Session type',
    dataIndex: 'sessionType',
    key: '4',
    width: 50,
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

for (let i = 0; i < 3; i++) {
  const colors = [
    { status: 'success', description: 'attended' },
    { status: 'processing', description: 'scheduled' },
    { status: 'error', description: 'canceled' },
  ];

  data.push({
    key: i,
    patient: `Harry Potter ${i}`,
    date: `01/09/2022 - 09:00`,
    status: <Tag color={colors[i].status}>{colors[i].description}</Tag>,
    subject: `Anxiety ${i}`,
    duration: `01:00`,
    sessionType: `Couple`,
  });
}

export const Sessions = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>Sessions</h1>
        <FormRegisterModal buttonTitle="New session" modalTitle="New session" formType="session" />
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
