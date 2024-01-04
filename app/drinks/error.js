
'use client'; //this has to be used in the client

const error = (error)=>{
console.log(error);

return (
    //uses the error set up in the page.jsx section
    <div>{error.error.message}</div>
)

}
export default error