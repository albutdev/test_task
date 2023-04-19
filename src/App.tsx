import React, { lazy } from 'react';
import Header from './components/Header/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const TableItems = lazy(() => import('./components/TableDevs/TableItems'));

const App = () => (
	<div className="wrapper">
		<Header />
		<TableItems />
	</div>
);

export default App;
