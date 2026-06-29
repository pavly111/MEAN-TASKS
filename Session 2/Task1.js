// 📋 Task Description: Simulate booking a time slot. If the slot is already booked (based on a list), reject the request.

// 🧩 Methods Used: Simulated delay with setTimeout includes() to check booked slot await usage

// 🔍 Helpful Notes: If slot is "b3" or "a1", Promise is rejected. Good for practicing flow control after rejections.

const slotBooked = ["a1", "a2", "a3", "b1", "b2", "b3"];

const bookSlot = (slot) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (slotBooked.includes(slot)) {
                reject(new Error(`Slot ${slot} is already booked`));
            } else {
                resolve(`Slot ${slot} is available`);
            }
        }, 1000);
    });
};

async function checkSlot(slot) {
    try {
        const result = await bookSlot(slot);
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
}

checkSlot("a1"); // should log that the slot is already booked
checkSlot("c1"); // should log that the slot is available
