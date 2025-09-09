document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-contact');
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const subject = document.getElementById('subject-contact');
    const comment = document.getElementById('comment-contact');

    const errorFirstName = document.getElementById('error-first-name');
    const errorLastName = document.getElementById('error-last-name');
    const errorSubject = document.getElementById('error-subject-contact');
    const errorComment = document.getElementById('error-comment-contact');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;

        // First Name Validation
        if (!firstName.value.trim()) {
            errorFirstName.textContent = 'First name is required';
            isValid = false;
        } else if (!/^[A-Za-z]{2,}$/.test(firstName.value.trim())) {
            errorFirstName.textContent = 'First name should contain at least 2 Characters';
            isValid = false;
        } else {
            errorFirstName.textContent = '';
        }

        // Last Name Validation
        if (!lastName.value.trim()) {
            errorLastName.textContent = 'Last name is required';
            isValid = false;
        } else if (!/^[A-Za-z]{2,}$/.test(lastName.value.trim())) {
            errorLastName.textContent = 'Last name should contain at least 2 Characters';
            isValid = false;
        } else {
            errorLastName.textContent = '';
        }

        // Subject Validation (optional)
        if (subject.value.trim() && !/^[A-Za-z0-9\s]{3,}$/.test(subject.value.trim())) {
            errorSubject.textContent = 'Subject should be at least 3 Characters long';
            isValid = false;
        } else {
            errorSubject.textContent = '';
        }

        // Comment Validation
        if (!comment.value.trim()) {
            errorComment.textContent = 'Comment is required';
            isValid = false;
        } else if (comment.value.trim().length < 10) {
            errorComment.textContent = 'Comment should be at least 10 Characters long';
            isValid = false;
        } else {
            errorComment.textContent = '';
        }

        if (isValid) {
            alert('Form submitted successfully!');
            form.reset();
        }
    });
});