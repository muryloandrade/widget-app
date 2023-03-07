import GridLayout from 'react-grid-layout'
import { IWidget } from '../../interface/IWidget'
import { useCallback, useState } from 'react'
import { useGetWidgetsQuery } from '../../services/widget'


export const WidgetLayout = () => {
    const [layout, setLayout] = useState<IWidget[]>([])
    const onLayoutChange = (layout: any): void => {
        setLayout(layout)
      }
    const {data, error, isLoading} = useGetWidgetsQuery('widgetRTK')
    
    if(data){
        setLayout(data)
    }
    // if(isLoading){
    //     return <div>Loading...</div>
    // }
    // if(error){
    //     return <div>Error</div>
    // }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const addWidget = useCallback(() => {
        const newWidget = {
            i: 'newWidget',
            x: 0,
            y: 0,
            w: 1,
            h: 1,
            moved:false,
            static:false
        }
        setLayout([...layout, newWidget])
    }, [layout])

    console.log(layout)
    
    return(
      <>
        <button onClick={() => addWidget()}>Adicionar um widget</button>
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
