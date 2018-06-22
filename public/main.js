$(document).ready(function() {
	$.getJSON(
		'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json',
		function(data) {
			const dataset = data.data;

			const w = 1000;
			const h = 500;

			const svg = d3
				.select('body')
				.append('svg')
				.attr('width', w)
				.attr('height', h);

			svg
				.selectAll('rect')
				.data(dataset)
				.enter()
				.append('rect')
				.attr('x', (d, i) => i * 30)
				.attr('y', d => d[0])
				.attr('width', 25)
				.attr('height', d => d[1])
				.attr('fill', 'navy');

			svg
				.selectAll('text')
				.data(dataset)
				.enter()
				.append('text')
				.text(d => d)
				.attr('x', (d, i) => i * 30)
				.attr('y', (d, i) => h - 3 * d - 3);
		}
	);
});
