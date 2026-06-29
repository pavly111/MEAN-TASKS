// 📋 Task Description: Simulate pinging a server. If it's offline, retry up to 5 times. Stop and log an error after the fifth failure.

// 🧩 Methods Used: Math.random() for unpredictability for loop with await Promises inside pingServer()

// 🔍 Helpful Notes: Uses try/catch inside the loop so failed attempts don’t crash the program. Can be extended to implement exponential backoff.


const pingServer = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = Math.round(Math.random());
            const isOnline = random === 1; 
            if (isOnline) {
                resolve("Server is online");
            } else {
                reject(new Error("Server is offline"));
            }
        }, 1000);
    });
};

async function checkServerStatus() {
    for (let i = 1; i <= 5; i++) {
        try {
            const result = await pingServer();
            console.log(result);
            return; 
        } catch (error) {
            console.error(`Attempt ${i}: ${error.message}`);
            if (i === 5) {
                console.error("Max attempts reached. Stopping retries.");
            }
        }
    }
}

checkServerStatus();