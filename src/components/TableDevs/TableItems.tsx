import React, { FC, lazy, memo, useCallback, useMemo } from 'react';
import Table from 'react-bootstrap/Table';
import { useLazyFetchAllItemsQuery } from '../../service/developersAPI';
import { Item } from '../../interfaces/interfaces';
import { Row } from 'react-bootstrap';

import './style.scss';

const Loader = lazy(() => import('../Loader/Loader'));

const TableItems: FC = () => {
	const [trigger, { data: items, isFetching, error }] =
		useLazyFetchAllItemsQuery();

	if (error) return <>{error}</>;

	const headers = useMemo(
		() =>
			items
				?.reduce((maxArr: string[], item: Item) => {
					const arr = Object.keys(item);
					return maxArr.length > arr.length ? maxArr : arr;
				}, [])
				.slice(0, 5),
		[items]
	);

	const handleClick = useCallback(() => trigger(''), [trigger]);

	return (
		<div className="table" id="table">
			<>
				<button onClick={handleClick} className="add">
					Download
				</button>
				{isFetching ? (
					<div className="loaderWrapper">
						<Loader />
					</div>
				) : (
					<Table striped bordered hover variant="dark" size="rl">
						<thead>
							<tr className="headerTable">
								{headers?.map((header: string, index: number) => (
									<th key={index}>{header}</th>
								))}
							</tr>
						</thead>
						<tbody>
							{items?.map((item: Item) => (
								<Row item={item} key={item.id} />
							))}
						</tbody>
					</Table>
				)}
			</>
		</div>
	);
};

export default memo(TableItems);
