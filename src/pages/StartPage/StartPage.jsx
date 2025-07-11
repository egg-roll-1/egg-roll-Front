import { useNavigate } from 'react-router-dom';
import routes from '../../constants/routes';

import Button from '../../components/Button/Button';

import styles from './StartPage.module.css';
import { Layout } from '../../components/Layout/Layout';

const StartPage = () => {
  const navigate = useNavigate();

  const onClickLoginButton = () => {
    navigate(routes.login);
  };

  const onClickSignUpButton = () => {
    navigate(routes.signup)
  }
  return (
    <Layout>
      <div className={styles.startframe}>
        <div className={styles.starttitle}>Good-Point</div>
        <div className={styles.startdiv}>
          <div className={styles.startoverlap}>
            <div className={styles.startfindid}>아이디 찾기</div>
            <div className={styles.startfindpw}>비밀번호 찾기</div>
          </div>
          <div className={styles.startdiv2}>
            <div className={styles.startbtn}>
              <Button text={'로그인'} type={'login'} onClick={onClickLoginButton} />
            </div>
            <div className={styles.startpwbtn}>
              <Button text={'회원가입'} type={'login'} onClick={onClickSignUpButton}/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StartPage;
