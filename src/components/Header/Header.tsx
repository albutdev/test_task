import React, { FC, memo } from 'react';
import './style.scss';

const Header: FC = () => (
	<div className="header">
		<div className="header title">Table</div>
	</div>
);

export default memo(Header);
