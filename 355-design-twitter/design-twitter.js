class User {
    constructor(id) {
        this.uid = id;
        this.followers = new Set([id]);
        this.followees = new Set([id]);
        this.tweets = [];
        this.feed = []; // this should be a LL
    }
}

class Twitter {
    constructor() {
        this.users = {};
        this.timestamp = 0;
    }

    /** 
    * @param {number} userId 
    * @param {number} tweetId
    * @return {void}
    */
    postTweet(userId, tweetId) {
        if (this.users[userId] === undefined) this.users[userId] = new User(userId);
        let user = this.users[userId];
        let tweet = {tweetId, userId, timestamp: this.timestamp};
        user.tweets.push(tweet);
        
        for (let fid of user.followers) {
            let f = this.users[fid];
            f.feed.push(tweet);
        }

        this.timestamp++;
    };

    /** 
    * @param {number} userId
    * @return {number[]}
    */
    getNewsFeed (userId) {
        if (this.users[userId] === undefined) return [];

        let { feed } = this.users[userId];
        // console.log('user=', this.users[userId]);
        const NF = [];
        for (let i = feed.length - 1; i >= feed.length - 10 && i >= 0; i--) {
            NF.push(feed[i].tweetId);
        }
        // console.log('NF=', NF);
        return NF;
    };

    /** 
    * @param {number} followerId 
    * @param {number} followeeId
    * @return {void}
    */
    follow (followerId, followeeId) {
        if (this.users[followerId] === undefined) this.users[followerId] = new User(followerId); 
        if (this.users[followeeId] === undefined) this.users[followeeId] = new User(followeeId);

        let { followees, feed } = this.users[followerId];
        let { followers, tweets } = this.users[followeeId];
        
        //If the follower already following the followee, return
        if (followers.has(followerId) && followees.has(followeeId)) return;

        followees.add(followeeId);
        followers.add(followerId);

        //Add most recent 10 tweets from followee into the follower's newsfeed
        console.log('followee=', this.users[followeeId], 'follower=', this.users[followerId]);
        let mostRecentTwts = tweets.slice(tweets.length - 10, tweets.length);
        console.log('followeeId=', followeeId, 'mostRecentTwts=', mostRecentTwts); 
        let start = 0;
        if (mostRecentTwts.length >= 10) {
            start = feed.findIndex(f => f.timestamp < mostRecentTwts[0].timestamp);
        }
        
        let t = 0;
        let n = start;
        while (t < mostRecentTwts.length && n < feed.length) {
            let flweTwt = mostRecentTwts[t];
            let feedTwt = feed[n];
            if (flweTwt.timestamp < feedTwt.timestamp) {
                feed.splice(n, 0, flweTwt);
                t++;
            } else {
                n++;
            }
        }
        if (t < mostRecentTwts.length) {
            for (let i = t; i < mostRecentTwts.length; i++) {
                feed.push(mostRecentTwts[i]);
            }
        }
        console.log('feedEnd=', feed); 
    };

    /** 
    * @param {number} followerId 
    * @param {number} followeeId
    * @return {void}
    */
    unfollow (followerId, followeeId) {
        //look up the followerId in users
        //remove the followeeId from followees
        //iterate over NF, remove any tweets by followee

        let { followees, feed } = this.users[followerId];
        followees.delete(followeeId);
        for (let i = 0; i < feed.length; i++) {
            let twt = feed[i];
            if (twt.userId === followeeId) {
                feed.splice(i, 1);
                i--;
            }
        }
    };
};



/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */