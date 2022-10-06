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
      <ShipmentTableButton {...props} background="red" className={"delete-button"}>{`❌`}</ShipmentTableButton>
   )
}
export function DetailsButton(props:any){
   return (
      <ShipmentTableButton {...props} background="blue" className={"details-button"}>{`📇`}</ShipmentTableButton>
   )
}
