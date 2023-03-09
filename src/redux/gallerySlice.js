import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getDataAsync = createAsyncThunk(
    'gallery/getDataAsync',
    async () => {
        const response = await fetch('http://localhost:8000/paintingsData');
        if (response.ok) {
            const dataPaintings = await response.json();
            return { dataPaintings }
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
            body: JSON.stringify({ reserved: true }),
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
            body: JSON.stringify({ reserved: false }),
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

const gallerySlice = createSlice({
    name: 'gallery',
    initialState: {
        // mockData:[],
        paintingsData: [],
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
            //console.log("action", action.payload)
            const painting = action.payload
            let updatedDataPaintings = state.paintingsData.map(painting => {
                if (painting.id === action.payload.id) {
                    painting.reserved = !painting.reserved;
                }
                return painting;
            });
            state.paintingsData = updatedDataPaintings;
            state.addedPainting.push(painting);
            state.alreadyAdded = true;
        },
        removePainting: (state, action) => {
            const { id } = action.payload;
            //console.log("title to remove", title);
            state.addedPainting = state.addedPainting.filter(paint => paint.id !== id);
            let updatedDataPaintings = state.paintingsData.map(painting => {
                if (painting.id === action.payload.id) {
                    painting.reserved = !painting.reserved;
                }
                return painting;
            });
            state.paintingsData = updatedDataPaintings;
            state.paintingsData = false;
        },
        addClientData: (state, action) => {
            state.clientAllData = action.payload;
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
            console.log("payload", action.payload)
            if (state.registerNum === null) {
                state.registerNum = action.payload
            }
            console.log("resgiter number in store:", state.registerNum)
        },

    },
    extraReducers: {
        [getDataAsync.pending]: (state, action) => {
            console.log('fetching data...');
            state.isLoading = true;
        },
        [getDataAsync.fulfilled]: (state, action) => {
            console.log('Data fetched successfully!')
            console.log(action.payload.dataPaintings)
            state.paintingsData = action.payload.dataPaintings;
            state.isLoading = false;
            return action.payloads;
        },
        [paintReservedAsync.fulfilled]: (state, action) => {
            let updatedDataPaintings = state.paintingsData.map(painting => {
                if (painting.id === action.payload.id) {
                    painting.reserved = !painting.reserved;
                }
                return painting;
            });
            state.paintingsData = updatedDataPaintings;
        },
        [paintNotReservedAsync.fulfilled]: (state, action) => {
            let updatedDataPaintings = state.paintingsData.map(painting => {
                if (painting.id === action.payload.id) {
                    painting.reserved = !painting.reserved;
                }
                return painting;
            });
            state.paintingsData = updatedDataPaintings;
        },
        [addReservedPaintAsync.fulfilled]: (state, action) => {
            state.reservedPaintings = action.payload;
            console.log("reserved paintings", state.reservedPaintings)
        },
        [addCustomerAsync.fulfilled]: (state, action) => {
            state.clientAllData = action.payload;
            console.log("clients data", state.clientAllData)
        },
        [addFanAsync.fulfilled]: (state, action) => {
            state.fanAllData = action.payload;
            console.log("clients data", state.fanAllData)
        },
    }
});


export const { addPainting, removePainting, addClientData, switchFalse, fansData, resetAddedPainting, getRegisterNum } = gallerySlice.actions;

export default gallerySlice.reducer;