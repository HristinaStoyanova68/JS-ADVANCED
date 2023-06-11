function solution(command) {

    const commands = {
        'upvote': () => { this.upvotes++; },
        'downvote': () => { this.downvotes++; },
        'score': () => {

            let totalVotes = this.upvotes + this.downvotes;
            let balance = this.upvotes - this.downvotes;
            let additionalVotes = 0;

            if (totalVotes > 50) {
                additionalVotes = Math.ceil(Math.max(this.upvotes, this.downvotes) * 0.25);
            }

            let inflatedUpvotes = this.upvotes + additionalVotes;
            let inflatedDownvotes = this.downvotes + additionalVotes;

            let rating = 'new';

            if (totalVotes < 10) {
                rating = 'new';
            } else if ((this.upvotes / totalVotes) > 0.66) {
                rating = 'hot';
            } else if (this.downvotes <= this.upvotes && totalVotes > 100) {
                rating = 'controversial';
            } else if (this.downvotes > this.upvotes) {
                rating = 'unpopular';
            }

            return [inflatedUpvotes, inflatedDownvotes, balance, rating];
        },
    };

    return commands[command]();
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
console.log(score);
solution.call(post, 'downvote');         // (executed 50 times)
score = solution.call(post, 'score');



