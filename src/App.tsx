import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';
import Table from './table';
import Search from './Search';

interface user {
  name: string;
  email: string;
  id: number;
}
interface userType {
  name: string;
  email: string;
}
function App() {
  const [inputVal, setInputVal] = useState<userType>({ name: '', email: '' });
  const [users, setUsers] = useState<user[]>([]);
  const [displayUsers, setDisplayUsers] = useState<user[]>([]);
  const [search, setSearch] = useState('');

  const handleAddUser = useCallback(
    (inputVal: userType) => {
      if (inputVal.name === '' || inputVal.email === '')
        alert('Both name and email are required');
      const userList = { ...inputVal, id: users.length + 1 };
      setUsers((prev) => [...prev, userList]);
      setDisplayUsers((prev) => [...prev, userList]);
      setInputVal({
        name: '',
        email: '',
      });
    },
    [users]
  );

  const handleSearch = useCallback(() => {
    if (search === '') {
      setDisplayUsers(users);
    }
    const filteredUsers = users.filter(
      (u) =>
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase())
    );

    setDisplayUsers(filteredUsers);
  }, [users, search]);

  console.log('parent');

  const debounceTimer = useRef<number | null>(null);

  useEffect(() => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = window.setTimeout(() => {
      if (search.trim() === '') {
        setDisplayUsers(users);
        return;
      }

      const filteredUsers = users.filter(
        (u) =>
          u.name.toLowerCase().includes(search.toLowerCase()) ||
          u.email.toLowerCase().includes(search.toLowerCase())
      );

      setDisplayUsers(filteredUsers);
    }, 1000);

    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [search, users]);

  useEffect(() => {
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, []);

  return (
    <>
      <Search
        setSearch={setSearch}
        search={search}
        handleSearch={handleSearch}
        //  handleSearchDebouce={handleSearchDebouce}
      />
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={inputVal.name}
          onChange={(e) =>
            setInputVal((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={inputVal.email}
          onChange={(e) =>
            setInputVal((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
        <button onClick={() => handleAddUser(inputVal)}>Add</button>
      </div>{' '}
      <br />
      <Table users={displayUsers} />
    </>
  );
}

export default App;
