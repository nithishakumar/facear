document.addEventListener('DOMContentLoaded', function() {
    const exerciseItems = document.querySelectorAll('.exercise-item');
    const descriptionBox = document.getElementById('exercise-description');

    exerciseItems.forEach(item => {
        item.addEventListener('mouseover', function(event) {
            const description = item.getAttribute('data-description');
            descriptionBox.innerHTML = description;
            descriptionBox.style.display = 'block';
            positionDescriptionBox(event);
        });

        item.addEventListener('mousemove', positionDescriptionBox);

        item.addEventListener('mouseout', function() {
            descriptionBox.style.display = 'none';
        });
    });

    function positionDescriptionBox(event) {
        const descriptionBox = document.getElementById('exercise-description');
        const mouseX = event.pageX;
        const mouseY = event.pageY;
        descriptionBox.style.left = mouseX + 15 + 'px';
        descriptionBox.style.top = mouseY + 15 + 'px';
    }
});