export const selectuser=(user)=>{
  console.log("click on ",user.first);
  return {
    type : "USER_SELECTED",
    payload:user
  }
}
