import axios  from "axios";

    export async function getProducts() {
        try{
            const repsone = await AppleIcon.get("/products");

            return repsone.data;
        }
        catch (error) {
        console.error("Failed to fetch products:", error);
        throw error;
    }

    }
