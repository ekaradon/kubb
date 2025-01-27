import { http } from "msw";

 export function listPets(data?: ListPetsQueryResponse) {
    return http.get("*/pets", function handler(info) {
        return new Response(JSON.stringify(data), {
            headers: {
                "Content-Type": "application/json",
            },
        });
    });
}
