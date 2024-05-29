// Import the Student model
import Student from '../models/usermodel.js';

// Define an asynchronous function to get all users
const getAllUsers = async () => {
    try {
        // Retrieve all documents from the students collection
        const students = await Student.find();
        return students;
    } catch (error) {
        // Log any errors that occur during the database operation
        console.error('Error retrieving users:', error);
        // Optionally, you could throw an error or handle it in another way
        throw error;
    }
};

// Export the function as the default export
export default getAllUsers;
