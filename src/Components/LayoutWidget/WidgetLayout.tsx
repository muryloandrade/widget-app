import GridLayout from 'react-grid-layout'
import { IWidget } from '../../interface/IWidget'
import { useCallback, useState } from 'react'
import { useGetWidgetsQuery, usePostWidgetMutation } from '../../services/widget'


export const WidgetLayout = () => {
    const [layout, setLayout] = useState<IWidget[]>([])
    const onLayoutChange = (layout: any): void => {
        setLayout(layout)
      }

    const [testeSave] = usePostWidgetMutation()

    const {data,isSuccess} = useGetWidgetsQuery("teste")


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const addWidget = useCallback(() => {
        const newWidget = {
            i: layout.length.toString(),
            x: 0,
            y: 0,
            w: 1,
            h: 1,
            moved:false,
            static:false
        }
        setLayout([...layout, newWidget])
    }, [layout])

    const saveLayout = useCallback(() => {
        try{
             testeSave(layout)
        }
        catch(error){
            console.log(error)
        }
    }, [layout, testeSave])
    
    return(
      <>
        <button onClick={() => addWidget()}>Adicionar um widget</button>
        <button onClick={() => saveLayout()}>Salvar</button>
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
                        <div key={widget.i} data-grid={widget} style={{backgroundColor:"white"}}>
                            <h1>Widget</h1>
                    </div>
                    )
                }
                )}
        </GridLayout>
    </>
    )
}
