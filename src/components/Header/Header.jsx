import React, {Component} from 'react'

import styles from './Header.css'

export default class Header extends Component {
	render() {
		return(
			<div>
				<div className={styles.header}>
					<a className={styles.profileLink} href="https://vibhu-agarwal.github.io/" target="_blank">Vibhu Agarwal</a>
				</div>
				<div className={styles.tagline}>
					Python Enthusiast | Web Developer
				</div>
			</div>
		);
	}
}
