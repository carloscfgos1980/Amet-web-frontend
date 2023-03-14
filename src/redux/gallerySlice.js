import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getDataAsync = createAsyncThunk(
    'gallery/getDataAsync',
    async () => {
        const response = await fetch('http://localhost:8000/paintingsData');
        if (response.ok) {
            const data = await response.json();
            return { data }
        }
    }
);

export const paintReservedAsync = createAsyncThunk(
    'gallery/paintReservedAsync',
    async (payload) => {
        const resp = await fetch(`http://localhost:8000/paintingsData/${payload.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ reserved: true, registerNum: payload.registerNum }),
        });

        if (resp.ok) {
            const reservedPainting = await resp.json();
            return { reservedPainting };
        }
    }
);
export const paintNotReservedAsync = createAsyncThunk(
    'gallery/paintNotReservedAsync',
    async (payload) => {
        const resp = await fetch(`http://localhost:8000/paintingsData/${payload.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ reserved: false, registerNum: null }),
        });

        if (resp.ok) {
            const reservedPainting = await resp.json();
            return { reservedPainting };
        }
    }
);
export const addReservedPaintAsync = createAsyncThunk(
    'gallery/addReservedPaintAsync',
    async (payload) => {
        const resp = await fetch('http://localhost:8000/reservedPaintings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (resp.ok) {
            const reservedPainting = await resp.json();
            return { reservedPainting };
        }
    }
);

export const addCustomerAsync = createAsyncThunk(
    'gallery/addCustomerAsync',
    async (payload) => {
        const resp = await fetch('http://localhost:8000/customers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (resp.ok) {
            const new_customer = await resp.json();
            return { new_customer };
        }
    }
);

export const addFanAsync = createAsyncThunk(
    'gallery/addFanAsync',
    async (payload) => {
        const resp = await fetch('http://localhost:8000/fans', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (resp.ok) {
            const new_fan = await resp.json();
            return { new_fan };
        }
    }
);

export const deleteReservedAsync = createAsyncThunk(
    'gallery/deleteReservedAsync',
    async (payload) => {
        const resp = await fetch(`http://localhost:8000/reservedPaintings/${payload.id}`, {
            method: 'DELETE',
        });

        if (resp.ok) {
            return { id: payload.id };
        }
    }
);

const gallerySlice = createSlice({
    name: 'gallery',
    initialState: {
        paintingsData: [],
        artSold: [],
        addedPainting: [],
        clientAllData: [],
        fanAllData: [],
        alreadyAdded: false,
        isLoading: true,
        registerNum: null,
        reservedPaintings: [],
    },
    reducers: {
        addPainting: (state, action) => {
            const painting = action.payload
            state.addedPainting.push(painting);
            state.alreadyAdded = true;
        },
        addClientData: (state, action) => {
            state.clientAllData = action.payload;
        },
        switchFalse: (state) => {
            state.alreadyAdded = false;
        },
        fansData: (state, action) => {
            state.fanAllData = action.payload;
        },
        resetAddedPainting: (state) => {
            state.addedPainting = [];
            state.registerNum = null;
            state.clientAllData = [];
            state.reservedPaintings = []
        },
        getRegisterNum: (state, action) => {
            if (state.registerNum === null) {
                state.registerNum = action.payload
            }
        },

    },
    extraReducers: {
        [getDataAsync.pending]: (state, action) => {
            console.log('fetching data...');
            state.isLoading = true;
        },
        [getDataAsync.fulfilled]: (state, action) => {
            console.log('Data fetched successfully!')
            const allPaintings = action.payload.data
            let available = allPaintings.filter(paint => paint.sold === false && paint.showDOM === true)

            state.paintingsData = available;
            let solded = allPaintings.filter(paint => paint.sold === true && paint.showDOM === true)
            state.artSold = solded;
            state.isLoading = false;
            return action.payloads;
        },
        [paintReservedAsync.fulfilled]: (state, action) => {
            console.log('payload added', action.payload.reservedPainting.id)
            let updatedDataPaintings = state.paintingsData.map(painting => {
                if (painting.id === action.payload.reservedPainting.id) {
                    painting.reserved = !painting.reserved;
                }
                return painting;
            });
            state.paintingsData = updatedDataPaintings;
        },
        [paintNotReservedAsync.fulfilled]: (state, action) => {
            console.log('payload delete', action.payload.reservedPainting.id)
            let updatedDataPaintings = state.paintingsData.map(painting => {
                if (painting.id === action.payload.reservedPainting.id) {
                    painting.reserved = !painting.reserved;
                }
                return painting;
            });
            state.paintingsData = updatedDataPaintings;

        },
        [addReservedPaintAsync.fulfilled]: (state, action) => {
            state.reservedPaintings = action.payload;
        },
        [deleteReservedAsync.fulfilled]: (state, action) => {
            state.addedPainting = state.addedPainting.filter(paint => paint.id !== action.payload.id);
        },
        [addCustomerAsync.fulfilled]: (state, action) => {
            state.clientAllData = action.payload;
        },
        [addFanAsync.fulfilled]: (state, action) => {
            state.fanAllData = action.payload;
        },
    }
});


export const { addPainting, removePainting, addClientData, switchFalse, fansData, resetAddedPainting, getRegisterNum } = gallerySlice.actions;

export default gallerySlice.reducer;