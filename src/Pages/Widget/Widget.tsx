import { WidgetLayout } from "../../Components/LayoutWidget/WidgetLayout";
import { MenuBar } from "../../Components/MenuBar/MenuBar";
import './style.scss'

export function Widget(): JSX.Element {
  return (
    <div className="DivWidget">
      <MenuBar/>
      <div className="WidgetChild">
        <WidgetLayout/>
      </div>
    </div>
  )
}