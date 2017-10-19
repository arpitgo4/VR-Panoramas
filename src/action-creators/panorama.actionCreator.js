

const shouldFetchGallery = ({ gallery }) => gallery.length === 0;

export const fetchGallery = () => {
    return (dispatch, getState) => {

        dispatch({
            type: 'FETCHING_IMAGES'
        });

        if(shouldFetchGallery(getState())) {
            fetch('http://demo3675774.mockable.io/vr/panos')
            .then(res => res.json())
            .then(json => {
                dispatch({
                    type: 'SAVE_IMAGES',
                    images: json
                });
                dispatch({
                    type: 'IMAGES_FETCHED'
                });
            })
            .catch(console.log);
        }
    }
};