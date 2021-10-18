const pageCount = 29;

const getPageData = () => {
	const data = Array(pageCount).fill([""]);
	// This operation will cause the page to click 4 times to turn the page successfully.
	// data[1] = [].concat(...Array(4).fill(""));
	return data;
};

export const PAGE_DATA = getPageData();
