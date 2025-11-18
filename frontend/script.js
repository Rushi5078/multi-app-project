document.getElementById("backendBtn").addEventListener("click", async () => {
    try {
        const response = await fetch("http://<BACKEND_PUBLIC_IP>:5000/api");
        const data = await response.json();
        document.getElementById("backendOutput").innerText = data.message;
    } catch (error) {
        document.getElementById("backendOutput").innerText = "Error connecting to backend!";
    }
});
