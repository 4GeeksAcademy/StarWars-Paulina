const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            personajes: [],
            planetas: [],
            planet: {},
            character: {},
            favorites: []
        },
        actions: {
            getCharacterDetails: async (id) => {
                try {
                    const response = await fetch(`https://swapi.dev/api/people/${id}`);
                    const data = await response.json();
                    setStore({ character: data });
                    return true;
                } catch (error) {
                    console.log(error);
                    return false;
                }
            },


            obtenerPersonajes: async () => {
                try {
                    const response = await fetch(`https://swapi.dev/api/people`);
                    const data = await response.json();
                    setStore({ personajes: data.results });
                    return true;
                } catch (error) {
                    console.log(error);
                    return false;
                }
            },
            obtenerPlanetas: async () => { 
                try {
                    const response = await fetch(`https://swapi.dev/api/planets`);
                    const data = await response.json();
                    setStore({ planetas: data.results });
                    return true;
                } catch (error) {
                    console.log(error);
                    return false;
                }
            },
            getPlanetDetail: async (id) => { 
                try {
                    const response = await fetch(`https://swapi.dev/api/planets/${id}`);
                    const data = await response.json();
                    setStore({ planet: data });
                    return true;
                } catch (error) {
                    console.log(error);
                    return false;
                }
            },
            addFavorite: (name, type) => {
                const store = getStore();
                const isFavorite = store.favorites.some(item => item.name === name);
                if (!isFavorite) {
                    setStore({ favorites: [...store.favorites, { name, type }] });
                } else{
                    setStore({ favorites: store.favorites.filter(item => item.name !== name) });

                }
            },
            // deleteFavorite: (name) => {
            //     const store = getStore();
            //     setStore({ favorites: store.favorites.filter(item => item.name !== name) });
            // },
            favoriteExist: (name) => {
                const store = getStore();
                return store.favorites.some(item => item.name === name);
            }
        }
    };
};

export default getState;
