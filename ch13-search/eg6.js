'use strict';

var text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, natus et quam. Recusandae optio, odit adipisci voluptatibus mollitia quos saepe sed numquam ipsam natus cupiditate sapiente nesciunt temporibus consectetur ipsum, officiis tempora fugiat, dolorem magnam harum, iure obcaecati! Eveniet harum, tenetur adipisci quasi deleniti commodi sint? Iure corrupti obcaecati minima aut exercitationem consectetur repellendus! Nam itaque, fuga ex repudiandae minima in sit provident sunt reiciendis quasi ipsum quo necessitatibus, voluptatum possimus vero id, fugit blanditiis recusandae, suscipit reprehenderit quidem quis voluptates corporis porro! Amet, nihil. Placeat id praesentium nulla quo nam. Dolorum officia, aliquid modi in ab perferendis. Maxime, libero.';
var words = text.split(' ');
var word = 'libero.';
var start = new Date() * 1;
var position = seqSearch(words, word);
var stop = new Date() * 1;
var elapsed = stop - start;
if (position >= 0) {
	console.log('单词 ' + word + ' 被找到的位置 ' + position);
	console.log('顺序查找消耗：' + elapsed + 'ms');
} else {
	console.log(word + ' 没有出现');
}

insertionSort(words);
disArr(words);
start = new Date() * 1;
position = binSearch(words, word);
stop = new Date() * 1;
elapsed = stop - start;
if (position >= 0) {
	console.log('单词 ' + word + ' 被找到的位置 ' + position);
	console.log('二分查找消耗：' + elapsed + 'ms');
} else {
	console.log(word + ' 没有出现');
}
