import axios from 'axios'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'

const nicknameEdit = () => {
  const [id, setId] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchName = async () => {
      try {
        const response = await axios.get(
          'http://kdt-sw-7-team06.elicecoding.com:8088/auth/18',
        )
        console.log('응답 데이터:', response.data)
        if (response.data && response.data.nickname) {
          setId(response.data.nickname.toString())
          setLoading(false)
        } else {
          console.error('서버 응답에 유효한 데이터가 없습니다.')
          setLoading(false)
        }
      } catch (error) {
        console.error('닉네임 불러오기 중 오류 발생:', error)
        setLoading(false)
      }
    }

    fetchName()
  }, [])

  const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value)
  }

  const handleIdSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    try {
      if (validateId()) {
        const response = await axios.patch(
          `http://kdt-sw-7-team06.elicecoding.com:8088/auth/18/nickname/${id}`,
          { newNickname: id }
        );
  
        console.log('응답 데이터:', response.data);
  
        if (response.status === 200) {
          toast.success('닉네임이 변경되었습니다.');
          window.location.reload();

        } else {
          toast.error('서버에서 닉네임을 업데이트하지 못했습니다.');
        }
      }
    } catch (error) {
      console.error('닉네임 변경 중 오류 발생:', error);
      toast.error('중복된 닉네임 입니다.');
    }
  };

  const validateId = (): boolean => {
    if (id.length < 2 || id.length > 8) {
      setError('닉네임은 최소 2글자에서 최대 8글자 사이어야 합니다.')
      toast.error('닉네임은 최소 2글자에서 최대 8글자 사이어야 합니다.')
      return false
    }

    setError(null)
    return true
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="">
      <div className="text-2xl font-bold flex justify-center mt-20 ">
        회원 정보 수정
      </div>
      <div className="border-t mt-4 pt-4 flex flex-col items-center justify-center h-screen mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 ">닉네임 변경</h1>
        <form onSubmit={handleIdSubmit} className="max-w-md">
          <label className="block mb-2">현재 닉네임: {id || '없음'}</label>
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
  )
}

export default nicknameEdit
