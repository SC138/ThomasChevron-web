// import React from "react";
// import styles from "./Loader.module.css";
// import animation from "../../assets/animation/Animation.gif";

// const Loader = () => {
//   return (
//     <div className={styles.loader}>
//       <img src={animation} alt="Chargement en cours" />
//     </div>
//   );
// };


// export default Loader;

import React from "react";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.cup}>
        <div className={styles["cup-handle"]}></div>
      </div>
      
    </div>
  );
};

export default Loader;
