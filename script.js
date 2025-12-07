async function loadSessions() {
    const res = await fetch('https://YOUR_WORKER_URL/sessions'); // replace later
    const data = await res.json();
    const container = document.getElementById('sessions');
    container.innerHTML = '';
    if(data.length === 0){
        container.textContent = 'No sessions yet.';
        return;
    }
    data.forEach(session => {
        const el = document.createElement('div');
        el.textContent = `${session.user1} + ${session.user2} joined on ${session.date} for ${session.duration} minutes`;
        container.appendChild(el);
    });
}

setInterval(loadSessions, 10000);
loadSessions();
