const arr: [number, string] = [1, '2'];
type User = { name: string, age: number, jobs: string[], logName: () => void, getJobs?: () => string[] };
let user: User = {
    name: 'WFM',
    age: 50,
    jobs: ['a', 'b'],
    logName(): void {
        console.log(this.name)
    },
    getJobs(): string[] {
        return this.jobs;
    }
};
let user2: User = {
    name: 'Max',
    age: 30,
    jobs: ['2'],
    logName(): void {
        console.log(this.name)
    },
};