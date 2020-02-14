export const createPlayer = (player) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call to database
        const firestore = getFirestore();
        // const profile = getState().firebase.profile;
        // const authorId = getState().firebase.auth.uid;

        firestore.collection('players').add({
            //spread operator for the name, badge, description, leagueId and nationId
            ...player
        }).then(() => {
            dispatch({ type: 'CREATE_PLAYER', player });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PLAYEr_ERROR', err });
        })
    }
}

