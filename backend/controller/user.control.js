exports.getUser = async (req, res) => {
    try {
        // Extract 'name' from the query parameters
        const { name } = req.query;

        // Validate if name is provided and not empty
        if (!name || name.trim() === "") 
        {
            return res.status(400).json({ error: "Name is required." });
        }

        // Trim whitespace from input

        // Send a successful response with a greeting message
        const cleanName = name.trim();
        return res.status(200).json({ message: `Hello, ${cleanName}! Welcome to Younglabs.` });
    } 
    catch (error)
    {
        console.error("Error in getUser:", error);

        // Return a 500 status code for any server errors
        res.status(500).json({ error: "Internal Server Error" });
    }
};
