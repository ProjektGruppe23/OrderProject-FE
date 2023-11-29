import { sendObjectAsJson } from "./sendObjectAsJson.js";

export async function deleteOrder(orderIdToDelete) {
    const url = `http://localhost:8080/deleteOrder/${orderIdToDelete}`;

    console.log("Deleting Order with ID: ", orderIdToDelete); // Debugging line

    try {
        const response = await sendObjectAsJson(url, null, "DELETE");
        if (response.status === 200) {
            alert("Order deleted successfully");
        } else {
            alert("Failed to delete order. Please try again.");
        }
    } catch (error) {
        console.error(error);
        alert("An error occurred while deleting the order.");
    }
}