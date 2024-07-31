$(document).ready(function() {
    $('#contactForm').submit(function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        var formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#message').val()
        };

        $.ajax({
            type: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts', // Mock server endpoint for testing
            data: JSON.stringify(formData), // Convert formData to JSON string
            contentType: 'application/json',
            dataType: 'json',
            encode: true,
            success: function(response) {
                // Display success message
                alert('Thank you for your message. We will get back to you soon.');
                // Clear form fields
                $('#name').val('');
                $('#email').val('');
                $('#message').val('');
            },
            error: function() {
                // Display error message
                alert('An error occurred. Please try again.');
            }
        });
    });
});
