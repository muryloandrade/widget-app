import GridLayout from 'react-grid-layout'
import { IWidget } from '../../interface/IWidget'
import { useState } from 'react'


export const WidgetLayout = () => {
    const [layout, setLayout] = useState<IWidget[]>([])
    const onLayoutChange = (layout: any): void => {
        setLayout(layout)
      }


    return(
      <>
        <GridLayout
              cols={12}
              rowHeight={30}
              width={1800}
              layout={layout}
              compactType='horizontal'
              onLayoutChange={onLayoutChange}
              >
                {layout.map((widget, i) => {
                    return(
                        <div key={i} data-grid={widget} style={{backgroundColor:"white"}}>
                        <div>
                            <h1>Widget</h1>
                        </div>
                    </div>
                    )
                }
                )}
        </GridLayout>
    </>
    )
}
