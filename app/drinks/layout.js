
const drinksLayout = ({children})=>{

    return (
 <div className=" max-w-xl">
<div className="mockup-code mb-8">
    <pre data-prefix='$'>
        <code>
        npx create-next-app@latest nextjs-tutorial
        </code>
    </pre>
</div>
{children}
 </div>
    )
}
//this file is also special and it can be used with special pages

export default drinksLayout