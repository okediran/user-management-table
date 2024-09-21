import type { NextApiRequest, NextApiResponse } from 'next';

// Generate a mock array of user objects
const users = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,                            // Unique ID for each user
  name: `User ${i + 1}`,                // Name of the user
  email: `user${i + 1}@example.com`,    // Email address for the user
  phone: `123-456-789${i}`,             // Mock phone number
  address: `Address ${i + 1}`           // Mock address
}));

/**
 * API route handler for fetching user data
 * 
 * @param req - The request object, containing data about the request
 * @param res - The response object, used to send back data to the client
 */
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Send a successful response with the user data as JSON
  res.status(200).json(users);
}
