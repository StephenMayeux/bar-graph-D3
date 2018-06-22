$(document).ready(function() {
	$.getJSON(
		'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json',
		function(data) {
			const dataset = data.data;

			const w = 1000;
			const h = 500;

			const max = d3.max(dataset, d => d[1]);
			const min = d3.min(dataset, d => d[1]);

			const xScale = d3
				.scaleLinear()
				.range([h, 0])
				.domain([min, max]);

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
				.attr('x', d => xScale(d[1]))
				.attr('y', (d, i) => h - xScale(d[1]))
				.attr('width', 20)
				.attr('height', d => xScale(d[1]))
				.attr('fill', 'navy');
		}
	);
});
