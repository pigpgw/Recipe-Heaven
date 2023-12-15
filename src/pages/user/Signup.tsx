import React, { useState, ChangeEvent, FormEvent } from 'react';
import ReactDOM from 'react-dom';

interface SignupProps {
  onSubmit: (nickname: string) => void;
}

const Signup: React.FC<SignupProps> = ({ onSubmit }) => {
  const [nickname, setNickname] = useState<string>('');

  const handleNicknameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(nickname);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        닉네임:
        <input
          type="text"
          value={nickname}
          onChange={handleNicknameChange}
          required
        />
      </label>
      <button type="submit">가입하기</button>
    </form>
  );
};

const handleSignup = (nickname: string) => {
  // 여기에서 서버로 회원가입 요청을 보내거나 다른 작업을 수행할 수 있습니다.
  console.log(`회원가입 요청 - 닉네임: ${nickname}`);
};

ReactDOM.render(<Signup onSubmit={handleSignup} />, document.getElementById('root'));