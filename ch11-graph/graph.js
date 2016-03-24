'use strict';

function Vertex(label, wasVisited) {
	this.label = label;
	this.wasVisited = wasVisited;
}

function Graph(v) {
	this.vertices = v;
	this.vertexList = [];
	this.edges = 0;
	this.adj = [];
	this.marked = [];
	for (var i = 0; i < this.vertices; ++i) {
		this.adj[i] = [];
		this.adj[i].push('');
		this.marked[i] = false;
	}
	this.edgeTo = [];
}
Graph.prototype = {
	constructor: Graph,
	addEdge: function(v, w) {
		this.adj[v].push(w);
		this.adj[w].push(v);
		this.edges++;
	},
	/*showGraph: function() {
		for (var i = 0; i < this.vertices; ++i) {
			console.log(i + ' -> ');
			for (var j = 0; j < this.vertices; ++j) {
				if (this.adj[i][j] !== undefined) {
					console.log(this.adj[i][j] + ' ');
				}
			}
			console.log('');
		}
	},*/
	// 用于显示符号名字而非数字的新函数
	showGraph: function() {
		var visited = [];
		for (var i = 0; i < this.vertices; i++) {
			console.log(this.vertexList[i] + ' -> ');
			visited.push(this.vertexList[i]);
			for (var j = 0; j < this.vertices; j++) {
				if (this.adj[i][j] !== undefined) {
					if (visited.indexOf(this.vertexList[j]) < 0) {
						console.log(this.vertexList[j] + '');
					}
				}
			}
			visited.pop();
		}
	},
	toString: function() {},
	dfs: function(v) {
		var wVal;
		this.marked[v] = true;
		// 用于输出的if语句在这里不是必须的
		if (this.adj[v].length > 1) {
			console.log('Visited vertex: ' + v);
		} 
		for (var w in this.adj[v]) {
			wVal = this.adj[v][w];
			if (wVal !== '' && !this.marked[wVal]) {
				this.dfs(wVal);
			}
		}
	},
	bfs: function(s) {
		var wVal;
		var queue = [];
		this.marked[s] = true;
		queue.push(s); // 添加到队尾
		while (queue.length > 0) {
			var v = queue.shift(); // 从队首移除
			// 用于输出的if语句在这里不是必须的
			if (this.adj[v].length > 1) {
				console.log('Visited vertex: ' + v);
			} 
			for (var w in this.adj[v]) {
				wVal = this.adj[v][w];
				if (wVal !== '' && !this.marked[wVal]) {
					this.edgeTo[wVal] = v;
					this.marked[wVal] = true;
					queue.push(wVal);
				}
			}
		}
	},
	pathTo: function(v) {
		var source = 0;
		if (!this.hasPathTo(v)) {
			return undefined;
		}
		var path = [];
		for (var i = v; i != source; i = this.edgeTo[i]) {
			path.push(i);
		}
		path.push(source);
		return path;
	},
	hasPathTo: function(v) {
		return this.marked[v];
	},
	topSort: function() {
		var stack = [];
		var visited = [];
		for (var i = 0; i < this.vertices; i++) {
			visited[i] = false;
		}
		for (var j = 0; j < this.vertices; j++) {
			if (visited[j] === false) {
				this.topSortHelper(j, visited, stack);
			}
		}
		for (var k = 0; k < stack.length; k++) {
			if (stack[k] !== undefined && stack[k] !== false) {
				console.log(this.vertexList[stack[k]]);
			}
		}
	},
	topSortHelper: function(v, visited, stack) {
		var w;
		visited[v] = true;
		for (var i in this.adj[v]) {
			w = this.adj[v][i];
			if (w !== '' && !visited[w]) {
				this.topSortHelper(w, visited, stack);
			}
		}
		stack.push(v);
	}
}
