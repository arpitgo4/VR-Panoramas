

const shouldFetchImages = ({ gallery }) => gallery.length === 0;

export const fetchImages = () => {
    return (dispatch, getState) => {

        dispatch({
            type: 'FETCHING_IMAGES'
        });

        if(shouldFetchImages(getState())) {
            fetch('https://demo0813639.mockable.io/getPanos')
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