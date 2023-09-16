import { FC } from "react";

import styles from "./Logo.module.css";

interface LogoPropsInterface {}

export const Logo: FC<LogoPropsInterface> = () => {
	return (
		<div className={styles.Logo}>
			<svg version='1.1' width='70' height='70' viewBox='0 0 512 512'>
				<g></g>
				<path
					d='M351.642 370.678c-34.857 45.476-88.576 74.66-148.756 74.66-105.114 0-190.321-88.299-190.321-197.038 0-108.718 85.207-197.038 190.321-197.038v0c104.857 0 190.075 88.32 190.075 197.038 0 27.136-5.417 52.962-14.981 76.718zM199.547 93.317c-21.975 0-39.782 17.838-39.782 39.803 0 21.945 17.808 39.782 39.782 39.782 21.954 0 39.742-17.838 39.742-39.782 0-21.965-17.797-39.803-39.742-39.803v0zM297.902 146.8c-21.904 0-39.752 17.817-39.752 39.803 0 21.945 17.858 39.742 39.752 39.742 21.975 0 39.824-17.797 39.824-39.742-0.010-21.986-17.849-39.803-39.824-39.803v0zM299.725 260.444c-21.924 0-39.731 17.817-39.731 39.782s17.817 39.783 39.731 39.783c21.965 0 39.803-17.817 39.803-39.783s-17.849-39.783-39.803-39.783v0zM205.476 323.717c-21.975 0-39.782 17.817-39.782 39.762 0 21.965 17.797 39.762 39.782 39.762 21.934 0 39.772-17.797 39.772-39.762 0-21.934-17.838-39.762-39.772-39.762v0zM110.951 271.043c-21.965 0-39.803 17.797-39.803 39.762s17.838 39.782 39.803 39.782 39.762-17.817 39.762-39.783-17.797-39.762-39.762-39.762v0zM105.769 155.597c-21.924 0-39.751 17.776-39.751 39.762 0 21.924 17.828 39.762 39.751 39.762 21.975 0 39.772-17.838 39.772-39.762-0.010-21.975-17.808-39.762-39.772-39.762v0zM205.527 233.083c-8.018 0-14.53 6.697-14.53 14.439 0 8.018 6.512 14.459 14.53 14.459 7.751 0 14.213-6.441 14.213-14.459-0.010-7.742-6.462-14.439-14.213-14.439v0zM202.885 71.885c-93.993 0-170.445 79.063-170.445 176.425 0 97.382 76.452 176.405 170.445 176.405 94.014 0 170.199-79.022 170.199-176.405 0-97.372-76.185-176.425-170.199-176.425z'
					fill='#000000'
				/>
				<path
					d='M379.719 338.022c0 0 21.965 48.363 71.342 10.476-17.603 30.843-30.157 44.442-52.275 83.702-47.483 16.261-63.242-15.237-64.717-31.877 25.712-15.421 45.65-62.3 45.65-62.3z'
					fill='#000000'
				/>
				<path
					d='M409.078 428.759c0 0 42.916 1.024 37.12 31.98l53.238-82.238c0 0-4.844-49.398-41.636-27.095l-48.722 77.353z'
					fill='#000000'
				/>
				<path
					d='M376.423 345.836c3.298-7.824 39.618-64.676 16.456-157.184 0 0 47.237 60.457 20.88 179.097-3.298-1.065-14.295 27.484-18.698 24.217-4.403-3.308-18.637-46.131-18.637-46.131z'
					fill='#000000'
				/>
			</svg>
			<h1>Movie DB</h1>
		</div>
	);
};