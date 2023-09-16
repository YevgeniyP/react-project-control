import { FC } from "react";

import styles from "./UserInfo.module.css";

interface UserInfoPropsInterface {}

export const UserInfo: FC<UserInfoPropsInterface> = () => {
	return (
		<div className={styles.UserInfo}>
			<div className={styles.UserInfo_avatar}>U</div>
			<div className={styles.UserInfo_username}>Username</div>
			<div className={styles.UserInfo_status}>Active</div>
		</div>
	);
};
