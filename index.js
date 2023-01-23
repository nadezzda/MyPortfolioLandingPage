"use strict"
const youLookForWorker = true;
class Worker {
    constructor(required_skills, job) {
        this.required_skills = required_skills;
        this.job = job;
    }
};
class Vacancy extends Worker {
    constructor(required_skills, job) {
        super(required_skills, job);
        if (youLookForWorker &&
        this.required_skills === "My required skills" &&
        this.job === "Front-End Developer") {
            alert("Contact me!")
        }
    }
}
new Vacancy("My required skills", "Front-End Developer");






