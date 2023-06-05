import css from './tweet.module.css';
import logo from '../../images/logo.svg';
import emotions from '../../images/emotions.png';
// import circle from '../../images/circle.png';
const Tweet = ({ avatar }) => {
  return (
    <div className={css.tweet__card}>
      <img src={logo} alt="GO IT logo" className={css.logo_img} />
      <img src={emotions} alt="communication and emotions" className={css.emotions_img} />
      <div className={css.dividing_line}>
        <img src={avatar} alt="" className={css.avatar} />
      </div>
      {/* <img src={circle} alt="" className={css.avatar} /> */}
      <p className={css.tweets_info}>777 tweets</p>
      <p className={css.followers}>100,501 Followers</p>
      <button type="button" className={css.follow_btn}>
        <span className={css.follow_btn__text}>follow</span>
      </button>
    </div>
  );
};
export default Tweet;
