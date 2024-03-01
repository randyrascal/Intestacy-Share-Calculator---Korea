document.addEventListener('DOMContentLoaded', function() {
    // Function to show or hide additional questions based on selections
    function updateQuestions() {
        const childrenAliveSelect = document.getElementById('childrenAlive');
        const parentsAliveSelect = document.getElementById('parentsAlive'); // Add this select in HTML
        // Similar for grandparents and siblings, following the pattern

        // Example for children, repeat for other relations
        if (childrenAliveSelect.value === 'yes') {
            // Show additional dropdown for number of children, you'll need to add this in HTML or here dynamically
        } else {
            // Hide the dropdown if it exists
        }
        // Repeat for parents, grandparents, and siblings
    }

    // Add event listeners for change on the relevant select elements
    document.getElementById('childrenAlive').addEventListener('change', updateQuestions);
    // Repeat for other select elements like parentsAlive, grandparentsAlive, siblingsAlive

    // Function to calculate and display inheritance shares
    function calculateShares() {
        // Logic to determine the heirs based on the selected options
        // For simplicity, here's a placeholder for logic
        const spouseAlive = document.getElementById('spouseAlive').value;
        const childrenAlive = document.getElementById('childrenAlive').value;
        // Add similar lines for parentsAlive, grandparentsAlive, siblingsAlive

        let resultText = 'Eligible Heirs and Shares: \n';

        // Example calculation logic, replace with actual conditions and calculations
        if (spouseAlive === 'yes' && childrenAlive === 'yes') {
            resultText += 'Heirs: Spouse and children\n';
            resultText += 'Legal Inheritance Shares: Spouse (1.5) and each child (1)\n';
        } else if (spouseAlive === 'yes' && childrenAlive === 'no') {
            // Continue with other conditions
        }
        // Continue adding else-if blocks for different scenarios

        // Display the result
        document.getElementById('result').innerText = resultText;
    }

    // Add event listener for the calculate button
    document.getElementById('inheritanceForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting traditionally
        calculateShares();
    });
});
