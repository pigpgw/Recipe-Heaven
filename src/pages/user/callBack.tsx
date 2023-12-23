import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

interface CallbackProps {}

const Callback: React.FC<CallbackProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const sendAuthorizationCodeToServer = async (code: string) => {
      try {
        // 백엔드 서버의 URL로 인가코드 전송
        const response = await axios.post('https://localhost:5173/auth/kakao', {
          code,
        });

        // 서버에서 받은 응답 처리
        console.log('백엔드에서 받은 응답:', response.data);

        // 여기서 필요한 작업을 수행하십시오.
        // 예를 들어, 사용자를 다음 경로로 이동시키거나 상태를 업데이트할 수 있습니다.

        navigate('/nickname'); // 예시: 다음 경로로 이동
      } catch (error) {
        console.error('서버로 인가 코드를 전송하는 과정에서 오류가 발생:', error);
      }
    };

    // 현재 URL에서 인가코드 파라미터 값 가져오기
    const authorizationCode = new URLSearchParams(location.search).get('code');

    // 서버에 인가 코드 전송 함수 호출
    if (authorizationCode) {
      sendAuthorizationCodeToServer(authorizationCode);
      console.log('인가 코드:', authorizationCode);
    } else {
      console.error('인가 코드를 찾을 수 없음');
    }
  }, [location, navigate]);

  return (
    <div>
      콜백 페이지
      {/* 여기에 필요한 UI 또는 로딩 상태를 추가할 수 있습니다. */}
    </div>
  );
};

export default Callback;