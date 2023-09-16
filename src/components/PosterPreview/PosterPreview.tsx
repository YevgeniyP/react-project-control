import { FC } from "react";

import { baseImageURL } from "../../constants";

import styles from "./PosterPreview.module.css";

interface PosterPreviewPropsInterface {
	title: string;
	posterPath: string;
}

export const PosterPreview: FC<PosterPreviewPropsInterface> = ({
	title,
	posterPath,
}) => {
	return (
		<img
			className={styles.PosterPreview}
			src={`${baseImageURL}${posterPath}`}
			alt={title}
			loading='lazy'
		/>
	);
};
