

const fetchingImages = () => {
    return {
        type: 'FETCHING_IMAGES'
    };
};

const imagesFetched = () => {
    return {
        type: 'IMAGES_FETCHED'
    };
};

const saveImages = images => {
    return {
        type: 'SAVE_IMAGES',
        images
    };
};

const shouldFetchGallery = ({ gallery }) => gallery.length === 0;

const callMockAPI = () => {
    return new Promise((resolve, reject) => {
        fetch('http://demo3675774.mockable.io/vr/panos')
        .then(res => res.json())
        .then(images => resolve(images))
        .catch(reject);
    });
};

export const fetchGallery = () => {
    return (dispatch, getState) => {

        if(shouldFetchGallery(getState())) {
            dispatch(fetchingImages());

            callMockAPI()
            .then(images => {
                dispatch(saveImages(images));
                dispatch(imagesFetched());
            })
            .catch(console.log);
        }
    }
};