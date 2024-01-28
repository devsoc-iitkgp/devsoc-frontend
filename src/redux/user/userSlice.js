import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUserAsync = createAsyncThunk(
    "user/fetchUser",
    async (token) => {
        const response = await fetch("http://localhost:5000/user/get", {
            method: "GET",
            headers: {
                authorization: `Bearer ${token}`,
            }
        });
        if (response.ok) {
            const res = await response.json();
            return res.data;
        } else {
            let error = await response.json().then(res => res.error);
            throw new Error(error);
        }
    }
)

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        status: "idle"
    },
    reducers: {
        logout: (state) => {
            localStorage.removeItem("token");
            state.user = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserAsync.fulfilled, (state, action) => {
            console.log(action.payload);
            state.user = action.payload;
            state.status = "idle";
        })
        builder.addCase(fetchUserAsync.pending, (state) => {
            state.status = "loading";
        })
        builder.addCase(fetchUserAsync.rejected, (state, action) => {
            state.status = "idle";
            console.log(action.error);
            localStorage.removeItem("token");
        })
    }
})

export const { logout } = userSlice.actions;
export default userSlice.reducer;
