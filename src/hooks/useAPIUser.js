import { ref } from "@vue/reactivity";
import axios from "axios";


const useAPIUsers = () => {

    const users = ref([]);
    const isLoading = ref(false);
    const currentPage = ref(1);
    const errorMessage = ref("");

    const getUsers = async (page = 1) => {

        if (page <= 0) page = 1
        isLoading.value = true

        const response = await axios.get("https://reqres.in/api/users", {
            params: {
                page: page,
            },
        });
        isLoading.value = false;
        if (response.data.data.length > 0) {
            users.value = response.data.data
            currentPage.value = page
            errorMessage.value = null
        } else if (currentPage.value > 0) {
            errorMessage.value = "No more  users"
        }
    };


    getUsers()

    const nextPage = () => getUsers(currentPage.value + 1)
    const previousPage = () => getUsers(currentPage.value - 1)

    return {
        getUsers,
        nextPage,
        previousPage,
        users,
        isLoading,
        currentPage,
        errorMessage
    }
}

export default useAPIUsers

