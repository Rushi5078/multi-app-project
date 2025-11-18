document.getElementById("backendBtn").addEventListener("click", async () => {
    try {
        const response = await fetch("/api");   // <-- IMPORTANT FIX
        const data = await response.json();
        document.getElementById("backendOutput").innerText = data.message;
    } catch (error) {
        document.getElementById("backendOutput").innerText = "Error connecting to backend!";
    }
});

