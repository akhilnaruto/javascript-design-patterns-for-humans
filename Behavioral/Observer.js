/**
 * also known as pub sub
 * 
 * Real World example
 * 
 * A good example would be the job seekers where they subscribe to some job posting site and they
 * are notified whenever there is a matching job oppertunity
 * 
 * Defines a dependency between objects so that whenever an object changes its state, all its dependencies are notified.
 */

const JobPost = title => ({
    title: title
});

class JobSeeker{
    constructor(name){
        this._name = name;
    }

    notify(jobPost){
       console.log(this._name, ' has been nofigied of a new posting: ', jobPost.title);
    }
}

class JobBoard{
    constructor(){
        this._subscribers = [];
    }

    subscribe(jobSeeker){
        this._subscribers.push(jobSeeker);
    }

    addJob(jobPosting){
        this._subscribers.forEach(subscriber =>{
            subscriber.notify(jobPosting);
        })
    }
}

const jonDoe = new JobSeeker('John Doe');
const janeDoe = new JobSeeker('Jane Doe');
const kaneDoe = new JobSeeker('Kane Dow');

const jobBoard = new JobBoard();
jobBoard.subscribe(jonDoe);
jobBoard.subscribe(janeDoe);

jobBoard.addJob(JobPost('Software Engineer'));