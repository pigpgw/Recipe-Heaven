import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NicknameEdit: React.FC = () => {
  const [id, setId] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchId = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        setId(response.data.id.toString());
        setLoading(false);
      } catch (error) {
        console.error('닉네임 불러오기 중 오류 발생:', error);
        setLoading(false);
      }
    };

    fetchId();
  }, []);

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handleIdSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (validateId()) {
        const response = await axios.put('https://jsonplaceholder.typicode.com/posts/1', {
          id: parseInt(id, 10), // Assuming the ID is an integer
        });

        if (response.data && response.data.id) {
          alert('닉네임이 변경되었습니다');
          window.location.reload(); // Reload the page
        }
      }
    } catch (error) {
      console.error('닉네임 변경 중 오류 발생:', error);
    }
  };

  const validateId = (): boolean => {
    if (id.length < 2 || id.length > 8) {
      setError('닉네임은 최소 2글자에서 최대 8글자 사이어야 합니다.');
      return false;
    }

    setError(null);
    return true;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">닉네임 변경</h1>
        <form onSubmit={handleIdSubmit} className="max-w-md">
          <label className="block mb-2">
            현재 닉네임: {id || '없음'}
          </label>
          <label className="block mb-4">
            새로운 닉네임:
            <input
              id="newId"
              type="text"
              value={id}
              onChange={handleIdChange}
              className="border p-2 w-full"
            />
          </label>
          {error && <p className="text-red-500 mb-2">{error}</p>}
          <button
            type="submit"
            className="bg-primary text-white py-2 px-4 rounded"
          >
            변경하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default NicknameEdit;