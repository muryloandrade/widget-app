import GridLayout from 'react-grid-layout'
import { IWidget } from '../../interface/IWidget'
import { useState } from 'react'


export const WidgetLayout = () => {
    const [layout, setLayout] = useState<IWidget[]>([])
    const onLayoutChange = (layout: any): void => {
        setLayout(layout)
      }

    const widgetFake = [
        {
            i: 'a',
            x: 0,
            y: 0,
            w: 1,
            h: 2,
        },
        {
            i: 'b',
            x: 2,
            y: 0,
            w: 1,
            h: 2,
        },
        {
            i: 'c',
            x: 4,
            y: 0,
            w: 1,
            h: 2,
        },
        {
            i: 'd',
            x: 6,
            y: 0,
            w: 1,
            h: 2,
        },
        {
            i: 'e',
            x: 8,
            y: 0,
            w: 1,
            h: 2,
        },
        {
            i: 'f',
            x: 10,
            y: 0,
            w: 1,
            h: 2,
        },
        {
            i: 'g',
            x: 0,
            y: 2,
            w: 1,
            h: 2,
        },
    ]
    return(
        <GridLayout
              cols={12}
              rowHeight={30}
              width={1800}
              layout={layout}
              compactType='horizontal'
              onLayoutChange={onLayoutChange}
              >
                {widgetFake.map((widget, i) => {
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
    )
}
