// This script creates test Twitter agents by calling the API endpoint
// Usage: node scripts/create-test-agents.js

const axios = require('axios');

// List of test Twitter handles
const testHandles = [
    'elonmusk',
    'vitalikbuterin',
    'naval',
    'balajis',
    'jack'
];

/**
 * Creates a test agent by calling the API endpoint
 * @param {string} handle Twitter handle to create an agent from
 */
async function createAgent(handle) {
    console.log(`Creating agent for Twitter handle: @${handle}...`);

    try {
        const response = await axios.post(
            'http://localhost:3000/api/users/create',
            { handle }
        );

        if (response.data.success) {
            console.log(`✅ Successfully created agent for @${handle}`);
            console.log(`Agent details:`, response.data.data);
        } else {
            console.error(`❌ Failed to create agent for @${handle}: ${response.data.error}`);
        }
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            console.error(`❌ Error creating agent for @${handle}: ${error.response.data.error || error.message}`);
        } else if (error instanceof Error) {
            console.error(`❌ Error creating agent for @${handle}: ${error.message}`);
        } else {
            console.error(`❌ Unknown error creating agent for @${handle}`);
        }
    }
}

/**
 * Main function to create all test agents
 */
async function main() {
    console.log('Starting test agent creation...');

    // Create agents sequentially with a delay to avoid rate limiting
    for (const handle of testHandles) {
        await createAgent(handle);
        // Wait 1 second between requests
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    console.log('Test agent creation complete!');
}

// Run the main function
main().catch(error => {
    console.error('Fatal error in test script:', error);
    process.exit(1);
}); 