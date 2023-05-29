import { axiosInstance } from "./config";

export const insertBooking = async (data = {}) => {
    try {
        const response = await axiosInstance.post("booking/insert-booking.php", { ...data })
        return response;
    } catch (e) {
        console.log(e.message);
    }
}