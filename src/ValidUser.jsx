var user_name
var projId
var isSceneErr = true

function updateUser(userName) {
    user_name = userName;
}

function setProjId(id_proj) {
    projId = id_proj
}

function setErrorState(state) {
    isSceneErr = state
}

export { user_name, updateUser, projId, setProjId, isSceneErr, setErrorState }