
export default function Navbar() {
  return (
    <div className="container m-auto flex justify-between items-center h-[70px]">
      <div>
        <img src="/logo.svg" alt="logo" height={"50px"} width={"100px"}/>
      </div>
      <div className="z-10">Sign in</div>
    </div>
  )
}