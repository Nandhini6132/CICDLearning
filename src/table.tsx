import React from 'react';

type User = {
  id: number;
  name: string;
  email: string;
};

type Props = {
  users: User[];
};

const Table: React.FC<Props> = ({ users }) => {
  return (
    <>
      <table style={{ border: '1px solid ', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid' }}>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id}>
              <td>{user?.name}</td>
              <td>{user?.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
