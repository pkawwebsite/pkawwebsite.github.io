document.addEventListener('DOMContentLoaded', function () {
    const expandButton = document.getElementById('expand-all-sessions');
    const sessions = Array.from(document.querySelectorAll('.session-card'));

    if (!expandButton) return;

    function updateExpandButton() {
        const allOpen = sessions.length > 0 && sessions.every(session => session.open);
        expandButton.textContent = allOpen ? 'Collapse All' : 'Expand All';
        expandButton.setAttribute('aria-expanded', String(allOpen));
    }

    expandButton.addEventListener('click', function () {
        const shouldOpen = !sessions.every(session => session.open);
        sessions.forEach(session => { session.open = shouldOpen; });
        updateExpandButton();
    });

    sessions.forEach(session => session.addEventListener('toggle', updateExpandButton));
    updateExpandButton();
});
