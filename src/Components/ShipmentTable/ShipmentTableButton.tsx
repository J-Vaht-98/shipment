function ShipmentTableButton(props:any) {
    return (
      <button className={props.className} {...props} >
         {props.children}
      </button>
    )
}

export default ShipmentTableButton;

export function DeleteButton(props:any){
   return (
      <ShipmentTableButton {...props} className={"delete-button"}></ShipmentTableButton>
   )
}
export function DetailsButton(props:any){
   return (
      <ShipmentTableButton {...props}   className={"details-button"}></ShipmentTableButton>
   )
}
