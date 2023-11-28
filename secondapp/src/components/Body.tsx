import Banner from "./Banner";
import styles from "./css/BodyCss.module.css";

export const Body = () => {

  return (

    <div className={`"bg-gray-800 px-4 py-6" ${styles.body} `}>
      <Banner />
    </div>

  )
};

