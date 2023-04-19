import { Item } from '../interfaces/interfaces';

export const filterData = (response: Item[]) => {
	const filterResponse: Item[] = [];

	const checkItem = (item: Item) => {
		if (
			filterResponse.filter((filteredItem) => filteredItem.id === item.id)
				.length > 0
		) {
			return;
		}

		filterResponse.push({
			id: item.id,
			name: item.name,
			price: item.price,
			isPackage: item.included ? 'Yes' : 'No',
		});

		if (item.included) {
			item.included.forEach((includedItem) => {
				checkItem(includedItem);
			});
		}
	};

	response.forEach((item) => checkItem(item));

	return filterResponse;
};
