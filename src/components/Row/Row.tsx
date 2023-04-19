import React, { FC, memo } from 'react';
import { motion } from 'framer-motion';
import { Item } from '../../interfaces/interfaces';

export interface RowProps {
	item: Item;
}

const Row: FC<RowProps> = ({ item }) => (
	<motion.tr
		layout
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		exit={{
			opacity: 0,
		}}
		transition={{ opacity: { duration: 0.8 } }}
	>
		<td>{item.id}</td>
		<td>{item.name}</td>
		<td>${item.price / 100}</td>
		<td>{item.isPackage}</td>
	</motion.tr>
);

export default memo(Row);
