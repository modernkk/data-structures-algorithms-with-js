'use strict';

var g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.addEdge(3, 4);
g.bfs(0);
var vertex = 4;
var paths = g.pathTo(vertex);
while (paths.length > 0) {
	if (paths.length > 1) {
		console.log(paths.pop() + '-');
	} else {
		console.log(paths.pop());
	}
}
