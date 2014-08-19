function toMatrix(data, rowSize) {
	//if data is not an array, return empty array because of wrong input
	if (!(data instanceof Array)) {
		return [];
	}

	//if rowSize is not a proper number or string convertible into a number, 
	//return empty array because of wrong input
	var row = parseInt(rowSize, 10);
	if (isNaN(row) || ((typeof(rowSize) !== 'number') && (row.toString() !== rowSize))) {
		return [];
	}

	//at this point, row is the number of rows, and data is an array
	var i = 0;
	var j = 0;
	var count = 0;
	var matrix = [];

	while (count < data.length) {
		if (i === 0) {
			matrix[j] = [];
		}
		matrix[j][i] = data[count];
		i++;
		count++;
		if (i === row) {
			j++;
			i = 0;
		}
	}
	return matrix;
}