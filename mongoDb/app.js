const MongoClient = require('mongodb').MongoClient;

const learnersData = [
	{
		learner: 'John Doe',
		subject: 'English',
		score: 80,
	},
	{
		learner: 'Jane Smith',
		subject: 'History',
		score: 85,
	},
	{
		learner: 'Robert Brown',
		subject: 'Maths',
		score: 75,
	},
	{
		learner: 'Emily White',
		subject: 'Science',
		score: 90,
	},
	{
		learner: 'Michael Johnson',
		subject: 'Biology',
		score: 78,
	},
	{
		learner: 'Emma Jones',
		subject: 'English',
		score: 88,
	},
	{
		learner: 'William Davis',
		subject: 'Maths',
		score: 82,
	},
	{
		learner: 'Olivia Miller',
		subject: 'Science',
		score: 89,
	},
	{
		learner: 'James Taylor',
		subject: 'Biology',
		score: 70,
	},
	{
		learner: 'Isabella Wilson',
		subject: 'History',
		score: 92,
	},
];

const url = 'mongodb+srv://02b3akshay:02b3akshay@cluster0.g4nd49h.mongodb.net/';
const dbName = 'learners';
const collectionName = 'grades';

async function run() {
	const client = new MongoClient(url);

	try {
		await client.connect();
		const db = client.db(dbName);
		const collection = db.collection(collectionName);

		// // Delete documents with score less than 70

		// const deleteData = await collection.deleteMany({ score: { $lt: 70 } });
		// console.log(deleteData);

		// // Update multile documents using filter

		// const updateData = await collection.updateMany(
		// 	{ score: 90 },
		// 	{ $inc: { score: 5 } },
		// );
		// console.log(updateData);

		// // Find average score to all learners

		// const learnerData = await collection
		// 	.aggregate([
		// 		{
		// 			$group: { _id: null, averageScore: { $avg: '$score' } },
		// 		},
		// 	])
		// 	.toArray();
		// console.log(learnerData);

		// // Find learners who scored above 80
		// const learnerData = await collection.find({ score: { $gt: 80 } });

		// console.log(learnerData);

		// // Insertion
		// const newLearner = { learner: 'John Doe', subject: 'Math', score: '86' };
		// const insertLearner = await collection.insertMany(learnersData);
		// console.log(`Insertion successful!`);

		// // Updation
		// const updateLearner = await collection.updateOne(
		// 	{ learner: 'John Doe' },
		// 	{ $set: { score: 90 } },
		// );
		// console.log(`Insertion successful! ${updateLearner}`);

		// // Read
		// const fetchData = await collection.find({}).toArray();
		// console.log(fetchData);

		// // Delete
		// const deleteData = await collection.deleteOne({ learner: 'John Doe' });
		// console.log(deleteData);
	} finally {
		client.close();
	}
}
run().catch(console.error);
