import './index.scss'
type Props={
  routes:Array<{name:string,icon:string,label:string}>
}
export const SideBar = (props:Props) => {
  return (
    <div id='sidebar'>
 <nav>
          <ul>
            <li>
              <a href={`contacts/1`}>Your Name</a>
            </li>
            <li>
              <a href={`contacts/2`}>Your Friend</a>
            </li>
          </ul>
        </nav>
    
    </div>
  )
}

SideBar.defaultProps={
  routes:[]
}